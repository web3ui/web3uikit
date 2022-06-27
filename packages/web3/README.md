<img src="https://user-images.githubusercontent.com/13779759/160237628-381adb19-d439-4df6-98af-c3cb67ba5b5c.svg" width="500px" alt="web3uiKit logo" />

# Web3UIKit!

Beautiful and lightweight UI components for web3 developers.
This UI library will speed up your dapp development no matter which chain you build on.

[![CI](https://github.com/web3ui/web3uikit/actions/workflows/main.yml/badge.svg)](https://github.com/web3ui/web3uikit/actions/workflows/main.yml)

Live StoryBook DEMO: https://web3ui.github.io/web3uikit/

![Moralis-NFT-Marketplace](https://user-images.githubusercontent.com/11097108/149983225-cac8b881-a75d-4922-a3d2-8f13dfad37be.png)

# ⭐️ `Star us`

If this ui-kit helps you build your dApps faster - please star this project, every star makes us very happy!

# 🤝 `Need help?`

If you need help with setting up the boilerplate or have other questions - don't hesitate to write in our community forum and we will check asap. [Forum link](https://forum.moralis.io). The best thing about this boilerplate is the super active community ready to help at any time! We help each other.

# 🚀 `Quick Start`

### 💿 Installation

```bash
npm install @web3uikit/web3
```

or

```bash
yarn add @web3uikit/web3
```

### 🧰 Usage

Follow [moralis docs](https://docs.moralis.io/moralis-dapp/connect-the-sdk/connect-with-react) to start your server and connect to SDK. This required to use components in this package.

```jsx
import { NFT } from '@web3uikit/web3';

const App = () => (
    <>
        <NFT
            address="0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"
            chain="eth"
            fetchMetadata={true}
            tokenId="1"
        />
    </>
);
```

### ▲ Usage with Next.js

If you are using `web3uikit` with Next.js, be sure to follow the [official guide](https://github.com/vercel/next.js/tree/canary/examples/with-styled-components-babel), since we are using `styled-components` under the hood.

# 🧭 `Table of contents`

-   [Web3UIKit!](#web3uikit)
-   [⭐️ `Star us`](#️-star-us)
-   [🤝 `Need help?`](#-need-help)
-   [🚀 `Quick Start`](#-quick-start)
    -   [💿 Installation](#-installation)
    -   [🧰 Usage](#-usage)
-   [🧭 `Table of contents`](#-table-of-contents)
-   [⛓ `Web3 Components`](#-web3-components)
    -   [`<ConnectButton />`](#connectbutton-)
    -   [`<NFT />`](#nft-)

# ⛓ `Web3 Components`

### `<ConnectButton />`

![ConnectBtnNew](https://user-images.githubusercontent.com/78314301/154008380-9f49c070-7886-4b76-ad83-4222b2a78c99.gif)

The `<ConnectButton />` component allows you to make [web3 authenticating](https://github.com/MoralisWeb3/react-moralis#authenticate-web3) users in case your server is initialized. When the server is not initialized, or for example, you have `<MoralisProvider initializeOnMount={false} >` and you don't want to connect your Moralis server to the frontend the smart component will call [enableWeb3()](https://github.com/MoralisWeb3/react-moralis#enable-web3-via-metamask)

If you want to use this component with the connected server but without adding a user to Moralis Database you can add the `moralisAuth` prop <ConnectButton moralisAuth={false} />

The ConnectButton component automatically adds to the local storage info about the connector user used and will automatically call enableWeb3() after rereshing the page. So if user was connected once it will automatically initialize web3 connection(No need anymore to add UseEffect hook for enableWeb3() after refrshing the page)

Try the `<ConnectButton />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/1-web3-connectbutton--default)

### `<NFT />`

![NFT](https://user-images.githubusercontent.com/35369843/163435770-2d639007-714c-4f83-99f9-39d7a9814138.gif)

The `<NFT />` component allows you to display a single NFT as Card. By clicking on the card you can also view all the traits of the NFT.It uses hooks from [react-moralis](https://docs.moralis.io/moralis-dapp/web3-sdk/account) to fetch the NFT.

If you want to use this component wrap your app with `<MoralisProvider appId={MORALIS_APP_ID} serverUrl={MORALIS_SERVER_URL} ></MoralisProvider >`. Read more about moralis [here](https://docs.moralis.io/introduction/readme)

Try the `<NFT />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/story/1-web3-nft--crypto-punk-01)

### `<NFTBalance />`

![NFTBalance](https://user-images.githubusercontent.com/35369843/163435985-21b43541-a5bf-4218-8981-3466f9af4b63.gif)

The `<NFTBalance />` component allows you to display all the NFT's an address owns. It uses hooks from [react-moralis](https://docs.moralis.io/moralis-dapp/web3-sdk/account) to fetch all NFT's of an address.

If you want to use this component wrap your app with `<MoralisProvider appId={MORALIS_APP_ID} serverUrl={MORALIS_SERVER_URL} ></MoralisProvider >`. Read more about moralis [here](https://docs.moralis.io/introduction/readme)

Try the `<NFTBalance />` component in the [interactive documentation](http://localhost:6006/?path=/docs/1-web3-nft-balance--default)
