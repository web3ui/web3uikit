import { createContext, useContext, useMemo, useCallback, useState, useRef, useEffect } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import MoralisImport from 'moralis';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var DEFAULT_API_CHAIN = "eth";
var Plugin;
(function (Plugin) {
    Plugin["ONE_INCH"] = "oneInch";
    Plugin["OPEN_SEA"] = "opensea";
    Plugin["FIAT"] = "fiat";
    Plugin["RARIBLE"] = "rarible";
})(Plugin || (Plugin = {}));
var supportedChains = [
    "0x1",
    "0x3",
    "0x4",
    "0x5",
    "0x2a",
    "0x38",
    "0x61",
    "0x89",
    "0x13881",
    "0xfa",
    "0xa86a",
    "0xa869",
    "0x539",
    "0x19",
];

var blockExplorers = {
    "0x1": "https://etherscan.io/",
    "0x3": "https://ropsten.etherscan.io/",
    "0x4": "https://rinkeby.etherscan.io/",
    "0x2a": "https://kovan.etherscan.io/",
    "0x5": "https://goerli.etherscan.io/",
    "0x539": null,
    "0xa86a": "https://cchain.explorer.avax.network/",
    "0xa869": "https://explorer.avax-test.network/",
    "0x38": "https://bscscan.com/",
    "0x61": "https://testnet.bscscan.com",
    "0x89": "https://explorer-mainnet.maticvigil.com",
    "0x13881": "https://mumbai.polygonscan.com",
    "0xfa": "https://ftmscan.com/",
    "0x19": "https://cronoscan.com/",
};

