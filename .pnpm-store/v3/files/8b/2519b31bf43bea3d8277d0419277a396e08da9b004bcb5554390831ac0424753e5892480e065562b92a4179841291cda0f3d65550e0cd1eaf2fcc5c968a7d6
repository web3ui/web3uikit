var supportedTypes = ['native', 'erc20', 'erc721', 'erc1155'];
var ERC1155TransferABI = [{
  inputs: [{
    internalType: 'address',
    name: 'from',
    type: 'address'
  }, {
    internalType: 'address',
    name: 'to',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'id',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'value',
    type: 'uint256'
  }, {
    internalType: 'bytes',
    name: 'data',
    type: 'bytes'
  }],
  outputs: [{
    name: '',
    type: 'bool'
  }],
  name: 'safeTransferFrom',
  type: 'function',
  constant: false,
  payable: false
}, {
  inputs: [{
    internalType: 'address',
    name: 'from',
    type: 'address'
  }, {
    internalType: 'address',
    name: 'to',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'id',
    type: 'uint256'
  }, {
    internalType: 'uint256',
    name: 'value',
    type: 'uint256'
  }],
  outputs: [{
    name: '',
    type: 'bool'
  }],
  name: 'transferFrom',
  type: 'function',
  constant: false,
  payable: false
}];
var ERC721TransferABI = [{
  inputs: [{
    internalType: 'address',
    name: 'from',
    type: 'address'
  }, {
    internalType: 'address',
    name: 'to',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'tokenId',
    type: 'uint256'
  }],
  outputs: [{
    name: '',
    type: 'bool'
  }],
  name: 'safeTransferFrom',
  type: 'function',
  constant: false,
  payable: false
}, {
  inputs: [{
    internalType: 'address',
    name: 'from',
    type: 'address'
  }, {
    internalType: 'address',
    name: 'to',
    type: 'address'
  }, {
    internalType: 'uint256',
    name: 'tokenId',
    type: 'uint256'
  }],
  outputs: [{
    name: '',
    type: 'bool'
  }],
  name: 'transferFrom',
  type: 'function',
  constant: false,
  payable: false
}];
var ERC20TransferABI = [{
  constant: false,
  inputs: [{
    name: '_to',
    type: 'address'
  }, {
    name: '_value',
    type: 'uint256'
  }],
  name: 'transfer',
  outputs: [{
    name: '',
    type: 'bool'
  }],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: '_owner',
    type: 'address'
  }],
  name: 'balanceOf',
  outputs: [{
    name: 'balance',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}];
var tokenParams = {
  native: {
    receiver: '',
    amount: ''
  },
  erc20: {
    contractAddress: '',
    receiver: '',
    amount: ''
  },
  erc721: {
    contractAddress: '',
    receiver: '',
    tokenId: ''
  },
  erc1155: {
    contractAddress: '',
    receiver: '',
    tokenId: '',
    amount: ''
  }
};

var isNotEmpty = function (value) {
  return typeof value !== 'undefined' && value ? true : false;
};

var validateInput = function (type, payload) {
  var errors = [];
  var parameters = tokenParams[type];

  for (var _i = 0, _Object$keys = Object.keys(parameters); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];

    if (!isNotEmpty(payload[key])) {
      errors.push(key + " is required");
    }
  }

  if (errors.length > 0) {
    throw errors;
  }
};

var isSupportedType = function (type) {
  if (supportedTypes.indexOf(type) === -1) throw 'Unsupported type';
  return true;
};

var isUint256 = function (tokenId) {
  if (!Number.isInteger(+tokenId) || +tokenId < 0) throw new Error('Invalid token Id');
  return true;
};

module.exports = {
  abi: {
    erc1155: ERC1155TransferABI,
    erc721: ERC721TransferABI,
    erc20: ERC20TransferABI
  },
  validateInput: validateInput,
  isSupportedType: isSupportedType,
  isNotEmpty: isNotEmpty,
  isUint256: isUint256
};