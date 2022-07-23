# React Native CryptoJS

React native javascript library of crypto standards.

## Install


```bash
npm install react-native-crypto-js
```

### Usage

ES6 import for typical API call signing use case:


```javascript
var AES = require("react-native-crypto-js").AES;
var SHA256 = require("react-native-crypto-js").SHA256;
...
console.log(SHA256("Message"));
```

## API

See: https://code.google.com/p/crypto-js

### AES Encryption

#### Plain text encryption

```javascript
import CryptoJS from "react-native-crypto-js";

// Encrypt
let ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();

// Decrypt
let bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
let originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log(originalText); // 'my message'
```

#### Object encryption

```javascript
import CryptoJS from "react-native-crypto-js";

let data = [{id: 1}, {id: 2}]

// Encrypt
let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123').toString();

// Decrypt
let bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

console.log(decryptedData); // [{id: 1}, {id: 2}]
```

### List of Algorithms

#### Hashers

- ```MD5```
- ```SHA1```
- ```SHA256```
- ```SHA512```
- ```SHA224```
- ```SHA384```
- ```SHA3```
- ```RIPEMD160```
---
#### HMAC
- ```HmacMD5```
- ```HmacSHA1```
- ```HmacSHA256```
- ```HmacSHA224```
- ```HmacSHA512```
- ```HmacSHA384```
- ```HmacSHA3```
- ```HmacRIPEMD160```
---
#### PBKDF2
- ```PBKDF2```
---
#### Ciphers
- ```AES```
- ```DES```
- ```TripleDES```
- ```RC4```
- ```RC4Drop```
- ```Rabbit```

## Reporting Issues

[Bugs | New Features](https://github.com/imchintan/react-native-crypto-js/issues)


## Contributing
Check the issues and pull requests to see if the idea or bug you want to share about is already present. If you don't see it, do one of the following:

* If it is a small change, just fork the project and create a pull request.
* If it is major, start by opening an issue.


## Help Wanted!

If you're familiar with React Native, and you'd like to see this project progress, please consider contributing.


## License

Please see [LICENSE](LICENSE) for more info.
