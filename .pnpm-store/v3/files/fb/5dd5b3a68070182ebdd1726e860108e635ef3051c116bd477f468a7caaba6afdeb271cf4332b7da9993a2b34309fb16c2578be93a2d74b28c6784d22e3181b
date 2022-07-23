#include <node.h>
#include <nan.h>
#include <openssl/evp.h>
#include <openssl/ec.h>

using v8::FunctionTemplate;
using v8::Object;
using v8::String;

static const size_t PRIVKEY_SIZE = 32;
static const size_t PUBKEY_SIZE = 65;
static const size_t COMPRESSED_PUBKEY_SIZE = 33;

#define CHECK(cond) do { if (!(cond)) goto error; } while (0)

int derive(const uint8_t* privkey_a, const uint8_t* pubkey_b, uint8_t* shared) {
  int rc = -1;
  int res;
  BIGNUM* pkey_bn = NULL;
  EC_KEY* pkey = NULL;
  bool compressed = false;
  EC_KEY* peerkey = NULL;
  int compressed_y_bit = 0;
  EC_POINT* peerkey_p = NULL;
  EC_GROUP* peerkey_group = NULL;
  BN_CTX* peerkey_ctx = NULL;
  BIGNUM* peerkey_bn = NULL;
  BIGNUM* peerkey_bn_x = NULL;
  BIGNUM* peerkey_bn_y = NULL;
  EVP_PKEY* evp_pkey = NULL;
  EVP_PKEY* evp_peerkey = NULL;
  EVP_PKEY_CTX* ctx = NULL;
  size_t shared_len = PRIVKEY_SIZE;

  // Private key A.
  CHECK((pkey_bn = BN_bin2bn(privkey_a, PRIVKEY_SIZE, NULL)) != NULL);
  CHECK((pkey = EC_KEY_new_by_curve_name(NID_secp256k1)) != NULL);
  CHECK(EC_KEY_set_private_key(pkey, pkey_bn) == 1);
  CHECK((evp_pkey = EVP_PKEY_new()) != NULL);
  CHECK(EVP_PKEY_set1_EC_KEY(evp_pkey, pkey) == 1);

  // Public key B.
  CHECK((peerkey = EC_KEY_new_by_curve_name(NID_secp256k1)) != NULL);
  (pubkey_b[0] == 2 || pubkey_b[0] == 3) ? compressed = true : compressed = false;
  if (compressed) {
    (pubkey_b[0] == 2) ? compressed_y_bit = 0 : compressed_y_bit = 1;
    CHECK((peerkey_group = EC_GROUP_new_by_curve_name(NID_secp256k1)) != NULL);
    CHECK((peerkey_p = EC_POINT_new(peerkey_group)) != NULL);
    CHECK((peerkey_ctx = BN_CTX_new()) != NULL);
    CHECK((peerkey_bn = BN_bin2bn(pubkey_b+1, COMPRESSED_PUBKEY_SIZE-1, NULL)) != NULL);
    res = EC_POINT_set_compressed_coordinates_GFp(peerkey_group,
                                                 peerkey_p,
                                                 peerkey_bn,
                                                 compressed_y_bit,
                                                 NULL);
    CHECK(res == 1);
    res = EC_KEY_set_public_key(peerkey, peerkey_p);
  }
  else {
    CHECK((peerkey_bn_x = BN_bin2bn(pubkey_b+1, PRIVKEY_SIZE, NULL)) != NULL);
    CHECK((peerkey_bn_y = BN_bin2bn(pubkey_b+33, PRIVKEY_SIZE, NULL)) != NULL);
    res = EC_KEY_set_public_key_affine_coordinates(peerkey,
                                                 peerkey_bn_x,
                                                 peerkey_bn_y);
  }

  CHECK(res == 1);
  CHECK((evp_peerkey = EVP_PKEY_new()) != NULL);
  CHECK(EVP_PKEY_set1_EC_KEY(evp_peerkey, peerkey) == 1);

  // Derive shared secret.
  CHECK((ctx = EVP_PKEY_CTX_new(evp_pkey, NULL)) != NULL);
  CHECK(EVP_PKEY_derive_init(ctx) == 1);
  CHECK(EVP_PKEY_derive_set_peer(ctx, evp_peerkey) == 1);
  CHECK((EVP_PKEY_derive(ctx, shared, &shared_len)) == 1);
  CHECK(shared_len == PRIVKEY_SIZE);

  rc = 0;
error:
  EVP_PKEY_CTX_free(ctx);
  EVP_PKEY_free(evp_peerkey);
  EC_KEY_free(peerkey);
  BN_free(peerkey_bn_y);
  BN_free(peerkey_bn_x);
  BN_free(peerkey_bn);
  BN_CTX_free(peerkey_ctx);
  EC_GROUP_free(peerkey_group);
  EC_POINT_free(peerkey_p);
  EVP_PKEY_free(evp_pkey);
  EC_KEY_free(pkey);
  BN_free(pkey_bn);
  return rc;
}

#undef CHECK

NAN_METHOD(Derive) {
  if (info.Length() != 2 ||
      !node::Buffer::HasInstance(info[0]) ||  // privkey_a
      !node::Buffer::HasInstance(info[1])) {  // pubkey_b
    return Nan::ThrowError("Bad input");
  }

  char* privkey_a = node::Buffer::Data(info[0]);
  size_t privkey_a_len = node::Buffer::Length(info[0]);
  char* pubkey_b = node::Buffer::Data(info[1]);
  size_t pubkey_b_len = node::Buffer::Length(info[1]);
  if (privkey_a == NULL ||
      privkey_a_len != PRIVKEY_SIZE ||
      pubkey_b == NULL ||
      !(pubkey_b_len == PUBKEY_SIZE || pubkey_b_len == COMPRESSED_PUBKEY_SIZE) ||
      !(pubkey_b[0] == 4 || pubkey_b[0] == 3 || pubkey_b[0] == 2) ) {
    return Nan::ThrowError("Bad input");
  }

  uint8_t* shared = (uint8_t *)malloc(PRIVKEY_SIZE);
  if (shared == NULL ||
      derive((uint8_t *)privkey_a, (uint8_t *)pubkey_b, shared)) {
    free(shared);
    return Nan::ThrowError("Internal error");
  }
  info.GetReturnValue().Set(
    Nan::NewBuffer((char *)shared, PRIVKEY_SIZE).ToLocalChecked());
}

NAN_MODULE_INIT(InitAll) {
  Nan::Set(target, Nan::New<String>("derive").ToLocalChecked(),
    Nan::GetFunction(Nan::New<FunctionTemplate>(Derive)).ToLocalChecked());
}

NODE_MODULE(ecdh, InitAll)
