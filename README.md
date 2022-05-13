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
npm install web3uikit
```

or

```bash
yarn add web3uikit
```

### 🧰 Usage

```jsx
import { CryptoCards, Button } from 'web3uikit';

const App = () => (
    <>
        <CryptoCards chain="ethereum" />
        <Button theme="primary" type="button" text="Launch Dapp" />
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
-   [📖 `UI Components`](#-ui-components)
    -   [`<Accordion />`](#accordion-)
    -   [`<Avatar />`](#avatar-)
    -   [`<Badge />`](#badge-)
    -   [`<BannerStrip />`](#bannerstrip-)
    -   [`<Breadcrumbs />`](#breadcrumbs-)
    -   [`<Card />`](#card-)
    -   [`<CryptoCards />`](#cryptocards-)
    -   [`<CryptoLogos />`](#cryptologos-)
    -   [`<Icon />`](#icon-)
    -   [`<Illustration />`](#illustration-)
    -   [`<Information />`](#information-)
    -   [`<LinkTo />`](#linkto-)
    -   [`<Logo />`](#logo-)
    -   [`<Notification />`](#notification-)
    -   [`<Table />`](#table-)
    -   [`<Tag />`](#tag-)
    -   [`<Todo />`](#todo-)
    -   [`<Widget />`](#widget-)
-   [⚙️ `Interaction Components`](#️-interaction-components)
    -   [`<Button />`](#button-)
    -   [`<Checkbox />`](#checkbox-)
    -   [`<CodeArea />`](#codearea-)
    -   [`<Credentials />`](#credentials-)
    -   [`<Form />`](#form-)
    -   [`<Input />`](#input-)
    -   [`<Radios />`](#radios-)
    -   [`<Select />`](#select-)
    -   [`<TextArea />`](#textarea-)
-   [🎉 `Popup`](#-popup)
    -   [`<Modal />`](#modal-)
    -   [`<Tooltip />`](#tooltip-)

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

# 📖 `UI Components`

### `<Accordion />`

The accordion component is a nice user interface element that can allow you to show and hide text or other components, so you do not overwhelm your user with too much awesome content

![accordion](https://user-images.githubusercontent.com/13779759/161834402-ba7a847f-dcf1-48d5-a42d-f934117886dd.png)

Try the `<Accordion />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/story/3-layout-accordion)

### `<Avatar />`

![avatar](https://user-images.githubusercontent.com/78314301/149967253-4e209eb2-6d0f-4222-96bc-7e74c4cc6dfd.gif)

Try the `<Avatar />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/6-graphic-avatar)

### `<Badge />`

![badge](https://user-images.githubusercontent.com/35369843/162045684-fbcfe50f-79b3-452b-86a4-d546d19a3d43.png)

Try the `<Badge />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/story/4-ui-badge--all)

### `<BannerStrip />`

![BannerStrip](https://user-images.githubusercontent.com/78314301/149967389-27af6b7e-f71c-4d1b-aee5-f8b3d3eb7080.gif)

Try the `<BannerStrip />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/5-popup-bannerstrip)

### `<Breadcrumbs />`

![Breadcrumbs](https://user-images.githubusercontent.com/89942527/150335190-814ccd3f-b593-4a08-928f-e2ade7e74ba7.gif)

Try the `<Breadcrumbs />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/4-ui-breadcrumbs)

### `<Card />`

![Card](https://user-images.githubusercontent.com/78314301/150301096-bb5217e7-d88f-4744-8bcf-9a5af05e47de.gif)

Try the `<Card />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/4-ui-card)

### `<CryptoCards />`

![CryptoCards](https://user-images.githubusercontent.com/78314301/149967411-e26f6584-1b38-4467-9a80-8b05831ffbaf.gif)

Try the `<CryptoCards />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/4-ui-crypto-cards)

### `<CryptoLogos />`

![CryptoLogos](https://user-images.githubusercontent.com/35369843/162805867-b7bf12a9-fc4f-4098-927b-497252fe46fc.gif)

Try the `<CryptoLogos />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/story/6-graphic-crypto-logos--ethereum)

### `<Icon />`

![Icon](https://user-images.githubusercontent.com/78314301/149967423-af2d950e-100a-4a36-a68b-f4ad99894994.gif)

Try the `<Icon />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/6-graphic-icon)

### `<Illustration />`

![Illustration](https://user-images.githubusercontent.com/78314301/149967432-00e8f27c-5fa4-4e7d-bb4f-5ddcfa67475b.gif)

![Illustration2](https://user-images.githubusercontent.com/78314301/149967441-215e79db-54d7-4eec-856a-0335778a07a5.jpg)

Try the <Illustration />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/6-graphic-illustration)

### `<Information />`

![Information](https://user-images.githubusercontent.com/78314301/149967475-f7e055d1-5894-4c50-9c66-38939ba72d94.png)

Try the `<Information />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/4-ui-information)

### `<LinkTo />`

LinkTo component is a simple link component that can be used to navigate to another page or to another component.

![LinkTo](https://user-images.githubusercontent.com/78314301/149967486-6bc37003-7fd4-42c3-ac72-33e798260d60.gif)

Try the `<LinkTo />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/4-ui-linkto)

### `<Logo />`

Logo component is a simple logo component having moralis or other icons that can be used in any layout.

![Logo](https://user-images.githubusercontent.com/78314301/149967496-33652586-57ff-4d64-a88f-9e93305085ae.gif)

Try the `<Logo />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/6-graphic-logo)

### `<Notification />`

![NotificationHook](https://user-images.githubusercontent.com/78314301/152943290-3e302d97-6c01-4273-9b3a-f7cb5beff77d.gif)

To call the `Notification` component use the `useNotification()` hook. Example:

```jsx
const App = () => {
    const dispatch = useNotification();

    const handleNewNotification = () => {
        dispatch({
            type: 'info',
            message: 'Somebody messaged you',
            title: 'New Notification',
            icon,
            position: position || 'topR',
        });
    };

    return (
        <>
            <Button
                text="Error"
                onClick={handleNewNotification}
                theme="colored"
                color="red"
                isFullWidth={true}
            />
        </>
    );
};
```

Requires the application to be within a `<NotificationProvider>`

Example:

```jsx
<NotificationProvider>
    <App />
<NotificationProvider>
```

Try the `<Notification />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/5-popup-notification)

### `<Table />`

![Table](https://user-images.githubusercontent.com/78314301/149967517-735b9f99-7848-47d5-8342-c4c06ba4562b.gif)

Try the `<Table />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/3-layout-table)

### `<Tag />`

![Tag](https://user-images.githubusercontent.com/78314301/149967535-9f1ea1cb-d86d-4fdd-86c3-410e0ba3698e.gif)

Try the `<Tag />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/4-ui-tag)

### `<Todo />`

![Todo](https://user-images.githubusercontent.com/16763860/161817468-2eedf624-145c-40bb-afcf-67d8d946b1c7.gif)

Try the `<Todo />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/4-ui-todo)

### `<Widget />`

![Widget](https://user-images.githubusercontent.com/16763860/162152763-bf3179d5-6fd7-458f-abb9-d8db42db41b7.gif)

Try the `<Widget />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/4-ui-widget)

# ⚙️ `Interaction Components`

### `<Button />`

![Button](https://user-images.githubusercontent.com/78314301/149967549-137516af-95c2-4ea2-bf4b-eafd2924a495.gif)

Try the `<Button />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/2-forms-button)

### `<Checkbox />`

![Checkbox](https://user-images.githubusercontent.com/78314301/149967557-c5d3a841-36a4-4448-9ba6-45e9fc3981d4.gif)

Try the `<Checkbox />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/2-forms-checkbox-switch)

### `<CodeArea />`

![CodeArea](https://user-images.githubusercontent.com/35369843/163712210-4e422e57-bc8d-4af0-a6a0-fa8e3b1fa207.png)

Try the `<CodeArea />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/story/2-forms-codearea--multiple-lines)

### `<Credentials />`

![Credentials](https://user-images.githubusercontent.com/35369843/162796378-1f9abda6-ce04-4c9b-bd05-ef0b5df48ebc.gif)

Try the `<Credentials />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/story/2-forms-credentials--with-title-and-icon)

### `<Form />`

![Form](https://user-images.githubusercontent.com/78314301/149967564-94c0dee7-be93-4d14-a495-2a18274652a7.gif)

Try the `<Form />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/2-forms-form)

### `<Input />`

![Input](https://user-images.githubusercontent.com/78314301/149967573-a4ae7a56-f747-4012-8472-c9679e24b503.gif)

Try the `<Input />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/2-forms-input)

### `<Radios />`

![Radios](https://user-images.githubusercontent.com/78314301/149967585-baeac5ea-0130-482b-adac-38bc3e6b70a6.gif)

Try the `<Radios />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/2-forms-radios)

### `<Select />`

![Select](https://user-images.githubusercontent.com/78314301/149967597-fe3163d6-2459-4e40-ad14-eb9c9f1707f0.gif)

Try the `<Select />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/2-forms-select)

### `<TextArea />`

![TextArea](https://user-images.githubusercontent.com/78314301/149967623-d1e1dbfc-b2c7-4acb-9c2a-e2ac0fe2bc3c.gif)

Try the `<TextArea />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/2-forms-textarea)

# 🎉 `Popup`

### `<Modal />`

Modal is a popup that can have arbitary elements and can be closed by clicking on the close or cancel buttons.

![Modal2](https://user-images.githubusercontent.com/78314301/149968047-5844ac05-5ea0-484c-b1fd-137641824de0.gif)

Try the `<Modal />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/5-popup-modal)

### `<Tooltip />`

![Tooltip](https://user-images.githubusercontent.com/78314301/149967796-9ce75474-ae3f-415b-8d7c-a67b8c18885d.gif)

Try the `<Tooltip />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/5-popup-tooltip)