var chains = [
    {
        name: "Ethereum Mainnet",
        chainId: 1,
        shortName: "eth",
        networkId: 1,
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        rpc: [
            "https://mainnet.infura.io/v3/${INFURA_API_KEY}",
            "wss://mainnet.infura.io/ws/v3/${INFURA_API_KEY}",
            "https://api.mycryptoapi.com/eth",
            "https://cloudflare-eth.com",
        ],
        faucets: [],
        infoURL: "https://ethereum.org",
    },
    {
        name: "Expanse Network",
        chainId: 2,
        shortName: "exp",
        networkId: 1,
        nativeCurrency: {
            name: "Expanse Network Ether",
            symbol: "EXP",
            decimals: 18,
        },
        rpc: ["https://node.expanse.tech"],
        faucets: [],
        infoURL: "https://expanse.tech",
    },
    {
        name: "Ethereum Testnet Ropsten",
        chainId: 3,
        shortName: "rop",
        networkId: 3,
        nativeCurrency: { name: "Ropsten Ether", symbol: "ROP", decimals: 18 },
        rpc: [
            "https://ropsten.infura.io/v3/${INFURA_API_KEY}",
            "wss://ropsten.infura.io/ws/v3/${INFURA_API_KEY}",
        ],
        faucets: ["https://faucet.ropsten.be?${ADDRESS}"],
        infoURL: "https://github.com/ethereum/ropsten",
    },
    {
        name: "Ethereum Testnet Rinkeby",
        chainId: 4,
        shortName: "rin",
        networkId: 4,
        nativeCurrency: { name: "Rinkeby Ether", symbol: "RIN", decimals: 18 },
        rpc: [
            "https://rinkeby.infura.io/v3/${INFURA_API_KEY}",
            "wss://rinkeby.infura.io/ws/v3/${INFURA_API_KEY}",
        ],
        faucets: ["https://faucet.rinkeby.io"],
        infoURL: "https://www.rinkeby.io",
    },
    {
        name: "Ethereum Testnet Görli",
        chainId: 5,
        shortName: "gor",
        networkId: 5,
        nativeCurrency: { name: "Görli Ether", symbol: "GOR", decimals: 18 },
        rpc: [
            "https://rpc.goerli.mudit.blog/",
            "https://rpc.slock.it/goerli",
            "https://goerli.prylabs.net/",
        ],
        faucets: [
            "https://goerli-faucet.slock.it/?address=${ADDRESS}",
            "https://faucet.goerli.mudit.blog",
        ],
        infoURL: "https://goerli.net/#about",
    },
    {
        name: "Ethereum Classic Testnet Kotti",
        chainId: 6,
        shortName: "kot",
        networkId: 6,
        nativeCurrency: { name: "Kotti Ether", symbol: "KOT", decimals: 18 },
        rpc: [],
        faucets: [],
        infoURL: "https://explorer.jade.builders/?network=kotti",
    },
    {
        name: "ThaiChain",
        chainId: 7,
        shortName: "tch",
        networkId: 7,
        nativeCurrency: { name: "ThaiChain Ether", symbol: "TCH", decimals: 18 },
        rpc: ["https://rpc.dome.cloud"],
        faucets: [],
        infoURL: "https://thaichain.io",
    },
    {
        name: "Ubiq",
        chainId: 8,
        shortName: "ubq",
        networkId: 8,
        nativeCurrency: { name: "Ubiq Ether", symbol: "UBQ", decimals: 18 },
        rpc: ["https://rpc.octano.dev", "https://pyrus2.ubiqscan.io"],
        faucets: [],
        infoURL: "https://ubiqsmart.com",
    },
    {
        name: "Ubiq Network Testnet",
        chainId: 9,
        shortName: "tubq",
        networkId: 2,
        nativeCurrency: {
            name: "Ubiq Testnet Ether",
            symbol: "TUBQ",
            decimals: 18,
        },
        rpc: [],
        faucets: [],
        infoURL: "https://ethersocial.org",
    },
    {
        name: "Optimistic Ethereum",
        chainId: 10,
        shortName: "oeth",
        networkId: 10,
        nativeCurrency: { name: "Ether", symbol: "OETH", decimals: 18 },
        rpc: ["https://mainnet.optimism.io/"],
        faucets: [],
        infoURL: "https://optimism.io",
    },
    {
        name: "Metadium Mainnet",
        chainId: 11,
        shortName: "meta",
        networkId: 11,
        nativeCurrency: {
            name: "Metadium Mainnet Ether",
            symbol: "META",
            decimals: 18,
        },
        rpc: ["https://api.metadium.com/prod"],
        faucets: [],
        infoURL: "https://metadium.com",
    },
    {
        name: "Metadium Testnet",
        chainId: 12,
        shortName: "kal",
        networkId: 12,
        nativeCurrency: {
            name: "Metadium Testnet Ether",
            symbol: "KAL",
            decimals: 18,
        },
        rpc: ["https://api.metadium.com/dev"],
        faucets: [],
        infoURL: "https://metadium.com",
    },
    {
        name: "Diode Testnet Staging",
        chainId: 13,
        shortName: "dstg",
        networkId: 13,
        nativeCurrency: { name: "Staging Diodes", symbol: "sDIODE", decimals: 18 },
        rpc: ["https://staging.diode.io:8443/", "wss://staging.diode.io:8443/ws"],
        faucets: [],
        infoURL: "https://diode.io/staging",
    },
    {
        name: "Flare Mainnet",
        chainId: 14,
        shortName: "flr",
        networkId: 14,
        nativeCurrency: { name: "Spark", symbol: "FLR", decimals: 18 },
        rpc: [],
        faucets: [],
        infoURL: "https://flare.xyz",
    },
    {
        name: "Diode Prenet",
        chainId: 15,
        shortName: "diode",
        networkId: 15,
        nativeCurrency: { name: "Diodes", symbol: "DIODE", decimals: 18 },
        rpc: ["https://prenet.diode.io:8443/", "wss://prenet.diode.io:8443/ws"],
        faucets: [],
        infoURL: "https://diode.io/prenet",
    },
    {
        name: "Flare Testnet Coston",
        chainId: 16,
        shortName: "cflr",
        networkId: 16,
        nativeCurrency: { name: "Coston Spark", symbol: "CFLR", decimals: 18 },
        rpc: [],
        faucets: ["https://faucet.towolabs.com"],
        infoURL: "https://github.com/flare-eng/coston",
    },
    {
        name: "ThaiChain 2.0 ThaiFi",
        chainId: 17,
        shortName: "tfi",
        networkId: 17,
        nativeCurrency: { name: "Thaifi Ether", symbol: "TFI", decimals: 18 },
        rpc: ["https://rpc.thaifi.com"],
        faucets: [],
        infoURL: "https://exp.thaifi.com",
    },
    {
        name: "ThunderCore Testnet",
        chainId: 18,
        shortName: "TST",
        networkId: 18,
        nativeCurrency: {
            name: "ThunderCore Testnet Ether",
            symbol: "TST",
            decimals: 18,
        },
        rpc: ["https://testnet-rpc.thundercore.com"],
        faucets: ["https://faucet-testnet.thundercore.com"],
        infoURL: "https://thundercore.com",
    },
    {
        name: "Songbird Canary-Network",
        chainId: 19,
        shortName: "sgb",
        networkId: 19,
        nativeCurrency: { name: "Songbird", symbol: "SGB", decimals: 18 },
        rpc: ["https://songbird.towolabs.com/rpc"],
        faucets: ["https://free-online-app.com/faucet-for-eth-evm-chains/"],
        infoURL: "https://flare.xyz",
    },
    {
        name: "ELA-ETH-Sidechain Mainnet",
        chainId: 20,
        shortName: "elaeth",
        networkId: 20,
        nativeCurrency: { name: "Elastos", symbol: "ELA", decimals: 18 },
        rpc: ["https://mainrpc.elaeth.io"],
        faucets: [],
        infoURL: "https://www.elastos.org/",
    },
    {
        name: "ELA-ETH-Sidechain Testnet",
        chainId: 21,
        shortName: "elaetht",
        networkId: 21,
        nativeCurrency: { name: "Elastos", symbol: "tELA", decimals: 18 },
        rpc: ["https://rpc.elaeth.io"],
        faucets: ["https://faucet.elaeth.io/"],
        infoURL: "https://elaeth.io/",
    },
    {
        name: "ELA-DID-Sidechain Mainnet",
        chainId: 22,
        shortName: "eladid",
        networkId: 22,
        nativeCurrency: { name: "Elastos", symbol: "ELA", decimals: 18 },
        rpc: [],
        faucets: [],
        infoURL: "https://www.elastos.org/",
    },
    {
        name: "ELA-DID-Sidechain Testnet",
        chainId: 23,
        shortName: "eladidt",
        networkId: 23,
        nativeCurrency: { name: "Elastos", symbol: "tELA", decimals: 18 },
        rpc: [],
        faucets: [],
        infoURL: "https://elaeth.io/",
    },
    {
        name: "Cronos Mainnet Beta",
        chainId: 25,
        shortName: "cro",
        networkId: 25,
        nativeCurrency: { name: "Crypto.org Coin", symbol: "CRO", decimals: 18 },
        rpc: ["https://evm-cronos.crypto.org"],
        faucets: [],
        infoURL: "https://cronos.crypto.org",
    },
    {
        name: "ShibaChain",
        chainId: 27,
        shortName: "shib",
        networkId: 27,
        nativeCurrency: { name: "SHIBA INU COIN", symbol: "SHIB", decimals: 18 },
        rpc: ["https://rpc.shibachain.net"],
        faucets: [],
        infoURL: "https://www.shibachain.net",
    },
    {
        name: "Boba Network Rinkeby Testnet",
        chainId: 28,
        shortName: "Boba Rinkeby",
        networkId: 28,
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        rpc: ["https://rinkeby.boba.network/"],
        faucets: [],
        infoURL: "https://boba.network",
    },
    {
        name: "RSK Mainnet",
        chainId: 30,
        shortName: "rsk",
        networkId: 30,
        nativeCurrency: { name: "RSK Mainnet Ether", symbol: "RBTC", decimals: 18 },
        rpc: ["https://public-node.rsk.co", "https://mycrypto.rsk.co"],
        faucets: ["https://free-online-app.com/faucet-for-eth-evm-chains/"],
        infoURL: "https://rsk.co",
    },
    {
        name: "RSK Testnet",
        chainId: 31,
        shortName: "trsk",
        networkId: 31,
        nativeCurrency: {
            name: "RSK Testnet Ether",
            symbol: "tRBTC",
            decimals: 18,
        },
        rpc: [
            "https://public-node.testnet.rsk.co",
            "https://mycrypto.testnet.rsk.co",
        ],
        faucets: ["https://faucet.testnet.rsk.co"],
        infoURL: "https://rsk.co",
    },
    {
        name: "GoodData Testnet",
        chainId: 32,
        shortName: "GooDT",
        networkId: 32,
        nativeCurrency: {
            name: "GoodData Testnet Ether",
            symbol: "GooD",
            decimals: 18,
        },
        rpc: ["https://test2.goodata.io"],
        faucets: [],
        infoURL: "https://www.goodata.org",
    },
    {
        name: "GoodData Mainnet",
        chainId: 33,
        shortName: "GooD",
        networkId: 33,
        nativeCurrency: {
            name: "GoodData Mainnet Ether",
            symbol: "GooD",
            decimals: 18,
        },
        rpc: ["https://rpc.goodata.io"],
        faucets: [],
        infoURL: "https://www.goodata.org",
    },
    {
        name: "TBWG Chain",
        chainId: 35,
        shortName: "tbwg",
        networkId: 35,
        nativeCurrency: { name: "TBWG Ether", symbol: "TBG", decimals: 18 },
        rpc: ["https://rpc.tbwg.io"],
        faucets: [],
        infoURL: "https://tbwg.io",
    },
    {
        name: "Valorbit",
        chainId: 38,
        shortName: "val",
        networkId: 38,
        nativeCurrency: { name: "Valorbit", symbol: "VAL", decimals: 18 },
        rpc: ["https://rpc.valorbit.com/v2"],
        faucets: [],
        infoURL: "https://valorbit.com",
    },
    {
        name: "Telos EVM Mainnet",
        chainId: 40,
        shortName: "Telos EVM",
        networkId: 40,
        nativeCurrency: { name: "Telos", symbol: "TLOS", decimals: 18 },
        rpc: ["https://mainnet.telos.net/evm"],
        faucets: [],
        infoURL: "https://telos.net",
    },
    {
        name: "Telos EVM Testnet",
        chainId: 41,
        shortName: "Telos EVM Testnet",
        networkId: 41,
        nativeCurrency: { name: "Telos", symbol: "TLOS", decimals: 18 },
        rpc: ["https://testnet.telos.net/evm"],
        faucets: ["https://app.telos.net/testnet/developers"],
        infoURL: "https://telos.net",
    },
    {
        name: "Ethereum Testnet Kovan",
        chainId: 42,
        shortName: "kov",
        networkId: 42,
        nativeCurrency: { name: "Kovan Ether", symbol: "KOV", decimals: 18 },
        rpc: [
            "https://kovan.poa.network",
            "http://kovan.poa.network:8545",
            "https://kovan.infura.io/v3/${INFURA_API_KEY}",
            "wss://kovan.infura.io/ws/v3/${INFURA_API_KEY}",
            "ws://kovan.poa.network:8546",
        ],
        faucets: [
            "https://faucet.kovan.network",
            "https://gitter.im/kovan-testnet/faucet",
        ],
        infoURL: "https://kovan-testnet.github.io/website",
    },
    {
        name: "Darwinia Pangolin Testnet",
        chainId: 43,
        shortName: "darwinia",
        networkId: 43,
        nativeCurrency: { name: "Pangolin RING", symbol: "PRING", decimals: 9 },
        rpc: [],
        faucets: [],
        infoURL: "https://darwinia.network/",
    },
    {
        name: "Darwinia Crab Network",
        chainId: 44,
        shortName: "crab",
        networkId: 44,
        nativeCurrency: { name: "Crab Token", symbol: "CRING", decimals: 9 },
        rpc: [],
        faucets: [],
        infoURL: "https://crab.network/",
    },
    {
        name: "XinFin Network Mainnet",
        chainId: 50,
        shortName: "xdc",
        networkId: 50,
        nativeCurrency: { name: "XinFin", symbol: "XDC", decimals: 18 },
        rpc: ["https://rpc.xinfin.network"],
        faucets: [],
        infoURL: "https://xinfin.org",
    },
    {
        name: "XinFin Apothem Testnet",
        chainId: 51,
        shortName: "TXDC",
        networkId: 51,
        nativeCurrency: { name: "XinFinTest", symbol: "TXDC", decimals: 18 },
        rpc: ["https://rpc.apothem.network"],
        faucets: [],
        infoURL: "https://xinfin.org",
    },
    {
        name: "CoinEx Smart Chain Mainnet",
        chainId: 52,
        shortName: "cet",
        networkId: 52,
        nativeCurrency: {
            name: "CoinEx Chain Native Token",
            symbol: "cet",
            decimals: 18,
        },
        rpc: ["https://rpc-mainnet.coinex.net"],
        faucets: [],
        infoURL: "http://www.coinex.org/",
    },
    {
        name: "CoinEx Smart Chain Testnet",
        chainId: 53,
        shortName: "tcet",
        networkId: 53,
        nativeCurrency: {
            name: "CoinEx Chain Test Native Token",
            symbol: "cett",
            decimals: 18,
        },
        rpc: ["https://rpc-testnet.coinex.net"],
        faucets: [],
        infoURL: "http://www.coinex.org/",
    },
    {
        name: "Zyx Mainnet",
        chainId: 55,
        shortName: "ZYX",
        networkId: 55,
        nativeCurrency: { name: "Zyx", symbol: "ZYX", decimals: 18 },
        rpc: [
            "https://rpc-1.zyx.network/",
            "https://rpc-2.zyx.network/",
            "https://rpc-3.zyx.network/",
            "https://rpc-4.zyx.network/",
            "https://rpc-5.zyx.network/",
            "https://rpc-6.zyx.network/",
        ],
        faucets: [],
        infoURL: "https://zyx.network/",
    },
    {
        name: "Binance Smart Chain Mainnet",
        chainId: 56,
        shortName: "bnb",
        networkId: 56,
        nativeCurrency: {
            name: "Binance Chain Native Token",
            symbol: "BNB",
            decimals: 18,
        },
        rpc: [
            "https://bsc-dataseed1.binance.org",
            "https://bsc-dataseed2.binance.org",
            "https://bsc-dataseed3.binance.org",
            "https://bsc-dataseed4.binance.org",
            "https://bsc-dataseed1.defibit.io",
            "https://bsc-dataseed2.defibit.io",
            "https://bsc-dataseed3.defibit.io",
            "https://bsc-dataseed4.defibit.io",
            "https://bsc-dataseed1.ninicoin.io",
            "https://bsc-dataseed2.ninicoin.io",
            "https://bsc-dataseed3.ninicoin.io",
            "https://bsc-dataseed4.ninicoin.io",
            "wss://bsc-ws-node.nariox.org",
        ],
        faucets: ["https://free-online-app.com/faucet-for-eth-evm-chains/"],
        infoURL: "https://www.binance.org",
    },
    {
        name: "Ontology Mainnet",
        chainId: 58,
        shortName: "Ontology Mainnet",
        networkId: 58,
        nativeCurrency: { name: "ONG", symbol: "ONG", decimals: 9 },
        rpc: [
            "https://dappnode1.ont.io:20339",
            "https://dappnode2.ont.io:20339",
            "https://dappnode3.ont.io:20339",
            "https://dappnode4.ont.io:20339",
        ],
        faucets: [],
        infoURL: "https://ont.io/",
    },
    {
        name: "EOS Mainnet",
        chainId: 59,
        shortName: "EOS Mainnet",
        networkId: 59,
        nativeCurrency: { name: "EOS", symbol: "EOS", decimals: 18 },
        rpc: ["https://api.eosargentina.io"],
        faucets: [],
        infoURL: "https://eoscommunity.org/",
    },
    {
        name: "GoChain",
        chainId: 60,
        shortName: "go",
        networkId: 60,
        nativeCurrency: { name: "GoChain Ether", symbol: "GO", decimals: 18 },
        rpc: ["https://rpc.gochain.io"],
        faucets: ["https://free-online-app.com/faucet-for-eth-evm-chains/"],
        infoURL: "https://gochain.io",
    },
    {
        name: "Ethereum Classic Mainnet",
        chainId: 61,
        shortName: "etc",
        networkId: 1,
        nativeCurrency: {
            name: "Ethereum Classic Ether",
            symbol: "ETC",
            decimals: 18,
        },
        rpc: ["https://ethereumclassic.network"],
        faucets: ["https://free-online-app.com/faucet-for-eth-evm-chains/?"],
        infoURL: "https://ethereumclassic.org",
    },
    {
        name: "Ethereum Classic Testnet Morden",
        chainId: 62,
        shortName: "tetc",
        networkId: 2,
        nativeCurrency: {
            name: "Ethereum Classic Testnet Ether",
            symbol: "TETC",
            decimals: 18,
        },
        rpc: [],
        faucets: [],
        infoURL: "https://ethereumclassic.org",
    },
    {
        name: "Ethereum Classic Testnet Mordor",
        chainId: 63,
        shortName: "metc",
        networkId: 7,
        nativeCurrency: {
            name: "Mordor Classic Testnet Ether",
            symbol: "METC",
            decimals: 18,
        },
        rpc: [],
        faucets: [],
        infoURL: "https://github.com/eth-classic/mordor/",
    },
    {
        name: "Ellaism",
        chainId: 64,
        shortName: "ella",
        networkId: 64,
        nativeCurrency: { name: "Ellaism Ether", symbol: "ELLA", decimals: 18 },
        rpc: ["https://jsonrpc.ellaism.org"],
        faucets: [],
        infoURL: "https://ellaism.org",
    },
    {
        name: "OKExChain Testnet",
        chainId: 65,
        shortName: "tokt",
        networkId: 65,
        nativeCurrency: {
            name: "OKExChain Global Utility Token in testnet",
            symbol: "OKT",
            decimals: 18,
        },
        rpc: ["https://exchaintestrpc.okex.org"],
        faucets: ["https://www.okex.com/drawdex"],
        infoURL: "https://www.okex.com/okexchain",
    },
    {
        name: "OKExChain Mainnet",
        chainId: 66,
        shortName: "okt",
        networkId: 66,
        nativeCurrency: {
            name: "OKExChain Global Utility Token",
            symbol: "OKT",
            decimals: 18,
        },
        rpc: ["https://exchainrpc.okex.org"],
        faucets: ["https://free-online-app.com/faucet-for-eth-evm-chains/?"],
        infoURL: "https://www.okex.com/okexchain",
    },
    {
        name: "DBChain Testnet",
        chainId: 67,
        shortName: "dbm",
        networkId: 67,
        nativeCurrency: { name: "DBChain Testnet", symbol: "DBM", decimals: 18 },
        rpc: ["http://test-rpc.dbmbp.com"],
        faucets: [],
        infoURL: "http://test.dbmbp.com",
    },
    {
        name: "SoterOne Mainnet",
        chainId: 68,
        shortName: "SO1",
        networkId: 68,
        nativeCurrency: {
            name: "SoterOne Mainnet Ether",
            symbol: "SOTER",
            decimals: 18,
        },
        rpc: ["https://rpc.soter.one"],
        faucets: [],
        infoURL: "https://www.soterone.com",
    },
    {
        name: "Optimistic Ethereum Testnet Kovan",
        chainId: 69,
        shortName: "okov",
        networkId: 69,
        nativeCurrency: { name: "Kovan Ether", symbol: "KOR", decimals: 18 },
        rpc: ["https://kovan.optimism.io/"],
        faucets: [],
        infoURL: "https://optimism.io",
    },
    {
        name: "Mix",
        chainId: 76,
        shortName: "mix",
        networkId: 76,
        nativeCurrency: { name: "Mix Ether", symbol: "MIX", decimals: 18 },
        rpc: ["https://rpc2.mix-blockchain.org:8647"],
        faucets: [],
        infoURL: "https://mix-blockchain.org",
    },
    {
        name: "POA Network Sokol",
        chainId: 77,
        shortName: "skl",
        networkId: 77,
        nativeCurrency: { name: "POA Sokol Ether", symbol: "SKL", decimals: 18 },
        rpc: [
            "https://sokol.poa.network",
            "wss://sokol.poa.network/wss",
            "ws://sokol.poa.network:8546",
        ],
        faucets: ["https://faucet-sokol.herokuapp.com"],
        infoURL: "https://poa.network",
    },
    {
        name: "PrimusChain mainnet",
        chainId: 78,
        shortName: "primuschain",
        networkId: 78,
        nativeCurrency: { name: "Primus Ether", symbol: "PETH", decimals: 18 },
        rpc: ["https://ethnode.primusmoney.com/mainnet"],
        faucets: [],
        infoURL: "https://primusmoney.com",
    },
    {
        name: "GeneChain",
        chainId: 80,
        shortName: "GeneChain",
        networkId: 80,
        nativeCurrency: { name: "RNA", symbol: "RNA", decimals: 18 },
        rpc: ["https://rpc.genechain.io"],
        faucets: [],
        infoURL: "https://scan.genechain.io/",
    },
    {
        name: "Meter Mainnet",
        chainId: 82,
        shortName: "Meter",
        networkId: 82,
        nativeCurrency: { name: "Meter", symbol: "MTR", decimals: 18 },
        rpc: ["https://rpc.meter.io"],
        faucets: ["https://faucet.meter.io"],
        infoURL: "https://www.meter.io",
    },
    {
        name: "Meter Testnet",
        chainId: 83,
        shortName: "MeterTest",
        networkId: 83,
        nativeCurrency: { name: "Meter", symbol: "MTR", decimals: 18 },
        rpc: ["https://rpctest.meter.io"],
        faucets: ["https://faucet-warringstakes.meter.io"],
        infoURL: "https://www.meter.io",
    },
    {
        name: "GateChain Testnet",
        chainId: 85,
        shortName: "gttest",
        networkId: 85,
        nativeCurrency: { name: "GateToken", symbol: "GT", decimals: 18 },
        rpc: ["https://testnet.gatenode.cc"],
        faucets: ["https://www.gatescan.org/testnet/faucet"],
        infoURL: "https://www.gatechain.io",
    },
    {
        name: "GateChain Mainnet",
        chainId: 86,
        shortName: "gt",
        networkId: 86,
        nativeCurrency: { name: "GateToken", symbol: "GT", decimals: 18 },
        rpc: ["https://evm.gatenode.cc"],
        faucets: ["https://www.gatescan.org/faucet"],
        infoURL: "https://www.gatechain.io",
    },
    {
        name: "TomoChain",
        chainId: 88,
        shortName: "tomo",
        networkId: 88,
        nativeCurrency: { name: "TomoChain Ether", symbol: "TOMO", decimals: 18 },
        rpc: ["https://rpc.tomochain.com"],
        faucets: [],
        infoURL: "https://tomocoin.io",
    },
    {
        name: "CryptoKylin Testnet",
        chainId: 95,
        shortName: "Kylin Testnet",
        networkId: 95,
        nativeCurrency: { name: "EOS", symbol: "EOS", decimals: 18 },
        rpc: ["https://kylin.eosargentina.io"],
        faucets: [],
        infoURL: "https://www.cryptokylin.io/",
    },
    {
        name: "NEXT Smart Chain",
        chainId: 96,
        shortName: "nsc",
        networkId: 96,
        nativeCurrency: { name: "NEXT", symbol: "NEXT", decimals: 18 },
        rpc: ["https://rpc.nextsmartchain.com"],
        faucets: ["https://faucet.nextsmartchain.com"],
        infoURL: "https://www.nextsmartchain.com/",
    },
    {
        name: "Binance Smart Chain Testnet",
        chainId: 97,
        shortName: "bnbt",
        networkId: 97,
        nativeCurrency: {
            name: "Binance Chain Native Token",
            symbol: "tBNB",
            decimals: 18,
        },
        rpc: [
            "https://data-seed-prebsc-1-s1.binance.org:8545",
            "https://data-seed-prebsc-2-s1.binance.org:8545",
            "https://data-seed-prebsc-1-s2.binance.org:8545",
            "https://data-seed-prebsc-2-s2.binance.org:8545",
            "https://data-seed-prebsc-1-s3.binance.org:8545",
            "https://data-seed-prebsc-2-s3.binance.org:8545",
        ],
        faucets: ["https://testnet.binance.org/faucet-smart"],
        infoURL: "https://testnet.binance.org/",
    },
    {
        name: "POA Network Core",
        chainId: 99,
        shortName: "poa",
        networkId: 99,
        nativeCurrency: {
            name: "POA Network Core Ether",
            symbol: "POA",
            decimals: 18,
        },
        rpc: [
            "https://core.poanetwork.dev",
            "http://core.poanetwork.dev:8545",
            "https://core.poa.network",
            "ws://core.poanetwork.dev:8546",
        ],
        faucets: [],
        infoURL: "https://poa.network",
    },
    {
        name: "xDAI Chain",
        chainId: 100,
        shortName: "xdai",
        networkId: 100,
        nativeCurrency: { name: "xDAI", symbol: "xDAI", decimals: 18 },
        rpc: [
            "https://rpc.xdaichain.com",
            "https://xdai.poanetwork.dev",
            "wss://rpc.xdaichain.com/wss",
            "wss://xdai.poanetwork.dev/wss",
            "http://xdai.poanetwork.dev",
            "https://dai.poa.network",
            "ws://xdai.poanetwork.dev:8546",
        ],
        faucets: [
            "https://free-online-app.com/faucet-for-eth-evm-chains/",
            "https://xdai-app.herokuapp.com/faucet",
        ],
        infoURL: "https://forum.poa.network/c/xdai-chain",
    },
    {
        name: "EtherInc",
        chainId: 101,
        shortName: "eti",
        networkId: 1,
        nativeCurrency: { name: "EtherInc Ether", symbol: "ETI", decimals: 18 },
        rpc: ["https://api.einc.io/jsonrpc/mainnet"],
        faucets: [],
        infoURL: "https://einc.io",
    },
    {
        name: "Web3Games Testnet",
        chainId: 102,
        shortName: "w3g",
        networkId: 102,
        nativeCurrency: { name: "Web3Games", symbol: "W3G", decimals: 18 },
        rpc: ["https://substrate.org.cn"],
        faucets: [],
        infoURL: "https://web3games.org/",
    },
    {
        name: "Velas EVM Mainnet",
        chainId: 106,
        shortName: "vlx",
        networkId: 106,
        nativeCurrency: { name: "Velas", symbol: "VLX", decimals: 18 },
        rpc: [
            "https://evmexplorer.velas.com/rpc",
            "https://explorer.velas.com/rpc",
        ],
        faucets: [],
        infoURL: "https://velas.com",
    },
    {
        name: "ThunderCore Mainnet",
        chainId: 108,
        shortName: "TT",
        networkId: 108,
        nativeCurrency: {
            name: "ThunderCore Mainnet Ether",
            symbol: "TT",
            decimals: 18,
        },
        rpc: ["https://mainnet-rpc.thundercore.com"],
        faucets: ["https://faucet.thundercore.com"],
        infoURL: "https://thundercore.com",
    },
    {
        name: "Proton Testnet",
        chainId: 110,
        shortName: "xpr",
        networkId: 110,
        nativeCurrency: { name: "Proton", symbol: "XPR", decimals: 4 },
        rpc: ["https://protontestnet.greymass.com/"],
        faucets: [],
        infoURL: "https://protonchain.com",
    },
    {
        name: "EtherLite Chain",
        chainId: 111,
        shortName: "ETL",
        networkId: 111,
        nativeCurrency: { name: "EtherLite", symbol: "ETL", decimals: 18 },
        rpc: ["https://rpc.etherlite.org"],
        faucets: ["https://etherlite.org/faucets"],
        infoURL: "https://etherlite.org",
    },
    {
        name: "Fuse Mainnet",
        chainId: 122,
        shortName: "fuse",
        networkId: 122,
        nativeCurrency: { name: "Fuse", symbol: "FUSE", decimals: 18 },
        rpc: ["https://rpc.fuse.io"],
        faucets: [],
        infoURL: "https://fuse.io/",
    },
    {
        name: "Fuse Sparknet",
        chainId: 123,
        shortName: "spark",
        networkId: 123,
        nativeCurrency: { name: "Spark", symbol: "SPARK", decimals: 18 },
        rpc: ["https://rpc.fusespark.io"],
        faucets: ["https://get.fusespark.io"],
        infoURL: "https://docs.fuse.io/general/fuse-network-blockchain/fuse-testnet",
    },
    {
        name: "Decentralized Web Mainnet",
        chainId: 124,
        shortName: "dwu",
        networkId: 124,
        nativeCurrency: {
            name: "Decentralized Web Utility",
            symbol: "DWU",
            decimals: 18,
        },
        rpc: ["https://decentralized-web.tech/dw_rpc.php"],
        faucets: [],
        infoURL: "https://decentralized-web.tech/dw_chain.php",
    },
    {
        name: "Factory 127 Mainnet",
        chainId: 127,
        shortName: "feth",
        networkId: 127,
        nativeCurrency: { name: "Factory 127 Token", symbol: "FETH", decimals: 18 },
        rpc: [],
        faucets: [],
        infoURL: "https://www.factory127.com",
    },
    {
        name: "Huobi ECO Chain Mainnet",
        chainId: 128,
        shortName: "heco",
        networkId: 128,
        nativeCurrency: {
            name: "Huobi ECO Chain Native Token",
            symbol: "HT",
            decimals: 18,
        },
        rpc: [
            "https://http-mainnet.hecochain.com",
            "wss://ws-mainnet.hecochain.com",
        ],
        faucets: ["https://free-online-app.com/faucet-for-eth-evm-chains/"],
        infoURL: "https://www.hecochain.com",
    },
    {
        name: "Polygon Mainnet",
        chainId: 137,
        shortName: "MATIC",
        networkId: 137,
        nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
        rpc: [
            "https://polygon-rpc.com/",
            "https://rpc-mainnet.matic.network",
            "https://matic-mainnet.chainstacklabs.com",
            "https://rpc-mainnet.maticvigil.com",
            "https://rpc-mainnet.matic.quiknode.pro",
            "https://matic-mainnet-full-rpc.bwarelabs.com",
        ],
        faucets: [],
        infoURL: "https://polygon.technology/",
    },
    {
        name: "DAX CHAIN",
        chainId: 142,
        shortName: "dax",
        networkId: 142,
        nativeCurrency: { name: "Prodax", symbol: "DAX", decimals: 18 },
        rpc: ["https://rpc.prodax.io"],
        faucets: [],
        infoURL: "https://prodax.io/",
    },
    {
        name: "Lightstreams Testnet",
        chainId: 162,
        shortName: "tpht",
        networkId: 162,
        nativeCurrency: { name: "Lightstreams PHT", symbol: "PHT", decimals: 18 },
        rpc: ["https://node.sirius.lightstreams.io"],
        faucets: ["https://discuss.lightstreams.network/t/request-test-tokens"],
        infoURL: "https://explorer.sirius.lightstreams.io",
    },
    {
        name: "Lightstreams Mainnet",
        chainId: 163,
        shortName: "pht",
        networkId: 163,
        nativeCurrency: { name: "Lightstreams PHT", symbol: "PHT", decimals: 18 },
        rpc: ["https://node.mainnet.lightstreams.io"],
        faucets: [],
        infoURL: "https://explorer.lightstreams.io",
    },
    {
        name: "HOO Smart Chain Testnet",
        chainId: 170,
        shortName: "hoosmartchain",
        networkId: 170,
        nativeCurrency: { name: "HOO", symbol: "HOO", decimals: 18 },
        rpc: ["https://http-testnet.hoosmartchain.com"],
        faucets: ["https://faucet-testnet.hscscan.com/"],
        infoURL: "https://www.hoosmartchain.com",
    },
    {
        name: "Latam-Blockchain Resil Testnet",
        chainId: 172,
        shortName: "resil",
        networkId: 172,
        nativeCurrency: {
            name: "Latam-Blockchain Resil Test Native Token",
            symbol: "usd",
            decimals: 18,
        },
        rpc: ["https://rpc.latam-blockchain.com", "wss://ws.latam-blockchain.com"],
        faucets: ["https://faucet.latam-blockchain.com"],
        infoURL: "https://latam-blockchain.com",
    },
    {
        name: "Seele Mainnet",
        chainId: 186,
        shortName: "Seele",
        networkId: 186,
        nativeCurrency: { name: "Seele", symbol: "Seele", decimals: 18 },
        rpc: ["https://rpc.seelen.pro/"],
        faucets: [],
        infoURL: "https://seelen.pro/",
    },
    {
        name: "BitTorrent Chain Mainnet",
        chainId: 199,
        shortName: "BTT",
        networkId: 199,
        nativeCurrency: { name: "BitTorrent", symbol: "BTT", decimals: 18 },
        rpc: ["https://rpc.bittorrentchain.io/"],
        faucets: [],
        infoURL: "https://bittorrentchain.io/",
    },
    {
        name: "Arbitrum on xDai",
        chainId: 200,
        shortName: "aox",
        networkId: 200,
        nativeCurrency: { name: "xDAI", symbol: "xDAI", decimals: 18 },
        rpc: ["https://arbitrum.xdaichain.com/"],
        faucets: [],
        infoURL: "https://xdaichain.com",
    },
    {
        name: "Freight Trust Network",
        chainId: 211,
        shortName: "EDI",
        networkId: 0,
        nativeCurrency: {
            name: "Freight Trust Native",
            symbol: "0xF",
            decimals: 18,
        },
        rpc: [
            "http://13.57.207.168:3435",
            "https://app.freighttrust.net/ftn/${API_KEY}",
        ],
        faucets: ["http://faucet.freight.sh"],
        infoURL: "https://freighttrust.com",
    },
    {
        name: "Permission",
        chainId: 222,
        shortName: "ASK",
        networkId: 2221,
        nativeCurrency: { name: "ASK", symbol: "ASK", decimals: 18 },
        rpc: ["https://blockchain-api-mainnet.permission.io/rpc"],
        faucets: [],
        infoURL: "https://permission.io/",
    },
    {
        name: "Energy Web Chain",
        chainId: 246,
        shortName: "ewt",
        networkId: 246,
        nativeCurrency: { name: "Energy Web Token", symbol: "EWT", decimals: 18 },
        rpc: ["https://rpc.energyweb.org", "wss://rpc.energyweb.org/ws"],
        faucets: [
            "https://faucet.carbonswap.exchange",
            "https://free-online-app.com/faucet-for-eth-evm-chains/",
        ],
        infoURL: "https://energyweb.org",
    },
    {
        name: "Fantom Opera",
        chainId: 250,
        shortName: "ftm",
        networkId: 250,
        nativeCurrency: { name: "Fantom", symbol: "FTM", decimals: 18 },
        rpc: ["https://rpc.ftm.tools"],
        faucets: ["https://free-online-app.com/faucet-for-eth-evm-chains/"],
        infoURL: "https://fantom.foundation",
    },
    {
        name: "Huobi ECO Chain Testnet",
        chainId: 256,
        shortName: "hecot",
        networkId: 256,
        nativeCurrency: {
            name: "Huobi ECO Chain Test Native Token",
            symbol: "htt",
            decimals: 18,
        },
        rpc: [
            "https://http-testnet.hecochain.com",
            "wss://ws-testnet.hecochain.com",
        ],
        faucets: ["https://scan-testnet.hecochain.com/faucet"],
        infoURL: "https://testnet.hecoinfo.com",
    },
    {
        name: "SUR Blockchain Network",
        chainId: 262,
        shortName: "SUR",
        networkId: 1,
        nativeCurrency: { name: "Suren", symbol: "SRN", decimals: 18 },
        rpc: ["https://sur.nilin.org"],
        faucets: [],
        infoURL: "https://surnet.org",
    },
    {
        name: "High Performance Blockchain",
        chainId: 269,
        shortName: "hpb",
        networkId: 269,
        nativeCurrency: {
            name: "High Performance Blockchain Ether",
            symbol: "HPB",
            decimals: 18,
        },
        rpc: ["https://hpbnode.com", "wss://ws.hpbnode.com"],
        faucets: ["https://myhpbwallet.com/"],
        infoURL: "https://hpb.io",
    },
    {
        name: "Boba Network",
        chainId: 288,
        shortName: "Boba",
        networkId: 288,
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        rpc: ["https://mainnet.boba.network/"],
        faucets: [],
        infoURL: "https://boba.network",
    },
    {
        name: "KCC Mainnet",
        chainId: 321,
        shortName: "kcs",
        networkId: 1,
        nativeCurrency: { name: "KuCoin Token", symbol: "KCS", decimals: 18 },
        rpc: [
            "https://rpc-mainnet.kcc.network",
            "wss://rpc-ws-mainnet.kcc.network",
        ],
        faucets: [],
        infoURL: "https://kcc.io",
    },
    {
        name: "KCC Testnet",
        chainId: 322,
        shortName: "kcst",
        networkId: 322,
        nativeCurrency: {
            name: "KuCoin Testnet Token",
            symbol: "tKCS",
            decimals: 18,
        },
        rpc: [
            "https://rpc-testnet.kcc.network",
            "wss://rpc-ws-testnet.kcc.network",
        ],
        faucets: ["https://faucet-testnet.kcc.network"],
        infoURL: "https://scan-testnet.kcc.network",
    },
    {
        name: "Shiden",
        chainId: 336,
        shortName: "sdn",
        networkId: 336,
        nativeCurrency: { name: "Shiden", symbol: "SDN", decimals: 18 },
        rpc: [
            "https://rpc.shiden.astar.network:8545",
            "wss://shiden.api.onfinality.io/public-ws",
        ],
        faucets: [],
        infoURL: "https://shiden.astar.network/",
    },
    {
        name: "Cronos Testnet",
        chainId: 338,
        shortName: "tcro",
        networkId: 338,
        nativeCurrency: {
            name: "Crypto.org Test Coin",
            symbol: "TCRO",
            decimals: 18,
        },
        rpc: [
            "https://cronos-testnet-3.crypto.org:8545",
            "wss://cronos-testnet-3.crypto.org:8546",
        ],
        faucets: ["https://cronos.crypto.org/faucet"],
        infoURL: "https://cronos.crypto.org",
    },
    {
        name: "Theta Mainnet",
        chainId: 361,
        shortName: "theta-mainnet",
        networkId: 361,
        nativeCurrency: { name: "Theta Fuel", symbol: "TFUEL", decimals: 18 },
        rpc: ["https://eth-rpc-api.thetatoken.org/rpc"],
        faucets: [],
        infoURL: "https://www.thetatoken.org/",
    },
    {
        name: "Theta Sapphire Testnet",
        chainId: 363,
        shortName: "theta-sapphire",
        networkId: 363,
        nativeCurrency: { name: "Theta Fuel", symbol: "TFUEL", decimals: 18 },
        rpc: ["https://eth-rpc-api-sapphire.thetatoken.org/rpc"],
        faucets: [],
        infoURL: "https://www.thetatoken.org/",
    },
    {
        name: "Theta Amber Testnet",
        chainId: 364,
        shortName: "theta-amber",
        networkId: 364,
        nativeCurrency: { name: "Theta Fuel", symbol: "TFUEL", decimals: 18 },
        rpc: ["https://eth-rpc-api-amber.thetatoken.org/rpc"],
        faucets: [],
        infoURL: "https://www.thetatoken.org/",
    },
    {
        name: "Theta Testnet",
        chainId: 365,
        shortName: "theta-testnet",
        networkId: 365,
        nativeCurrency: { name: "Theta Fuel", symbol: "TFUEL", decimals: 18 },
        rpc: ["https://eth-rpc-api-testnet.thetatoken.org/rpc"],
        faucets: [],
        infoURL: "https://www.thetatoken.org/",
    },
    {
        name: "PulseChain Mainnet",
        chainId: 369,
        shortName: "pls",
        networkId: 369,
        nativeCurrency: { name: "Pulse", symbol: "PLS", decimals: 18 },
        rpc: [
            "https://rpc.mainnet.pulsechain.com/v1/${PULSECHAIN_API_KEY}",
            "wss://rpc.mainnet.pulsechain.com/ws/v1/${PULSECHAIN_API_KEY}",
        ],
        faucets: [],
        infoURL: "https://pulsechain.com/",
    },
    {
        name: "Lisinski",
        chainId: 385,
        shortName: "lisinski",
        networkId: 385,
        nativeCurrency: {
            name: "Lisinski Ether",
            symbol: "LISINSKI",
            decimals: 18,
        },
        rpc: ["https://rpc-bitfalls1.lisinski.online"],
        faucets: ["https://pipa.lisinski.online"],
        infoURL: "https://lisinski.online",
    },
    {
        name: "Optimistic Ethereum Testnet Goerli",
        chainId: 420,
        shortName: "ogor",
        networkId: 420,
        nativeCurrency: { name: "Görli Ether", symbol: "GOR", decimals: 18 },
        rpc: ["https://goerli.optimism.io/"],
        faucets: [],
        infoURL: "https://optimism.io",
    },
    {
        name: "Rupaya",
        chainId: 499,
        shortName: "rupx",
        networkId: 499,
        nativeCurrency: { name: "Rupaya", symbol: "RUPX", decimals: 18 },
        rpc: [],
        faucets: [],
        infoURL: "https://www.rupx.io",
    },
    {
        name: "Tao Network",
        chainId: 558,
        shortName: "tao",
        networkId: 558,
        nativeCurrency: { name: "Tao", symbol: "TAO", decimals: 18 },
        rpc: [
            "https://rpc.testnet.tao.network",
            "http://rpc.testnet.tao.network:8545",
            "https://rpc.tao.network",
            "wss://rpc.tao.network",
        ],
        faucets: [],
        infoURL: "https://tao.network",
    },
    {
        name: "Acala Mandala Testnet",
        chainId: 595,
        shortName: "maca",
        networkId: 595,
        nativeCurrency: {
            name: "Acala Mandala Token",
            symbol: "mACA",
            decimals: 18,
        },
        rpc: [],
        faucets: [],
        infoURL: "https://acala.network",
    },
    {
        name: "Karura Network",
        chainId: 686,
        shortName: "kar",
        networkId: 686,
        nativeCurrency: { name: "Karura Token", symbol: "KAR", decimals: 18 },
        rpc: [],
        faucets: [],
        infoURL: "https://karura.network",
    },
    {
        name: "Factory 127 Testnet",
        chainId: 721,
        shortName: "tfeth",
        networkId: 721,
        nativeCurrency: { name: "Factory 127 Token", symbol: "FETH", decimals: 18 },
        rpc: [],
        faucets: [],
        infoURL: "https://www.factory127.com",
    },
    {
        name: "cheapETH",
        chainId: 777,
        shortName: "cth",
        networkId: 777,
        nativeCurrency: { name: "cTH", symbol: "cTH", decimals: 18 },
        rpc: ["https://node.cheapeth.org/rpc"],
        faucets: [],
        infoURL: "https://cheapeth.org/",
    },
    {
        name: "Acala Network",
        chainId: 787,
        shortName: "aca",
        networkId: 787,
        nativeCurrency: { name: "Acala Token", symbol: "ACA", decimals: 18 },
        rpc: [],
        faucets: [],
        infoURL: "https://acala.network",
    },
    {
        name: "Haic",
        chainId: 803,
        shortName: "haic",
        networkId: 803,
        nativeCurrency: { name: "Haicoin", symbol: "HAIC", decimals: 18 },
        rpc: ["https://orig.haichain.io/"],
        faucets: [],
        infoURL: "https://www.haichain.io/",
    },
    {
        name: "Callisto Mainnet",
        chainId: 820,
        shortName: "clo",
        networkId: 1,
        nativeCurrency: {
            name: "Callisto Mainnet Ether",
            symbol: "CLO",
            decimals: 18,
        },
        rpc: ["https://clo-geth.0xinfra.com"],
        faucets: [],
        infoURL: "https://callisto.network",
    },
    {
        name: "Callisto Testnet",
        chainId: 821,
        shortName: "tclo",
        networkId: 2,
        nativeCurrency: {
            name: "Callisto Testnet Ether",
            symbol: "TCLO",
            decimals: 18,
        },
        rpc: [],
        faucets: [],
        infoURL: "https://callisto.network",
    },
    {
        name: "Ambros Chain Mainnet",
        chainId: 880,
        shortName: "ambros",
        networkId: 880,
        nativeCurrency: { name: "AMBROS", symbol: "AMBR", decimals: 18 },
        rpc: ["https://mainnet.ambroschain.com"],
        faucets: [],
        infoURL: "https://bcmhunt.com/",
    },
    {
        name: "Wanchain",
        chainId: 888,
        shortName: "wan",
        networkId: 888,
        nativeCurrency: { name: "Wancoin", symbol: "WAN", decimals: 18 },
        rpc: ["https://gwan-ssl.wandevs.org:56891/"],
        faucets: [],
        infoURL: "https://www.wanscan.org",
    },
    {
        name: "PulseChain Testnet",
        chainId: 940,
        shortName: "tpls",
        networkId: 940,
        nativeCurrency: { name: "Test Pulse", symbol: "tPLS", decimals: 18 },
        rpc: [
            "https://rpc.testnet.pulsechain.com/v1/${PULSECHAIN_API_KEY}",
            "wss://rpc.testnet.pulsechain.com/ws/v1/${PULSECHAIN_API_KEY}",
        ],
        faucets: [],
        infoURL: "https://pulsechain.com/",
    },
    {
        name: "Nepal Blockchain Network",
        chainId: 977,
        shortName: "yeti",
        networkId: 977,
        nativeCurrency: {
            name: "Nepal Blockchain Network Ether",
            symbol: "YETI",
            decimals: 18,
        },
        rpc: [
            "https://api.nepalblockchain.dev",
            "https://api.nepalblockchain.network",
        ],
        faucets: ["https://faucet.nepalblockchain.network"],
        infoURL: "https://nepalblockchain.network",
    },
    {
        name: "Lucky Network",
        chainId: 998,
        shortName: "ln",
        networkId: 998,
        nativeCurrency: { name: "Lucky", symbol: "L99", decimals: 18 },
        rpc: [
            "https://rpc.luckynetwork.org",
            "wss://ws.lnscan.org",
            "https://rpc.lnscan.org",
        ],
        faucets: [],
        infoURL: "https://luckynetwork.org",
    },
    {
        name: "Wanchain Testnet",
        chainId: 999,
        shortName: "twan",
        networkId: 999,
        nativeCurrency: { name: "Wancoin", symbol: "WAN", decimals: 18 },
        rpc: ["https://gwan-ssl.wandevs.org:46891/"],
        faucets: [],
        infoURL: "https://testnet.wanscan.org",
    },
    {
        name: "Klaytn Testnet Baobab",
        chainId: 1001,
        shortName: "Baobab",
        networkId: 1001,
        nativeCurrency: { name: "KLAY", symbol: "KLAY", decimals: 18 },
        rpc: ["https://node-api.klaytnapi.com/v1/klaytn"],
        faucets: ["https://baobab.wallet.klaytn.com/access?next=faucet"],
        infoURL: "https://www.klaytn.com/",
    },
    {
        name: "Newton Testnet",
        chainId: 1007,
        shortName: "tnew",
        networkId: 1007,
        nativeCurrency: { name: "Newton", symbol: "NEW", decimals: 18 },
        rpc: ["https://rpc1.newchain.newtonproject.org"],
        faucets: [],
        infoURL: "https://www.newtonproject.org/",
    },
    {
        name: "Evrice Network",
        chainId: 1010,
        shortName: "EVC",
        networkId: 1010,
        nativeCurrency: { name: "Evrice", symbol: "EVC", decimals: 18 },
        rpc: ["https://meta.evrice.com"],
        faucets: [],
        infoURL: "https://evrice.com",
    },
    {
        name: "Newton",
        chainId: 1012,
        shortName: "new",
        networkId: 1012,
        nativeCurrency: { name: "Newton", symbol: "NEW", decimals: 18 },
        rpc: ["https://global.rpc.mainnet.newtonproject.org"],
        faucets: [],
        infoURL: "https://www.newtonproject.org/",
    },
    {
        name: "Sakura",
        chainId: 1022,
        shortName: "sku",
        networkId: 1022,
        nativeCurrency: { name: "Sakura", symbol: "SKU", decimals: 18 },
        rpc: [],
        faucets: [],
        infoURL: "https://clover.finance/sakura",
    },
    {
        name: "Clover Testnet",
        chainId: 1023,
        shortName: "tclv",
        networkId: 1023,
        nativeCurrency: { name: "Clover", symbol: "CLV", decimals: 18 },
        rpc: [],
        faucets: [],
        infoURL: "https://clover.finance",
    },
    {
        name: "Clover Mainnet",
        chainId: 1024,
        shortName: "clv",
        networkId: 1024,
        nativeCurrency: { name: "Clover", symbol: "CLV", decimals: 18 },
        rpc: [
            "https://rpc-ivy.clover.finance",
            "https://rpc-ivy-2.clover.finance",
            "https://rpc-ivy-3.clover.finance",
        ],
        faucets: [],
        infoURL: "https://clover.finance",
    },
    {
        name: "BitTorrent Chain Testnet",
        chainId: 1028,
        shortName: "tbtt",
        networkId: 1028,
        nativeCurrency: { name: "BitTorrent", symbol: "BTT", decimals: 18 },
        rpc: ["https://testrpc.bittorrentchain.io/"],
        faucets: [],
        infoURL: "https://bittorrentchain.io/",
    },
    {
        name: "MathChain",
        chainId: 1139,
        shortName: "MATH",
        networkId: 1139,
        nativeCurrency: { name: "MathChain", symbol: "MATH", decimals: 18 },
        rpc: [
            "https://mathchain-asia.maiziqianbao.net/rpc",
            "https://mathchain-us.maiziqianbao.net/rpc",
        ],
        faucets: [],
        infoURL: "https://mathchain.org",
    },
    {
        name: "MathChain Testnet",
        chainId: 1140,
        shortName: "tMATH",
        networkId: 1140,
        nativeCurrency: { name: "MathChain", symbol: "MATH", decimals: 18 },
        rpc: ["https://galois-hk.maiziqianbao.net/rpc"],
        faucets: ["https://scan.boka.network/#/Galois/faucet"],
        infoURL: "https://mathchain.org",
    },
    {
        name: "Popcateum Mainnet",
        chainId: 1213,
        shortName: "popcat",
        networkId: 1213,
        nativeCurrency: { name: "Popcat", symbol: "POP", decimals: 18 },
        rpc: ["https://dataseed.popcateum.org"],
        faucets: [],
        infoURL: "https://popcateum.org",
    },
    {
        name: "HALO Mainnet",
        chainId: 1280,
        shortName: "HO",
        networkId: 1280,
        nativeCurrency: { name: "HALO", symbol: "HO", decimals: 18 },
        rpc: ["https://nodes.halo.land"],
        faucets: [],
        infoURL: "https://halo.land/#/",
    },
    {
        name: "Moonbeam",
        chainId: 1284,
        shortName: "mbeam",
        networkId: 1284,
        nativeCurrency: { name: "Glimmer", symbol: "GLMR", decimals: 18 },
        rpc: [],
        faucets: [],
        infoURL: "https://moonbeam.network/networks/moonbeam/",
    },
    {
        name: "Moonriver",
        chainId: 1285,
        shortName: "mriver",
        networkId: 1285,
        nativeCurrency: { name: "Moonriver", symbol: "MOVR", decimals: 18 },
        rpc: [
            "https://rpc.moonriver.moonbeam.network",
            "wss://wss.moonriver.moonbeam.network",
        ],
        faucets: ["https://free-online-app.com/faucet-for-eth-evm-chains/"],
        infoURL: "https://moonbeam.network/networks/moonriver/",
    },
    {
        name: "Moonrock",
        chainId: 1286,
        shortName: "mrock",
        networkId: 1286,
        nativeCurrency: { name: "Rocs", symbol: "ROC", decimals: 18 },
        rpc: [],
        faucets: [],
        infoURL: "",
    },
    {
        name: "Moonbase Alpha",
        chainId: 1287,
        shortName: "mbase",
        networkId: 1287,
        nativeCurrency: { name: "Dev", symbol: "DEV", decimals: 18 },
        rpc: [
            "https://rpc.testnet.moonbeam.network",
            "wss://wss.testnet.moonbeam.network",
        ],
        faucets: [],
        infoURL: "https://docs.moonbeam.network/networks/testnet/",
    },
    {
        name: "Moonshadow",
        chainId: 1288,
        shortName: "mshadow",
        networkId: 1288,
        nativeCurrency: { name: "Moonshadow", symbol: "MSHD", decimals: 18 },
        rpc: [],
        faucets: [],
        infoURL: "https://docs.moonbeam.network/networks/overview/",
    },
    {
        name: "Catecoin Chain Mainnet",
        chainId: 1618,
        shortName: "cate",
        networkId: 1618,
        nativeCurrency: { name: "Catecoin", symbol: "CATE", decimals: 18 },
        rpc: ["https://send.catechain.com"],
        faucets: [],
        infoURL: "https://catechain.com",
    },
    {
        name: "Atheios",
        chainId: 1620,
        shortName: "ath",
        networkId: 11235813,
        nativeCurrency: { name: "Atheios Ether", symbol: "ATH", decimals: 18 },
        rpc: ["https://wallet.atheios.com:8797"],
        faucets: [],
        infoURL: "https://atheios.com",
    },
    {
        name: "Btachain",
        chainId: 1657,
        shortName: "bta",
        networkId: 1657,
        nativeCurrency: { name: "Bitcoin Asset", symbol: "BTA", decimals: 18 },
        rpc: ["https://dataseed1.btachain.com/"],
        faucets: [],
        infoURL: "https://bitcoinasset.io/",
    },
    {
        name: "Teslafunds",
        chainId: 1856,
        shortName: "tsf",
        networkId: 1,
        nativeCurrency: { name: "Teslafunds Ether", symbol: "TSF", decimals: 18 },
        rpc: ["https://tsfapi.europool.me"],
        faucets: [],
        infoURL: "https://teslafunds.io",
    },
    {
        name: "EtherGem",
        chainId: 1987,
        shortName: "egem",
        networkId: 1987,
        nativeCurrency: { name: "EtherGem Ether", symbol: "EGEM", decimals: 18 },
        rpc: ["https://jsonrpc.egem.io/custom"],
        faucets: [],
        infoURL: "https://egem.io",
    },
    {
        name: "420coin",
        chainId: 2020,
        shortName: "420",
        networkId: 2020,
        nativeCurrency: { name: "Fourtwenty", symbol: "420", decimals: 18 },
        rpc: [],
        faucets: [],
        infoURL: "https://420integrated.com",
    },
    {
        name: "Edgeware Mainnet",
        chainId: 2021,
        shortName: "edg",
        networkId: 2021,
        nativeCurrency: { name: "Edge", symbol: "EDG", decimals: 18 },
        rpc: ["https://mainnet1.edgewa.re"],
        faucets: [],
        infoURL: "http://edgewa.re",
    },
    {
        name: "Beresheet Testnet",
        chainId: 2022,
        shortName: "edgt",
        networkId: 2022,
        nativeCurrency: { name: "Testnet Edge", symbol: "tEDG", decimals: 18 },
        rpc: ["https://beresheet1.edgewa.re"],
        faucets: [],
        infoURL: "http://edgewa.re",
    },
    {
        name: "Ecoball Mainnet",
        chainId: 2100,
        shortName: "eco",
        networkId: 2100,
        nativeCurrency: { name: "Ecoball Coin", symbol: "ECO", decimals: 18 },
        rpc: ["https://api.ecoball.org/ecoball/"],
        faucets: [],
        infoURL: "https://ecoball.org",
    },
    {
        name: "Ecoball Testnet Espuma",
        chainId: 2101,
        shortName: "esp",
        networkId: 2101,
        nativeCurrency: { name: "Espuma Coin", symbol: "ECO", decimals: 18 },
        rpc: ["https://api.ecoball.org/espuma/"],
        faucets: [],
        infoURL: "https://ecoball.org",
    },
    {
        name: "Kortho Mainnet",
        chainId: 2559,
        shortName: "ktoc",
        networkId: 2559,
        nativeCurrency: { name: "KorthoChain", symbol: "KTO", decimals: 11 },
        rpc: ["https://www.kortho-chain.com"],
        faucets: [],
        infoURL: "https://www.kortho.io/",
    },
    {
        name: "Fantom Testnet",
        chainId: 4002,
        shortName: "tftm",
        networkId: 4002,
        nativeCurrency: { name: "Fantom", symbol: "FTM", decimals: 18 },
        rpc: ["https://rpc.testnet.fantom.network"],
        faucets: ["https://faucet.fantom.network"],
        infoURL: "https://docs.fantom.foundation/quick-start/short-guide#fantom-testnet",
    },
    {
        name: "IoTeX Network Mainnet",
        chainId: 4689,
        shortName: "iotex-mainnet",
        networkId: 4689,
        nativeCurrency: { name: "IoTeX", symbol: "IOTX", decimals: 18 },
        rpc: ["https://babel-api.mainnet.iotex.io"],
        faucets: [],
        infoURL: "https://iotex.io",
    },
    {
        name: "IoTeX Network Testnet",
        chainId: 4690,
        shortName: "iotex-testnet",
        networkId: 4690,
        nativeCurrency: { name: "IoTeX", symbol: "IOTX", decimals: 18 },
        rpc: ["https://babel-api.testnet.iotex.io"],
        faucets: ["https://faucet.iotex.io/"],
        infoURL: "https://iotex.io",
    },
    {
        name: "EraSwap Mainnet",
        chainId: 5197,
        shortName: "es",
        networkId: 5197,
        nativeCurrency: { name: "EraSwap", symbol: "ES", decimals: 18 },
        rpc: [
            "https://mainnet.eraswap.network",
            "https://rpc-mumbai.mainnet.eraswap.network",
        ],
        faucets: [],
        infoURL: "https://eraswap.info/",
    },
    {
        name: "Syscoin Tanenbaum Testnet",
        chainId: 5700,
        shortName: "tsys",
        networkId: 5700,
        nativeCurrency: { name: "Testnet Syscoin", symbol: "tSYS", decimals: 18 },
        rpc: ["https://rpc.tanenbaum.io", "wss://rpc.tanenbaum.io/wss"],
        faucets: ["https://faucet.tanenbaum.io"],
        infoURL: "https://syscoin.org",
    },
    {
        name: "Ontology Testnet",
        chainId: 5851,
        shortName: "Ontology Testnet",
        networkId: 5851,
        nativeCurrency: { name: "ONG", symbol: "ONG", decimals: 9 },
        rpc: [
            "https://polaris1.ont.io:20339",
            "https://polaris2.ont.io:20339",
            "https://polaris3.ont.io:20339",
            "https://polaris4.ont.io:20339",
        ],
        faucets: ["https://developer.ont.io/"],
        infoURL: "https://ont.io/",
    },
    {
        name: "Wegochain Rubidium Mainnet",
        chainId: 5869,
        shortName: "rbd",
        networkId: 5869,
        nativeCurrency: { name: "Rubid", symbol: "RBD", decimals: 18 },
        rpc: ["https://proxy.wegochain.io", "http://wallet.wegochain.io:7764"],
        faucets: [],
        infoURL: "http://wegochain.io",
    },
    {
        name: "Hazlor Testnet",
        chainId: 7878,
        shortName: "hazlor-hatlas",
        networkId: 7878,
        nativeCurrency: { name: "Planet", symbol: "PLANET", decimals: 18 },
        rpc: ["http://hatlas.rpc.hazlor.com:8545/"],
        faucets: ["https://faucet.hazlor.com"],
        infoURL: "https://hazlor.com",
    },
    {
        name: "MDGL Testnet",
        chainId: 8029,
        shortName: "mdgl",
        networkId: 8029,
        nativeCurrency: { name: "MDGL Token", symbol: "MDGLT", decimals: 18 },
        rpc: ["https://testnet.mdgl.io"],
        faucets: [],
        infoURL: "https://mdgl.io",
    },
    {
        name: "GeneChain Adenine Testnet",
        chainId: 8080,
        shortName: "GeneChainAdn",
        networkId: 8080,
        nativeCurrency: { name: "Testnet RNA", symbol: "tRNA", decimals: 18 },
        rpc: ["https://rpc-testnet.genechain.io"],
        faucets: ["https://faucet.genechain.io"],
        infoURL: "https://scan-testnet.genechain.io/",
    },
    {
        name: "Klaytn Mainnet Cypress",
        chainId: 8217,
        shortName: "Cypress",
        networkId: 8217,
        nativeCurrency: { name: "KLAY", symbol: "KLAY", decimals: 18 },
        rpc: ["https://node-api.klaytnapi.com/v1/klaytn"],
        faucets: [],
        infoURL: "https://www.klaytn.com/",
    },
    {
        name: "KorthoTest",
        chainId: 8285,
        shortName: "Kortho",
        networkId: 8285,
        nativeCurrency: { name: "Kortho Test", symbol: "KTO", decimals: 11 },
        rpc: ["https://www.krotho-test.net"],
        faucets: [],
        infoURL: "https://www.kortho.io/",
    },
    {
        name: "TOOL Global Mainnet",
        chainId: 8723,
        shortName: "olo",
        networkId: 8723,
        nativeCurrency: { name: "TOOL Global", symbol: "OLO", decimals: 18 },
        rpc: ["https://mainnet-web3.wolot.io"],
        faucets: [],
        infoURL: "https://ibdt.io",
    },
    {
        name: "TOOL Global Testnet",
        chainId: 8724,
        shortName: "tolo",
        networkId: 8724,
        nativeCurrency: { name: "TOOL Global", symbol: "OLO", decimals: 18 },
        rpc: ["https://testnet-web3.wolot.io"],
        faucets: ["https://testnet-explorer.wolot.io"],
        infoURL: "https://testnet-explorer.wolot.io",
    },
    {
        name: "Ambros Chain Testnet",
        chainId: 8888,
        shortName: "ambrostestnet",
        networkId: 8888,
        nativeCurrency: { name: "AMBROS", symbol: "AMBR", decimals: 18 },
        rpc: ["https://testnet.ambroschain.com"],
        faucets: [],
        infoURL: "https://bcmhunt.com/",
    },
    {
        name: "bloxberg",
        chainId: 8995,
        shortName: "berg",
        networkId: 8995,
        nativeCurrency: { name: "BERG", symbol: "U+25B3", decimals: 18 },
        rpc: ["https://core.bloxberg.org"],
        faucets: ["https://faucet.bloxberg.org/"],
        infoURL: "https://bloxberg.org",
    },
    {
        name: "Evmos Testnet",
        chainId: 9000,
        shortName: "evmos-mons",
        networkId: 9000,
        nativeCurrency: { name: "Photon", symbol: "PHOTON", decimals: 18 },
        rpc: ["https://ethereum.rpc.evmos.dev"],
        faucets: ["https://faucet.evmos.org"],
        infoURL: "https://evmos.org",
    },
    {
        name: "Smart Bitcoin Cash",
        chainId: 10000,
        shortName: "smartbch",
        networkId: 10000,
        nativeCurrency: { name: "Bitcoin Cash", symbol: "BCH", decimals: 18 },
        rpc: [
            "https://smartbch.greyh.at",
            "https://rpc-mainnet.smartbch.org",
            "https://smartbch.fountainhead.cash/mainnet",
            "https://smartbch.devops.cash/mainnet",
        ],
        faucets: [],
        infoURL: "https://smartbch.org/",
    },
    {
        name: "Smart Bitcoin Cash Testnet",
        chainId: 10001,
        shortName: "smartbchtest",
        networkId: 10001,
        nativeCurrency: {
            name: "Bitcoin Cash Test Token",
            symbol: "BCHT",
            decimals: 18,
        },
        rpc: [
            "https://rpc-testnet.smartbch.org",
            "https://smartbch.devops.cash/testnet",
        ],
        faucets: [],
        infoURL: "http://smartbch.org/",
    },
    {
        name: "Blockchain Genesis Mainnet",
        chainId: 10101,
        shortName: "GEN",
        networkId: 10101,
        nativeCurrency: { name: "GEN", symbol: "GEN", decimals: 18 },
        rpc: [
            "https://eu.mainnet.xixoio.com",
            "https://us.mainnet.xixoio.com",
            "https://asia.mainnet.xixoio.com",
        ],
        faucets: [],
        infoURL: "https://www.xixoio.com/",
    },
    {
        name: "Singularity ZERO Testnet",
        chainId: 12051,
        shortName: "tZERO",
        networkId: 12051,
        nativeCurrency: { name: "ZERO", symbol: "tZERO", decimals: 18 },
        rpc: ["https://betaenv.singularity.gold:18545"],
        faucets: ["https://nft.singularity.gold"],
        infoURL: "https://www.singularity.gold",
    },
    {
        name: "MetaDot Mainnet",
        chainId: 16000,
        shortName: "mtt",
        networkId: 16000,
        nativeCurrency: { name: "MetaDot Token", symbol: "MTT", decimals: 18 },
        rpc: ["https://mainnet.metadot.network"],
        faucets: [],
        infoURL: "https://metadot.network",
    },
    {
        name: "MetaDot Testnet",
        chainId: 16001,
        shortName: "mtttest",
        networkId: 16001,
        nativeCurrency: {
            name: "MetaDot Token TestNet",
            symbol: "MTT-test",
            decimals: 18,
        },
        rpc: ["https://testnet.metadot.network"],
        faucets: ["https://faucet.metadot.network/"],
        infoURL: "https://metadot.network",
    },
    {
        name: "Webchain",
        chainId: 24484,
        shortName: "web",
        networkId: 37129,
        nativeCurrency: { name: "Webchain Ether", symbol: "WEB", decimals: 18 },
        rpc: ["https://node1.webchain.network"],
        faucets: [],
        infoURL: "https://webchain.network",
    },
    {
        name: "MintMe.com Coin",
        chainId: 24734,
        shortName: "mintme",
        networkId: 37480,
        nativeCurrency: { name: "MintMe.com Coin", symbol: "MINTME", decimals: 18 },
        rpc: ["https://node1.mintme.com"],
        faucets: [],
        infoURL: "https://www.mintme.com",
    },
    {
        name: "Ethersocial Network",
        chainId: 31102,
        shortName: "esn",
        networkId: 1,
        nativeCurrency: {
            name: "Ethersocial Network Ether",
            symbol: "ESN",
            decimals: 18,
        },
        rpc: ["https://api.esn.gonspool.com"],
        faucets: [],
        infoURL: "https://ethersocial.org",
    },
    {
        name: "GoChain Testnet",
        chainId: 31337,
        shortName: "got",
        networkId: 31337,
        nativeCurrency: { name: "GoChain Coin", symbol: "GO", decimals: 18 },
        rpc: ["https://testnet-rpc.gochain.io"],
        faucets: [],
        infoURL: "https://gochain.io",
    },
    {
        name: "Fusion Mainnet",
        chainId: 32659,
        shortName: "fsn",
        networkId: 32659,
        nativeCurrency: { name: "Fusion", symbol: "FSN", decimals: 18 },
        rpc: ["https://mainnet.anyswap.exchange", "https://fsn.dev/api"],
        faucets: [],
        infoURL: "https://www.fusion.org/",
    },
    {
        name: "Energi Mainnet",
        chainId: 39797,
        shortName: "nrg",
        networkId: 39797,
        nativeCurrency: { name: "Energi", symbol: "NRG", decimals: 18 },
        rpc: ["https://nodeapi.energi.network"],
        faucets: [],
        infoURL: "https://www.energi.world/",
    },
    {
        name: "pegglecoin",
        chainId: 42069,
        shortName: "PC",
        networkId: 42069,
        nativeCurrency: { name: "pegglecoin", symbol: "peggle", decimals: 18 },
        rpc: [],
        faucets: [],
        infoURL: "https://teampeggle.com",
    },
    {
        name: "Arbitrum One",
        chainId: 42161,
        shortName: "arb1",
        networkId: 42161,
        nativeCurrency: { name: "Ether", symbol: "AETH", decimals: 18 },
        rpc: [
            "https://arbitrum-mainnet.infura.io/v3/${INFURA_API_KEY}",
            "https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}",
            "https://arb1.arbitrum.io/rpc",
            "wss://arb1.arbitrum.io/ws",
        ],
        faucets: [],
        infoURL: "https://arbitrum.io",
    },
    {
        name: "Celo Mainnet",
        chainId: 42220,
        shortName: "CELO",
        networkId: 42220,
        nativeCurrency: { name: "CELO", symbol: "CELO", decimals: 18 },
        rpc: ["https://forno.celo.org", "wss://forno.celo.org/ws"],
        faucets: ["https://free-online-app.com/faucet-for-eth-evm-chains/"],
        infoURL: "https://docs.celo.org/",
    },
    {
        name: "Athereum",
        chainId: 43110,
        shortName: "avaeth",
        networkId: 43110,
        nativeCurrency: { name: "Athereum Ether", symbol: "ATH", decimals: 18 },
        rpc: ["https://ava.network:21015/ext/evm/rpc"],
        faucets: ["http://athfaucet.ava.network//?address=${ADDRESS}"],
        infoURL: "https://athereum.ava.network",
    },
    {
        name: "Avalanche Fuji Testnet",
        chainId: 43113,
        shortName: "Fuji",
        networkId: 1,
        nativeCurrency: { name: "Avalanche", symbol: "AVAX", decimals: 18 },
        rpc: ["https://api.avax-test.network/ext/bc/C/rpc"],
        faucets: ["https://faucet.avax-test.network/"],
        infoURL: "https://cchain.explorer.avax-test.network",
    },
    {
        name: "Avalanche Mainnet",
        chainId: 43114,
        shortName: "Avalanche",
        networkId: 43114,
        nativeCurrency: { name: "Avalanche", symbol: "AVAX", decimals: 18 },
        rpc: ["https://api.avax.network/ext/bc/C/rpc"],
        faucets: ["https://free-online-app.com/faucet-for-eth-evm-chains/"],
        infoURL: "https://www.avax.network/",
    },
    {
        name: "Celo Alfajores Testnet",
        chainId: 44787,
        shortName: "ALFA",
        networkId: 44787,
        nativeCurrency: { name: "CELO", symbol: "CELO", decimals: 18 },
        rpc: [
            "https://alfajores-forno.celo-testnet.org",
            "wss://alfajores-forno.celo-testnet.org/ws",
        ],
        faucets: [
            "https://celo.org/developers/faucet",
            "https://cauldron.pretoriaresearchlab.io/alfajores-faucet",
        ],
        infoURL: "https://docs.celo.org/",
    },
    {
        name: "Energi Testnet",
        chainId: 49797,
        shortName: "tnrg",
        networkId: 49797,
        nativeCurrency: { name: "Energi", symbol: "NRG", decimals: 18 },
        rpc: ["https://nodeapi.test.energi.network"],
        faucets: [],
        infoURL: "https://www.energi.world/",
    },
    {
        name: "Thinkium Testnet Chain 0",
        chainId: 60000,
        shortName: "TKM-test0",
        networkId: 60000,
        nativeCurrency: { name: "TKM", symbol: "TKM", decimals: 18 },
        rpc: ["https://test.thinkiumrpc.net/"],
        faucets: ["https://www.thinkiumdev.net/faucet"],
        infoURL: "https://thinkium.net/",
    },
    {
        name: "Thinkium Testnet Chain 1",
        chainId: 60001,
        shortName: "TKM-test1",
        networkId: 60001,
        nativeCurrency: { name: "TKM", symbol: "TKM", decimals: 18 },
        rpc: ["https://test1.thinkiumrpc.net/"],
        faucets: ["https://www.thinkiumdev.net/faucet"],
        infoURL: "https://thinkium.net/",
    },
    {
        name: "Thinkium Testnet Chain 2",
        chainId: 60002,
        shortName: "TKM-test2",
        networkId: 60002,
        nativeCurrency: { name: "TKM", symbol: "TKM", decimals: 18 },
        rpc: ["https://test2.thinkiumrpc.net/"],
        faucets: ["https://www.thinkiumdev.net/faucet"],
        infoURL: "https://thinkium.net/",
    },
    {
        name: "Thinkium Testnet Chain 103",
        chainId: 60103,
        shortName: "TKM-test103",
        networkId: 60103,
        nativeCurrency: { name: "TKM", symbol: "TKM", decimals: 18 },
        rpc: ["https://test103.thinkiumrpc.net/"],
        faucets: ["https://www.thinkiumdev.net/faucet"],
        infoURL: "https://thinkium.net/",
    },
    {
        name: "Celo Baklava Testnet",
        chainId: 62320,
        shortName: "BKLV",
        networkId: 62320,
        nativeCurrency: { name: "CELO", symbol: "CELO", decimals: 18 },
        rpc: ["https://baklava-forno.celo-testnet.org"],
        faucets: [
            "https://docs.google.com/forms/d/e/1FAIpQLSdfr1BwUTYepVmmvfVUDRCwALejZ-TUva2YujNpvrEmPAX2pg/viewform",
            "https://cauldron.pretoriaresearchlab.io/baklava-faucet",
        ],
        infoURL: "https://docs.celo.org/",
    },
    {
        name: "Thinkium Mainnet Chain 0",
        chainId: 70000,
        shortName: "TKM0",
        networkId: 70000,
        nativeCurrency: { name: "TKM", symbol: "TKM", decimals: 18 },
        rpc: ["https://proxy.thinkiumrpc.net/"],
        faucets: [],
        infoURL: "https://thinkium.net/",
    },
    {
        name: "Thinkium Mainnet Chain 1",
        chainId: 70001,
        shortName: "TKM1",
        networkId: 70001,
        nativeCurrency: { name: "TKM", symbol: "TKM", decimals: 18 },
        rpc: ["https://proxy1.thinkiumrpc.net/"],
        faucets: [],
        infoURL: "https://thinkium.net/",
    },
    {
        name: "Thinkium Mainnet Chain 2",
        chainId: 70002,
        shortName: "TKM2",
        networkId: 70002,
        nativeCurrency: { name: "TKM", symbol: "TKM", decimals: 18 },
        rpc: ["https://proxy2.thinkiumrpc.net/"],
        faucets: [],
        infoURL: "https://thinkium.net/",
    },
    {
        name: "Thinkium Mainnet Chain 103",
        chainId: 70103,
        shortName: "TKM103",
        networkId: 70103,
        nativeCurrency: { name: "TKM", symbol: "TKM", decimals: 18 },
        rpc: ["https://proxy103.thinkiumrpc.net/"],
        faucets: [],
        infoURL: "https://thinkium.net/",
    },
    {
        name: "Polyjuice Testnet",
        chainId: 71393,
        shortName: "ckb",
        networkId: 1,
        nativeCurrency: { name: "CKB", symbol: "CKB", decimals: 8 },
        rpc: [
            "https://godwoken-testnet-web3-rpc.ckbapp.dev",
            "ws://godwoken-testnet-web3-rpc.ckbapp.dev/ws",
        ],
        faucets: ["https://faucet.nervos.org/"],
        infoURL: "https://github.com/nervosnetwork/godwoken",
    },
    {
        name: "Energy Web Volta Testnet",
        chainId: 73799,
        shortName: "vt",
        networkId: 73799,
        nativeCurrency: { name: "Volta Token", symbol: "VT", decimals: 18 },
        rpc: [
            "https://volta-rpc.energyweb.org",
            "wss://volta-rpc.energyweb.org/ws",
        ],
        faucets: ["https://voltafaucet.energyweb.org"],
        infoURL: "https://energyweb.org",
    },
    {
        name: "Firenze test network",
        chainId: 78110,
        shortName: "firenze",
        networkId: 78110,
        nativeCurrency: { name: "Firenze Ether", symbol: "FIN", decimals: 18 },
        rpc: ["https://ethnode.primusmoney.com/firenze"],
        faucets: [],
        infoURL: "https://primusmoney.com",
    },
    {
        name: "Polygon Testnet Mumbai",
        chainId: 80001,
        shortName: "maticmum",
        networkId: 80001,
        nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
        rpc: [
            "https://matic-mumbai.chainstacklabs.com",
            "https://rpc-mumbai.maticvigil.com",
            "https://matic-testnet-archive-rpc.bwarelabs.com",
        ],
        faucets: ["https://faucet.polygon.technology/"],
        infoURL: "https://polygon.technology/",
    },
    {
        name: "QuarkChain Mainnet Root",
        chainId: 100000,
        shortName: "qkc-r",
        networkId: 100000,
        nativeCurrency: { name: "QKC", symbol: "QKC", decimals: 18 },
        rpc: ["http://jrpc.mainnet.quarkchain.io:38391/"],
        faucets: [],
        infoURL: "https://www.quarkchain.io/",
    },
    {
        name: "QuarkChain Mainnet Shard 0",
        chainId: 100001,
        shortName: "qkc-s0",
        networkId: 100001,
        nativeCurrency: { name: "QKC", symbol: "QKC", decimals: 18 },
        rpc: ["http://eth-jrpc.mainnet.quarkchain.io:39000/"],
        faucets: [],
        infoURL: "https://www.quarkchain.io/",
    },
    {
        name: "QuarkChain Mainnet Shard 1",
        chainId: 100002,
        shortName: "qkc-s1",
        networkId: 100002,
        nativeCurrency: { name: "QKC", symbol: "QKC", decimals: 18 },
        rpc: ["http://eth-jrpc.mainnet.quarkchain.io:39001/"],
        faucets: [],
        infoURL: "https://www.quarkchain.io/",
    },
    {
        name: "QuarkChain Mainnet Shard 2",
        chainId: 100003,
        shortName: "qkc-s2",
        networkId: 100003,
        nativeCurrency: { name: "QKC", symbol: "QKC", decimals: 18 },
        rpc: ["http://eth-jrpc.mainnet.quarkchain.io:39002/"],
        faucets: [],
        infoURL: "https://www.quarkchain.io/",
    },
    {
        name: "QuarkChain Mainnet Shard 3",
        chainId: 100004,
        shortName: "qkc-s3",
        networkId: 100004,
        nativeCurrency: { name: "QKC", symbol: "QKC", decimals: 18 },
        rpc: ["http://eth-jrpc.mainnet.quarkchain.io:39003/"],
        faucets: [],
        infoURL: "https://www.quarkchain.io/",
    },
    {
        name: "QuarkChain Mainnet Shard 4",
        chainId: 100005,
        shortName: "qkc-s4",
        networkId: 100005,
        nativeCurrency: { name: "QKC", symbol: "QKC", decimals: 18 },
        rpc: ["http://eth-jrpc.mainnet.quarkchain.io:39004/"],
        faucets: [],
        infoURL: "https://www.quarkchain.io/",
    },
    {
        name: "QuarkChain Mainnet Shard 5",
        chainId: 100006,
        shortName: "qkc-s5",
        networkId: 100006,
        nativeCurrency: { name: "QKC", symbol: "QKC", decimals: 18 },
        rpc: ["http://eth-jrpc.mainnet.quarkchain.io:39005/"],
        faucets: [],
        infoURL: "https://www.quarkchain.io/",
    },
    {
        name: "QuarkChain Mainnet Shard 6",
        chainId: 100007,
        shortName: "qkc-s6",
        networkId: 100007,
        nativeCurrency: { name: "QKC", symbol: "QKC", decimals: 18 },
        rpc: ["http://eth-jrpc.mainnet.quarkchain.io:39006/"],
        faucets: [],
        infoURL: "https://www.quarkchain.io/",
    },
    {
        name: "QuarkChain Mainnet Shard 7",
        chainId: 100008,
        shortName: "qkc-s7",
        networkId: 100008,
        nativeCurrency: { name: "QKC", symbol: "QKC", decimals: 18 },
        rpc: ["http://eth-jrpc.mainnet.quarkchain.io:39007/"],
        faucets: [],
        infoURL: "https://www.quarkchain.io/",
    },
    {
        name: "QuarkChain Devnet Root",
        chainId: 110000,
        shortName: "qkc-d-r",
        networkId: 110000,
        nativeCurrency: { name: "QKC", symbol: "QKC", decimals: 18 },
        rpc: ["http://jrpc.devnet.quarkchain.io:38391/"],
        faucets: [],
        infoURL: "https://www.quarkchain.io/",
    },
    {
        name: "QuarkChain Devnet Shard 0",
        chainId: 110001,
        shortName: "qkc-d-s0",
        networkId: 110001,
        nativeCurrency: { name: "QKC", symbol: "QKC", decimals: 18 },
        rpc: ["http://eth-jrpc.devnet.quarkchain.io:39900/"],
        faucets: [],
        infoURL: "https://www.quarkchain.io/",
    },
    {
        name: "QuarkChain Devnet Shard 1",
        chainId: 110002,
        shortName: "qkc-d-s1",
        networkId: 110002,
        nativeCurrency: { name: "QKC", symbol: "QKC", decimals: 18 },
        rpc: ["http://eth-jrpc.devnet.quarkchain.io:39901/"],
        faucets: [],
        infoURL: "https://www.quarkchain.io/",
    },
    {
        name: "QuarkChain Devnet Shard 2",
        chainId: 110003,
        shortName: "qkc-d-s2",
        networkId: 110003,
        nativeCurrency: { name: "QKC", symbol: "QKC", decimals: 18 },
        rpc: ["http://eth-jrpc.devnet.quarkchain.io:39902/"],
        faucets: [],
        infoURL: "https://www.quarkchain.io/",
    },
    {
        name: "QuarkChain Devnet Shard 3",
        chainId: 110004,
        shortName: "qkc-d-s3",
        networkId: 110004,
        nativeCurrency: { name: "QKC", symbol: "QKC", decimals: 18 },
        rpc: ["http://eth-jrpc.devnet.quarkchain.io:39903/"],
        faucets: [],
        infoURL: "https://www.quarkchain.io/",
    },
    {
        name: "QuarkChain Devnet Shard 4",
        chainId: 110005,
        shortName: "qkc-d-s4",
        networkId: 110005,
        nativeCurrency: { name: "QKC", symbol: "QKC", decimals: 18 },
        rpc: ["http://eth-jrpc.devnet.quarkchain.io:39904/"],
        faucets: [],
        infoURL: "https://www.quarkchain.io/",
    },
    {
        name: "QuarkChain Devnet Shard 5",
        chainId: 110006,
        shortName: "qkc-d-s5",
        networkId: 110006,
        nativeCurrency: { name: "QKC", symbol: "QKC", decimals: 18 },
        rpc: ["http://eth-jrpc.devnet.quarkchain.io:39905/"],
        faucets: [],
        infoURL: "https://www.quarkchain.io/",
    },
    {
        name: "QuarkChain Devnet Shard 6",
        chainId: 110007,
        shortName: "qkc-d-s6",
        networkId: 110007,
        nativeCurrency: { name: "QKC", symbol: "QKC", decimals: 18 },
        rpc: ["http://eth-jrpc.devnet.quarkchain.io:39906/"],
        faucets: [],
        infoURL: "https://www.quarkchain.io/",
    },
    {
        name: "QuarkChain Devnet Shard 7",
        chainId: 110008,
        shortName: "qkc-d-s7",
        networkId: 110008,
        nativeCurrency: { name: "QKC", symbol: "QKC", decimals: 18 },
        rpc: ["http://eth-jrpc.devnet.quarkchain.io:39907/"],
        faucets: [],
        infoURL: "https://www.quarkchain.io/",
    },
    {
        name: "Akroma",
        chainId: 200625,
        shortName: "aka",
        networkId: 200625,
        nativeCurrency: { name: "Akroma Ether", symbol: "AKA", decimals: 18 },
        rpc: ["https://remote.akroma.io"],
        faucets: [],
        infoURL: "https://akroma.io",
    },
    {
        name: "Alaya Dev Testnet",
        chainId: 201030,
        shortName: "alaya",
        networkId: 1,
        nativeCurrency: { name: "ATP", symbol: "atp", decimals: 18 },
        rpc: [
            "https://devnetopenapi.alaya.network/rpc",
            "wss://devnetopenapi.alaya.network/ws",
        ],
        faucets: [
            "https://faucet.alaya.network/faucet/?id=f93426c0887f11eb83b900163e06151c",
        ],
        infoURL: "https://www.alaya.network/",
    },
    {
        name: "PlatON Dev Testnet",
        chainId: 210309,
        shortName: "PlatON",
        networkId: 1,
        nativeCurrency: { name: "LAT", symbol: "lat", decimals: 18 },
        rpc: [
            "https://devnetopenapi.platon.network/rpc",
            "wss://devnetopenapi.platon.network/ws",
        ],
        faucets: [
            "https://faucet.platon.network/faucet/?id=e5d32df10aee11ec911142010a667c03",
        ],
        infoURL: "https://www.platon.network",
    },
    {
        name: "ARTIS sigma1",
        chainId: 246529,
        shortName: "ats",
        networkId: 246529,
        nativeCurrency: { name: "ARTIS sigma1 Ether", symbol: "ATS", decimals: 18 },
        rpc: ["https://rpc.sigma1.artis.network"],
        faucets: [],
        infoURL: "https://artis.eco",
    },
    {
        name: "ARTIS Testnet tau1",
        chainId: 246785,
        shortName: "atstau",
        networkId: 246785,
        nativeCurrency: { name: "ARTIS tau1 Ether", symbol: "tATS", decimals: 18 },
        rpc: ["https://rpc.tau1.artis.network"],
        faucets: [],
        infoURL: "https://artis.network",
    },
    {
        name: "Polis Testnet",
        chainId: 333888,
        shortName: "sparta",
        networkId: 333888,
        nativeCurrency: { name: "tPolis", symbol: "tPOLIS", decimals: 18 },
        rpc: ["https://sparta-rpc.polis.tech"],
        faucets: ["https://faucet.polis.tech"],
        infoURL: "https://polis.tech",
    },
    {
        name: "Polis Mainnet",
        chainId: 333999,
        shortName: "olympus",
        networkId: 333999,
        nativeCurrency: { name: "Polis", symbol: "POLIS", decimals: 18 },
        rpc: ["https://rpc.polis.tech"],
        faucets: ["https://faucet.polis.tech"],
        infoURL: "https://polis.tech",
    },
    {
        name: "Arbitrum Testnet Rinkeby",
        chainId: 421611,
        shortName: "arb-rinkeby",
        networkId: 421611,
        nativeCurrency: {
            name: "Arbitrum Rinkeby Ether",
            symbol: "ARETH",
            decimals: 18,
        },
        rpc: ["https://rinkeby.arbitrum.io/rpc", "wss://rinkeby.arbitrum.io/ws"],
        faucets: [],
        infoURL: "https://arbitrum.io",
    },
    {
        name: "Eluvio Content Fabric",
        chainId: 955305,
        shortName: "elv",
        networkId: 955305,
        nativeCurrency: { name: "ELV", symbol: "ELV", decimals: 18 },
        rpc: [
            "https://host-76-74-28-226.contentfabric.io/eth/",
            "https://host-76-74-28-232.contentfabric.io/eth/",
            "https://host-76-74-29-2.contentfabric.io/eth/",
            "https://host-76-74-29-8.contentfabric.io/eth/",
            "https://host-76-74-29-34.contentfabric.io/eth/",
            "https://host-76-74-29-35.contentfabric.io/eth/",
            "https://host-154-14-211-98.contentfabric.io/eth/",
            "https://host-154-14-192-66.contentfabric.io/eth/",
            "https://host-60-240-133-202.contentfabric.io/eth/",
            "https://host-64-235-250-98.contentfabric.io/eth/",
        ],
        faucets: [],
        infoURL: "https://eluv.io",
    },
    {
        name: "Etho Protocol",
        chainId: 1313114,
        shortName: "etho",
        networkId: 1313114,
        nativeCurrency: { name: "Etho Protocol", symbol: "ETHO", decimals: 18 },
        rpc: ["https://rpc.ether1.org"],
        faucets: [],
        infoURL: "https://ethoprotocol.com",
    },
    {
        name: "Xerom",
        chainId: 1313500,
        shortName: "xero",
        networkId: 1313500,
        nativeCurrency: { name: "Xerom Ether", symbol: "XERO", decimals: 18 },
        rpc: ["https://rpc.xerom.org"],
        faucets: [],
        infoURL: "https://xerom.org",
    },
    {
        name: "Musicoin",
        chainId: 7762959,
        shortName: "music",
        networkId: 7762959,
        nativeCurrency: { name: "Musicoin", symbol: "MUSIC", decimals: 18 },
        rpc: ["https://mewapi.musicoin.tw"],
        faucets: [],
        infoURL: "https://musicoin.tw",
    },
    {
        name: "PepChain Churchill",
        chainId: 13371337,
        shortName: "tpep",
        networkId: 13371337,
        nativeCurrency: {
            name: "PepChain Churchill Ether",
            symbol: "TPEP",
            decimals: 18,
        },
        rpc: ["https://churchill-rpc.pepchain.io"],
        faucets: [],
        infoURL: "https://pepchain.io",
    },
    {
        name: "IOLite",
        chainId: 18289463,
        shortName: "ilt",
        networkId: 18289463,
        nativeCurrency: { name: "IOLite Ether", symbol: "ILT", decimals: 18 },
        rpc: ["https://net.iolite.io"],
        faucets: [],
        infoURL: "https://iolite.io",
    },
    {
        name: "quarkblockchain",
        chainId: 20181205,
        shortName: "qki",
        networkId: 20181205,
        nativeCurrency: {
            name: "quarkblockchain Native Token",
            symbol: "QKI",
            decimals: 18,
        },
        rpc: ["https://hz.rpc.qkiscan.cn", "https://jp.rpc.qkiscan.io"],
        faucets: [],
        infoURL: "https://quarkblockchain.org/",
    },
    {
        name: "Auxilium Network Mainnet",
        chainId: 28945486,
        shortName: "auxi",
        networkId: 28945486,
        nativeCurrency: { name: "Auxilium coin", symbol: "AUX", decimals: 18 },
        rpc: ["https://rpc.auxilium.global"],
        faucets: [],
        infoURL: "https://auxilium.global",
    },
    {
        name: "Joys Digital Mainnet",
        chainId: 35855456,
        shortName: "JOYS",
        networkId: 35855456,
        nativeCurrency: { name: "JOYS", symbol: "JOYS", decimals: 18 },
        rpc: ["https://node.joys.digital"],
        faucets: [],
        infoURL: "https://joys.digital",
    },
    {
        name: "Aquachain",
        chainId: 61717561,
        shortName: "aqua",
        networkId: 61717561,
        nativeCurrency: { name: "Aquachain Ether", symbol: "AQUA", decimals: 18 },
        rpc: ["https://c.onical.org", "https://tx.aquacha.in/api"],
        faucets: ["https://aquacha.in/faucet"],
        infoURL: "https://aquachain.github.io",
    },
    {
        name: "Joys Digital TestNet",
        chainId: 99415706,
        shortName: "TOYS",
        networkId: 99415706,
        nativeCurrency: { name: "TOYS", symbol: "TOYS", decimals: 18 },
        rpc: ["https://toys.joys.cash/"],
        faucets: ["https://faucet.joys.digital/"],
        infoURL: "https://joys.digital",
    },
    {
        name: "Neon EVM DevNet",
        chainId: 245022926,
        shortName: "neonevm-devnet",
        networkId: 245022926,
        nativeCurrency: { name: "Neon", symbol: "NEON", decimals: 18 },
        rpc: ["https://proxy.devnet.neonlabs.org/solana"],
        faucets: ["https://neonswap.live/#/get-tokens"],
        infoURL: "https://neon-labs.org/",
    },
    {
        name: "Neon EVM MainNet",
        chainId: 245022934,
        shortName: "neonevm-mainnet",
        networkId: 245022934,
        nativeCurrency: { name: "Neon", symbol: "NEON", decimals: 18 },
        rpc: ["https://proxy.mainnet.neonlabs.org/solana"],
        faucets: [],
        infoURL: "https://neon-labs.org/",
    },
    {
        name: "Neon EVM TestNet",
        chainId: 245022940,
        shortName: "neonevm-testnet",
        networkId: 245022940,
        nativeCurrency: { name: "Neon", symbol: "NEON", decimals: 18 },
        rpc: ["https://proxy.testnet.neonlabs.org/solana"],
        faucets: [],
        infoURL: "https://neon-labs.org/",
    },
    {
        name: "OneLedger Mainnet",
        chainId: 311752642,
        shortName: "oneledger",
        networkId: 311752642,
        nativeCurrency: { name: "OLT", symbol: "OLT", decimals: 18 },
        rpc: ["https://mainnet-rpc.oneledger.network"],
        faucets: [],
        infoURL: "https://oneledger.io",
    },
    {
        name: "IPOS Network",
        chainId: 1122334455,
        shortName: "ipos",
        networkId: 1122334455,
        nativeCurrency: {
            name: "IPOS Network Ether",
            symbol: "IPOS",
            decimals: 18,
        },
        rpc: ["https://rpc.iposlab.com", "https://rpc2.iposlab.com"],
        faucets: [],
        infoURL: "https://iposlab.com",
    },
    {
        name: "Aurora MainNet",
        chainId: 1313161554,
        shortName: "aurora",
        networkId: 1313161554,
        nativeCurrency: { name: "Ether", symbol: "aETH", decimals: 18 },
        rpc: ["https://mainnet.aurora.dev"],
        faucets: [],
        infoURL: "https://aurora.dev",
    },
    {
        name: "Aurora TestNet",
        chainId: 1313161555,
        shortName: "aurora-testnet",
        networkId: 1313161555,
        nativeCurrency: { name: "Ether", symbol: "aETH", decimals: 18 },
        rpc: ["https://testnet.aurora.dev/"],
        faucets: [],
        infoURL: "https://aurora.dev",
    },
    {
        name: "Aurora BetaNet",
        chainId: 1313161556,
        shortName: "aurora-betanet",
        networkId: 1313161556,
        nativeCurrency: { name: "Ether", symbol: "aETH", decimals: 18 },
        rpc: ["https://betanet.aurora.dev/"],
        faucets: [],
        infoURL: "https://aurora.dev",
    },
    {
        name: "Harmony Mainnet Shard 0",
        chainId: 1666600000,
        shortName: "hmy-s0",
        networkId: 1666600000,
        nativeCurrency: { name: "ONE", symbol: "ONE", decimals: 18 },
        rpc: ["https://api.harmony.one"],
        faucets: ["https://free-online-app.com/faucet-for-eth-evm-chains/"],
        infoURL: "https://www.harmony.one/",
    },
    {
        name: "Harmony Mainnet Shard 1",
        chainId: 1666600001,
        shortName: "hmy-s1",
        networkId: 1666600001,
        nativeCurrency: { name: "ONE", symbol: "ONE", decimals: 18 },
        rpc: ["https://s1.api.harmony.one"],
        faucets: [],
        infoURL: "https://www.harmony.one/",
    },
    {
        name: "Harmony Mainnet Shard 2",
        chainId: 1666600002,
        shortName: "hmy-s2",
        networkId: 1666600002,
        nativeCurrency: { name: "ONE", symbol: "ONE", decimals: 18 },
        rpc: ["https://s2.api.harmony.one"],
        faucets: [],
        infoURL: "https://www.harmony.one/",
    },
    {
        name: "Harmony Mainnet Shard 3",
        chainId: 1666600003,
        shortName: "hmy-s3",
        networkId: 1666600003,
        nativeCurrency: { name: "ONE", symbol: "ONE", decimals: 18 },
        rpc: ["https://s3.api.harmony.one"],
        faucets: [],
        infoURL: "https://www.harmony.one/",
    },
    {
        name: "Harmony Testnet Shard 0",
        chainId: 1666700000,
        shortName: "hmy-b-s0",
        networkId: 1666700000,
        nativeCurrency: { name: "ONE", symbol: "ONE", decimals: 18 },
        rpc: ["https://api.s0.b.hmny.io"],
        faucets: ["https://faucet.pops.one"],
        infoURL: "https://www.harmony.one/",
    },
    {
        name: "Harmony Testnet Shard 1",
        chainId: 1666700001,
        shortName: "hmy-b-s1",
        networkId: 1666700001,
        nativeCurrency: { name: "ONE", symbol: "ONE", decimals: 18 },
        rpc: ["https://api.s1.b.hmny.io"],
        faucets: [],
        infoURL: "https://www.harmony.one/",
    },
    {
        name: "Harmony Testnet Shard 2",
        chainId: 1666700002,
        shortName: "hmy-b-s2",
        networkId: 1666700002,
        nativeCurrency: { name: "ONE", symbol: "ONE", decimals: 18 },
        rpc: ["https://api.s2.b.hmny.io"],
        faucets: [],
        infoURL: "https://www.harmony.one/",
    },
    {
        name: "Harmony Testnet Shard 3",
        chainId: 1666700003,
        shortName: "hmy-b-s3",
        networkId: 1666700003,
        nativeCurrency: { name: "ONE", symbol: "ONE", decimals: 18 },
        rpc: ["https://api.s3.b.hmny.io"],
        faucets: [],
        infoURL: "https://www.harmony.one/",
    },
    {
        name: "Pirl",
        chainId: 3125659152,
        shortName: "pirl",
        networkId: 3125659152,
        nativeCurrency: { name: "Pirl Ether", symbol: "PIRL", decimals: 18 },
        rpc: ["https://wallrpc.pirl.io"],
        faucets: [],
        infoURL: "https://pirl.io",
    },
    {
        name: "OneLedger Testnet Frankenstein",
        chainId: 4216137055,
        shortName: "frankenstein",
        networkId: 4216137055,
        nativeCurrency: { name: "OLT", symbol: "OLT", decimals: 18 },
        rpc: ["https://frankenstein-rpc.oneledger.network"],
        faucets: ["https://frankenstein-faucet.oneledger.network"],
        infoURL: "https://oneledger.io",
    },
    {
        name: "Palm Testnet",
        chainId: 11297108099,
        shortName: "tpalm",
        networkId: 11297108099,
        nativeCurrency: { name: "PALM", symbol: "PALM", decimals: 18 },
        rpc: [],
        faucets: [],
        infoURL: "https://palm.io",
    },
    {
        name: "Palm Mainnet",
        chainId: 11297108109,
        shortName: "palm",
        networkId: 11297108109,
        nativeCurrency: { name: "PALM", symbol: "PALM", decimals: 18 },
        rpc: [],
        faucets: [],
        infoURL: "https://palm.io",
    },
];

