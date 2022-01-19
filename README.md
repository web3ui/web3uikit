
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
    <Button theme="primary" type="button">Launch dApp</Button>
  </>
);
```

# 🧭 `Table of contents`

- [`web3uikit`](#web3uikit)
- [🚀 Quick Start](#-quick-start)
  - [💿 Installation](#installation-)
  - [🧰 Usage](#avatar-)
- [🧭 Table of contents](#-table-of-contents)
- [📖 UI Components](#-ui-components)
  - [`<Avatar />`](#avatar-)
  - [`<BannerStrip />`](#bannerstrip-)
  - [`<Breadcrumbs />`](#breadcrumbs-)
  - [`<Card />`](#card-)
  - [`<CryptoCards />`](#cryptocards-)
  - [`<Icon />`](#icon-)
  - [`<Illustration />`](#illustration-)
  - [`<Information />`](#information-)
  - [`<LinkTo />`](#linkto-)
  - [`<Logo />`](#logo)
  - [`<Notification />`](#notification-)
  - [`<Table />`](#table)
  - [`<Tag />`](#tag)
- [⚙️ Interaction Components](#-interaction-components)
  - [`<Button />`](#button)
  - [`<Checkbox />`](#checkbox)
  - [`<Form />`](#form)
  - [`<Input />`](#input)
  - [`<Radios />`](#radios)
  - [`<Select />`](#radios)
  - [`<TextArea />`](#textarea)
- [🎉 Popup](#-popup)
  - [`<Modal />`](#modal)
  - [`<Tooltip />`](#tooltip)


# 📖 `UI Components`

### `<Avatar />`
![avatarRound](https://user-images.githubusercontent.com/62478924/150039555-e70a433b-bbee-44e1-b507-f2f396d1d14f.gif)



Try the `<Avatar />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/ui-avatar--avatar-image-default)

### `<BannerStrip />`

  <img src="https://user-images.githubusercontent.com/62478924/150036545-bec7480b-d15b-44d6-87d0-1b114f630bf3.gif" />


Try the `<BannerStrip />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/ui-bannerstrip--standard)

### `<Breadcrumbs />`
![BreadCrumbsRounded](https://user-images.githubusercontent.com/62478924/150036908-668bb3de-a6c6-4de1-8fdc-4cb5ba322064.gif)

Try the `<Breadcrumbs />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/ui-breadcrumbs--one)

### `<Card />`
![CardRounded](https://user-images.githubusercontent.com/62478924/150037088-5df68268-3787-434d-a75d-73998a99c809.gif)

Try the `<Card />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/ui-card--regular)

### `<CryptoCards />`
![CryptoCardRounded](https://user-images.githubusercontent.com/62478924/150037220-6c531c52-1bf7-4e5d-b4c6-5c07f6a24785.gif)

Try the `<CryptoCards />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/ui-crypto-cards--ethereum)

### `<Icon />`
![IconRounded](https://user-images.githubusercontent.com/62478924/150037274-c4246083-04ed-4fde-a411-f4ae8ca2f3fb.gif)

Try the `<Icon />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/ui-icon--example)

### `<Illustration />`
![IllustrationRounded](https://user-images.githubusercontent.com/62478924/150037422-96295b55-5b1c-4252-9fb1-e1a027346bc6.gif)

![ethImage](https://user-images.githubusercontent.com/62478924/150039883-5a9cf1c9-109d-4247-8ce5-ae5c2c6d726a.png)

Try the <Illustration />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/ui-illustration--ethereum&globals=backgrounds.value:!hex(041836))

### `<Information />`
![InfoRound](https://user-images.githubusercontent.com/62478924/150039975-8844bd85-2836-435b-b076-e535959c5cdf.png)

Try the `<Information />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/ui-information--regular)

### `<LinkTo />`
![LinkToRounded](https://user-images.githubusercontent.com/62478924/150039413-a9534ea9-1dba-4905-b323-216ccb61c320.gif)

Try the `<LinkTo />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/ui-linkto--external-link)

### `<Logo />`
![LogoRounded](https://user-images.githubusercontent.com/62478924/150037629-acab09be-6138-4408-b1b2-7d4dc43ccbdf.gif)

Try the `<Logo />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/story/ui-logo--logo-icon-black&globals=backgrounds.value:transparent;backgrounds.grid:false)

### `<Notification />`
![NotificationRounded](https://user-images.githubusercontent.com/62478924/150037832-9bc334d0-2505-405c-9e82-3715e931ac30.gif)

Try the `<Notification />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/ui-notification--regular)

### `<Table />`
![TableRounded](https://user-images.githubusercontent.com/62478924/150037836-24f971fe-3430-433b-ba99-4903b97185f9.gif)

Try the `<Table />` component in the [interactive documentation](http://web3ui.github.io/?path=/story/ui-table--default-table&globals=backgrounds.value:transparent)

### `<Tag />`
![TagRounded](https://user-images.githubusercontent.com/62478924/150037893-e696f2df-a9b2-4a1d-acb8-916f2766990f.gif)

Try the `<Tag />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/ui-tag--regular)



# ⚙️ `Interaction Components`

### `<Button />`
![ButtonRounded](https://user-images.githubusercontent.com/62478924/150037936-8535978c-133d-4ba6-8691-1ddc0689da9d.gif)

Try the `<Button />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/interaction-button--primary)

### `<Checkbox />`
![CheckboxRounded](https://user-images.githubusercontent.com/62478924/150038230-37b55e64-edc8-49df-93cd-0d4ca26f3aeb.gif)

Try the `<Checkbox />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/interaction-checkbox-switch--box)

### `<Form />`
![Form](https://user-images.githubusercontent.com/62478924/150038284-db56303e-f6bb-49da-8a5b-3c19bac8b907.gif)

Try the `<Form />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/interaction-form--demo-form)

### `<Input />`
![InputRounded](https://user-images.githubusercontent.com/62478924/150038418-9dad7bfd-d649-4e00-849a-a6f1608473a9.gif)

Try the `<Input />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/interaction-input--text-input)

### `<Radios />`
![RadioRounded](https://user-images.githubusercontent.com/62478924/150038417-352adad4-30f3-45d7-8f4c-04be146c7d21.gif)

Try the `<Radios />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/interaction-radios--radio-group)

### `<Select />`
![SelectRounded](https://user-images.githubusercontent.com/62478924/150038413-9950fd55-744d-405e-bd50-a5ab89c052ac.gif)

Try the `<Select />` component in the [interactive documentation](http://web3ui.github.io/?path=/story/interaction-select--default&globals=backgrounds.value:transparent)

### `<TextArea />`
![TextFieldRounded](https://user-images.githubusercontent.com/62478924/150038408-8e553117-3f96-4514-a1fd-2d38a78037ed.gif)

Try the `<TextArea />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/interaction-textarea--standard)

# 🎉 `Popup`

### `<Modal />`
![ModalRounded](https://user-images.githubusercontent.com/62478924/150038631-7c012cd1-5a13-4956-90c8-af234b78e04f.gif)

Try the `<Modal />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/popup-modal--regular)

### `<Tooltip />`
![TooltipRounded](https://user-images.githubusercontent.com/62478924/150038637-fe00a84c-2fce-4fc6-ba42-f2ca9afb4fea.gif)

Try the `<Tooltip />` component in the [interactive documentation](https://web3ui.github.io/web3uikit/?path=/docs/popup-tooltip--bottom)

