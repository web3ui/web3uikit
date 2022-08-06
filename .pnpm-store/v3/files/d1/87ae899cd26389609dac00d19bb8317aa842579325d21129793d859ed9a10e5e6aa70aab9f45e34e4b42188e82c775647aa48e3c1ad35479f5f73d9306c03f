import nacl from '@toruslabs/tweetnacl-js';

const l = nacl.lowlevel;
function getED25519Key(privateKey) {
  let privKey;

  if (typeof privateKey === "string") {
    privKey = Buffer.from(privateKey, "hex");
  } else {
    privKey = privateKey;
  } // Implementation copied from tweetnacl


  const d = new Uint8Array(64);
  const p = [l.gf(), l.gf(), l.gf(), l.gf()];
  const sk = new Uint8Array([...new Uint8Array(privKey), ...new Uint8Array(32)]);
  const pk = new Uint8Array(32);
  l.crypto_hash(d, sk, 32);
  d[0] &= 248;
  d[31] &= 127;
  d[31] |= 64;
  l.scalarbase(p, d);
  l.pack(pk, p);

  for (let i = 0; i < 32; i += 1) sk[i + 32] = pk[i];

  return {
    sk: Buffer.from(sk),
    pk: Buffer.from(pk)
  };
}

export { getED25519Key };
//# sourceMappingURL=openloginEd25519.esm.js.map