var currencyFormatter = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});
var decimalFormatter = new Intl.NumberFormat("en-us", {
    style: "decimal",
    minimumSignificantDigits: 1,
    maximumSignificantDigits: 4,
});
var toUsd = function (value) { return currencyFormatter.format(value); };
var limitDecimals = function (value) { return decimalFormatter.format(value); };
var tokenValue = function (value, decimals) {
    return value / Math.pow(10, decimals);
};
var tokenValueTxt = function (value, decimals, symbol) {
    if (typeof value === "number") {
        return "".concat(limitDecimals(tokenValue(value, decimals)), " ").concat(symbol);
    }
    // TODO: handle as BN
    return "".concat(limitDecimals(tokenValue(Number(value), decimals)), " ").concat(symbol);
};
var decimalToHexString = function (decimal) {
    return "0x" + decimal.toString(16);
};

var getSupportedChains = function () {
    return chains
        .filter(function (chain) {
        return supportedChains.includes(decimalToHexString(chain.chainId));
    })
        .map(function (chainData) { return (__assign(__assign({}, chainData), { chainId: decimalToHexString(chainData.chainId), blockExplorerUrl: blockExplorers[decimalToHexString(chainData.chainId)] })); });
};
var getChain = function (chainId) {
    return getSupportedChains().find(function (chain) { return chain.chainId === chainId; });
};

