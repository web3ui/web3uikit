(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"./node_modules/@toruslabs/openlogin-ed25519/dist/openloginEd25519.esm.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(Buffer){__webpack_require__.d(__webpack_exports__,"getED25519Key",(function(){return getED25519Key}));var _toruslabs_tweetnacl_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@toruslabs/tweetnacl-js/nacl-fast.js");const l=__webpack_require__.n(_toruslabs_tweetnacl_js__WEBPACK_IMPORTED_MODULE_0__).a.lowlevel;function getED25519Key(privateKey){let privKey;privKey="string"==typeof privateKey?Buffer.from(privateKey,"hex"):privateKey;const d=new Uint8Array(64),p=[l.gf(),l.gf(),l.gf(),l.gf()],sk=new Uint8Array([...new Uint8Array(privKey),...new Uint8Array(32)]),pk=new Uint8Array(32);l.crypto_hash(d,sk,32),d[0]&=248,d[31]&=127,d[31]|=64,l.scalarbase(p,d),l.pack(pk,p);for(let i=0;i<32;i+=1)sk[i+32]=pk[i];return{sk:Buffer.from(sk),pk:Buffer.from(pk)}}}.call(this,__webpack_require__("./node_modules/buffer/index.js").Buffer)},27:function(module,exports){}}]);