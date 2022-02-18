# Web3UIKit

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
        <Button theme="primary" type="button">
            Launch dApp
        </Button>
    </>
);
```

# 🧭 `Table of contents`

-   [`web3uikit`](#web3uikit-%EF%B8%8F)
-   [🚀 Quick Start](#-quick-start)
    -   [💿 Installation](#-installation)
    -   [🧰 Usage](#-usage)
-   [🧭 Table of contents](#-table-of-contents)
-   [⛓ Web3 Components](#-web3-components)
    -   [`<ConnectButton />`](#connectbutton-)
-   [📖 UI Components](#-ui-components)
    -   [`<Avatar />`](#avatar-)
    -   [`<BannerStrip />`](#bannerstrip-)
    -   [`<Breadcrumbs />`](#breadcrumbs-)
    -   [`<Card />`](#card-)
    -   [`<CryptoCards />`](#cryptocards-)
    -   [`<Icon />`](#icon-)
    -   [`<Illustration />`](#illustration-)
    -   [`<Information />`](#information-)
    -   [`<LinkTo />`](#linkto-)
    -   [`<Logo />`](#logo-)
    -   [`<Notification />`](#notification-)
    -   [`<Table />`](#table-)
    -   [`<Tag />`](#tag-)
-   [⚙️ Interaction Components](#%EF%B8%8F-interaction-components)
    -   [`<Button />`](#button-)
    -   [`<Checkbox />`](#checkbox-)
    -   [`<Form />`](#form-)
    -   [`<Input />`](#input-)
    -   [`<Radios />`](#radios-)
    -   [`<Select />`](#select-)
    -   [`<TextArea />`](#textarea-)
-   [🎉 Popup](#-popup)
    -   [`<Modal />`](#modal-)
    -   [`<Tooltip />`](#tooltip-)

# ⛓ `Web3 Components`

### `<ConnectButton />`

![ConnectBtnNew](https://user-images.githubusercontent.com/78314301/154008380-9f49c070-7886-4b76-ad83-4222b2a78c99.gif)

The `<ConnectButton />` component allows you to make [web3 authenticating](https://github.com/MoralisWeb3/react-moralis#authenticate-web3) users in case your server is initialized. When the server is not initialized, or for example, you have `<MoralisProvider initializeOnMount={false} >` and you don't want to connect your Moralis server to the frontend the smart component will call [enableWeb3()](https://github.com/MoralisWeb3/react-moralis#enable-web3-via-metamask)

If you want to use this component with the connected server but without adding a user to Moralis Database you can add the `moralisAuth` prop <ConnectButton moralisAuth={false} />

The ConnectButton component automatically adds to the local storage info about the connector user used and will automatically call enableWeb3() after rereshing the page. So if user was connected once it will automatically initialize web3 connection(No need anymore to add UseEffect hook for enableWeb3() after refrshing the page)

Try the `<ConnectButton />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/web3-connectbutton--default)

# 📖 `UI Components`

### `<Avatar />`

![avatar](https://user-images.githubusercontent.com/78314301/149967253-4e209eb2-6d0f-4222-96bc-7e74c4cc6dfd.gif)

Try the `<Avatar />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/ui-avatar--avatar-image-default)

### `<BannerStrip />`

![BannerStrip](https://user-images.githubusercontent.com/78314301/149967389-27af6b7e-f71c-4d1b-aee5-f8b3d3eb7080.gif)

Try the `<BannerStrip />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/ui-bannerstrip--standard)

### `<Breadcrumbs />`

![Breadcrumbs](https://user-images.githubusercontent.com/89942527/150335190-814ccd3f-b593-4a08-928f-e2ade7e74ba7.gif)

Try the `<Breadcrumbs />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/ui-breadcrumbs--one)

### `<Card />`

![Card](https://user-images.githubusercontent.com/78314301/150301096-bb5217e7-d88f-4744-8bcf-9a5af05e47de.gif)

Try the `<Card />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/ui-card--regular)

### `<CryptoCards />`

![CryptoCards](https://user-images.githubusercontent.com/78314301/149967411-e26f6584-1b38-4467-9a80-8b05831ffbaf.gif)

Try the `<CryptoCards />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/ui-crypto-cards--ethereum)

### `<Icon />`

![Icon](https://user-images.githubusercontent.com/78314301/149967423-af2d950e-100a-4a36-a68b-f4ad99894994.gif)

Try the `<Icon />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/ui-icon--example)