var MoralisContext = createContext(null);

var ReactMoralisError = /** @class */ (function (_super) {
    __extends(ReactMoralisError, _super);
    function ReactMoralisError(message) {
        var _this = _super.call(this, "[react-moralis]: ".concat(message)) || this;
        _this.name = "ReactMoralisError";
        _this.message = message;
        return _this;
    }
    ReactMoralisError.isReactMoraliserrpr = true;
    return ReactMoralisError;
}(Error));
var NoMoralisContextProviderError = /** @class */ (function (_super) {
    __extends(NoMoralisContextProviderError, _super);
    function NoMoralisContextProviderError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "NoMoralisContextProviderError";
        return _this;
    }
    return NoMoralisContextProviderError;
}(ReactMoralisError));
var NotAuthenticatedError = /** @class */ (function (_super) {
    __extends(NotAuthenticatedError, _super);
    function NotAuthenticatedError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "NotAuthenticatedError";
        return _this;
    }
    return NotAuthenticatedError;
}(ReactMoralisError));
var ValidationError = /** @class */ (function (_super) {
    __extends(ValidationError, _super);
    function ValidationError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "ValidationError";
        return _this;
    }
    return ValidationError;
}(ReactMoralisError));

var useMoralis = function () {
    var moralisContext = useContext(MoralisContext);
    if (!moralisContext) {
        throw new NoMoralisContextProviderError("Make sure to only call useMoralis within a  <MoralisProvider>");
    }
    return moralisContext;
};

var useChain = function () {
    var _a = useMoralis(), Moralis = _a.Moralis, chainId = _a.chainId, account = _a.account, network = _a.network, provider = _a.provider, connector = _a.connector, connectorType = _a.connectorType;
    var switchNetwork = function (providedChainId) { return __awaiter(void 0, void 0, void 0, function () {
        var error_1, chainData, chainId_1, name_1, nativeCurrency, rpc, blockExplorerUrl;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 6]);
                    return [4 /*yield*/, Moralis.switchNetwork(providedChainId)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 2:
                    error_1 = _a.sent();
                    if (!(error_1.code === 4902)) return [3 /*break*/, 4];
                    chainData = getChain(providedChainId);
                    if (!chainData) {
                        throw new Error("Chain ".concat(providedChainId, " not supported or is not specified"));
                    }
                    chainId_1 = chainData.chainId, name_1 = chainData.name, nativeCurrency = chainData.nativeCurrency, rpc = chainData.rpc, blockExplorerUrl = chainData.blockExplorerUrl;
                    return [4 /*yield*/, Moralis.addNetwork(chainId_1, name_1, nativeCurrency.name, nativeCurrency.symbol, rpc[0], blockExplorerUrl !== null && blockExplorerUrl !== void 0 ? blockExplorerUrl : null)];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4: throw error_1;
                case 5: return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var chain = useMemo(function () {
        if (!chainId) {
            return null;
        }
        return getChain(chainId);
    }, [chainId]);
    return {
        switchNetwork: switchNetwork,
        chainId: chainId,
        chain: chain,
        account: account,
        network: network,
        provider: provider,
        connector: connector,
        connectorType: connectorType,
    };
};

// do not edit .js files directly - edit src/index.jst



var react = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        continue;
      }

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};

