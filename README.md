<img src="https://user-images.githubusercontent.com/13779759/160237628-381adb19-d439-4df6-98af-c3cb67ba5b5c.svg" width="500px" alt="web3uiKit logo"/>

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
npm install @web3uikit/core @web3uikit/web3 @web3uikit/icons
```

or

```bash
yarn add  @web3uikit/core @web3uikit/web3 @web3uikit/icons
```

ℹ️ Each package can be installed separately.

### 🧰 Usage

```jsx
import { CryptoCards, Button } from '@web3uikit/core';

const App = () => (
    <>
        <CryptoCards
            chain="ethereum"
            bgColor="blue"
            chainType="Network"
            onClick={console.log}
        />
        <Button theme="primary" type="button" text="Launch Dapp" />
    </>
);
```

### ▲ Usage with Next.js

If you are using `web3uikit` with Next.js, be sure to follow the [official guide](https://github.com/vercel/next.js/tree/canary/examples/with-styled-components-babel), since we are using `styled-components` under the hood.

---

# 🧭 Table of Contents

-   [⭐️ Star us](#️-star-us)
-   [🤝 Need help](#-need-help)
-   [🚀 Quick start](#-quick-start)
-   [🧭 Table of Contents](#-table-of-contents)
-   [🏗️ New Components](#-new-components)
    <!-- -   [👩‍🔬 Advanced setup](#-advanced-setup) -->
-   [📦 Packages](#-packages)
    -   [Core module](#core-module)
    -   [Icons module](#icons-module)
    -   [Web3 module](#web3-module)
-   [🧙‍♂️ Community](#️-community)

<!-- # 👩‍🔬 Advanced setup

It's possible to install all functionalities of web3uikit by installing `web3uikit` as a dependency. But, you may choose to only install certain modules (as listed below). -->

# 🏗️ New Components

Remember to follow steps from [CONTRIBUTE.md](https://github.com/web3ui/web3uikit/blob/master/CONTRIBUTE.md) to setup your local environment.

## Want to add new component ?

-   run `pnpm new` in terminal and follow the interactive steps to generate templates for a new component.

## Want to add new icon ?

-   Add the svg file(s) to `web3uikit/packages/icons/src/lib/svgs/` (remember to give meaningful filename, as filename gets converted to icon name)
-   run `pnpm run icons:create` in terminal and your icon is created. 🔥
-   To verify your newly added icon run `pnpm storybook-build`. Once storybook is open, navigate to `8.ICONS/Gallery` and search for your icon.

## Want to add a new Chain Logo ?

-   run `pnpm plop "ChainLogo" -- --name "<CHAIN NAME HERE>" --color "<BACKGROUND COLOR HERE>"`

    example => `pnpm plop "ChainLogo" -- --name "ethereum" --color "#396993"`

-   Now in your code editor navigate to `web3uikit/packages/core/src/lib/Illustrations/images/chains`, here a new file must be created with your chain name, in this file replace `<></>` with your chain `svg code`.
-   To verify your newly added chain logo run `pnpm storybook-build`. Once storybook is open:
    -   navigate to `6.Graphic`, and your chain logo should be added to `Illustration` and `CryptoLogo` component.
    -   navigate to `4.UI/CryptoCards`, and your chain logo should be added here as well. 😃

# 📦 Packages

## Core module

The core module contains all the basic ui components like button, input, dropdown etc

| package                                      | Version | Changelog | Description                        |
| -------------------------------------------- | ------- | --------- | ---------------------------------- |
| [@web3uikit/core](./packages/core/README.md) | TODO    | TODO      | Contains all the basic UI elements |

## Icons module

Create an issue with svg code to add more icons or feel free to raise a PR.

| package                                        | Version | Changelog | Description            |
| ---------------------------------------------- | ------- | --------- | ---------------------- |
| [@web3uikit/icons](./packages/icons/README.md) | TODO    | TODO      | Contains various icons |

## Web3 module

These are components which have `moralis` and `react-moralis` dependency.

| package                                      | Version | Changelog | Description                      |
| -------------------------------------------- | ------- | --------- | -------------------------------- |
| [@web3uikit/web3](./packages/web3/README.md) | TODO    | TODO      | Contains all the web3 components |

‼️ Moralis servers will be deprecated soon. To continue using this package, self host your server by following the steps from [moralis docs](https://docs.moralis.io/docs/v1-server-self-hosting#next-steps)

# 🚨 Breaking Changes

-   `Icon` component does not exist anymore.
-   All component prop type using `TIconType` are now converted to `JSX.Element`. List of components that used TIconType prop are:

    -   Button
    -   Credentials
    -   CryptoCards
    -   Dropdown
    -   Input
    -   Notification
    -   PopoverElement
    -   Select

# 🧙‍♂️ Community

-   [Discord](https://discord.gg/moralis)
-   [Forum](https://forum.moralis.io)