### `<Illustration />`

![Illustration](https://user-images.githubusercontent.com/78314301/149967432-00e8f27c-5fa4-4e7d-bb4f-5ddcfa67475b.gif)

![Illustration2](https://user-images.githubusercontent.com/78314301/149967441-215e79db-54d7-4eec-856a-0335778a07a5.jpg)

Try the <Illustration />` component in the [interactive documentation](<https://web3ui.github.io/web3uikit/?path=/docs/ui-illustration--ethereum&globals=backgrounds.value:!hex(041836)>)

### `<Information />`

![Information](https://user-images.githubusercontent.com/78314301/149967475-f7e055d1-5894-4c50-9c66-38939ba72d94.png)

Try the `<Information />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/ui-information--regular)

### `<LinkTo />`

![LinkTo](https://user-images.githubusercontent.com/78314301/149967486-6bc37003-7fd4-42c3-ac72-33e798260d60.gif)

Try the `<LinkTo />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/ui-linkto--external-link)

### `<Logo />`

![Logo](https://user-images.githubusercontent.com/78314301/149967496-33652586-57ff-4d64-a88f-9e93305085ae.gif)

Try the `<Logo />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/story/ui-logo--logo-icon-black&globals=backgrounds.value:transparent;backgrounds.grid:false)

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

Try the `<Notification />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/ui-notification--regular)

### `<Table />`

![Table](https://user-images.githubusercontent.com/78314301/149967517-735b9f99-7848-47d5-8342-c4c06ba4562b.gif)

Try the `<Table />` component in the [interactive documentation](http://web3ui.github.io/?path=/story/ui-table--default-table&globals=backgrounds.value:transparent)

### `<Tag />`

![Tag](https://user-images.githubusercontent.com/78314301/149967535-9f1ea1cb-d86d-4fdd-86c3-410e0ba3698e.gif)

Try the `<Tag />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/ui-tag--regular)

# ⚙️ `Interaction Components`

### `<Button />`

![Button](https://user-images.githubusercontent.com/78314301/149967549-137516af-95c2-4ea2-bf4b-eafd2924a495.gif)

Try the `<Button />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/interaction-button--primary)

### `<Checkbox />`

![Checkbox](https://user-images.githubusercontent.com/78314301/149967557-c5d3a841-36a4-4448-9ba6-45e9fc3981d4.gif)

Try the `<Checkbox />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/interaction-checkbox-switch--box)

### `<Form />`

![Form](https://user-images.githubusercontent.com/78314301/149967564-94c0dee7-be93-4d14-a495-2a18274652a7.gif)

Try the `<Form />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/interaction-form--demo-form)

### `<Input />`

![Input](https://user-images.githubusercontent.com/78314301/149967573-a4ae7a56-f747-4012-8472-c9679e24b503.gif)

Try the `<Input />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/interaction-input--text-input)

### `<Radios />`

![Radios](https://user-images.githubusercontent.com/78314301/149967585-baeac5ea-0130-482b-adac-38bc3e6b70a6.gif)

Try the `<Radios />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/interaction-radios--radio-group)

### `<Select />`

![Select](https://user-images.githubusercontent.com/78314301/149967597-fe3163d6-2459-4e40-ad14-eb9c9f1707f0.gif)

Try the `<Select />` component in the [interactive documentation](http://web3ui.github.io/?path=/story/interaction-select--default&globals=backgrounds.value:transparent)

### `<TextArea />`

![TextArea](https://user-images.githubusercontent.com/78314301/149967623-d1e1dbfc-b2c7-4acb-9c2a-e2ac0fe2bc3c.gif)

Try the `<TextArea />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/interaction-textarea--standard)

# 🎉 `Popup`

### `<Modal />`

![Modal2](https://user-images.githubusercontent.com/78314301/149968047-5844ac05-5ea0-484c-b1fd-137641824de0.gif)

Try the `<Modal />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/popup-modal--regular)

### `<Tooltip />`

![Tooltip](https://user-images.githubusercontent.com/78314301/149967796-9ce75474-ae3f-415b-8d7c-a67b8c18885d.gif)

Try the `<Tooltip />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/popup-tooltip--bottom)