function n(n){for(var t=arguments.length,r=Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];if("production"!==process.env.NODE_ENV){var i=Y[n],o=i?"function"==typeof i?i.apply(null,r):i:"unknown error nr: "+n;throw Error("[Immer] "+o)}throw Error("[Immer] minified error nr: "+n+(r.length?" "+r.map((function(n){return "'"+n+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function t(n){return !!n&&!!n[Q]}function r(n){return !!n&&(function(n){if(!n||"object"!=typeof n)return !1;var t=Object.getPrototypeOf(n);if(null===t)return !0;var r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===Z}(n)||Array.isArray(n)||!!n[L]||!!n.constructor[L]||s(n)||v(n))}function i$1(n,t,r){void 0===r&&(r=!1),0===o(n)?(r?Object.keys:nn)(n).forEach((function(e){r&&"symbol"==typeof e||t(e,n[e],n);})):n.forEach((function(r,e){return t(e,r,n)}));}function o(n){var t=n[Q];return t?t.i>3?t.i-4:t.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,t){return 2===o(n)?n.has(t):Object.prototype.hasOwnProperty.call(n,t)}function a(n,t){return 2===o(n)?n.get(t):n[t]}function f(n,t,r){var e=o(n);2===e?n.set(t,r):3===e?(n.delete(t),n.add(r)):n[t]=r;}function c(n,t){return n===t?0!==n||1/n==1/t:n!=n&&t!=t}function s(n){return X&&n instanceof Map}function v(n){return q&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var t=tn(n);delete t[Q];for(var r=nn(t),e=0;e<r.length;e++){var i=r[e],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]});}return Object.create(Object.getPrototypeOf(n),t)}function d(n,e){return void 0===e&&(e=!1),y(n)||t(n)||!r(n)?n:(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i$1(n,(function(n,t){return d(t,!0)}),!0),n)}function h(){n(2);}function y(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function b(t){var r=rn[t];return r||n(18,t),r}function _(){return "production"===process.env.NODE_ENV||U||n(0),U}function j(n,t){t&&(b("Patches"),n.u=[],n.s=[],n.v=t);}function O(n){g(n),n.p.forEach(S),n.p=null;}function g(n){n===U&&(U=n.l);}function w(n){return U={p:[],l:U,h:n,m:!0,_:0}}function S(n){var t=n[Q];0===t.i||1===t.i?t.j():t.O=!0;}function P(t,e){e._=e.p.length;var i=e.p[0],o=void 0!==t&&t!==i;return e.h.g||b("ES5").S(e,t,o),o?(i[Q].P&&(O(e),n(4)),r(t)&&(t=M(e,t),e.l||x(e,t)),e.u&&b("Patches").M(i[Q],t,e.u,e.s)):t=M(e,i,[]),O(e),e.u&&e.v(e.u,e.s),t!==H?t:void 0}function M(n,t,r){if(y(t))return t;var e=t[Q];if(!e)return i$1(t,(function(i,o){return A(n,e,t,i,o,r)}),!0),t;if(e.A!==n)return t;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o;i$1(3===e.i?new Set(o):o,(function(t,i){return A(n,e,o,t,i,r)})),x(n,o,!1),r&&n.u&&b("Patches").R(e,r,n.u,n.s);}return e.o}function A(e,i,o,a,c,s){if("production"!==process.env.NODE_ENV&&c===o&&n(5),t(c)){var v=M(e,c,s&&i&&3!==i.i&&!u(i.D,a)?s.concat(a):void 0);if(f(o,a,v),!t(v))return;e.m=!1;}if(r(c)&&!y(c)){if(!e.h.F&&e._<1)return;M(e,c),i&&i.A.l||x(e,c);}}function x(n,t,r){void 0===r&&(r=!1),n.h.F&&n.m&&d(t,r);}function z(n,t){var r=n[Q];return (r?p(r):n)[t]}function I(n,t){if(t in n)for(var r=Object.getPrototypeOf(n);r;){var e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=Object.getPrototypeOf(r);}}function k(n){n.P||(n.P=!0,n.l&&k(n.l));}function E(n){n.o||(n.o=l(n.t));}function R(n,t,r){var e=s(t)?b("MapSet").N(t,r):v(t)?b("MapSet").T(t,r):n.g?function(n,t){var r=Array.isArray(n),e={i:r?1:0,A:t?t.A:_(),P:!1,I:!1,D:{},l:t,t:n,k:null,o:null,j:null,C:!1},i=e,o=en;r&&(i=[e],o=on);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(t,r):b("ES5").J(t,r);return (r?r.A:_()).p.push(e),e}function D(e){return t(e)||n(22,e),function n(t){if(!r(t))return t;var e,u=t[Q],c=o(t);if(u){if(!u.P&&(u.i<4||!b("ES5").K(u)))return u.t;u.I=!0,e=F(t,c),u.I=!1;}else e=F(t,c);return i$1(e,(function(t,r){u&&a(u.t,t)===r||f(e,t,n(r));})),3===c?new Set(e):e}(e)}function F(n,t){switch(t){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",Y={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(n){return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(n){return "Cannot apply patch, path doesn't resolve: "+n},16:'Sets cannot have "replace" patches.',17:function(n){return "Unsupported patch operation: "+n},18:function(n){return "The plugin for '"+n+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+n+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(n){return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+n+"'"},22:function(n){return "'current' expects a draft, got: "+n},23:function(n){return "'original' expects a draft, got: "+n},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Z=""+Object.prototype.constructor,nn="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,tn=Object.getOwnPropertyDescriptors||function(n){var t={};return nn(n).forEach((function(r){t[r]=Object.getOwnPropertyDescriptor(n,r);})),t},rn={},en={get:function(n,t){if(t===Q)return n;var e=p(n);if(!u(e,t))return function(n,t,r){var e,i=I(t,r);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,t);var i=e[t];return n.I||!r(i)?i:i===z(n.t,t)?(E(n),n.o[t]=R(n.A.h,i,n)):i},has:function(n,t){return t in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,t,r){var e=I(p(n),t);if(null==e?void 0:e.set)return e.set.call(n.k,r),!0;if(!n.P){var i=z(p(n),t),o=null==i?void 0:i[Q];if(o&&o.t===r)return n.o[t]=r,n.D[t]=!1,!0;if(c(r,i)&&(void 0!==r||u(n.t,t)))return !0;E(n),k(n);}return n.o[t]===r&&"number"!=typeof r&&(void 0!==r||t in n.o)||(n.o[t]=r,n.D[t]=!0,!0)},deleteProperty:function(n,t){return void 0!==z(n.t,t)||t in n.t?(n.D[t]=!1,E(n),k(n)):delete n.D[t],n.o&&delete n.o[t],!0},getOwnPropertyDescriptor:function(n,t){var r=p(n),e=Reflect.getOwnPropertyDescriptor(r,t);return e?{writable:!0,configurable:1!==n.i||"length"!==t,enumerable:e.enumerable,value:r[t]}:e},defineProperty:function(){n(11);},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12);}},on={};i$1(en,(function(n,t){on[n]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)};})),on.deleteProperty=function(t,r){return "production"!==process.env.NODE_ENV&&isNaN(parseInt(r))&&n(13),en.deleteProperty.call(this,t[0],r)},on.set=function(t,r,e){return "production"!==process.env.NODE_ENV&&"length"!==r&&isNaN(parseInt(r))&&n(14),en.set.call(this,t[0],r,e,t[0])};var un=function(){function e(t){var e=this;this.g=B,this.F=!0,this.produce=function(t,i,o){if("function"==typeof t&&"function"!=typeof i){var u=i;i=t;var a=e;return function(n){var t=this;void 0===n&&(n=u);for(var r=arguments.length,e=Array(r>1?r-1:0),o=1;o<r;o++)e[o-1]=arguments[o];return a.produce(n,(function(n){var r;return (r=i).call.apply(r,[t,n].concat(e))}))}}var f;if("function"!=typeof i&&n(6),void 0!==o&&"function"!=typeof o&&n(7),r(t)){var c=w(e),s=R(e,t,void 0),v=!0;try{f=i(s),v=!1;}finally{v?O(c):g(c);}return "undefined"!=typeof Promise&&f instanceof Promise?f.then((function(n){return j(c,o),P(n,c)}),(function(n){throw O(c),n})):(j(c,o),P(f,c))}if(!t||"object"!=typeof t){if((f=i(t))===H)return;return void 0===f&&(f=t),e.F&&d(f,!0),f}n(21,t);},this.produceWithPatches=function(n,t){return "function"==typeof n?function(t){for(var r=arguments.length,i=Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return e.produceWithPatches(t,(function(t){return n.apply(void 0,[t].concat(i))}))}:[e.produce(n,t,(function(n,t){r=n,i=t;})),r,i];var r,i;},"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze);}var i=e.prototype;return i.createDraft=function(e){r(e)||n(8),t(e)&&(e=D(e));var i=w(this),o=R(this,e,void 0);return o[Q].C=!0,g(i),o},i.finishDraft=function(t,r){var e=t&&t[Q];"production"!==process.env.NODE_ENV&&(e&&e.C||n(9),e.I&&n(10));var i=e.A;return j(i,r),P(void 0,i)},i.setAutoFreeze=function(n){this.F=n;},i.setUseProxies=function(t){t&&!B&&n(20),this.g=t;},i.applyPatches=function(n,r){var e;for(e=r.length-1;e>=0;e--){var i=r[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}e>-1&&(r=r.slice(e+1));var o=b("Patches").$;return t(n)?o(n,r):this.produce(n,(function(n){return o(n,r)}))},e}(),an=new un,fn=an.produce;an.produceWithPatches.bind(an);an.setAutoFreeze.bind(an);an.setUseProxies.bind(an);an.applyPatches.bind(an);an.createDraft.bind(an);an.finishDraft.bind(an);var n$1 = fn;

function i(f){var u=useState(function(){return d("function"==typeof f?f():f,!0)}),i=u[1];return [u[0],useCallback(function(t){i("function"==typeof t?n$1(t):d(t));},[])]}

var _useResolveCall = function (call, initialData, params, options, defaultAutoFetch, validate) {
    if (defaultAutoFetch === void 0) { defaultAutoFetch = true; }
    var isInitialized = useMoralis().isInitialized;
    var autoFetch = __assign({
        autoFetch: defaultAutoFetch,
    }, (options !== null && options !== void 0 ? options : {})).autoFetch;
    var _a = useState(false), isFetching = _a[0], setIsFetching = _a[1];
    var _b = useState(null), error = _b[0], setError = _b[1];
    var _c = i(initialData), data = _c[0], setData = _c[1];
    var paramsRef = useRef(params);
    if (!react(paramsRef.current, params)) {
        paramsRef.current = params;
    }
    /**
     * Run the function
     */
    var fetch = useCallback(function (_a) {
        var _b = _a === void 0 ? {} : _a, throwOnError = _b.throwOnError, onComplete = _b.onComplete, onError = _b.onError, onSuccess = _b.onSuccess, fetchParams = _b.params;
        return __awaiter(void 0, void 0, void 0, function () {
            var combinedParams, error_2, results, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        combinedParams = __assign(__assign({}, params), fetchParams);
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, 4, 5]);
                        if (validate) {
                            error_2 = validate(combinedParams);
                            if (error_2) {
                                throw new Error(error_2);
                            }
                        }
                        setIsFetching(true);
                        setError(null);
                        return [4 /*yield*/, call(combinedParams)];
                    case 2:
                        results = _c.sent();
                        setData(results);
                        if (onSuccess) {
                            onSuccess(results);
                        }
                        return [2 /*return*/, results];
                    case 3:
                        error_1 = _c.sent();
                        setData(initialData);
                        setError(error_1);
                        if (throwOnError) {
                            throw error_1;
                        }
                        if (onError) {
                            onError(error_1);
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        setIsFetching(false);
                        if (onComplete) {
                            onComplete();
                        }
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    }, [call, paramsRef.current, validate]);
    var isEmpty = useMemo(function () {
        if (data == null) {
            return true;
        }
        if (Array.isArray(data) && data.length === 0) {
            return true;
        }
        return false;
    }, [data]);
    var isLoading = useMemo(function () {
        return isFetching && isEmpty;
    }, [isEmpty, isFetching]);
    /**
     * Automatically fetch the call function
     */
    useEffect(function () {
        if (!isInitialized || !autoFetch) {
            return;
        }
        fetch();
    }, [fetch, isInitialized]);
    return {
        fetch: fetch,
        isFetching: isFetching,
        isLoading: isLoading,
        error: error,
        data: data,
        setData: setData,
    };
};

var useMoralisCloudFunction = function (name, params, options) {
    var Moralis = useMoralis().Moralis;
    var call = useCallback(function (callParams) {
        return Moralis.Cloud.run(name, callParams);
    }, [name]);
    return _useResolveCall(call, null, params, options);
};

var useMoralisFile = function () {
    var Moralis = useMoralis().Moralis;
    var _a = useState(null), error = _a[0], setError = _a[1];
    var _b = useState(false), isUploading = _b[0], setIsUploading = _b[1];
    var _c = useState(null), moralisFile = _c[0], setMoralisFile = _c[1];
    /**
     * Save the provided file
     */
    var saveFile = useCallback(function (name, file, _a) {
        var _b = _a === void 0 ? {} : _a, type = _b.type, metadata = _b.metadata, tags = _b.tags, saveIPFS = _b.saveIPFS, throwOnError = _b.throwOnError, onComplete = _b.onComplete, onError = _b.onError, onSuccess = _b.onSuccess;
        return __awaiter(void 0, void 0, void 0, function () {
            var moralisFile_1, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 5, 6, 7]);
                        setIsUploading(true);
                        setError(null);
                        moralisFile_1 = new Moralis.File(name, file, type, 
                        //@ts-ignore type is different than documentation (it should accept metadata and tags)
                        metadata, tags);
                        if (!saveIPFS) return [3 /*break*/, 2];
                        return [4 /*yield*/, moralisFile_1.saveIPFS()];
                    case 1:
                        _c.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, moralisFile_1.save()];
                    case 3:
                        _c.sent();
                        _c.label = 4;
                    case 4:
                        setMoralisFile(moralisFile_1);
                        if (onSuccess) {
                            onSuccess(moralisFile_1);
                        }
                        return [2 /*return*/, moralisFile_1];
                    case 5:
                        error_1 = _c.sent();
                        setError(error_1);
                        if (throwOnError) {
                            throw error_1;
                        }
                        if (onError) {
                            onError(error_1);
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        setIsUploading(false);
                        if (onComplete) {
                            onComplete();
                        }
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    }, []);
    return {
        error: error,
        saveFile: saveFile,
        isUploading: isUploading,
        moralisFile: moralisFile,
    };
};

/**
 * A hook for making/saving new Moralis Objects
 */
var useNewMoralisObject = function (objectClassName) {
    var Moralis = useMoralis().Moralis;
    var _a = useState(false), isSaving = _a[0], setIsSaving = _a[1];
    var _b = useState(null), error = _b[0], setError = _b[1];
    var _c = useState(null), object = _c[0], setObject = _c[1];
    /**
     * Save function to save data to the object
     */
    var save = useCallback(function (data, _a) {
        if (data === void 0) { data = {}; }
        var _b = _a === void 0 ? {} : _a, cascadeSave = _b.cascadeSave, throwOnError = _b.throwOnError, context = _b.context, onSuccess = _b.onSuccess, onComplete = _b.onComplete, onError = _b.onError;
        return __awaiter(void 0, void 0, void 0, function () {
            var Object_1, object_1, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        setIsSaving(true);
                        setError(null);
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, 4, 5]);
                        Object_1 = Moralis.Object.extend(objectClassName);
                        object_1 = new Object_1();
                        // TODO: support saving of nested objects more easy?
                        // @ts-ignore (context does not exist in the save options type)
                        return [4 /*yield*/, object_1.save(data, { cascadeSave: cascadeSave, context: context })];
                    case 2:
                        // TODO: support saving of nested objects more easy?
                        // @ts-ignore (context does not exist in the save options type)
                        _c.sent();
                        setObject(object_1);
                        if (onSuccess) {
                            onSuccess(object_1);
                        }
                        return [2 /*return*/, object_1];
                    case 3:
                        error_1 = _c.sent();
                        setError(error_1);
                        if (throwOnError) {
                            throw error_1;
                        }
                        if (onError) {
                            onError(error_1);
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        setIsSaving(false);
                        if (onComplete) {
                            onComplete();
                        }
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    }, [objectClassName]);
    return {
        isSaving: isSaving,
        object: object,
        error: error,
        save: save,
    };
};

var setMultipleDataToUser = function (data, user) {
    // We use the specified functions to set password, email, and username
    var password = data.password, email = data.email, username = data.username, restData = __rest(data, ["password", "email", "username"]);
    if (password !== undefined) {
        if (typeof password !== "string") {
            throw new ValidationError("password can only be a string type");
        }
        user.setPassword(password);
    }
    if (email !== undefined) {
        if (typeof email !== "string") {
            throw new ValidationError("email can only be a string type");
        }
        user.setEmail(email);
    }
    if (username !== undefined) {
        if (typeof username !== "string") {
            throw new ValidationError("username can only be a string type");
        }
        user.setUsername(username);
    }
    Object.entries(restData)
        .filter(function (_a) {
        var value = _a[1];
        return value !== undefined;
    })
        .forEach(function (_a) {
        var key = _a[0], value = _a[1];
        user.set(key, value);
    });
};

var AuthenticationState;
(function (AuthenticationState) {
    AuthenticationState["UNDEFINED"] = "undefined";
    AuthenticationState["UNAUTHENTICATED"] = "unauthenticated";
    AuthenticationState["AUTHENTICATED"] = "authenticated";
    AuthenticationState["AUTHENTICATING"] = "authenticating";
    AuthenticationState["LOGGING_OUT"] = "logging_out";
    AuthenticationState["ERROR"] = "error";
})(AuthenticationState || (AuthenticationState = {}));
var initialAuth = {
    state: AuthenticationState.UNDEFINED,
    error: null,
};
var defaultUseMoralisAuthOptions = function (moralis) { return ({
    // We will override this right away, we just want to
    setUser: function () { },
    Moralis: moralis,
    environment: "browser",
}); };
/**
 * Hook that handles all authentication logic and returns the correct auth state
 * and its functions
 */
var _useMoralisAuth = function (options) {
    var _a = __assign(__assign({}, defaultUseMoralisAuthOptions(options.Moralis)), options), onAccountChanged = _a.onAccountChanged, Moralis = _a.Moralis, environment = _a.environment, _setIsWeb3Enabled = _a._setIsWeb3Enabled, _setIsWeb3EnableLoading = _a._setIsWeb3EnableLoading;
    var setUser = options.setUser;
    var _b = useState(initialAuth), auth = _b[0], setAuth = _b[1];
    var _c = useState(false), hasOnAccountChangeListener = _c[0], setHasOnAccountChangeListener = _c[1];
    /**
     * Authenticates the user by calling the Moralis.authenticate function
     * The auth state will update upon successful/error
     * For direct feedback, a callback can be provided
     */
    var authenticate = useCallback(function (_a) {
        if (_a === void 0) { _a = {}; }
        return __awaiter(void 0, void 0, void 0, function () {
            var user, error_1;
            var onComplete = _a.onComplete, onError = _a.onError, onSuccess = _a.onSuccess, throwOnError = _a.throwOnError, rest = __rest(_a, ["onComplete", "onError", "onSuccess", "throwOnError"]);
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        setAuth({
                            state: AuthenticationState.AUTHENTICATING,
                            error: null,
                        });
                        if (_setIsWeb3EnableLoading) {
                            _setIsWeb3EnableLoading(true);
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, Moralis.authenticate(rest)];
                    case 2:
                        user = _b.sent();
                        setUser(user);
                        if (_setIsWeb3Enabled) {
                            _setIsWeb3Enabled(true);
                        }
                        setAuth({
                            state: AuthenticationState.AUTHENTICATED,
                            error: null,
                        });
                        if (onSuccess) {
                            onSuccess(user);
                        }
                        return [2 /*return*/, user];
                    case 3:
                        error_1 = _b.sent();
                        setAuth({ state: AuthenticationState.ERROR, error: error_1 });
                        setUser(null);
                        if (onError) {
                            onError(error_1);
                        }
                        if (throwOnError) {
                            throw error_1;
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        if (_setIsWeb3EnableLoading) {
                            _setIsWeb3EnableLoading(false);
                        }
                        if (onComplete) {
                            onComplete();
                        }
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    }, [_setIsWeb3Enabled, _setIsWeb3EnableLoading]);
    /**
     * signup the user in with provided credentials
     */
    var signup = useCallback(function (username, password, email, otherFields, _a) {
        if (otherFields === void 0) { otherFields = {}; }
        var _b = _a === void 0 ? {} : _a, throwOnError = _b.throwOnError, onSuccess = _b.onSuccess, onError = _b.onError, onComplete = _b.onComplete;
        return __awaiter(void 0, void 0, void 0, function () {
            var newUser, user, error_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        setAuth({
                            state: AuthenticationState.AUTHENTICATING,
                            error: null,
                        });
                        newUser = new Moralis.User();
                        setMultipleDataToUser(__assign({ username: username, password: password, email: email }, otherFields), newUser);
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, newUser.signUp()];
                    case 2:
                        user = _c.sent();
                        setAuth({
                            state: AuthenticationState.AUTHENTICATED,
                            error: null,
                        });
                        setUser(user);
                        if (onSuccess) {
                            onSuccess(user);
                        }
                        return [2 /*return*/, user];
                    case 3:
                        error_2 = _c.sent();
                        setAuth({ state: AuthenticationState.ERROR, error: error_2 });
                        if (throwOnError) {
                            throw error_2;
                        }
                        if (onError) {
                            onError(error_2);
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        if (onComplete) {
                            onComplete();
                        }
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    }, []);
    /**
     * Logs the user in with provided credentials
     */
    var login = useCallback(function (username, password, _a) {
        var _b = _a === void 0 ? {} : _a, usePost = _b.usePost, throwOnError = _b.throwOnError, onError = _b.onError, onSuccess = _b.onSuccess, onComplete = _b.onComplete;
        return __awaiter(void 0, void 0, void 0, function () {
            var user, error_3;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        setAuth({
                            state: AuthenticationState.AUTHENTICATING,
                            error: null,
                        });
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, Moralis.User.logIn(username, password, {
                                // @ts-ignore: missing types
                                usePost: usePost,
                            })];
                    case 2:
                        user = _c.sent();
                        setAuth({
                            state: AuthenticationState.AUTHENTICATED,
                            error: null,
                        });
                        setUser(user);
                        if (onSuccess) {
                            onSuccess(user);
                        }
                        return [2 /*return*/, user];
                    case 3:
                        error_3 = _c.sent();
                        setAuth({ state: AuthenticationState.ERROR, error: error_3 });
                        if (throwOnError) {
                            throw error_3;
                        }
                        if (onError) {
                            onError(error_3);
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        if (onComplete) {
                            onComplete();
                        }
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    }, []);
    /**
     * Logs the user out via Moralis.User.logOut and handles the internal state
     */
    var logout = useCallback(function (_a) {
        var _b = _a === void 0 ? {} : _a, throwOnError = _b.throwOnError, onError = _b.onError, onSuccess = _b.onSuccess, onComplete = _b.onComplete;
        return __awaiter(void 0, void 0, void 0, function () {
            var error_4;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        setAuth({
                            state: AuthenticationState.AUTHENTICATING,
                            error: null,
                        });
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, Moralis.User.logOut()];
                    case 2:
                        _d.sent();
                        setAuth({ state: AuthenticationState.UNAUTHENTICATED, error: null });
                        setUser(null);
                        if (onSuccess) {
                            onSuccess();
                        }
                        return [3 /*break*/, 5];
                    case 3:
                        error_4 = _d.sent();
                        setAuth({ state: AuthenticationState.ERROR, error: error_4 });
                        // Set user to the currentUser (we don't know if the logout was successfull)
                        setUser((_c = Moralis.User.current()) !== null && _c !== void 0 ? _c : null);
                        if (throwOnError) {
                            throw error_4;
                        }
                        if (onError) {
                            onError(error_4);
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        if (onComplete) {
                            onComplete();
                        }
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    }, []);
    /**
     * Update the auth state if the user already ahs authenticated before
     */
    useEffect(function () {
        try {
            var currentUser = Moralis.User.current();
            if (currentUser) {
                setAuth({
                    state: AuthenticationState.AUTHENTICATED,
                    error: null,
                });
                setUser(currentUser);
            }
            else {
                throw new Error("Let it catch");
            }
        }
        catch (error) {
            setAuth({
                state: AuthenticationState.UNAUTHENTICATED,
                error: null,
            });
            setUser(null);
        }
    }, []);
    /**
     * Assign web3 Listener to handle change of accounts
     *
     * Important!: these eventListeners cannot be cleaned up, so don't reassign it
     * See https://github.com/MetaMask/metamask-extension/issues/10873
     *
     * The drawback of this is that we cannot update these function via a React state
     * // TODO: find a way to work around this
     */
    useEffect(function () {
        if (hasOnAccountChangeListener) {
            return;
        }
        if (environment !== "browser") {
            // Currently only support browser environment
            return;
        }
        if (!window) {
            // eslint-disable-next-line no-console
            console.warn("No window object found");
            return;
        }
        try {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var ethereum = window.ethereum;
            if (!ethereum) {
                // eslint-disable-next-line no-console
                console.warn("No window.ethereum found");
                return;
            }
            ethereum.on("accountsChanged", function (accounts) { return __awaiter(void 0, void 0, void 0, function () {
                var account;
                return __generator(this, function (_a) {
                    account = accounts[0];
                    if (onAccountChanged) {
                        onAccountChanged(account);
                    }
                    return [2 /*return*/];
                });
            }); });
        }
        catch (error) {
            // eslint-disable-next-line no-console
            console.warn(error.message);
        }
        setHasOnAccountChangeListener(true);
    }, [hasOnAccountChangeListener]);
    var isAuthenticated = auth.state === AuthenticationState.AUTHENTICATED;
    var isUnauthenticated = auth.state === AuthenticationState.UNAUTHENTICATED;
    var isAuthenticating = auth.state === AuthenticationState.AUTHENTICATING;
    var hasAuthError = auth.state === AuthenticationState.ERROR;
    var isLoggingOut = auth.state === AuthenticationState.LOGGING_OUT;
    var isAuthUndefined = auth.state === AuthenticationState.UNDEFINED;
    return {
        auth: auth,
        authenticate: authenticate,
        signup: signup,
        login: login,
        logout: logout,
        authError: auth.error,
        isAuthenticated: isAuthenticated,
        isUnauthenticated: isUnauthenticated,
        isAuthenticating: isAuthenticating,
        hasAuthError: hasAuthError,
        isLoggingOut: isLoggingOut,
        isAuthUndefined: isAuthUndefined,
    };
};

/**
 * Hook that handles the initialization of Moralis
 */
var _useMoralisInit = function (_a) {
    var appId = _a.appId, serverUrl = _a.serverUrl, jsKey = _a.jsKey, dangerouslyUseOfMasterKey = _a.dangerouslyUseOfMasterKey, plugins = _a.plugins, _b = _a.environment, environment = _b === void 0 ? "browser" : _b, _c = _a.getMoralis, getMoralis = _c === void 0 ? function () { return MoralisImport; } : _c, initializeOnMount = _a.initializeOnMount, setAppId = _a.setAppId, setServerUrl = _a.setServerUrl;
    var _d = useState(false), isInitialized = _d[0], setIsInitialized = _d[1];
    var _e = useState(false), isInitializing = _e[0], setIsInitializing = _e[1];
    var _f = useState(false), shouldInitialize = _f[0], setShouldInitialize = _f[1];
    var Moralis = useRef(getMoralis());
    var _initialize = useCallback(function (_a) {
        var serverUrl = _a.serverUrl, appId = _a.appId, javascriptKey = _a.javascriptKey, masterKey = _a.masterKey, plugins = _a.plugins;
        return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (isInitialized) {
                            return [2 /*return*/];
                        }
                        if (!appId) {
                            throw new ReactMoralisError("Provide a \"appId\" provided to <MoralisProvider>");
                        }
                        if (!serverUrl) {
                            throw new ReactMoralisError("Provide a \"serverUrl\" provided to <MoralisProvider>");
                        }
                        setIsInitializing(true);
                        return [4 /*yield*/, Moralis.current.start({
                                serverUrl: serverUrl,
                                appId: appId,
                                javascriptKey: javascriptKey,
                                masterKey: masterKey,
                                plugins: plugins,
                            })];
                    case 1:
                        _b.sent();
                        setIsInitializing(false);
                        setIsInitialized(true);
                        return [2 /*return*/];
                }
            });
        });
    }, []);
    useEffect(function () {
        if (isInitialized) {
            return;
        }
        if (!initializeOnMount && !shouldInitialize) {
            return;
        }
        _initialize({
            appId: appId,
            serverUrl: serverUrl,
            masterKey: dangerouslyUseOfMasterKey,
            javascriptKey: jsKey,
            plugins: plugins,
        });
        setIsInitialized(true);
    }, [
        appId,
        serverUrl,
        dangerouslyUseOfMasterKey,
        jsKey,
        plugins,
        isInitialized,
        initializeOnMount,
        shouldInitialize,
    ]);
    var initialize = useCallback(function (_a) {
        var _b = _a === void 0 ? {} : _a, newAppId = _b.appId, newServerUrl = _b.serverUrl;
        if (newAppId) {
            setAppId(newAppId);
        }
        if (newServerUrl) {
            setServerUrl(newServerUrl);
        }
        if (!newAppId && !appId) {
            throw new Error("No appId is provided. Please provide an appId to the Moralis.Provider or as argument in initialize()");
        }
        if (!newServerUrl && !serverUrl) {
            throw new Error("No serverUrl is provided. Please provide an serverUrl to the Moralis.Provider or as argument in initialize()");
        }
        setShouldInitialize(true);
    }, [appId, serverUrl]);
    return {
        isInitialized: isInitialized,
        isInitializing: isInitializing,
        initialize: initialize,
        Moralis: Moralis.current,
        environment: environment,
    };
};

var _useMoralisUser = function (Moralis) {
    var _a = useState(null), user = _a[0], setUser = _a[1];
    var _b = useState(false), isUpdating = _b[0], setIsUpdating = _b[1];
    var _c = useState(null), error = _c[0], setError = _c[1];
    /**
     * Function to change the userData, any changes made via this function will sync to Moralis AND the local state
     */
    var setUserData = useCallback(function (data, _a) {
        var _b = _a === void 0 ? {} : _a, throwOnError = _b.throwOnError, onComplete = _b.onComplete, onError = _b.onError, onSuccess = _b.onSuccess;
        return __awaiter(void 0, void 0, void 0, function () {
            var userHasLocallyUpdated, currentUser, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!user) {
                            throw new NotAuthenticatedError("User needs to be authenticated before setting new data");
                        }
                        setIsUpdating(true);
                        setError(null);
                        userHasLocallyUpdated = false;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, 4, 5]);
                        setMultipleDataToUser(data, user);
                        userHasLocallyUpdated = true;
                        return [4 /*yield*/, user.save()];
                    case 2:
                        _c.sent();
                        currentUser = Moralis.User.current();
                        if (!currentUser) {
                            throw new ReactMoralisError("No user data found after save");
                        }
                        setUser(currentUser);
                        if (onSuccess) {
                            onSuccess(user);
                        }
                        return [2 /*return*/, user];
                    case 3:
                        error_1 = _c.sent();
                        if (userHasLocallyUpdated) {
                            user.revert();
                        }
                        setError(error_1);
                        if (throwOnError) {
                            throw error_1;
                        }
                        if (onError) {
                            onError(error_1);
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        setIsUpdating(false);
                        if (onComplete) {
                            onComplete();
                        }
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    }, [user]);
    /**
     * Function to refetch the user and update the user object
     */
    var refetchUserData = useCallback(function (_a) {
        var _b = _a === void 0 ? {} : _a, throwOnError = _b.throwOnError, onComplete = _b.onComplete, onError = _b.onError, onSuccess = _b.onSuccess;
        return __awaiter(void 0, void 0, void 0, function () {
            var newUserData, error_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!user) {
                            throw new NotAuthenticatedError("User needs to be authenticated before refetching");
                        }
                        setIsUpdating(true);
                        setError(null);
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, user.fetch()];
                    case 2:
                        newUserData = _c.sent();
                        if (!newUserData) {
                            throw new ReactMoralisError("No user data found after refetch");
                        }
                        setUser(newUserData);
                        if (onSuccess) {
                            onSuccess(newUserData);
                        }
                        return [2 /*return*/, newUserData];
                    case 3:
                        error_2 = _c.sent();
                        setError(error_2);
                        if (throwOnError) {
                            throw error_2;
                        }
                        if (onError) {
                            onError(error_2);
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        setIsUpdating(false);
                        if (onComplete) {
                            onComplete();
                        }
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    }, [user]);
    return {
        setUserData: setUserData,
        setUser: setUser,
        refetchUserData: refetchUserData,
        user: user,
        _setUser: setUser,
        isUserUpdating: isUpdating,
        userError: error,
    };
};

/**
 * Handles enabling of web3 and providing it, as soon as the user is authenticated
 */
var _useMoralisWeb3 = function (Moralis) {
    var _a = useState(false), isWeb3Enabled = _a[0], _setIsWeb3Enabled = _a[1];
    var _b = useState(null), web3EnableError = _b[0], setEnableWeb3Error = _b[1];
    var _c = useState(false), isWeb3EnableLoading = _c[0], _setIsWeb3EnableLoading = _c[1];
    var _d = useState(null), web3 = _d[0], setWeb3 = _d[1];
    var _e = useState(null), chainId = _e[0], setChainId = _e[1];
    var _f = useState(null), account = _f[0], setAccount = _f[1];
    var _g = useState(null), connector = _g[0], setConnector = _g[1];
    var _h = useState(null), provider = _h[0], setProvider = _h[1];
    useEffect(function () {
        var handleConnect = function (_a) {
            var web3 = _a.web3, chainId = _a.chainId, account = _a.account, connector = _a.connector, provider = _a.provider;
            setWeb3(web3);
            setChainId(chainId);
            setAccount(account);
            setConnector(connector);
            setProvider(provider);
        };
        var handleDisconnect = function () {
            setWeb3(null);
            _setIsWeb3Enabled(false);
            setChainId(null);
            setAccount(null);
            setConnector(null);
            setProvider(null);
        };
        var handleChainChanged = function (chainId) {
            setChainId(chainId);
            setWeb3(Moralis.web3);
        };
        var unsubChainChanged = Moralis.onChainChanged(handleChainChanged);
        var unsubAccountChanged = Moralis.onAccountChanged(setAccount);
        var unsubEnable = Moralis.onWeb3Enabled(handleConnect);
        var unsubDeactivate = Moralis.onWeb3Deactivated(handleDisconnect);
        var unsubDisconnect = Moralis.onDisconnect(handleDisconnect);
        return function () {
            unsubChainChanged();
            unsubAccountChanged();
            unsubEnable();
            unsubDeactivate();
            unsubDisconnect();
        };
    }, [Moralis]);
    /**
     * Enable web3 with the browsers web3Provider (only available when a user has been authenticated)
     */
    var enableWeb3 = useCallback(function (_a) {
        if (_a === void 0) { _a = {}; }
        return __awaiter(void 0, void 0, void 0, function () {
            var currentWeb3, error_1;
            var throwOnError = _a.throwOnError, onComplete = _a.onComplete, onError = _a.onError, onSuccess = _a.onSuccess, rest = __rest(_a, ["throwOnError", "onComplete", "onError", "onSuccess"]);
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _setIsWeb3EnableLoading(true);
                        setEnableWeb3Error(null);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, Moralis.enableWeb3(rest)];
                    case 2:
                        currentWeb3 = _b.sent();
                        _setIsWeb3Enabled(true);
                        if (onSuccess) {
                            onSuccess(currentWeb3);
                        }
                        return [2 /*return*/, currentWeb3];
                    case 3:
                        error_1 = _b.sent();
                        setEnableWeb3Error(error_1);
                        if (throwOnError) {
                            throw error_1;
                        }
                        if (onError) {
                            onError(error_1);
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        _setIsWeb3EnableLoading(false);
                        if (onComplete) {
                            onComplete();
                        }
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    }, []);
    // TODO: resolver errors/loading state
    var deactivateWeb3 = useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Moralis.deactivateWeb3()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); }, []);
    var network = useMemo(function () { var _a; return (_a = connector === null || connector === void 0 ? void 0 : connector.network) !== null && _a !== void 0 ? _a : null; }, [connector]);
    var connectorType = useMemo(function () { var _a; return (_a = connector === null || connector === void 0 ? void 0 : connector.type) !== null && _a !== void 0 ? _a : null; }, [connector]);
    return {
        enableWeb3: enableWeb3,
        web3: web3,
        isWeb3Enabled: isWeb3Enabled,
        web3EnableError: web3EnableError,
        isWeb3EnableLoading: isWeb3EnableLoading,
        _setIsWeb3Enabled: _setIsWeb3Enabled,
        _setIsWeb3EnableLoading: _setIsWeb3EnableLoading,
        chainId: chainId,
        account: account,
        network: network,
        connector: connector,
        connectorType: connectorType,
        deactivateWeb3: deactivateWeb3,
        provider: provider,
    };
};

var MoralisProvider = function (_a) {
    var children = _a.children, _appId = _a.appId, _serverUrl = _a.serverUrl, jsKey = _a.jsKey, dangerouslyUseOfMasterKey = _a.dangerouslyUseOfMasterKey, plugins = _a.plugins, environment = _a.environment, getMoralis = _a.getMoralis, _b = _a.options, _c = _b === void 0 ? {} : _b, onAccountChanged = _c.onAccountChanged, _d = _a.initializeOnMount, initializeOnMount = _d === void 0 ? true : _d;
    var _e = useState(_appId !== null && _appId !== void 0 ? _appId : null), appId = _e[0], setAppId = _e[1];
    var _f = useState(_serverUrl !== null && _serverUrl !== void 0 ? _serverUrl : null), serverUrl = _f[0], setServerUrl = _f[1];
    var moralisInit = _useMoralisInit({
        appId: appId,
        serverUrl: serverUrl,
        jsKey: jsKey,
        dangerouslyUseOfMasterKey: dangerouslyUseOfMasterKey,
        plugins: plugins,
        environment: environment,
        getMoralis: getMoralis,
        initializeOnMount: initializeOnMount,
        setAppId: setAppId,
        setServerUrl: setServerUrl,
    });
    var _g = _useMoralisWeb3(moralisInit.Moralis), _setIsWeb3Enabled = _g._setIsWeb3Enabled, _setIsWeb3EnableLoading = _g._setIsWeb3EnableLoading, moralisWeb3 = __rest(_g, ["_setIsWeb3Enabled", "_setIsWeb3EnableLoading"]);
    var _h = _useMoralisUser(moralisInit.Moralis), setUser = _h.setUser, moralisUser = __rest(_h, ["setUser"]);
    var moralisAuth = _useMoralisAuth({
        onAccountChanged: onAccountChanged,
        setUser: setUser,
        Moralis: moralisInit.Moralis,
        environment: moralisInit.environment,
        _setIsWeb3Enabled: _setIsWeb3Enabled,
        _setIsWeb3EnableLoading: _setIsWeb3EnableLoading,
    });
    return (jsx(MoralisContext.Provider, __assign({ value: __assign(__assign(__assign(__assign(__assign({}, moralisInit), moralisAuth), moralisUser), moralisWeb3), { appId: appId, serverUrl: serverUrl }) }, { children: children }), void 0));
};

/**
 * Wrapper hook for using with queries.
 * It accepts a valid query (string or Moralis.Object),
 * and a mapping to filter the query
 *
 * It will only update when the provided dependencies change
 */
var _useSafeUpdatedQuery = function (nameOrObject, queryMap, dependencies, isInitialized) {
    if (queryMap === void 0) { queryMap = function (q) { return q; }; }
    if (dependencies === void 0) { dependencies = []; }
    var Moralis = useMoralis().Moralis;
    // Cached version of the queruMap to prevent unwantedUpdates
    var currentQueryMap = useMemo(function () {
        return queryMap;
    }, dependencies);
    var currentNameOrObject = useMemo(function () {
        return nameOrObject;
    }, dependencies);
    var query = useMemo(function () {
        var q = new Moralis.Query(
        // Explicit cast to any to prevent ts-error, because Moralis.Query should accept a Moralis.object
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        currentNameOrObject);
        return currentQueryMap(q);
    }, [isInitialized, currentNameOrObject, currentQueryMap]);
    return query;
};

var _useSubscriptionListener = function (_a) {
    var name = _a.name, handler = _a.handler, enable = _a.enable, subscription = _a.subscription;
    var isInitialized = useMoralis().isInitialized;
    /**
     * Assign listeners subscription
     */
    useEffect(function () {
        if (!enable || !isInitialized || !subscription || !handler) {
            return;
        }
        subscription.on(name, handler);
        return function () {
            if (subscription) {
                subscription.off(name, handler);
            }
        };
    }, [isInitialized, handler, enable, name]);
};

var defaultUseSubscriptionQueryOptions = {
    enabled: true,
};
var useMoralisSubscription = function (nameOrObject, queryMap, dependencies, options) {
    var _a, _b, _c, _d, _e, _f;
    if (queryMap === void 0) { queryMap = function (q) { return q; }; }
    if (dependencies === void 0) { dependencies = []; }
    if (options === void 0) { options = {}; }
    var _g = __assign(__assign({}, defaultUseSubscriptionQueryOptions), options), enabled = _g.enabled, onCreate = _g.onCreate, onDelete = _g.onDelete, onEnter = _g.onEnter, onLeave = _g.onLeave, onUpdate = _g.onUpdate;
    var moralisContext = useContext(MoralisContext);
    var isInitialized = (_a = moralisContext === null || moralisContext === void 0 ? void 0 : moralisContext.isInitialized) !== null && _a !== void 0 ? _a : false;
    var subscriptionRef = useRef();
    var _h = useState(false), isReady = _h[0], setIsReady = _h[1];
    var query = _useSafeUpdatedQuery(nameOrObject, queryMap, dependencies, isInitialized);
    /**
     * Subscribe (and cleanup) to this query
     */
    useEffect(function () {
        setIsReady(false);
        if (!enabled || !isInitialized) {
            return;
        }
        query.subscribe().then(function (sub) {
            subscriptionRef.current = sub;
            setIsReady(true);
        });
        return function () {
            if (subscriptionRef.current) {
                subscriptionRef.current.unsubscribe();
            }
        };
    }, [enabled, isInitialized, query]);
    _useSubscriptionListener({
        name: "create",
        handler: onCreate,
        subscription: subscriptionRef.current,
        enable: (_b = (enabled && isReady)) !== null && _b !== void 0 ? _b : false,
    });
    _useSubscriptionListener({
        name: "update",
        handler: onUpdate,
        subscription: subscriptionRef.current,
        enable: (_c = (enabled && isReady)) !== null && _c !== void 0 ? _c : false,
    });
    _useSubscriptionListener({
        name: "enter",
        handler: onEnter,
        subscription: subscriptionRef.current,
        enable: (_d = (enabled && isReady)) !== null && _d !== void 0 ? _d : false,
    });
    _useSubscriptionListener({
        name: "leave",
        handler: onLeave,
        subscription: subscriptionRef.current,
        enable: (_e = (enabled && isReady)) !== null && _e !== void 0 ? _e : false,
    });
    _useSubscriptionListener({
        name: "delete",
        handler: onDelete,
        subscription: subscriptionRef.current,
        enable: (_f = (enabled && isReady)) !== null && _f !== void 0 ? _f : false,
    });
};

var defaultUseMoralisQueryOptions = {
    autoFetch: true,
    live: false,
    onLiveEnter: function (entity, all) { return __spreadArray(__spreadArray([], all, true), [entity], false); },
    onLiveCreate: function (entity, all) { return __spreadArray(__spreadArray([], all, true), [entity], false); },
    onLiveDelete: function (entity, all) { return all.filter(function (e) { return e.id !== entity.id; }); },
    onLiveLeave: function (entity, all) { return all.filter(function (e) { return e.id !== entity.id; }); },
    onLiveUpdate: function (entity, all) {
        return all.map(function (e) { return (e.id === entity.id ? entity : e); });
    },
};
var useMoralisQuery = function (nameOrObject, queryMap, dependencies, options) {
    if (queryMap === void 0) { queryMap = function (q) { return q; }; }
    if (dependencies === void 0) { dependencies = []; }
    if (options === void 0) { options = {}; }
    var isInitialized = useMoralis().isInitialized;
    var _a = __assign(__assign({}, defaultUseMoralisQueryOptions), options), live = _a.live, onLiveCreate = _a.onLiveCreate, onLiveDelete = _a.onLiveDelete, onLiveEnter = _a.onLiveEnter, onLiveLeave = _a.onLiveLeave, onLiveUpdate = _a.onLiveUpdate;
    var query = _useSafeUpdatedQuery(nameOrObject, queryMap, dependencies, isInitialized);
    var call = useCallback(function () { return query.find(); }, [query]);
    var _b = _useResolveCall(call, [], undefined, options), data = _b.data, error = _b.error, fetch = _b.fetch, isFetching = _b.isFetching, isLoading = _b.isLoading, setData = _b.setData;
    var handleOnCreate = useCallback(function (entity) {
        if (onLiveCreate) {
            setData(function (data) { return onLiveCreate(entity, data); });
        }
    }, [onLiveCreate]);
    var handleOnEnter = useCallback(function (entity) {
        if (onLiveEnter) {
            setData(function (data) { return onLiveEnter(entity, data); });
        }
    }, [onLiveEnter]);
    var handleOnUpdate = useCallback(function (entity) {
        if (onLiveUpdate) {
            setData(function (data) { return onLiveUpdate(entity, data); });
        }
    }, [onLiveUpdate]);
    var handleOnDelete = useCallback(function (entity) {
        if (onLiveDelete) {
            setData(function (data) { return onLiveDelete(entity, data); });
        }
    }, [onLiveDelete]);
    var handleOnLeave = useCallback(function (entity) {
        if (onLiveLeave) {
            setData(function (data) { return onLiveLeave(entity, data); });
        }
    }, [onLiveLeave]);
    // Update the data upon updated
    useMoralisSubscription(nameOrObject, queryMap, dependencies, {
        enabled: live,
        onCreate: handleOnCreate,
        onEnter: handleOnEnter,
        onUpdate: handleOnUpdate,
        onDelete: handleOnDelete,
        onLeave: handleOnLeave,
    });
    return { fetch: fetch, isFetching: isFetching, isLoading: isLoading, error: error, data: data };
};

var useMoralisWeb3ApiCall = function (call, params, options) {
    var result = _useResolveCall(call, null, params, options, false);
    return result;
};
var useMoralisWeb3Api = function () {
    var Moralis = useMoralis().Moralis;
    return __assign({ Web3API: Moralis.Web3API }, Moralis.Web3API);
};

var useMoralisSolanaCall = function (call, params, options) {
    var result = _useResolveCall(call, null, params, options, false);
    return result;
};
var useMoralisSolanaApi = function () {
    var Moralis = useMoralis().Moralis;
    return __assign({ SolanaAPI: Moralis.SolanaAPI }, Moralis.SolanaAPI);
};

var useWeb3ExecuteFunction = function (params, options) {
    var Moralis = useMoralis().Moralis;
    var call = useCallback(function (callParams) { return __awaiter(void 0, void 0, void 0, function () {
        var allParams;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    allParams = __assign(__assign({}, params), callParams);
                    return [4 /*yield*/, Moralis.executeFunction(allParams)];
                case 1: 
                //@ts-ignore
                return [2 /*return*/, _a.sent()];
            }
        });
    }); }, []);
    return _useResolveCall(call, null, params, options, false);
};

var useWeb3Contract = function (params) {
    var _a = useWeb3ExecuteFunction(params), data = _a.data, error = _a.error, runContractFunction = _a.fetch, isFetching = _a.isFetching, isLoading = _a.isLoading;
    return { runContractFunction: runContractFunction, data: data, error: error, isFetching: isFetching, isLoading: isLoading };
};

var useWeb3Transfer = function (params, options) {
    var Moralis = useMoralis().Moralis;
    var call = useCallback(function (callParams) { return __awaiter(void 0, void 0, void 0, function () {
        var allParams;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    allParams = __assign(__assign({}, params), callParams);
                    return [4 /*yield*/, Moralis.transfer(allParams)];
                case 1: 
                //@ts-ignore
                return [2 /*return*/, _a.sent()];
            }
        });
    }); }, []);
    return _useResolveCall(call, null, params, options, false);
};

var _useResolvePluginCall = function (plugin, call, initialData, params, options, defaultAutoFetch, providedValidate) {
    if (defaultAutoFetch === void 0) { defaultAutoFetch = true; }
    var _a = useMoralis(), Moralis = _a.Moralis, isInitialized = _a.isInitialized, isInitializing = _a.isInitializing;
    var validate = useCallback(function (params) {
        if (!isInitialized && isInitializing) {
            return "Plugins are not finished initializing";
        }
        if (!isInitialized) {
            return "Moralis has not been initialized, run Moralis.start first";
        }
        if (!(Moralis === null || Moralis === void 0 ? void 0 : Moralis.Plugins) || !(Moralis === null || Moralis === void 0 ? void 0 : Moralis.Plugins[plugin])) {
            return "".concat(plugin, " plugin has not been installed or initialized");
        }
        if (providedValidate) {
            return providedValidate(params);
        }
    }, [plugin, isInitialized, isInitializing, providedValidate]);
    return _useResolveCall(call, initialData, params, options, defaultAutoFetch, validate);
};

var useOneInchTokens = function (_a, options) {
    var _b, _c;
    var _d = _a === void 0 ? {} : _a, chain = _d.chain;
    if (options === void 0) { options = {}; }
    var _e = useMoralis(), Moralis = _e.Moralis, isInitialized = _e.isInitialized;
    var _f = _useResolvePluginCall(Plugin.ONE_INCH, (_c = (_b = Moralis.Plugins) === null || _b === void 0 ? void 0 : _b.oneInch) === null || _c === void 0 ? void 0 : _c.getSupportedTokens, [], { chain: chain !== null && chain !== void 0 ? chain : DEFAULT_API_CHAIN }, options, isInitialized), fetch = _f.fetch, data = _f.data, isFetching = _f.isFetching, isLoading = _f.isLoading, error = _f.error;
    return { getSupportedTokens: fetch, data: data, isFetching: isFetching, isLoading: isLoading, error: error };
};

var useOneInchQuote = function (params, options) {
    var _a, _b, _c, _d;
    if (options === void 0) { options = {}; }
    var Moralis = useMoralis().Moralis;
    var _e = _useResolvePluginCall(Plugin.ONE_INCH, (_b = (_a = Moralis.Plugins) === null || _a === void 0 ? void 0 : _a.oneInch) === null || _b === void 0 ? void 0 : _b.quote, null, ((_c = Object.keys(params)) === null || _c === void 0 ? void 0 : _c.length)
        ? {
            chain: (_d = params.chain) !== null && _d !== void 0 ? _d : DEFAULT_API_CHAIN,
            // The token you want to swap
            fromTokenAddress: params.fromToken.address,
            // The token you want to receive
            toTokenAddress: params.toToken.address,
            amount: Moralis.Units.Token(params.fromAmount, params.fromToken.decimals).toString(),
        }
        : undefined, options, false), fetch = _e.fetch, data = _e.data, isFetching = _e.isFetching, isLoading = _e.isLoading, error = _e.error;
    return { getQuote: fetch, data: data, isFetching: isFetching, isLoading: isLoading, error: error };
};

var useOneInchSwap = function (params, options) {
    var _a, _b;
    if (options === void 0) { options = {}; }
    var _c = useMoralis(), Moralis = _c.Moralis, account = _c.account;
    var doApproveAndSwap = useCallback(function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var hasAllowance;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Moralis.Plugins.oneInch.hasAllowance({
                        chain: params.chain,
                        fromTokenAddress: params.fromTokenAddress,
                        fromAddress: params.fromAddress,
                        amount: params.amount,
                    })];
                case 1:
                    hasAllowance = _a.sent();
                    if (!!hasAllowance) return [3 /*break*/, 3];
                    return [4 /*yield*/, Moralis.Plugins.oneInch.approve({
                            chain: params.chain,
                            tokenAddress: params.fromTokenAddress,
                            fromAddress: params.fromAddress,
                        })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/, Moralis.Plugins.oneInch.swap(params)];
            }
        });
    }); }, []);
    var _d = _useResolvePluginCall(Plugin.ONE_INCH, doApproveAndSwap, null, {
        chain: (_a = params.chain) !== null && _a !== void 0 ? _a : DEFAULT_API_CHAIN,
        fromTokenAddress: params.fromToken.address,
        toTokenAddress: params.toToken.address,
        amount: params.fromAmount,
        fromAddress: account,
        slippage: (_b = params.slippage) !== null && _b !== void 0 ? _b : 1,
    }, options, false, function () {
        return !account ? "No web3 account found, run enableWeb3() first" : null;
    }), fetch = _d.fetch, data = _d.data, isFetching = _d.isFetching, isLoading = _d.isLoading, error = _d.error;
    return { swap: fetch, data: data, isFetching: isFetching, isLoading: isLoading, error: error };
};

var DEFAULT_OPEN_SEA_NETWORK = "mainnet";

var useOpenSeaAsset = function (params, options) {
    var _a, _b, _c;
    if (options === void 0) { options = {}; }
    var Moralis = useMoralis().Moralis;
    var _d = _useResolvePluginCall(Plugin.OPEN_SEA, (_b = (_a = Moralis.Plugins) === null || _a === void 0 ? void 0 : _a.opensea) === null || _b === void 0 ? void 0 : _b.getAsset, null, {
        network: (_c = params.network) !== null && _c !== void 0 ? _c : DEFAULT_OPEN_SEA_NETWORK,
        tokenAddress: params.tokenAddress,
        tokenId: params.tokenId,
    }, options, false), fetch = _d.fetch, data = _d.data, isFetching = _d.isFetching, isLoading = _d.isLoading, error = _d.error;
    return { getAsset: fetch, data: data, isFetching: isFetching, isLoading: isLoading, error: error };
};

var useOpenSeaOrders = function (params, options) {
    var _a, _b, _c, _d;
    if (options === void 0) { options = {}; }
    var Moralis = useMoralis().Moralis;
    var _e = _useResolvePluginCall(Plugin.OPEN_SEA, (_b = (_a = Moralis.Plugins) === null || _a === void 0 ? void 0 : _a.opensea) === null || _b === void 0 ? void 0 : _b.getOrders, null, {
        network: (_c = params.network) !== null && _c !== void 0 ? _c : DEFAULT_OPEN_SEA_NETWORK,
        tokenAddress: params.tokenAddress,
        tokenId: params.tokenId,
        orderSide: params.orderSide,
        page: (_d = params.page) !== null && _d !== void 0 ? _d : 1,
    }, options, false), fetch = _e.fetch, data = _e.data, isFetching = _e.isFetching, isLoading = _e.isLoading, error = _e.error;
    return { getOrders: fetch, data: data, isFetching: isFetching, isLoading: isLoading, error: error };
};

var useOpenSeaSellOrder = function (params, options) {
    var _a, _b, _c;
    if (options === void 0) { options = {}; }
    var Moralis = useMoralis().Moralis;
    var _d = _useResolvePluginCall(Plugin.OPEN_SEA, (_b = (_a = Moralis.Plugins) === null || _a === void 0 ? void 0 : _a.opensea) === null || _b === void 0 ? void 0 : _b.createSellOrder, null, {
        network: (_c = params.network) !== null && _c !== void 0 ? _c : DEFAULT_OPEN_SEA_NETWORK,
        tokenAddress: params.tokenAddress,
        tokenId: params.tokenId,
        tokenType: params.tokenType,
        userAddress: params.userAddress,
        startAmount: params.startAmount,
        endAmount: params.endAmount,
        expirationTime: params.expirationTime,
    }, options, false), fetch = _d.fetch, data = _d.data, isFetching = _d.isFetching, isLoading = _d.isLoading, error = _d.error;
    return { createSellOrder: fetch, data: data, isFetching: isFetching, isLoading: isLoading, error: error };
};

var useOpenSeaBuyOrder = function (params, options) {
    var _a, _b, _c;
    if (options === void 0) { options = {}; }
    var Moralis = useMoralis().Moralis;
    var _d = _useResolvePluginCall(Plugin.OPEN_SEA, (_b = (_a = Moralis.Plugins) === null || _a === void 0 ? void 0 : _a.opensea) === null || _b === void 0 ? void 0 : _b.createBuyOrder, null, {
        network: (_c = params.network) !== null && _c !== void 0 ? _c : DEFAULT_OPEN_SEA_NETWORK,
        tokenAddress: params.tokenAddress,
        tokenId: params.tokenId,
        tokenType: params.tokenType,
        amount: params.amount,
        userAddress: params.userAddress,
        paymentTokenAddress: params.paymentTokenAddress,
    }, options, false), fetch = _d.fetch, data = _d.data, isFetching = _d.isFetching, isLoading = _d.isLoading, error = _d.error;
    return { createBuyOrder: fetch, data: data, isFetching: isFetching, isLoading: isLoading, error: error };
};

var useFiatBuy = function (params, _a) {
    if (params === void 0) { params = {}; }
    if (_a === void 0) { _a = {}; }
    var disableTriggers = _a.disableTriggers, options = __rest(_a, ["disableTriggers"]);
    var Moralis = useMoralis().Moralis;
    var doBuyCall = useCallback(function (params) {
        var _a, _b;
        return (_b = (_a = Moralis.Plugins) === null || _a === void 0 ? void 0 : _a.fiat) === null || _b === void 0 ? void 0 : _b.buy(params, { disableTriggers: disableTriggers });
    }, [disableTriggers]);
    var _b = _useResolvePluginCall(Plugin.FIAT, doBuyCall, null, {
        coin: params.coin,
        receiver: params.receiver,
    }, options, false), fetch = _b.fetch, data = _b.data, isFetching = _b.isFetching, isLoading = _b.isLoading, error = _b.error;
    return { buy: fetch, data: data, isFetching: isFetching, isLoading: isLoading, error: error };
};

var DEFAULT_RARIBLE_NETWORK = "eth";

var useRaribleLazyMint = function (params, options) {
    var _a, _b, _c;
    if (options === void 0) { options = {}; }
    var Moralis = useMoralis().Moralis;
    var _d = _useResolvePluginCall(Plugin.RARIBLE, (_b = (_a = Moralis.Plugins) === null || _a === void 0 ? void 0 : _a.rarible) === null || _b === void 0 ? void 0 : _b.lazyMint, null, {
        chain: (_c = params.chain) !== null && _c !== void 0 ? _c : DEFAULT_RARIBLE_NETWORK,
        userAddress: params.userAddress,
        tokenType: params.tokenType,
        tokenUri: params.tokenUri,
        supply: params.supply,
        royaltiesAmount: params.royaltiesAmount,
    }, options, false), fetch = _d.fetch, data = _d.data, isFetching = _d.isFetching, isLoading = _d.isLoading, error = _d.error;
    return { lazyMint: fetch, data: data, isFetching: isFetching, isLoading: isLoading, error: error };
};

var useRaribleSellOrder = function (params, options) {
    var _a, _b, _c;
    if (options === void 0) { options = {}; }
    var Moralis = useMoralis().Moralis;
    var _d = _useResolvePluginCall(Plugin.RARIBLE, (_b = (_a = Moralis.Plugins) === null || _a === void 0 ? void 0 : _a.rarible) === null || _b === void 0 ? void 0 : _b.createSellOrder, null, {
        chain: (_c = params.chain) !== null && _c !== void 0 ? _c : DEFAULT_RARIBLE_NETWORK,
        userAddress: params.userAddress,
        makeTokenId: params.makeTokenId,
        makeTokenAddress: params.makeTokenAddress,
        makeAssetClass: params.makeAssetClass,
        makeValue: params.makeValue,
        takeAssetClass: params.takeAssetClass,
        takeValue: params.takeValue,
    }, options, false), fetch = _d.fetch, data = _d.data, isFetching = _d.isFetching, isLoading = _d.isLoading, error = _d.error;
    return { createSellOrder: fetch, data: data, isFetching: isFetching, isLoading: isLoading, error: error };
};

var useApiContract = function (
// TODO: fix types
_a, options) {
    var _b;
    var functionName = _a.functionName, address = _a.address, abi = _a.abi, chain = _a.chain, params = _a.params;
    if (options === void 0) { options = {}; }
    var native = useMoralisWeb3Api().native;
    var payload = {
        abi: abi,
        chain: chain,
        function_name: functionName,
        address: address,
        params: params,
    };
    var _c = useMoralisWeb3ApiCall(native.runContractFunction, payload, __assign({ autoFetch: (_b = options.autoFetch) !== null && _b !== void 0 ? _b : false }, options)), runContractFunction = _c.fetch, data = _c.data, error = _c.error, isFetching = _c.isFetching, isLoading = _c.isLoading;
    return { runContractFunction: runContractFunction, data: data, error: error, isLoading: isLoading, isFetching: isFetching };
};

var isValidApiChain = function (chain) {
    if (!chain) {
        return null;
    }
    // TODO: add check if chain is in provided list
    return chain;
};

var useERC20Balances = function (params, options) {
    var _a, _b, _c, _d, _e;
    var getTokenBalances = useMoralisWeb3Api().account.getTokenBalances;
    var _f = useMoralis(), account = _f.account, chainId = _f.chainId;
    var _g = useMoralisWeb3ApiCall(getTokenBalances, __assign({ chain: (_b = (_a = params === null || params === void 0 ? void 0 : params.chain) !== null && _a !== void 0 ? _a : isValidApiChain(chainId)) !== null && _b !== void 0 ? _b : DEFAULT_API_CHAIN, address: (_d = (_c = params === null || params === void 0 ? void 0 : params.address) !== null && _c !== void 0 ? _c : account) !== null && _d !== void 0 ? _d : "" }, params), __assign({ autoFetch: (_e = options === null || options === void 0 ? void 0 : options.autoFetch) !== null && _e !== void 0 ? _e : !!account }, options)), fetch = _g.fetch, data = _g.data, isLoading = _g.isLoading, isFetching = _g.isFetching, error = _g.error;
    return {
        fetchERC20Balances: fetch,
        data: data,
        isLoading: isLoading,
        isFetching: isFetching,
        error: error,
    };
};

var useERC20Transfers = function (params, options) {
    var _a, _b, _c, _d, _e;
    var getTokenTransfers = useMoralisWeb3Api().account.getTokenTransfers;
    var _f = useMoralis(), account = _f.account, chainId = _f.chainId;
    var _g = useMoralisWeb3ApiCall(getTokenTransfers, __assign({ chain: (_b = (_a = params === null || params === void 0 ? void 0 : params.chain) !== null && _a !== void 0 ? _a : isValidApiChain(chainId)) !== null && _b !== void 0 ? _b : DEFAULT_API_CHAIN, address: (_d = (_c = params === null || params === void 0 ? void 0 : params.address) !== null && _c !== void 0 ? _c : account) !== null && _d !== void 0 ? _d : "" }, params), __assign({ autoFetch: (_e = options === null || options === void 0 ? void 0 : options.autoFetch) !== null && _e !== void 0 ? _e : !!account }, options)), fetch = _g.fetch, data = _g.data, isLoading = _g.isLoading, isFetching = _g.isFetching, error = _g.error;
    return {
        fetchERC20Transfers: fetch,
        data: data,
        error: error,
        isLoading: isLoading,
        isFetching: isFetching,
    };
};

var IPFS_ROOT = "https://gateway.ipfs.io/ipfs/";
var resolveIPFS = function (url) {
    if (!url) {
        return url;
    }
    if (!url.includes("ipfs://") || !url) {
        return url;
    }
    return url.replace("ipfs://", IPFS_ROOT);
};

var useNFTBalances = function (params, options) {
    var _a, _b, _c, _d, _e;
    var getNFTs = useMoralisWeb3Api().account.getNFTs;
    var _f = useMoralis(), chainId = _f.chainId, account = _f.account;
    var _g = useMoralisWeb3ApiCall(getNFTs, __assign({ chain: (_b = (_a = params === null || params === void 0 ? void 0 : params.chain) !== null && _a !== void 0 ? _a : isValidApiChain(chainId)) !== null && _b !== void 0 ? _b : DEFAULT_API_CHAIN, address: (_d = (_c = params === null || params === void 0 ? void 0 : params.address) !== null && _c !== void 0 ? _c : account) !== null && _d !== void 0 ? _d : "" }, params), __assign({ autoFetch: (_e = options === null || options === void 0 ? void 0 : options.autoFetch) !== null && _e !== void 0 ? _e : !!account }, options)), getNFTBalances = _g.fetch, data = _g.data, error = _g.error, isLoading = _g.isLoading, isFetching = _g.isFetching;
    var balances = useMemo(function () {
        if (!(data === null || data === void 0 ? void 0 : data.result) || !(data === null || data === void 0 ? void 0 : data.result.length)) {
            return data;
        }
        var formattedResult = data.result.map(function (nft) {
            try {
                if (nft.metadata) {
                    var metadata = JSON.parse(nft.metadata);
                    var image = resolveIPFS(metadata === null || metadata === void 0 ? void 0 : metadata.image);
                    return __assign(__assign({}, nft), { image: image, metadata: metadata });
                }
            }
            catch (error) {
                return nft;
            }
            return nft;
        });
        return __assign(__assign({}, data), { result: formattedResult });
    }, [data]);
    return { getNFTBalances: getNFTBalances, data: balances, error: error, isLoading: isLoading, isFetching: isFetching };
};

var useNFTTransfers = function (params, options) {
    var _a, _b, _c, _d, _e;
    var getNFTTransfers = useMoralisWeb3Api().account.getNFTTransfers;
    var _f = useMoralis(), chainId = _f.chainId, account = _f.account;
    var _g = useMoralisWeb3ApiCall(getNFTTransfers, __assign({ chain: (_b = (_a = params === null || params === void 0 ? void 0 : params.chain) !== null && _a !== void 0 ? _a : isValidApiChain(chainId)) !== null && _b !== void 0 ? _b : DEFAULT_API_CHAIN, address: (_d = (_c = params === null || params === void 0 ? void 0 : params.address) !== null && _c !== void 0 ? _c : account) !== null && _d !== void 0 ? _d : "" }, params), __assign({ autoFetch: (_e = options === null || options === void 0 ? void 0 : options.autoFetch) !== null && _e !== void 0 ? _e : !!account }, options)), fetch = _g.fetch, data = _g.data, error = _g.error, isLoading = _g.isLoading, isFetching = _g.isFetching;
    return { getNFTTransfers: fetch, data: data, error: error, isLoading: isLoading, isFetching: isFetching };
};

var useNativeBalance = function (params, options) {
    var _a, _b, _c, _d, _e;
    var getNativeBalance = useMoralisWeb3Api().account.getNativeBalance;
    var _f = useMoralis(), chainId = _f.chainId, account = _f.account;
    var nativeToken = useMemo(function () {
        var _a, _b;
        var chainData = getChain((_b = (_a = params === null || params === void 0 ? void 0 : params.chain) !== null && _a !== void 0 ? _a : isValidApiChain(chainId)) !== null && _b !== void 0 ? _b : DEFAULT_API_CHAIN);
        if (!chainData) {
            return null;
        }
        return chainData.nativeCurrency;
    }, [params, chainId]);
    var _g = useMoralisWeb3ApiCall(getNativeBalance, __assign({ chain: (_b = (_a = params === null || params === void 0 ? void 0 : params.chain) !== null && _a !== void 0 ? _a : isValidApiChain(chainId)) !== null && _b !== void 0 ? _b : DEFAULT_API_CHAIN, address: (_d = (_c = params === null || params === void 0 ? void 0 : params.address) !== null && _c !== void 0 ? _c : account) !== null && _d !== void 0 ? _d : "" }, params), __assign({ autoFetch: (_e = options === null || options === void 0 ? void 0 : options.autoFetch) !== null && _e !== void 0 ? _e : !!account }, options)), fetch = _g.fetch, data = _g.data, error = _g.error, isLoading = _g.isLoading, isFetching = _g.isFetching;
    var formatted = useMemo(function () {
        if (!nativeToken || !data) {
            return null;
        }
        return tokenValueTxt(data.balance, nativeToken.decimals, nativeToken.symbol);
    }, [data, nativeToken]);
    return {
        getBalances: fetch,
        data: {
            balance: data === null || data === void 0 ? void 0 : data.balance,
            formatted: formatted,
        },
        nativeToken: nativeToken,
        error: error,
        isLoading: isLoading,
        isFetching: isFetching,
    };
};

var useNativeTransactions = function (params, options) {
    var _a, _b, _c, _d, _e;
    var getTransactions = useMoralisWeb3Api().account.getTransactions;
    var _f = useMoralis(), chainId = _f.chainId, account = _f.account;
    var _g = useMoralisWeb3ApiCall(getTransactions, __assign({ chain: (_b = (_a = params === null || params === void 0 ? void 0 : params.chain) !== null && _a !== void 0 ? _a : isValidApiChain(chainId)) !== null && _b !== void 0 ? _b : DEFAULT_API_CHAIN, address: (_d = (_c = params === null || params === void 0 ? void 0 : params.address) !== null && _c !== void 0 ? _c : account) !== null && _d !== void 0 ? _d : "" }, params), __assign({ autoFetch: (_e = options === null || options === void 0 ? void 0 : options.autoFetch) !== null && _e !== void 0 ? _e : !!account }, options)), getNativeTransations = _g.fetch, data = _g.data, error = _g.error, isLoading = _g.isLoading, isFetching = _g.isFetching;
    return {
        getNativeTransations: getNativeTransations,
        data: data,
        chainId: chainId,
        error: error,
        isLoading: isLoading,
        isFetching: isFetching,
    };
};

var useTokenPrice = function (params, options) {
    var _a, _b, _c;
    var getTokenPrice = useMoralisWeb3Api().token.getTokenPrice;
    var chainId = useMoralis().chainId;
    var _d = useMoralisWeb3ApiCall(getTokenPrice, __assign({ chain: (_b = (_a = params === null || params === void 0 ? void 0 : params.chain) !== null && _a !== void 0 ? _a : isValidApiChain(chainId)) !== null && _b !== void 0 ? _b : DEFAULT_API_CHAIN }, params), __assign({ autoFetch: (_c = options === null || options === void 0 ? void 0 : options.autoFetch) !== null && _c !== void 0 ? _c : true }, options)), fetch = _d.fetch, data = _d.data, error = _d.error, isFetching = _d.isFetching, isLoading = _d.isLoading;
    var formattedData = useMemo(function () {
        var _a;
        if (!data) {
            return null;
        }
        var _b = (_a = data.nativePrice) !== null && _a !== void 0 ? _a : {}, value = _b.value, decimals = _b.decimals, symbol = _b.symbol;
        var formatted = __assign(__assign({}, data), { formattedUsd: toUsd(data.usdPrice), formattedNative: value
                ? tokenValueTxt(value, decimals !== null && decimals !== void 0 ? decimals : 0, symbol !== null && symbol !== void 0 ? symbol : "")
                : null });
        return formatted;
    }, [data]);
    return {
        fetchTokenPrice: fetch,
        data: formattedData,
        error: error,
        isLoading: isLoading,
        isFetching: isFetching,
    };
};

var useEnsAddress = function (ensAddress) {
    var web3 = useMoralis().web3;
    var _a = useState(null), resolved = _a[0], setResolved = _a[1];
    var _b = useState(false), isLoading = _b[0], setIsLoading = _b[1];
    var _c = useState(null), error = _c[0], setError = _c[1];
    useEffect(function () {
        if (web3) {
            setIsLoading(true);
            setError(null);
            web3
                .lookupAddress(ensAddress)
                .then(function (result) {
                setResolved(result);
            })
                .catch(setError)
                .finally(function () {
                setIsLoading(false);
            });
        }
    }, [ensAddress, web3]);
    return { name: resolved, isLoading: isLoading, error: error };
};

var useEnsName = function (ensName) {
    var web3 = useMoralis().web3;
    var _a = useState(null), address = _a[0], setAddress = _a[1];
    var _b = useState(null), avatar = _b[0], setAvatar = _b[1];
    var _c = useState(null), url = _c[0], setUrl = _c[1];
    var _d = useState(null), email = _d[0], setEmail = _d[1];
    var _e = useState(false), isLoading = _e[0], setIsLoading = _e[1];
    var _f = useState(null), error = _f[0], setError = _f[1];
    useEffect(function () {
        if (web3) {
            setIsLoading(true);
            setError(null);
            web3
                .getResolver(ensName)
                .then(function (resolver) {
                if (!resolver) {
                    return;
                }
                Promise.all([
                    resolver.getAddress().catch(function () { return null; }),
                    resolver.getAvatar().catch(function () { return null; }),
                    resolver.getText("email").catch(function () { return null; }),
                    resolver.getText("url").catch(function () { return null; }),
                ]).then(function (_a) {
                    var _b;
                    var resolvedAddress = _a[0], resolvedAvatar = _a[1], resolvedEmail = _a[2], resolvedUrl = _a[3];
                    setAddress(resolvedAddress);
                    setAvatar((_b = resolvedAvatar === null || resolvedAvatar === void 0 ? void 0 : resolvedAvatar.url) !== null && _b !== void 0 ? _b : null);
                    setEmail(resolvedEmail);
                    setUrl(resolvedUrl);
                });
            })
                .catch(setError)
                .finally(function () {
                setIsLoading(false);
            });
        }
    }, [ensName, web3]);
    return { address: address, avatar: avatar, email: email, url: url, isLoading: isLoading, error: error };
};

var white = "#fff";
var brand = "#b7e803";
var PoweredByColour = function (_a) {
    var style = _a.style;
    return (jsxs("svg", __assign({ style: style, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 192 45" }, { children: [jsx("path", { style: { fill: brand }, d: "M0 22.5A21.51 21.51 0 0121.5 1h149a21.5 21.5 0 010 43h-149A21.51 21.51 0 010 22.5z" }, void 0), jsx("circle", { cx: "25.5", cy: "22.5", r: "17.5" }, void 0), jsx("path", { style: { fill: white }, d: "M36.6 30.9l-.12.16s.08-.06.12-.16zM40 20.94A8.23 8.23 0 0031.7 13a8.38 8.38 0 00-5.7 2.25A8.3 8.3 0 0012 21v.06a17.82 17.82 0 002.41 8.48A23.4 23.4 0 0016 32.09c.22.3.41.54.55.71l.17.21.05.06a2.67 2.67 0 003.75.25 2.62 2.62 0 00.25-3.71l-.1-.11c-.08-.12-.22-.29-.39-.52A17.51 17.51 0 0119.07 27a12.74 12.74 0 01-1.76-5.9 3 3 0 016 0 2.72 2.72 0 00.3 1.14 2.66 2.66 0 005.13-.91V21a3 3 0 016 0 11.6 11.6 0 01-1.2 4.74c-.32.65-.62 1.18-.85 1.55-.11.19-.2.32-.26.41l-.06.08a2.66 2.66 0 012.08-1A2.63 2.63 0 0137 29.49a2.55 2.55 0 01-.43 1.41.1.1 0 000-.05l.12-.17c.1-.14.23-.35.39-.6A21.81 21.81 0 0038.31 28 16.56 16.56 0 0040 21v-.06z" }, void 0), jsx("path", { style: { fill: brand }, d: "M34.36 26.89a2.71 2.71 0 00-2.08 1 2.56 2.56 0 00-.57 1.62 2.63 2.63 0 002.65 2.6 2.69 2.69 0 002.11-1l.12-.16a2.6 2.6 0 00-2.23-4z" }, void 0), jsx("path", { d: "M55.61 21.43a2.4 2.4 0 01-.89 2 4 4 0 01-2.54.7h-1v3.37h-1v-8.57h2.22c2.14 0 3.21.84 3.21 2.5zm-4.44 1.84h.9a3.41 3.41 0 001.93-.42 1.6 1.6 0 00.59-1.37 1.49 1.49 0 00-.59-1.27 2.88 2.88 0 00-1.73-.42h-1.1zm11.64 1a3.55 3.55 0 01-.8 2.46 2.79 2.79 0 01-2.18.88 2.87 2.87 0 01-1.53-.41 2.59 2.59 0 01-1-1.16 4.05 4.05 0 01-.37-1.77 3.54 3.54 0 01.79-2.44 2.75 2.75 0 012.15-.83 2.71 2.71 0 012.14.9 3.51 3.51 0 01.8 2.38zm-4.9 0a3.12 3.12 0 00.49 1.88 2 2 0 002.9 0 3 3 0 00.5-1.88 3 3 0 00-.5-1.85 2 2 0 00-2.9 0 3 3 0 00-.49 1.86zm11.85 3.23l-1.18-3.77c-.07-.23-.21-.75-.41-1.57-.16.69-.29 1.21-.41 1.58L66.5 27.5h-1.13l-1.75-6.42h1c.41 1.61.73 2.84.94 3.68a15 15 0 01.44 1.71c0-.22.11-.51.21-.86s.18-.64.25-.85l1.18-3.68h1l1.15 3.68a12.91 12.91 0 01.45 1.7c0-.14.06-.36.13-.65s.48-1.87 1.22-4.73h1l-1.68 6.42zm6.81.12a3 3 0 01-2.25-.87 3.35 3.35 0 01-.82-2.41 3.69 3.69 0 01.76-2.46 2.55 2.55 0 012.06-.88 2.43 2.43 0 011.91.8 3.07 3.07 0 01.7 2.09v.61h-4.42a2.55 2.55 0 00.56 1.72 2 2 0 001.53.59 5.15 5.15 0 002.05-.44v.87a4.77 4.77 0 01-1 .32 5.85 5.85 0 01-1.08.06zm-.26-5.85a1.59 1.59 0 00-1.24.51 2.28 2.28 0 00-.54 1.39h3.36a2.13 2.13 0 00-.41-1.4 1.45 1.45 0 00-1.17-.5zm7.21-.77a3.61 3.61 0 01.77.07l-.13.9a4 4 0 00-.71-.08 1.71 1.71 0 00-1.33.63 2.3 2.3 0 00-.55 1.57v3.41h-1v-6.42h.81l.11 1.19a2.72 2.72 0 01.86-1 1.88 1.88 0 011.17-.27zm4.69 6.66a3 3 0 01-2.21-.91 3.35 3.35 0 01-.82-2.41 3.69 3.69 0 01.76-2.46A2.53 2.53 0 0188 21a2.4 2.4 0 011.91.8 3 3 0 01.71 2.09v.61h-4.48a2.55 2.55 0 00.57 1.72 2 2 0 001.53.59 5.15 5.15 0 002.05-.44v.87a4.65 4.65 0 01-1 .32 5.66 5.66 0 01-1.08.06zm-.27-5.85a1.57 1.57 0 00-1.23.51 2.28 2.28 0 00-.54 1.39h3.35a2.07 2.07 0 00-.41-1.4 1.43 1.43 0 00-1.17-.54zm8.66 4.87a2.29 2.29 0 01-2 1 2.4 2.4 0 01-2-.86 3.78 3.78 0 01-.7-2.45 3.86 3.86 0 01.71-2.47 2.6 2.6 0 014 .07h.07V18.38h1v9.12h-.79zm-1.94.16a1.77 1.77 0 001.44-.54 2.72 2.72 0 00.45-1.75v-.2a3.18 3.18 0 00-.46-1.95 1.7 1.7 0 00-1.44-.59 1.52 1.52 0 00-1.32.67 3.33 3.33 0 00-.45 1.88 3.19 3.19 0 00.45 1.86 1.54 1.54 0 001.33.58zm11-5.83a2.38 2.38 0 012 .87 3.75 3.75 0 01.7 2.44 3.81 3.81 0 01-.71 2.46 2.35 2.35 0 01-2 .88 2.88 2.88 0 01-1.15-.23 2.17 2.17 0 01-.87-.72h-.07l-.21.83h-.69v-9.16h1v2.22c0 .49 0 .94-.05 1.33h.05a2.3 2.3 0 012.04-.93zm-.15.82a1.69 1.69 0 00-1.43.57 3.23 3.23 0 00-.44 1.92 3.22 3.22 0 00.45 1.94 1.71 1.71 0 001.45.58 1.47 1.47 0 001.33-.65 3.31 3.31 0 00.44-1.88 3.19 3.19 0 00-.44-1.87 1.54 1.54 0 00-1.32-.65zm3.5-.71h1l1.41 3.66a14.72 14.72 0 01.57 1.81h.05c0-.2.15-.54.31-1s.7-2 1.6-4.45h1l-2.76 7.31a3.64 3.64 0 01-1 1.54 2 2 0 01-1.34.45 3.71 3.71 0 01-.88-.1v-.84a3.14 3.14 0 00.72.07 1.48 1.48 0 001.43-1.12l.36-.91zm13.89 6.38l-2.06-6.72c.07 1.37.11 2.28.11 2.74v4h-1.62v-8.59h2.47l2 6.55 2.2-6.55h2.48v8.57h-1.7v-4.05-.67c0-.25 0-.91.08-2l-2.21 6.71zm9-3.29a2.76 2.76 0 00.32 1.47 1.33 1.33 0 002.07 0 2.79 2.79 0 00.31-1.48 2.73 2.73 0 00-.31-1.46 1.17 1.17 0 00-1-.48 1.14 1.14 0 00-1 .48 2.7 2.7 0 00-.41 1.47zm4.53 0a3.52 3.52 0 01-.84 2.5 3.05 3.05 0 01-2.35.91 3.36 3.36 0 01-1.67-.41 2.75 2.75 0 01-1.1-1.19 4 4 0 01-.39-1.81 3.47 3.47 0 01.84-2.49 3 3 0 012.35-.89 3.26 3.26 0 011.67.41 2.65 2.65 0 011.1 1.17 3.94 3.94 0 01.37 1.8zm5.13-3.38a2.62 2.62 0 01.61.05l-.17 1.67a2.58 2.58 0 00-.53-.05 1.86 1.86 0 00-1.33.44 1.58 1.58 0 00-.48 1.23v3.33h-1.78V21h1.35l.26 1.1h.09a2.39 2.39 0 01.82-.88 2 2 0 011.14-.39zm6 6.67l-.35-.89h-.05a2.65 2.65 0 01-.93.79 3.09 3.09 0 01-1.24.22 2 2 0 01-1.49-.54 2.08 2.08 0 01-.54-1.54 1.73 1.73 0 01.73-1.53 4.19 4.19 0 012.2-.55h1.14v-.29a.89.89 0 00-1-1 4.79 4.79 0 00-1.85.47l-.59-1.2a5.29 5.29 0 012.51-.6 3.14 3.14 0 012 .58 2.1 2.1 0 01.7 1.74v4.34zm-.53-3h-.69a2.17 2.17 0 00-1.16.28.86.86 0 00-.38.78c0 .51.28.76.86.76a1.34 1.34 0 001-.36A1.25 1.25 0 00147 25zm5.41 3h-1.79v-9.12h1.79zm1.8-8.24c0-.59.33-.88 1-.88s1 .29 1 .88a.89.89 0 01-.25.65 1 1 0 01-.73.22c-.75 0-1.08-.29-1.08-.87zM156 27.5h-1.78V21H156zm6.46-1.95a1.8 1.8 0 01-.71 1.54 3.44 3.44 0 01-2.09.53 7.06 7.06 0 01-1.22-.1 4.66 4.66 0 01-.94-.28v-1.48a5.44 5.44 0 001.12.39 4.35 4.35 0 001.1.16c.65 0 1-.19 1-.56a.44.44 0 00-.13-.34 1.63 1.63 0 00-.44-.3c-.21-.11-.49-.24-.85-.39a5.42 5.42 0 01-1.11-.59 1.62 1.62 0 01-.51-.61 2.08 2.08 0 01-.16-.87 1.53 1.53 0 01.67-1.34 3.28 3.28 0 011.92-.48 5.54 5.54 0 012.31.51l-.54 1.29c-.33-.14-.64-.25-.92-.34a2.94 2.94 0 00-.88-.14c-.52 0-.79.14-.79.43a.5.5 0 00.25.41 7.16 7.16 0 001.12.53 4.79 4.79 0 011.13.58 1.65 1.65 0 01.53.62 1.92 1.92 0 01.18.83zm1.14 1.11a1 1 0 01.26-.74 1.07 1.07 0 01.77-.25 1 1 0 01.75.25 1 1 0 01.27.74 1 1 0 01-.27.74 1.23 1.23 0 01-1.51 0 1 1 0 01-.23-.74zm3.6-7.4c0-.59.32-.88 1-.88s1 .29 1 .88a.88.88 0 01-.24.65 1.06 1.06 0 01-.73.22c-.67 0-.99-.29-.99-.87zm1.86 8.24h-1.79V21h1.79zm3.3-3.29a2.76 2.76 0 00.32 1.47 1.13 1.13 0 001 .5 1.12 1.12 0 001-.49 2.79 2.79 0 00.31-1.48 2.73 2.73 0 00-.31-1.46 1.15 1.15 0 00-1-.48 1.14 1.14 0 00-1 .48 2.7 2.7 0 00-.28 1.46zm4.53 0a3.52 3.52 0 01-.84 2.5 3 3 0 01-2.35.91 3.32 3.32 0 01-1.66-.41A2.84 2.84 0 01171 26a4 4 0 01-.39-1.81 3.47 3.47 0 01.84-2.49 3 3 0 012.35-.89 3.26 3.26 0 011.67.41 2.73 2.73 0 011.11 1.17 4.08 4.08 0 01.35 1.82z" }, void 0)] }), void 0));
};
var PoweredByLight = function (_a) {
    var style = _a.style;
    return (jsxs("svg", __assign({ style: style, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 192 45" }, { children: [jsx("path", { style: { fill: white }, d: "M1,22.5A21.51,21.51,0,0,1,22.5,1h147a21.5,21.5,0,0,1,0,43H22.5A21.51,21.51,0,0,1,1,22.5Z" }, void 0), jsx("path", { d: "M37.6,30.9h0l-.12.16S37.56,31,37.6,30.9Z" }, void 0), jsx("path", { d: "M41,20.94A8.23,8.23,0,0,0,32.7,13,8.38,8.38,0,0,0,27,15.25,8.3,8.3,0,0,0,13,21v.06a17.79,17.79,0,0,0,2.41,8.48A22.43,22.43,0,0,0,17,32.09c.22.3.41.54.55.71l.17.21.05.06,0,0h0a2.67,2.67,0,0,0,3.75.25,2.62,2.62,0,0,0,.25-3.71h0l0,0-.1-.11L21.31,29A17.51,17.51,0,0,1,20.07,27a12.74,12.74,0,0,1-1.76-5.9,3,3,0,0,1,6,0,2.72,2.72,0,0,0,.3,1.14,2.66,2.66,0,0,0,5.13-.91V21a3,3,0,0,1,6,0,11.6,11.6,0,0,1-1.2,4.74c-.32.65-.62,1.18-.85,1.55-.11.19-.2.32-.26.41l-.06.08h0l0,0a2.66,2.66,0,0,1,2.08-1A2.63,2.63,0,0,1,38,29.49a2.55,2.55,0,0,1-.43,1.41h0s0,0,0,0a.1.1,0,0,0,0-.05l.12-.17c.1-.14.23-.35.39-.6A21.81,21.81,0,0,0,39.31,28,16.56,16.56,0,0,0,41,21v-.06Z" }, void 0), jsx("path", { style: { fill: brand }, d: "M35.36,26.89a2.71,2.71,0,0,0-2.08,1,2.56,2.56,0,0,0-.57,1.62,2.63,2.63,0,0,0,2.65,2.6,2.69,2.69,0,0,0,2.11-1l.12-.16a2.6,2.6,0,0,0-2.23-4Z" }, void 0), jsx("path", { d: "M54.61,21.43a2.4,2.4,0,0,1-.89,2,4,4,0,0,1-2.54.7h-1V27.5h-1V18.93H51.4C53.54,18.93,54.61,19.77,54.61,21.43Zm-4.44,1.85h.9A3.4,3.4,0,0,0,53,22.85a1.59,1.59,0,0,0,.59-1.37A1.49,1.49,0,0,0,53,20.21a2.88,2.88,0,0,0-1.73-.42H50.17Zm11.64,1a3.55,3.55,0,0,1-.8,2.46,2.79,2.79,0,0,1-2.18.88,2.87,2.87,0,0,1-1.53-.41,2.59,2.59,0,0,1-1-1.16,4.05,4.05,0,0,1-.37-1.77,3.54,3.54,0,0,1,.79-2.44A2.75,2.75,0,0,1,58.87,21a2.71,2.71,0,0,1,2.14.9A3.51,3.51,0,0,1,61.81,24.28Zm-4.9,0a3.12,3.12,0,0,0,.49,1.88,2,2,0,0,0,2.9,0,3,3,0,0,0,.5-1.88,3,3,0,0,0-.5-1.85,2,2,0,0,0-2.9,0A3,3,0,0,0,56.91,24.28ZM68.76,27.5l-1.18-3.77c-.07-.23-.21-.75-.41-1.57h0c-.16.69-.29,1.21-.41,1.58L65.5,27.5H64.37l-1.75-6.42h1c.41,1.61.73,2.84.94,3.68A15,15,0,0,1,65,26.47h0c0-.22.11-.51.21-.86s.18-.64.25-.85l1.18-3.68h1l1.15,3.68a12.91,12.91,0,0,1,.45,1.7h0c0-.14.06-.36.13-.65s.48-1.87,1.22-4.73h1L69.91,27.5Zm6.81.12a3,3,0,0,1-2.25-.87,3.35,3.35,0,0,1-.82-2.41,3.69,3.69,0,0,1,.76-2.46A2.55,2.55,0,0,1,75.32,21a2.43,2.43,0,0,1,1.91.8,3.07,3.07,0,0,1,.7,2.09v.61H73.51a2.55,2.55,0,0,0,.56,1.72,2,2,0,0,0,1.53.59,5.15,5.15,0,0,0,2.05-.44v.87a4.77,4.77,0,0,1-1,.32A5.85,5.85,0,0,1,75.57,27.62Zm-.26-5.84a1.58,1.58,0,0,0-1.24.5,2.28,2.28,0,0,0-.54,1.39h3.36a2.13,2.13,0,0,0-.41-1.4A1.45,1.45,0,0,0,75.31,21.78ZM82.52,21a3.61,3.61,0,0,1,.77.07l-.13.9a4,4,0,0,0-.71-.08,1.71,1.71,0,0,0-1.33.63,2.3,2.3,0,0,0-.55,1.57V27.5h-1V21.08h.81l.11,1.19h0a2.72,2.72,0,0,1,.86-1A1.88,1.88,0,0,1,82.52,21Zm4.69,6.66A3,3,0,0,1,85,26.75a3.35,3.35,0,0,1-.82-2.41,3.69,3.69,0,0,1,.76-2.46A2.53,2.53,0,0,1,87,21a2.4,2.4,0,0,1,1.91.8,3,3,0,0,1,.71,2.09v.61H85.14a2.55,2.55,0,0,0,.57,1.72,2,2,0,0,0,1.53.59,5.15,5.15,0,0,0,2.05-.44v.87a4.65,4.65,0,0,1-1,.32A5.66,5.66,0,0,1,87.21,27.62Zm-.27-5.84a1.56,1.56,0,0,0-1.23.5,2.28,2.28,0,0,0-.54,1.39h3.35a2.07,2.07,0,0,0-.41-1.4A1.42,1.42,0,0,0,86.94,21.78Zm8.66,4.86h0a2.29,2.29,0,0,1-2,1,2.4,2.4,0,0,1-2-.86,3.78,3.78,0,0,1-.7-2.45,3.86,3.86,0,0,1,.71-2.47,2.6,2.6,0,0,1,4,.07h.07l0-.46,0-.45V18.38h1V27.5h-.79Zm-1.94.16a1.77,1.77,0,0,0,1.44-.54,2.72,2.72,0,0,0,.45-1.75v-.2a3.18,3.18,0,0,0-.46-1.95,1.7,1.7,0,0,0-1.44-.58,1.51,1.51,0,0,0-1.32.66,3.33,3.33,0,0,0-.45,1.88,3.19,3.19,0,0,0,.45,1.86A1.54,1.54,0,0,0,93.66,26.8Zm11-5.83a2.38,2.38,0,0,1,2,.87,3.75,3.75,0,0,1,.7,2.44,3.81,3.81,0,0,1-.71,2.46,2.35,2.35,0,0,1-2,.88,2.88,2.88,0,0,1-1.15-.23,2.17,2.17,0,0,1-.87-.72h-.07l-.21.83h-.69V18.38h1V20.6c0,.49,0,.94-.05,1.33h.05A2.3,2.3,0,0,1,104.7,21Zm-.15.82a1.69,1.69,0,0,0-1.43.57,3.23,3.23,0,0,0-.44,1.92,3.22,3.22,0,0,0,.45,1.94,1.71,1.71,0,0,0,1.45.58,1.47,1.47,0,0,0,1.33-.65,3.31,3.31,0,0,0,.44-1.88,3.19,3.19,0,0,0-.44-1.87A1.54,1.54,0,0,0,104.55,21.79Zm3.5-.71h1l1.41,3.66a14.72,14.72,0,0,1,.57,1.81h.05c0-.2.15-.54.31-1s.7-2,1.6-4.45h1l-2.76,7.31a3.64,3.64,0,0,1-1,1.54,2,2,0,0,1-1.34.45,3.71,3.71,0,0,1-.88-.1V29.5a3.14,3.14,0,0,0,.72.07,1.48,1.48,0,0,0,1.43-1.12l.36-.91ZM121.9,27.5l-2.06-6.72h0c.07,1.37.11,2.28.11,2.74v4h-1.62V18.93h2.47l2,6.55h0L125,18.93h2.48V27.5h-1.7V23.45c0-.2,0-.42,0-.67s0-.91.08-2h0l-2.21,6.71Zm9-3.29a2.76,2.76,0,0,0,.32,1.47,1.33,1.33,0,0,0,2.07,0,2.79,2.79,0,0,0,.31-1.48,2.73,2.73,0,0,0-.31-1.46,1.17,1.17,0,0,0-1-.48,1.14,1.14,0,0,0-1,.48A2.7,2.7,0,0,0,130.88,24.21Zm4.53,0a3.52,3.52,0,0,1-.84,2.5,3.05,3.05,0,0,1-2.35.91,3.36,3.36,0,0,1-1.67-.41,2.75,2.75,0,0,1-1.1-1.19,4,4,0,0,1-.39-1.81,3.47,3.47,0,0,1,.84-2.49,3,3,0,0,1,2.35-.89,3.26,3.26,0,0,1,1.67.41,2.65,2.65,0,0,1,1.1,1.17A4,4,0,0,1,135.41,24.21Zm5.13-3.38a2.62,2.62,0,0,1,.61.05L141,22.55a2.58,2.58,0,0,0-.53-.05,1.86,1.86,0,0,0-1.33.44,1.58,1.58,0,0,0-.48,1.23V27.5h-1.78V21h1.35l.26,1.1h.09a2.39,2.39,0,0,1,.82-.88A2,2,0,0,1,140.54,20.83Zm6,6.67-.35-.89h-.05a2.65,2.65,0,0,1-.93.79,3.09,3.09,0,0,1-1.24.22,2,2,0,0,1-1.49-.54,2.08,2.08,0,0,1-.54-1.54,1.73,1.73,0,0,1,.73-1.53,4.19,4.19,0,0,1,2.2-.55l1.14,0v-.29a.89.89,0,0,0-1-1,4.79,4.79,0,0,0-1.85.47l-.59-1.2a5.29,5.29,0,0,1,2.51-.6,3.14,3.14,0,0,1,2,.58,2.1,2.1,0,0,1,.7,1.74V27.5Zm-.53-3-.69,0a2.17,2.17,0,0,0-1.16.28.86.86,0,0,0-.38.78c0,.51.28.76.86.76a1.34,1.34,0,0,0,1-.36A1.25,1.25,0,0,0,146,25Zm5.41,3h-1.79V18.38h1.79Zm1.8-8.24c0-.59.33-.88,1-.88s1,.29,1,.88a.89.89,0,0,1-.25.65,1,1,0,0,1-.73.22C153.51,20.13,153.18,19.84,153.18,19.26ZM155,27.5h-1.78V21H155Zm6.46-1.95a1.8,1.8,0,0,1-.71,1.54,3.44,3.44,0,0,1-2.09.53,7.06,7.06,0,0,1-1.22-.1,4.66,4.66,0,0,1-.94-.28V25.76a5.44,5.44,0,0,0,1.12.39,4.35,4.35,0,0,0,1.1.16c.65,0,1-.19,1-.56a.44.44,0,0,0-.13-.34,1.63,1.63,0,0,0-.44-.3c-.21-.11-.49-.24-.85-.39a5.42,5.42,0,0,1-1.11-.59,1.62,1.62,0,0,1-.51-.61,2.08,2.08,0,0,1-.16-.87,1.53,1.53,0,0,1,.67-1.34,3.28,3.28,0,0,1,1.92-.48,5.54,5.54,0,0,1,2.31.51l-.54,1.29c-.33-.14-.64-.25-.92-.34a2.94,2.94,0,0,0-.88-.14c-.52,0-.79.14-.79.43a.5.5,0,0,0,.25.41,7.16,7.16,0,0,0,1.12.53,4.79,4.79,0,0,1,1.13.58,1.73,1.73,0,0,1,.53.62A1.92,1.92,0,0,1,161.5,25.55Zm1.14,1.11a1,1,0,0,1,.26-.74,1.07,1.07,0,0,1,.77-.25,1,1,0,0,1,.75.25,1.14,1.14,0,0,1,0,1.47,1,1,0,0,1-.75.27,1.06,1.06,0,0,1-.76-.26A1,1,0,0,1,162.64,26.66Zm3.6-7.4c0-.59.32-.88,1-.88s1,.29,1,.88a.88.88,0,0,1-.24.65,1.06,1.06,0,0,1-.73.22C166.56,20.13,166.24,19.84,166.24,19.26Zm1.86,8.24h-1.79V21h1.79Zm3.3-3.29a2.76,2.76,0,0,0,.32,1.47,1.13,1.13,0,0,0,1,.5,1.12,1.12,0,0,0,1-.49,2.79,2.79,0,0,0,.31-1.48,2.73,2.73,0,0,0-.31-1.46,1.15,1.15,0,0,0-1-.48,1.14,1.14,0,0,0-1,.48A2.7,2.7,0,0,0,171.4,24.21Zm4.53,0a3.52,3.52,0,0,1-.84,2.5,3,3,0,0,1-2.35.91,3.32,3.32,0,0,1-1.66-.41A2.84,2.84,0,0,1,170,26a4,4,0,0,1-.39-1.81,3.47,3.47,0,0,1,.84-2.49,3,3,0,0,1,2.35-.89,3.26,3.26,0,0,1,1.67.41,2.73,2.73,0,0,1,1.11,1.17A4.11,4.11,0,0,1,175.93,24.21Z" }, void 0), jsx("path", { d: "M22.5,2h147V0H22.5Zm147,41H22.5v2h147Zm-147,0A20.5,20.5,0,0,1,2,22.5H0A22.5,22.5,0,0,0,22.5,45ZM190,22.5A20.5,20.5,0,0,1,169.5,43v2A22.5,22.5,0,0,0,192,22.5ZM169.5,2A20.5,20.5,0,0,1,190,22.5h2A22.5,22.5,0,0,0,169.5,0ZM22.5,0A22.5,22.5,0,0,0,0,22.5H2A20.5,20.5,0,0,1,22.5,2Z" }, void 0)] }), void 0));
};
var PoweredByDark = function (_a) {
    var style = _a.style;
    return (jsxs("svg", __assign({ style: style, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 192 45" }, { children: [jsx("path", { d: "M1,22.5A21.51,21.51,0,0,1,22.5,1h147a21.5,21.5,0,0,1,0,43H22.5A21.51,21.51,0,0,1,1,22.5Z" }, void 0), jsx("path", { style: { fill: white }, d: "M37.6,30.9h0l-.12.16S37.56,31,37.6,30.9Z" }, void 0), jsx("path", { style: { fill: white }, d: "M41,20.94A8.23,8.23,0,0,0,32.7,13,8.38,8.38,0,0,0,27,15.25,8.3,8.3,0,0,0,13,21v.06a17.82,17.82,0,0,0,2.41,8.48A22.43,22.43,0,0,0,17,32.09c.22.3.41.54.55.71l.17.21.05.06,0,0h0a2.67,2.67,0,0,0,3.75.25,2.62,2.62,0,0,0,.25-3.71h0l0,0-.1-.11L21.31,29A17.51,17.51,0,0,1,20.07,27a12.74,12.74,0,0,1-1.76-5.9,3,3,0,0,1,6,0,2.72,2.72,0,0,0,.3,1.14,2.66,2.66,0,0,0,5.13-.91V21a3,3,0,0,1,6,0,11.6,11.6,0,0,1-1.2,4.74c-.32.65-.62,1.18-.85,1.55-.11.19-.2.32-.26.41l-.06.08a0,0,0,0,0,0,0l0,0a2.66,2.66,0,0,1,2.08-1A2.63,2.63,0,0,1,38,29.49a2.55,2.55,0,0,1-.43,1.41h0s0,0,0,0a.1.1,0,0,0,0-.05l.12-.17c.1-.14.23-.35.39-.6A21.81,21.81,0,0,0,39.31,28,16.56,16.56,0,0,0,41,21v-.06Z" }, void 0), jsx("path", { style: { fill: brand }, d: "M35.36,26.89a2.71,2.71,0,0,0-2.08,1,2.56,2.56,0,0,0-.57,1.62,2.63,2.63,0,0,0,2.65,2.6,2.69,2.69,0,0,0,2.11-1l.12-.16a2.6,2.6,0,0,0-2.23-4Z" }, void 0), jsx("path", { style: { fill: white }, d: "M54.61,21.43a2.4,2.4,0,0,1-.89,2,4,4,0,0,1-2.54.7h-1V27.5h-1V18.93H51.4C53.54,18.93,54.61,19.77,54.61,21.43Zm-4.44,1.84h.9A3.41,3.41,0,0,0,53,22.85a1.6,1.6,0,0,0,.59-1.37A1.49,1.49,0,0,0,53,20.21a2.88,2.88,0,0,0-1.73-.42H50.17Zm11.64,1a3.55,3.55,0,0,1-.8,2.46,2.79,2.79,0,0,1-2.18.88,2.87,2.87,0,0,1-1.53-.41,2.59,2.59,0,0,1-1-1.16,4.05,4.05,0,0,1-.37-1.77,3.54,3.54,0,0,1,.79-2.44A2.75,2.75,0,0,1,58.87,21a2.71,2.71,0,0,1,2.14.9A3.51,3.51,0,0,1,61.81,24.28Zm-4.9,0a3.12,3.12,0,0,0,.49,1.88,2,2,0,0,0,2.9,0,3,3,0,0,0,.5-1.88,3,3,0,0,0-.5-1.85,2,2,0,0,0-2.9,0A3,3,0,0,0,56.91,24.28ZM68.76,27.5l-1.18-3.77c-.07-.23-.21-.75-.41-1.57h0c-.16.69-.29,1.21-.41,1.58L65.5,27.5H64.37l-1.75-6.42h1c.41,1.61.73,2.84.94,3.68A15,15,0,0,1,65,26.47h0c0-.22.11-.51.21-.86s.18-.64.25-.85l1.18-3.68h1l1.15,3.68a12.91,12.91,0,0,1,.45,1.7h0c0-.14.06-.36.13-.65s.48-1.87,1.22-4.73h1L69.91,27.5Zm6.81.12a3,3,0,0,1-2.25-.87,3.35,3.35,0,0,1-.82-2.41,3.69,3.69,0,0,1,.76-2.46A2.55,2.55,0,0,1,75.32,21a2.43,2.43,0,0,1,1.91.8,3.07,3.07,0,0,1,.7,2.09v.61H73.51a2.55,2.55,0,0,0,.56,1.72,2,2,0,0,0,1.53.59,5.15,5.15,0,0,0,2.05-.44v.87a4.77,4.77,0,0,1-1,.32A5.85,5.85,0,0,1,75.57,27.62Zm-.26-5.85a1.59,1.59,0,0,0-1.24.51,2.28,2.28,0,0,0-.54,1.39h3.36a2.13,2.13,0,0,0-.41-1.4A1.45,1.45,0,0,0,75.31,21.77ZM82.52,21a3.61,3.61,0,0,1,.77.07l-.13.9a4,4,0,0,0-.71-.08,1.71,1.71,0,0,0-1.33.63,2.3,2.3,0,0,0-.55,1.57V27.5h-1V21.08h.81l.11,1.19h0a2.72,2.72,0,0,1,.86-1A1.88,1.88,0,0,1,82.52,21Zm4.69,6.66A3,3,0,0,1,85,26.75a3.35,3.35,0,0,1-.82-2.41,3.69,3.69,0,0,1,.76-2.46A2.53,2.53,0,0,1,87,21a2.4,2.4,0,0,1,1.91.8,3,3,0,0,1,.71,2.09v.61H85.14a2.55,2.55,0,0,0,.57,1.72,2,2,0,0,0,1.53.59,5.15,5.15,0,0,0,2.05-.44v.87a4.65,4.65,0,0,1-1,.32A5.66,5.66,0,0,1,87.21,27.62Zm-.27-5.85a1.57,1.57,0,0,0-1.23.51,2.28,2.28,0,0,0-.54,1.39h3.35a2.07,2.07,0,0,0-.41-1.4A1.43,1.43,0,0,0,86.94,21.77Zm8.66,4.87h0a2.29,2.29,0,0,1-2,1,2.4,2.4,0,0,1-2-.86,3.78,3.78,0,0,1-.7-2.45,3.86,3.86,0,0,1,.71-2.47,2.6,2.6,0,0,1,4,.07h.07l0-.46,0-.45V18.38h1V27.5h-.79Zm-1.94.16a1.77,1.77,0,0,0,1.44-.54,2.72,2.72,0,0,0,.45-1.75v-.2a3.18,3.18,0,0,0-.46-1.95,1.7,1.7,0,0,0-1.44-.59,1.52,1.52,0,0,0-1.32.67,3.33,3.33,0,0,0-.45,1.88,3.19,3.19,0,0,0,.45,1.86A1.54,1.54,0,0,0,93.66,26.8Zm11-5.83a2.38,2.38,0,0,1,2,.87,3.75,3.75,0,0,1,.7,2.44,3.81,3.81,0,0,1-.71,2.46,2.35,2.35,0,0,1-2,.88,2.88,2.88,0,0,1-1.15-.23,2.17,2.17,0,0,1-.87-.72h-.07l-.21.83h-.69V18.38h1V20.6c0,.49,0,.94-.05,1.33h.05A2.3,2.3,0,0,1,104.7,21Zm-.15.82a1.69,1.69,0,0,0-1.43.57,3.23,3.23,0,0,0-.44,1.92,3.22,3.22,0,0,0,.45,1.94,1.71,1.71,0,0,0,1.45.58,1.47,1.47,0,0,0,1.33-.65,3.31,3.31,0,0,0,.44-1.88,3.19,3.19,0,0,0-.44-1.87A1.54,1.54,0,0,0,104.55,21.79Zm3.5-.71h1l1.41,3.66a14.72,14.72,0,0,1,.57,1.81h.05c0-.2.15-.54.31-1s.7-2,1.6-4.45h1l-2.76,7.31a3.64,3.64,0,0,1-1,1.54,2,2,0,0,1-1.34.45,3.71,3.71,0,0,1-.88-.1V29.5a3.14,3.14,0,0,0,.72.07,1.48,1.48,0,0,0,1.43-1.12l.36-.91ZM121.9,27.5l-2.06-6.72h0c.07,1.37.11,2.28.11,2.74v4h-1.62V18.93h2.47l2,6.55h0L125,18.93h2.48V27.5h-1.7V23.45c0-.2,0-.42,0-.67s0-.91.08-2h0l-2.21,6.71Zm9-3.29a2.76,2.76,0,0,0,.32,1.47,1.33,1.33,0,0,0,2.07,0,2.79,2.79,0,0,0,.31-1.48,2.73,2.73,0,0,0-.31-1.46,1.17,1.17,0,0,0-1-.48,1.14,1.14,0,0,0-1,.48A2.7,2.7,0,0,0,130.88,24.21Zm4.53,0a3.52,3.52,0,0,1-.84,2.5,3.05,3.05,0,0,1-2.35.91,3.36,3.36,0,0,1-1.67-.41,2.75,2.75,0,0,1-1.1-1.19,4,4,0,0,1-.39-1.81,3.47,3.47,0,0,1,.84-2.49,3,3,0,0,1,2.35-.89,3.26,3.26,0,0,1,1.67.41,2.65,2.65,0,0,1,1.1,1.17A3.94,3.94,0,0,1,135.41,24.21Zm5.13-3.38a2.62,2.62,0,0,1,.61.05L141,22.55a2.58,2.58,0,0,0-.53-.05,1.86,1.86,0,0,0-1.33.44,1.58,1.58,0,0,0-.48,1.23V27.5h-1.78V21h1.35l.26,1.1h.09a2.39,2.39,0,0,1,.82-.88A2,2,0,0,1,140.54,20.83Zm6,6.67-.35-.89h-.05a2.65,2.65,0,0,1-.93.79,3.09,3.09,0,0,1-1.24.22,2,2,0,0,1-1.49-.54,2.08,2.08,0,0,1-.54-1.54,1.73,1.73,0,0,1,.73-1.53,4.19,4.19,0,0,1,2.2-.55l1.14,0v-.29a.89.89,0,0,0-1-1,4.79,4.79,0,0,0-1.85.47l-.59-1.2a5.29,5.29,0,0,1,2.51-.6,3.14,3.14,0,0,1,2,.58,2.1,2.1,0,0,1,.7,1.74V27.5Zm-.53-3-.69,0a2.17,2.17,0,0,0-1.16.28.86.86,0,0,0-.38.78c0,.51.28.76.86.76a1.34,1.34,0,0,0,1-.36A1.25,1.25,0,0,0,146,25Zm5.41,3h-1.79V18.38h1.79Zm1.8-8.24c0-.59.33-.88,1-.88s1,.29,1,.88a.89.89,0,0,1-.25.65,1,1,0,0,1-.73.22C153.51,20.13,153.18,19.84,153.18,19.26ZM155,27.5h-1.78V21H155Zm6.46-1.95a1.8,1.8,0,0,1-.71,1.54,3.44,3.44,0,0,1-2.09.53,7.06,7.06,0,0,1-1.22-.1,4.66,4.66,0,0,1-.94-.28V25.76a5.44,5.44,0,0,0,1.12.39,4.35,4.35,0,0,0,1.1.16c.65,0,1-.19,1-.56a.44.44,0,0,0-.13-.34,1.63,1.63,0,0,0-.44-.3c-.21-.11-.49-.24-.85-.39a5.42,5.42,0,0,1-1.11-.59,1.62,1.62,0,0,1-.51-.61,2.08,2.08,0,0,1-.16-.87,1.53,1.53,0,0,1,.67-1.34,3.28,3.28,0,0,1,1.92-.48,5.54,5.54,0,0,1,2.31.51l-.54,1.29c-.33-.14-.64-.25-.92-.34a2.94,2.94,0,0,0-.88-.14c-.52,0-.79.14-.79.43a.5.5,0,0,0,.25.41,7.16,7.16,0,0,0,1.12.53,4.79,4.79,0,0,1,1.13.58,1.65,1.65,0,0,1,.53.62A1.92,1.92,0,0,1,161.5,25.55Zm1.14,1.11a1,1,0,0,1,.26-.74,1.07,1.07,0,0,1,.77-.25,1,1,0,0,1,.75.25,1,1,0,0,1,.27.74,1,1,0,0,1-.27.74,1.23,1.23,0,0,1-1.51,0A1,1,0,0,1,162.64,26.66Zm3.6-7.4c0-.59.32-.88,1-.88s1,.29,1,.88a.88.88,0,0,1-.24.65,1.06,1.06,0,0,1-.73.22C166.56,20.13,166.24,19.84,166.24,19.26Zm1.86,8.24h-1.79V21h1.79Zm3.3-3.29a2.76,2.76,0,0,0,.32,1.47,1.13,1.13,0,0,0,1,.5,1.12,1.12,0,0,0,1-.49,2.79,2.79,0,0,0,.31-1.48,2.73,2.73,0,0,0-.31-1.46,1.15,1.15,0,0,0-1-.48,1.14,1.14,0,0,0-1,.48A2.7,2.7,0,0,0,171.4,24.21Zm4.53,0a3.52,3.52,0,0,1-.84,2.5,3,3,0,0,1-2.35.91,3.32,3.32,0,0,1-1.66-.41A2.84,2.84,0,0,1,170,26a4,4,0,0,1-.39-1.81,3.47,3.47,0,0,1,.84-2.49,3,3,0,0,1,2.35-.89,3.26,3.26,0,0,1,1.67.41,2.73,2.73,0,0,1,1.11,1.17A4.08,4.08,0,0,1,175.93,24.21Z" }, void 0)] }), void 0));
};
var ByMoralis = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "colour" : _b, _c = _a.width, width = _c === void 0 ? 250 : _c, style = _a.style;
    if (variant === "light") {
        return jsx(PoweredByLight, { style: __assign({ width: width }, style) }, void 0);
    }
    if (variant === "dark") {
        return jsx(PoweredByDark, { style: __assign({ width: width }, style) }, void 0);
    }
    return jsx(PoweredByColour, { style: __assign({ width: width }, style) }, void 0);
};

export { ByMoralis, MoralisContext, MoralisProvider, NoMoralisContextProviderError, NotAuthenticatedError, ReactMoralisError, ValidationError, getChain, getSupportedChains, resolveIPFS, useApiContract, useChain, useERC20Balances, useERC20Transfers, useEnsAddress, useEnsName, useFiatBuy, useMoralis, useMoralisCloudFunction, useMoralisFile, useMoralisQuery, useMoralisSolanaApi, useMoralisSolanaCall, useMoralisSubscription, useMoralisWeb3Api, useMoralisWeb3ApiCall, useNFTBalances, useNFTTransfers, useNativeBalance, useNativeTransactions, useNewMoralisObject, useOneInchQuote, useOneInchSwap, useOneInchTokens, useOpenSeaAsset, useOpenSeaBuyOrder, useOpenSeaOrders, useOpenSeaSellOrder, useRaribleLazyMint, useRaribleSellOrder, useTokenPrice, useWeb3Contract, useWeb3ExecuteFunction, useWeb3Transfer };
//# sourceMappingURL=index.esm.js.map
