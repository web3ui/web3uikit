<div align="center">
    <p align="center">
      <img src="./docs/head.png" alt="React Hook Form Logo - React hook custom hook for form validation" />
    </p>
</div>

<div align="center">

![npm](https://img.shields.io/npm/v/react-moralis)
![node-current](https://img.shields.io/node/v/react-moralis)
![GitHub last commit](https://img.shields.io/github/last-commit/MoralisWeb3/react-moralis)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-moralis)
![npm type definitions](https://img.shields.io/npm/types/react-moralis)

</div>

# `react-moralis`

> React components and hooks for your Moralis project

This project is a thin React wrapper around [Moralis](https://moralis.io/), to easily call functionalities and display data.

Please check the [official documentation of Moralis](https://docs.moralis.io/#user) for all the functionalities of Moralis.

# ⚙️ Quick start

Make sure to have `react`, `react-dom` and `moralis` installed as dependencies, then install `react-moralis`

In short:

```sh
npm install react react-dom moralis react-moralis
```

or

```sh
yarn add react react-dom moralis react-moralis
```

> Make sure to also  `moralis` to the latest version, when you update `react-moralis`.

Then wrap your app in a `<MoralisProvider>`, and provide your appId and serverUrl:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { MoralisProvider } from "react-moralis";

ReactDOM.render(
  <MoralisProvider appId="xxxxxxxx" serverUrl="xxxxxxxx">
    <App />
  </MoralisProvider>,
  document.getElementById("root"),
);
```

And call the hooks inside your app:

```jsx
import React from "react";
import { useMoralis } from "react-moralis";

function App() {
  const { authenticate, isAuthenticated, user } = useMoralis();

  if (!isAuthenticated) {
    return (
      <div>
        <button onClick={() => authenticate()}>Authenticate</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome {user.get("username")}</h1>
    </div>
  );
}
```

# 🧭 Table of contents

- [`react-moralis`](#react-moralis)
- [⚙️ Quick start](#️-quick-start)
- [🧭 Table of contents](#-table-of-contents)
- [🚀 Usage](#-usage)
  - [Wrap your app in a `MoralisProvider`](#wrap-your-app-in-a-moralisprovider)
  - [`useMoralis()`](#usemoralis)
    - [Initialize](#initialize)
    - [Authenticate](#authenticate)
    - [Authentication state](#authentication-state)
    - [`authenticate()` (web3)](#authenticate-web3)
      - [Elrond](#elrond)
      - [Walletconnect](#walletconnect)
      - [Custom signing message](#custom-signing-message)
    - [`signup()` (non-crypto)](#signup-non-crypto)
    - [`login()` (non-crypto)](#login-non-crypto)
    - [`logout()`](#logout)
    - [Update the user with `setUserData()`](#update-the-user-with-setuserdata)
    - [Refetch user data `refetchUserData()`](#refetch-user-data-refetchuserdata)
  - [`useMoralisQuery()`](#usemoralisquery)
    - [Fetch Queries](#fetch-queries)
    - [Filter queries](#filter-queries)
    - [Automatic updates with dependencies](#automatic-updates-with-dependencies)
    - [Realtime / live queries](#realtime--live-queries)
  - [`useMoralisSubscription()`](#usemoralissubscription)
    - [Listen for query events](#listen-for-query-events)
  - [`useMoralisFile()`](#usemoralisfile)
    - [Save to Moralis](#save-to-moralis)
    - [Save to IPFS](#save-to-ipfs)
    - [Other options](#other-options)
  - [`useMoralisCloudFunction()`](#usemoraliscloudfunction)
    - [Trigger manually](#trigger-manually)
  - [`useMoralisWeb3Api()`](#usemoralisweb3api)
    - [Resolve data with `useMoralisWeb3ApiCall()`](#resolve-data-with-usemoralisweb3apicall)
  - [`useMoralisSolanaApi()`](#usemoralissolanaapi)
    - [Resolve data with `useMoralisSolanaApiCall()`](#resolve-data-with-usemoralissolanaapicall)
  - [`useNewMoralisObject()`](#usenewmoralisobject)
  - [`useWeb3ExecuteFunction()`](#useweb3executefunction)
  - [`useWeb3Transfer()`](#useweb3transfer)
  - [`useChain()`](#usechain)
  - [Web3-api wrappers](#web3-api-wrappers)
    - [`useApiContract()`](#useapicontract)
    - [`useERC20Balances()`](#useerc20balances)
    - [`useERC20Transfers()`](#useerc20transfers)
    - [`useNativeBalance()`](#usenativebalance)
    - [`useNativeTransactions()`](#usenativetransactions)
    - [`useNFTBalances()`](#usenftbalances)
    - [`useNFTTransfers()`](#usenfttransfers)
    - [`useTokenPrice()`](#usetokenprice)
    - [`useWeb3Contract()`](#useweb3contract)
  - [Dex Plugin Hooks](#dex-plugin-hooks)
    - [`useOneInchQuote()`](#useoneinchquote)
    - [`useOneInchSwap()`](#useoneinchswap)
    - [`useOneInchTokens()`](#useoneinchtokens)
  - [`Web3`](#web3)
    - [Enable web3 via metamask](#enable-web3-via-metamask)
    - [Enable web3 via Walletconnect](#enable-web3-via-walletconnect)
  - [Utils](#utils)
    - [Resolve/Lookup ens names](#resolvelookup-ens-names)
      - [`useEnsName`](#useensname)
      - [`useEnsAddress`](#useensaddress)
  - [Components](#components)
- [Handling responses](#handling-responses)
- [Webpack v5 support](#webpack-v5-support)
    - [configuring Webpack v5](#configuring-webpack-v5)
    - [create-react-app](#create-react-app)
- [😖 Error handling](#-error-handling)
- [⌨️ Typescript](#️-typescript)
- [⚛️ React native](#️-react-native)
- [🧑‍💻 Development](#-development)
  - [Examples](#examples)

# 🚀 Usage

## Wrap your app in a `MoralisProvider`

In order to let your components have access to Moralis functions, wrap your app in a `<MoralisProvider />` component. This will handle the whole initialization for you.
You need to provide the `appId` and `serverUrl`, which can be obtained from your dashboard.

```jsx
<MoralisProvider appId="xxxxxxxx" serverUrl="xxxxxxxx">
  <App />
</MoralisProvider>
```

This component will automatically initialize Moralis with the provided key and appId.
It will also keep the authentication of the user automatically in sync and easy accessible (see `useMoralis`), and give access to all the other hooks.

Now you can use the hooks below in all App.tsx and all of its children:

- `useMoralis` for authentication and user data
- `useMoralisQuery` for easy query
- `useMoralisCloudFunction` for easy cloud functions
- `useMoralisSubscription` for easy subscription
- `useMoralisFile` for easy file uploads

## `useMoralis()`

### Initialize
By wrapping your app in a `<MoralisProvider>`, it will automatically initialize with your provided appId and serverUrl:
```js
  <MoralisProvider 
    appId="xxxxxxxx"
    serverUrl="xxxxxxxx"
  >
    <App />
  </MoralisProvider>
```

If you want do not want to initialize automatically, but rather do it manually, you can provide the `initializeOnMount=false` prop:

```js
<MoralisProvider
  initializeOnMount={false}
>
  <App />
</MoralisProvider>
```

and then when you're ready to initialize, call `initialize`:
```js
const { initialize, isInitialized } = useMoralis()

<Button
  disabled={isInitialized}
  onClick={()=>{
    initialize({
      appId: 'xxx',
      serverUrl: 'xxx'
    })
  }}
>
  Initialize
</Button>
```

Or alternatively, you can set the `appId` and `serverUrl` on the `MoralisProvider` and call `initialize` without any params:


```js
<MoralisProvider
  initializeOnMount={false}
  appId="xxx"
  serverUrl="xxx"
>
  <App />
</MoralisProvider>
```
```js
const { initialize, isInitialized } = useMoralis()

<Button
  disabled={isInitialized}
  onClick={()=>{initialize()}}
>
  Initialize
</Button>
```

and then when you're ready to initialize, call `initialize`:
```js
const { initialize, isInitialized } = useMoralis()

<Button onClick={()=>{
  initialize({
    appId: 'xxx',
    serverUrl: 'xxx'
  })
}}>
  Initialize
</Button>
```

If you do not specify `initializeOnMount={false}`, or set `initializeOnMount={true}`, then you **must** specify the appId and serverUrl directly on `<MoralisProvider>` when the app renders.

### Authenticate

The `useMoralis` hook provides all the basics functionalities that you need for authentication and user data.

You can use it inside a component and have access to various data and functions:

```jsx
const { Moralis, isInitialized, ...rest } = useMoralis();
```

You will have access to the following values by using this hook:

| Option          | Description                                                     |
| --------------- | --------------------------------------------------------------- |
| `Moralis`       | The global Moralis instance (same as the global Moralis object) |
| `isInitialized` | A boolean, indicating if Moralis has been initialized           |
| `isInitializing` | A boolean, indicating if Moralis is currently initializing           |

| Option              | Description                                                                                                                                                                                                         |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `authenticate()`    | The authentication function, to authenticate via web3                                                                                                                                                               |
| `logout()`          | The logout function that will end the users session                                                                                                                                                                 |
| `signup()`          | The signup function that will signup a new user with an username and password                                                                                                                                       |
| `signin()`          | The signin function that will sign in a user with a username and password                                                                                                                                           |
| `auth`              | Auth state object (see below)                                                                                                                                                                                       |
| `authError`         | Error object when authentication failed (auth.state will be "error");                                                                                                                                               |
| `isAuthenticated`   | A boolean, indication if authenticated                                                                                                                                                                              |
| `isUnauthenticated` | A boolean, indication if user is authenticated                                                                                                                                                                      |
| `isAuthenticating`  | A boolean, indication if user is authenticating (started but not finished)                                                                                                                                          |
| `hasAuthError`      | A boolean, indication if authentication has an error                                                                                                                                                                |
| `isLoggingOut`      | A boolean, indication if the user is logging out (started but not finished)                                                                                                                                         |
| `isAuthUndefined`   | A boolean, indication if the authentication is unknown, this is the initial state, before checking if the user is already logged in. It will resolve withing a few ms into `isAuthenticated` or `isUnauthenticated` |

| Option          | Description                                                                                                                                                                       |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `setUserData()` | function to set userData and directly sync it in the app AND Moralis (see below)                                                                                                  |
| `user`          | user object from `Moralis.User.current`, containing the state of the logged in user. It automatically will be (un)set automatically when logging in and out, or setting user data |
| `enableWeb3`    | function to enable web3                                                                                                                                                           |
| `web3`          | The web3 instance of `Moralis.Web3`;                                                                                                                                              |
| `isWeb3Enabled` | Boolean to indicate if web3 has been enabled via the `enableWeb3` function                                                                                                        |
| `account` | address of the connected web3 wallet |
| `chainId` | chain id of the blockchain that the web3 wallet is connected to |

### Authentication state

The authentication state, and the user object will be updated, when the user authenticates or logs out.

The auth object has the following format:

```js
{
  state: "unauthenticated",
  error: null,
}
```

where state can be one of the following enums

```js
enum AuthenticationState {
  UNDEFINED = "undefined",
  UNAUTHENTICATED = "unauthenticated",
  AUTHENTICATED = "authenticated",
  AUTHENTICATING = "authenticating",
  LOGGING_OUT = "logging_out",
  ERROR = "error",
}
```

### `authenticate()` (web3)

You can call the `authenticate()` function to authenticate the user via web3, as long as a user has an active web3Provider (such as MetaMask).

This function calls the `MoralisWeb3.authenticate()` internally and will update the `auth` state and `user` state of your app automatically.

*Example:*

```jsx
const User = () => {
  const { authenticate, isAuthenticated, user } = useMoralis();

  if (!isAuthenticated) {
    return (
      <div>
        <button onClick={() => authenticate()}>Authenticate</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Hi {user.get("username")}</h1>
    </div>
  );
};
```

If you need direct feedback after authentication, you can provide an `option` object as argument to the `authenticate` call with `onComplete`, `onError` and/or `onSuccess`:

*Example:*

```js
authenticate({ onComplete: () => alert("🎉") })
```

#### Elrond

If you want to authenticate via Elrond, you can provide the `"erd"` authentication type in the options type:
```js
authenticate({ type: "erd" })
```

#### Walletconnect

If you want to use walletconnect, instead of metamask, you can add the `provider` option:
```js
authenticate({ provider: "walletconnect" })
```

For some wallets you might want to specify the default chainId, to do so you can provide a `chainId` option:
```js
authenticate({ provider: "walletconnect", chainId: 56 })
```

#### Custom signing message

To adjust the signing message, you can provide `signingMessage` as an option:
```js
authenticate({ signingMessage: "Moralis Authentication" })
```

### `signup()` (non-crypto)

To signup users without web3, and use a password/username, you can use the signup function.

*Example:*

```jsx
const Signup = () => {
  const { signup, isAuthenticated, user } = useMoralis();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      // [Your form and inputs somewhere here... ]
      <button onClick={() => signup(username, password, email)}>Sign up</button>
    </div>
  );
};
```

If you need to provide more data, than just the username, password and email, then you can provide an extra argument with an object, containing the data:

*Example:*

```jsx
signup(username, password, email, { phone: "01234567" });
```

After calling this function the `auth` and `user` will automatically be updated to reflect the new state.

### `login()` (non-crypto)

Similar to signup, you can also login via a hook function:

*Example:*

```jsx
const Login = () => {
  const { login } = useMoralis();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
]
  return (
    <div>
      // [Your form and inputs somewhere here... ]
      <button onClick={() => login(username, password)}>Login</button>
    </div>
  );
};
```

After calling this function the `auth` and `user` will automatically be updated to reflect the new state.

### `logout()`

Following the same principle as authentication/login, you can call `logout` and let the MoralisProvider handle the internal authentication state.

*Example:*

```jsx
const LogoutButton = () => {
  const { logout, isAuthenticating } = useMoralis();

  return (
    <button onClick={() => logout()} disabled={isAuthenticating}>
      Authenticate
    </button>
  )
};
```

After calling this function the `auth` and `user` will automatically be updated to reflect the new state.

### Update the user with `setUserData()`

When you want to set userData, you can use the `setUserData()` function from `useMoralis`.
This accepts an object with key-value pairs of data that you want to set.

Upon calling this function:

- The user is updated on Moralis
- The user is updated in the React app

So this means that at the places where you use `const {user} = useMoralis()`, the user data will automatically be updated.

*Example:*

```jsx
const { setUserData, userError, isUserUpdating, user } = useMoralis();

return (
  <div>
    {userError && <p>{userError.message}</p>}
    
    <pre>
      {JSON.stringify(user)}
    </pre>

    <button
      onClick={() => setUserData({
        username: "Batman",
        email: "batman@marvel.com",
        numberOfCats: 12,
      })}
      disabled={isUserUpdating}
    >
      Set user data
    </button>
  </div>
)

```

### Refetch user data `refetchUserData()`

When your user data gets updated outside the app (via cloudfunctions or in another session for example), you might want to force a refetch of the user data. You can use `refetchUserData` for this.

*Example:*

```jsx
const { refetchUserData, isUserUpdating, userError, user } = useMoralis();

return (
  <div>
    {userError && <p>{userError.message}</p>}
    
    <pre>
      {JSON.stringify(user)}
    </pre>

    <button onClick={() => refetchUserData()} disabled={isUserUpdating}>
      Refetch user data
    </button>
  </div>
)
```

## `useMoralisQuery()`

### Fetch Queries

The `useMoralisQuery` is heavily inspired by react-query. It handles all the async logic and manages the loading/error/data state internally and will automatically execute the query upon mounting in your component.

*Example:*

```jsx
const { data, error, isLoading } = useMoralisQuery("GameScore");
```

This query will fetch "GameScore" for you when the component mounts.

The hook will return `data`, `error` and `isLoading`, which you can use to render the component.

*Example:*

```jsx
const { data, error, isLoading } = useMoralisQuery("GameScore");

if (error) {
  return <span>🤯</span>;
}

if (isLoading) {
  return <span>🙄</span>;
}

return <pre>{JSON.stringify(data, null, 2)}</pre>;
```

### Filter queries

You can filer the query via a second argument. You can mutate the query in any way that Moralis.Query can.

*Example:*

```jsx
const { data, error, isLoading } = useMoralisQuery("GameScore", query =>
  query
    .greaterThanOrEqualTo("score", 100)
    .descending("score")
    .limit(limit),
);
```

This example will fetch the top 3 scores that are at least 100, in descending order.

You can also filter dynamically, but you need to provide a dependency array as third argument (similar to other hooks), to specify when this hook needs to update.

*Example:*

```jsx
const [limit, setLimit] = useState(3);
const { data, error, isLoading } = useMoralisQuery(
  "GameScore",
  query =>
    query
      .greaterThanOrEqualTo("score", 100)
      .descending("score")
      .limit(limit),
  [limit],
);
```

### Automatic updates with dependencies

This query will automatically refetch when the limit is changed.

If you want to disable the automatic fetching, you can also manually fetch. You need to provide `autoFetch: false` as option in the 4th argument. In that case it will ignore the dependencies and will only fetch if you manually call `fetch()`

*Example:*

```jsx
const { fetch, data, error, isLoading } = useMoralisQuery(
  "GameScore",
  query =>
    query
      .greaterThanOrEqualTo("score", 100)
      .descending("score")
      .limit(limit),
  [],
  { autoFetch: false },
);

return <button onClick={() => fetch}>Fetch manually</button>;
```

### Realtime / live queries

The `useMoralisQuery` hook can also be used to update upon realtime events. All you need to do is provide `live: true`. If any events update the query, then the `data` is automatically updated.

*Example:*

```jsx
const [limit, setLimit] = useState(3);
const { data, error, isLoading } = useMoralisQuery(
  "GameScore",
  query =>
    query
      .greaterThanOrEqualTo("score", 100)
      .descending("score")
      .limit(limit),
  [limit],
  {
    live: true,
  },
);
```

By default we use these rules

| Eventname  | Action                              |
| ---------- | ----------------------------------- |
| `"create"` | Add to the data                     |
| `"update"` | Update if object is already in data |
| `"enter"`  | Add to the data                     |
| `"leave"`  | Remove to the data                  |
| `"delete"` | Remove to the data                  |

You can override these rules with your own functions.

```jsx
const [limit, setLimit] = useState(3);
const { data, error, isLoading } = useMoralisQuery(
  "GameScore",
  query =>
    query
      .greaterThanOrEqualTo("score", 100)
      .descending("score")
      .limit(limit),
  [limit],
  {
    live: true,
    onLiveEnter: (entity, all) => [...all, entity],
    onLiveCreate: (entity, all) => [...all, entity],
    onLiveDelete: (entity, all) => all.filter(e => e.id !== entity.id),
    onLiveLeave: (entity, all) => all.filter(e => e.id !== entity.id),
    onLiveUpdate: (entity, all) =>
      all.map(e => (e.id === entity.id ? entity : e)),
  },
);
```

## `useMoralisSubscription()`

### Listen for query events

This hook is used when you use `useMoralisQuery` with `live: true`. But if you want fine-grained control over subscriptions, and want to do actions upon the events, then you can use this hook.

It's as simple as calling this hook with the callbacks that you want. The first 3 arguments are the same as `useMoralisQuery` (queryName, filter, dependencies). In the last argument, you can specify the callbacks:

| Eventname  | callback |
| ---------- | -------- |
| `"create"` | onCreate |
| `"update"` | onUpdate |
| `"enter"`  | onEnter  |
| `"leave"`  | onLeave  |
| `"delete"` | onDelete |

They will all return the object as data.

For example if you want to notify when a new player was added:

*Example:*

```jsx
useMoralisSubscription("GameScore", q => q, [], {
  onCreate: data => alert(`${data.attributes.playerName} was just created`),
});
```

This hook will handle the subscribing and unsubscribing automatically. It will automatically subscribe/unsubscribe when the component mounts/unmounts. All you have to do is use this hook.

You can disable the subscription by providing: `enabled: false`

*Example:*

```jsx
useMoralisSubscription("GameScore", q => q, [], {
  onCreate: data => alert(`${data.attributes.playerName} was just created`),
  enabled: false,
});
```

## `useMoralisFile()`

Get the data, and saveFunction with the `useMoralisFile` hook

```jsx
const {
  error,
  isUploading,
  moralisFile,
  saveFile,
} = useMoralisFile();
```

### Save to Moralis

All you need to do is call the save function with a valid file:

```jsx
saveFile("batman.jpeg", file);
```

Then you can read the state from the provided variables `error`,
`isUploading` and
`moralisFile`,

### Save to IPFS

```jsx
saveFile("batman.jpeg", file, { saveIPFS: true });
```

Then you can get the ipfs data via `moralisFile._ipfs` and `moralisFile._hash` or `moralisFile.ipfs()` and `moralisFile.hash()` 

### Other options

Additionally you can also provide metadata, tags or specify the fileType in the options like:

*Example:*

```jsx
const metadata = { createdById: "some-user-id" };
const tags = { groupId: "some-group-id" };

saveFile("batman.jpeg", file, {
  type: "image/jpeg",
  metadata,
  tags,
  saveIPFS: true,
});
```

## `useMoralisCloudFunction()`

You can use the `useMoralisCloudFunction` hook to run cloud functions easily. All you need to do is provide a name for the function, and it will automatically fetch the data for you.

*Example:*

```jsx
const { data, error, isLoading } = useMoralisCloudFunction("topScores");
```

If you have a function that requires parameters, then you can provide it as second argument:

*Example:*

```jsx
const { data, error, isLoading } = useMoralisCloudFunction("topScores", {
  limit,
});
```

### Trigger manually

If you rather want to trigger the fetching manually, you can provide `autoFetch: false` as option. And call the `fetch` function manually.

*Example:*

```jsx
const { fetch, data, error, isLoading } = useMoralisCloudFunction(
  "topScores",
  {
    limit
  },
  { autoFetch: false }
);

<button onClick={() => fetch()}>Fetch manually<button>
```

## `useMoralisWeb3Api()`
This hook will expose all the convenience functions of the `Moralis.Web3API` in the sdk (ex. `Web3Api.native.getBlock` or `Web3Api.account.getNativeBalance`). You can use this function in any way you want, for example:

```jsx
const Web3Api = useMoralisWeb3Api()

const fetchBlock = async() => {
  const result = await Web3Api.native.getBlock({
    block_number_or_hash: '100000'
  })
  console.log(result)
}
```

### Resolve data with `useMoralisWeb3ApiCall()`

You can also use a resolver, to resolve the asynchronous function. This works similar to useMoralisQuery or useMoralisCloudFunction. It will resolve the data/error for you and will re-trigger if dependencies change. 

For this you can use `useMoralisWeb3ApiCall()`:

```jsx
  const [block, setBlock] = useState('100000');
  const Web3Api = useMoralisWeb3Api()

  const { fetch, data, error, isLoading } = useMoralisWeb3ApiCall(Web3Api.native.getBlock, {
    block_number_or_hash: block,
  });

  return (
    <div>
      <button onClick={() => fetch()}>Refetch</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )

```

## `useMoralisSolanaApi()`
This hook will expose all the convenience functions of the `Moralis.SolanaAPI` in the sdk (ex. `SolanaApi.account.balance`). You can use this function in any way you want, for example:

```jsx
const SolanaApi = useMoralisSolanaApi()

const fetchBalance = async() => {
  const result = await SolanaApi.account.balance({
    network: "mainnet",
    address: "3yFwqXBfZY4jBVUafQ1YEXw189y2dN3V5KQq9uzBDy1E",
  })
  console.log(result)
}
```

### Resolve data with `useMoralisSolanaApiCall()`

You can also use a resolver, to resolve the asynchronous function. This works similar to useMoralisQuery or useMoralisCloudFunction. It will resolve the data/error for you and will re-trigger if dependencies change. 

For this you can use `useMoralisSolanaApiCall()`:

```jsx
  const SolanaApi = useMoralisSolanaApi()

  const { fetch, data, error, isLoading } = useMoralisSolanaApiCall(SolanaApi.account.balance, {
    network: "mainnet",
    address: "3yFwqXBfZY4jBVUafQ1YEXw189y2dN3V5KQq9uzBDy1E",
  });

  return (
    <div>
      <button onClick={() => fetch()}>Refetch</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )

```

## `useNewMoralisObject()`
This is a wrapper around the save method for a `Moralis.Object`. It creates a new object, and resolves the data, error and loading state, similar to the other hooks.

*Example:*

```jsx
const AddScoreButton = ({user, score}) => {
  const { isSaving, error, save } = useNewMoralisObject('GameScore');

  return (<div>
    {error && <ErrorMessage error={error} />}
    <button onClick={() => save({score, user})} disabled={isSaving}>Save score</button>
  </div>)
}

```


## `useWeb3ExecuteFunction()`

You can use the `useWeb3ExecuteFunction` hook to execute on-chain functions. You need to provide the correct `abi` of the contract, the corresponding `contractAddress`, the `functionName` that you would like to execute, and any parameters (`params`) thet you need to send with the function.

*Example:*

```jsx
const ShowUniswapObserveValues = () => {
  const { data, error, fetch, isFetching, isLoading } = useWeb3ExecuteFunction({
    abi: usdcEthPoolAbi,
    contractAddress: usdcEthPoolAddress,
    functionName: "observe",
    params: {
      secondsAgos: [0, 10],
    },
  });

  return (<div>
    {error && <ErrorMessage error={error} />}
    <button onClick={() => fetch()} disabled={isFetching}>Fetch data</button>
    {data && <pre>
      {JSON.stringify(data),
        null,
        2,
      )}
    </pre>}
  </div>)
}
```

*Example with executing by fetch:*

```jsx
const ShowUniswapObserveValues = () => {
  const { data, error, fetch, isFetching, isLoading } = useWeb3ExecuteFunction();
  
  const options = {
    abi: usdcEthPoolAbi,
    contractAddress: usdcEthPoolAddress,
    functionName: "observe",
    params: {
      secondsAgos: [0, 10],
    },
  }

  return (<div>
    {error && <ErrorMessage error={error} />}
    <button onClick={() => fetch({ params: options })} disabled={isFetching}>Fetch data</button>
    {data && <pre>
      {JSON.stringify(data)}
    </pre>}
  </div>)
}
```


## `useWeb3Transfer()`

You can use the `useWeb3Transfer` hook to transfer any native coins (ETH, BNB etc.), or any ERC20, ERC721 or ERC1155 tokens.

*Example:*

```jsx
const TransferEth = () => {
  const {fetch, error, isFetching} = useWeb3Transfer({
    amount: Moralis.Units.ETH(0.5),
    receiver: "0x0000000000000000000000000000000000000000",
    type: "native",
  });

  return (<div>
    {error && <ErrorMessage error={error} />}
    <button onClick={() => fetch()} disabled={isFetching}>Transfer</button>
  </div>)
}
```

*Example:*

```jsx
const TransferWeth = () => {
  const {fetch, error, isFetching} = useWeb3Transfer({
    amount: Moralis.Units.Token(20, 18),
    receiver: "0x0000000000000000000000000000000000000000",
    type: "erc20",
    contractAddress: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
  });

  return (<div>
    {error && <ErrorMessage error={error} />}
    <button onClick={() => fetch()} disabled={isFetching}>Transfer</button>
  </div>)
}
```

## `useChain()` 

Hook for fast network switching or getting info about current network. To change the current network, set the target chainId to `switchNetwork` function. If the user does not have the target network in the wallet, it will automatically ask permission to add it to the wallet. 

**Example**:
```jsx
import { useChain } from "react-moralis";

function Chains() {
  const { switchNetwork, chainId, chain, account } = useChain();
  return (
    <>
      <button onClick={() => switchNetwork("0x1")}>Switch to Ethereum</button>
      <p>Current chainId: {chainId}</p>
    </>
  );
}
```

## Web3-api wrappers

### `useApiContract()`

Execute a on-chain contract's function. 
It calls Moralis API and doesn't require web3 to be enabled.

**Options**
- `address` : The contract address (i.e. 0x1a2b3x...).
- `functionName` : The name of the contract's function that you want to call.
- `abi` : The contract's abi. 
- `chain` (optional): The blockchain to get data from. Valid values are listed on the intro page in the Transactions and Balances section. Default value: 'eth'.
- `params` (optional): Any parameter you want to send with the function.

**Example**
```jsx
import { useApiContract } from "react-moralis";

const {
    runContractFunction,
    data,
    error,
    isLoading,
    isFetching,
  } = useApiContract({
    address: ensRegistryAddress,
    functionName: "resolver",
    abi: ensRegistryAbi,
    params: { node: hashedDomain },
  });

  return (<div>
    {error && <ErrorMessage error={error} />}
    <button onClick={() => runContractFunction()} disabled={isFetching}>Run contract function</button>
    {data && <pre>
      {JSON.stringify(data),
        null,
        2,
      )}
    </pre>}
  </div>)
```

**Example return** (Object)
```json
{
  "result": "0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41"
}
```

### `useERC20Balances()` 

Gets all token balances of a current user or specified address. 

**Options**:
- `chain` (optional): The blockchain to get data from. Valid values are listed on the intro page in the Transactions and Balances section. Default value: current chain.
- `address` (optional): A user address (i.e. 0x1a2b3x...). If specified, the user attached to the query is ignored and the address will be used instead.
- `to_block` (optional): The block number on which the balances should be checked

**Example**
```jsx
import { useERC20Balances } from "react-moralis";

const { fetchERC20Balances, data, isLoading, isFetching, error } = useERC20Balances();

const ERC20Balances = () => {
  return (
    <div>
      {error && <>{JSON.stringify(error)}</>}
      <button onClick={() => fetchERC20Balances({ params: { chain: "0x1" } })}>Refetch</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

```

**Example return** (Object)
```json
{
  "total": 1,
  "page": 0,
  "page_size": 500,
  "result": [
    {
      "token_address": "0x2d30ca6f024dbc1307ac8a1a44ca27de6f797ec22ef20627a1307243b0ab7d09",
      "name": "Kylin Network",
      "symbol": "KYL",
      "logo": "https://cdn.moralis.io/eth/0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c.png",
      "thumbnail": "https://cdn.moralis.io/eth/0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c_thumb.png",
      "decimals": "18",
      "balance": "123456789"
    }
  ]
}
```

### `useERC20Transfers()` 

Gets ERC20 token transfers of a current user or specified address. 

**Options**:
- `chain` (optional): The blockchain to get data from. Valid values are listed on the intro page in the Transactions and Balances section. Default value: current chain.
- `address` (optional): A user address (i.e. 0x1a2b3x...). If specified, the user attached to the query is ignored and the address will be used instead.
- `from_date` (optional): The date from where to get the transactions (any format that is accepted by momentjs). Provide the param 'from_block' or 'from_date' If 'from_date' and 'from_block' are provided, 'from_block' will be used.
- `to_date` (optional):  Get the transactions to this date (any format that is accepted by momentjs). Provide the param 'to_block' or 'to_date' If 'to_date' and 'to_block' are provided, 'to_block' will be used.
- `from_block` (optional): The minimum block number from where to get the transactions Provide the param 'from_block' or 'from_date' If 'from_date' and 'from_block' are provided, 'from_block' will be used.
- `to_block` (optional): The maximum block number from where to get the transactions. Provide the param 'to_block' or 'to_date' If 'to_date' and 'to_block' are provided, 'to_block' will be used.
- `offset` (optional): Offset.
- `limit` (optional): Limit.

**Example**
```jsx
import { useERC20Transfers } from "react-moralis";

const { fetchERC20Transfers, data, error, isLoading, isFetching, } = useERC20Transfers();

const ERC20Transfers = () => {
  return (
    <div>
      {error && <>{JSON.stringify(error)}</>}
      <button onClick={() => fetchERC20Transfers({ params: { chain: "0x1" } })}>Refetch</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

```

**Example return** (Object)
```json
{
  "total": 1,
  "page": 0,
  "page_size": 500,
  "result": [
    {
      "transaction_hash": "0x2d30ca6f024dbc1307ac8a1a44ca27de6f797ec22ef20627a1307243b0ab7d09",
      "address": "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
      "block_timestamp": "2021-04-02T10:07:54.000Z",
      "block_number": "12526958",
      "block_hash": "0x0372c302e3c52e8f2e15d155e2c545e6d802e479236564af052759253b20fd86",
      "to_address": "0x62AED87d21Ad0F3cdE4D147Fdcc9245401Af0044",
      "from_address": "0xd4a3BebD824189481FC45363602b83C9c7e9cbDf",
      "value": "650000000000000000"
    }
  ]
}
```

### `useNativeBalance()` 

Gets native balance for a current user or specified address.

**Options**:
- `chain` (optional): The blockchain to get data from. Valid values are listed on the intro page in the Transactions and Balances section. Default value: current chain.
- `address` (optional): A user address (i.e. 0x1a2b3x...). If specified, the user attached to the query is ignored and the address will be used instead.
- `to_block` (optional): The block number on which the balances should be checked

**Example**:
```jsx
import { useNativeBalance } from "react-moralis";

function NativeBalance() {
  const { getBalances, data: balance, nativeToken, error, isLoading } = useNativeBalance({ chain : "ropsten" });

  return <div>{balance.formatted}</div>;
}
```
**Example return of balance** (Object)
```jsx
{
  balance: '996869309795359886',
  formatted: '0.9969 ROP'
}
```

**Example return of nativeToken** (Object)
```jsx
{
  name: 'Ropsten Ether',
  symbol: 'ROP',
  decimals: 18
}
```


### `useNativeTransactions()` 

Gets the transactions from the current user or specified address. Returns an object with the number of transactions  and the array of native transactions 

**Options**:
- `chain` (optional): The blockchain to get data from. Valid values are listed on the intro page in the Transactions and Balances section. Default value: current chain.
- `address` (optional): A user address (i.e. 0x1a2b3x...). If specified, the user attached to the query is ignored and the address will be used instead.
- `from_date` (optional): The date from where to get the transactions (any format that is accepted by momentjs). Provide the param 'from_block' or 'from_date' If 'from_date' and 'from_block' are provided, 'from_block' will be used.
- `to_date` (optional):  Get the transactions to this date (any format that is accepted by momentjs). Provide the param 'to_block' or 'to_date' If 'to_date' and 'to_block' are provided, 'to_block' will be used.
- `from_block` (optional): The minimum block number from where to get the transactions Provide the param 'from_block' or 'from_date' If 'from_date' and 'from_block' are provided, 'from_block' will be used.
- `to_block` (optional): The maximum block number from where to get the transactions. Provide the param 'to_block' or 'to_date' If 'to_date' and 'to_block' are provided, 'to_block' will be used.
- `offset` (optional): Offset.
- `limit` (optional): Limit.

**Example**
```jsx
import { useNativeTransactions } from "react-moralis";

const { getNativeTransations, data, chainId, error, isLoading, isFetching } = useNativeTransactions();

const NativeTransactions = () => {
  return (
    <div>
      {error && <>{JSON.stringify(error)}</>}
      <button onClick={() => getNativeTransations({ params: { chain: "0x1" } })}>Refetch</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

```

**Example return** (Object)
```json
{
  "total": 1,
  "page": 0,
  "page_size": 500,
  "result": [
    {
      "hash": "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
      "nonce": "326595425",
      "transaction_index": "25",
      "from_address": "0xd4a3BebD824189481FC45363602b83C9c7e9cbDf",
      "to_address": "0xa71db868318f0a0bae9411347cd4a6fa23d8d4ef",
      "value": "650000000000000000",
      "gas": "6721975",
      "gas_price": "20000000000",
      "input": "string",
      "receipt_cumulative_gas_used": "1340925",
      "receipt_gas_used": "1340925",
      "receipt_contract_address": "0x1d6a4cf64b52f6c73f201839aded7379ce58059c",
      "receipt_root": "string",
      "receipt_status": "1",
      "block_timestamp": "2021-04-02T10:07:54.000Z",
      "block_number": "12526958",
      "block_hash": "0x0372c302e3c52e8f2e15d155e2c545e6d802e479236564af052759253b20fd86"
    }
  ]
}
```

### `useNFTBalances()` 

Gets all NFTs from the current user or address. Supports both ERC721 and ERC1155. Returns an object with the number of NFT objects and the array of NFT objects.

**Options**:
- `chain` (optional): The blockchain to get data from. Valid values are listed on the intro page in the Transactions and Balances section. Default value: current chain (if the chain is not supported it will use the Eth chain).
- `address` (optional): A user address (i.e. 0x1a2b3x...). If specified, the user attached to the query is ignored and the address will be used instead.

**Example**
```jsx
import { useNFTBalances } from "react-moralis";

const { getNFTBalances, data, error, isLoading, isFetching } = useNFTBalances();

const NFTBalances = () => {
  return (
    <div>
      {error && <>{JSON.stringify(error)}</>}
      <button onClick={() => getNFTBalances({ params: { chain: "0x1" } })}>Refetch NFTBalances</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
```

**Example return** (Object)
```json
{
  "total": 1,
  "page": 0,
  "page_size": 500,
  "result": [
    {
      "token_address": "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
      "token_id": "15",
      "contract_type": "ERC721",
      "owner_of": "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
      "block_number": "88256",
      "block_number_minted": "88256",
      "token_uri": "string",
      "metadata": "string",
      "synced_at": "string",
      "amount": "1",
      "name": "CryptoKitties",
      "symbol": "RARI"
    }
  ]
}
```

### `useNFTTransfers()` 

Gets the NFT transfers. Returns an object with the number of NFT transfers and the array of NFT transfers.

**Options**:
- `chain` (optional): The blockchain to get data from. Valid values are listed on the intro page in the Transactions and Balances section. Default value: current chain (if the chain is not supported it will use the Eth chain).
- `address` (optional): A user address (i.e. 0x1a2b3x...). If specified, the user attached to the query is ignored and the address will be used instead.
- `offset` (optional): Offset.
- `direction` (optional): The transfer direction. Available values : both, to, from . Default value : both.
- `format` (optional): he format of the token id. Available values : decimal, hex. Default value : decimal.
- `limit` (optional): Limit.

**Example**
```jsx
import { useNFTTransfers } from "react-moralis";

const { fetch, data, error, isLoading, isFetching } = useNFTTransfers();

const NFTTransfers = () => {
  return (
    <div>
      {error && <>{JSON.stringify(error)}</>}
      <button onClick={() => fetch({ params: { chain: "0x1" } })}>Refetch</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
```

**Example return** (Object)
```json
{
  "total": 1,
  "page": 0,
  "page_size": 500,
  "result": [
    {
      "token_address": "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
      "token_id": "15",
      "from_address": "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
      "to_address": "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
      "amount": "1",
      "contract_type": "ERC721",
      "block_number": "88256",
      "block_timestamp": "2021-06-04T16:00:15",
      "block_hash": "string",
      "transaction_hash": "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
      "transaction_type": "string",
      "transaction_index": "string",
      "log_index": 0
    }
  ]
}
```

### `useTokenPrice()` 

Gets the price nominated in the native token and usd for a given token contract address

**Options**:
- `chain` (optional): The blockchain to get data from. Valid values are listed on the intro page in the Transactions and Balances section. Default value: current chain (if the chain is not supported it will use the Eth chain).
- `address` (optional): A user address (i.e. 0x1a2b3x...). If specified, the user attached to the query is ignored and the address will be used instead.
- `exchange` (optional): The factory name or address of the token exchange. Possible exchanges, for different chains are: ETH mainnet: `uniswap-v3`, `sushiswap`, `uniswap-v2`, BSC mainnet: `pancakeswap-v2`, `pancakeswap-v1`. Polygon mainnet: `quickswap`. *If no exchange is specified, all exchanges are checked (in the order as listed above) until a valid pool has been found. Note that this request can take more time. So specifying the exchange will result in faster responses most of the time.*
- `to_block` (optional): Returns the price for a given blocknumber (historical price-data).

**Example**
```jsx
import { useTokenPrice } from "react-moralis";

const TokenPrice = () => {
  const { fetchTokenPrice, data: formattedData, error, isLoading, isFetching } = useTokenPrice({ address: "0x1f9840...1f984", chain: "eth" });

  return (
    <div>
        {error && <>{JSON.stringify(error)}</>}
        <button onClick={() => fetchTokenPrice({ params: { address: "0x6...361",  chain: "bsc" } })}>Refetch</button>
        <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

**Example return** (Object)
```json
{
  "exchangeAddress": "0x1f98431c8ad98523631ae4a59f267346ea31f984",
  "exchangeName": "Uniswap v3",
  "formattedNative": "0.004695 ETH",
  "formattedUsd": "$20.38",
  "nativePrice": {
    "decimals": 18,
    "name": "Ether",
    "symbol": "ETH",
    "value": "4695118425598734"
  },
  "usdPrice": 20.37791922835578
}

```

### `useWeb3Contract()` 

You can use the `useWeb3Contract` hook to execute on-chain functions. You need to provide the correct `abi` of the contract, the corresponding `contractAddress`, the `functionName` that you would like to execute, and any parameters (`params`) thet you need to send with the function.

**Options**:
- `address` : The contract address (i.e. 0x1a2b3x...).
- `functionName` : The name of the contract's function that you want to call.
- `abi` : The contract's abi. 
- `params` (optional): Any parameter you want to send with the function.

*Example:*

```jsx
const ShowUniswapObserveValues = () => {
  const { data, error, runContractFunction, isFetching, isLoading } =
    useWeb3Contract({
      abi: usdcEthPoolAbi,
      contractAddress: usdcEthPoolAddress,
      functionName: "observe",
      params: {
        secondsAgos: [0, 10],
      },
    });

  return (
    <div>
      {error && <ErrorMessage error={error} />}
      <button onClick={() => runContractFunction()} disabled={isFetching}>
        Fetch data
      </button>
      {data && <pre>{JSON.stringify(data)}</pre>}
    </div>
  );
};
```

*Example with executing by fetch:*

```jsx
const ShowUniswapObserveValues = () => {
  const { data, error, runContractFunction, isFetching, isLoading } =
    useWeb3Contract();

  const options = {
    abi: usdcEthPoolAbi,
    contractAddress: usdcEthPoolAddress,
    functionName: "observe",
    params: {
      secondsAgos: [0, 10],
    },
  };

  return (
    <div>
      {error && <ErrorMessage error={error} />}
      <button
        onClick={() => runContractFunction({ params: options })}
        disabled={isFetching}
      >
        Fetch data
      </button>
      {data && <pre>{JSON.stringify(data)}</pre>}
    </div>
  );
};
```

## Dex Plugin Hooks

### `useOneInchQuote()` 

Hook for getting swap quote info.

**Example**:
```jsx
import { useOneInchQuote } from "react-moralis";

function Quote() {
  const { getQuote, data, isFetching, isLoading, error } = useOneInchQuote({
    chain: 'bsc', // The blockchain you want to use (eth/bsc/polygon)
    fromTokenAddress: '0x0da6ed8b13214ff28e9ca979dd37439e8a88f6c4', // The token you want to swap
    toTokenAddress: '0x6fd7c98458a943f469e1cf4ea85b173f5cd342f4', // The token you want to receive
    amount: 1000,
  });
  return (
     <div>
        {error && <>{JSON.stringify(error)}</>}
        <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

### `useOneInchSwap()` 

Hook for swap.

**Example**:
```jsx
import { useOneInchQuote } from "react-moralis";

function Swap() {
  const { swap, data, isFetching, isLoading, error } = useOneInchSwap();
  
  const options = {
    chain: 'bsc', // The blockchain you want to use (eth/bsc/polygon)
    fromTokenAddress: '0x0da6ed8b13214ff28e9ca979dd37439e8a88f6c4', // The token you want to swap
    toTokenAddress: '0x6fd7c98458a943f469e1cf4ea85b173f5cd342f4', // The token you want to receive
    amount: 1000,
    fromAddress: '0x6217e65d864d77DEcbFF0CFeFA13A93f7C1dD064', // Your wallet address
    slippage: 1,
  }
  
  return (
     <div>
        {error && <>{JSON.stringify(error)}</>}
        <button onClick={()=> swap(options)}>Swap</button>
    </div>
  );
}
```

### `useOneInchTokens()` 

Hook for get supported token list.

**Example**:
```jsx
import { useOneInchQuote } from "react-moralis";

const SupportedTokens = () => {
  const { getSupportedTokens, data, isFetching, isLoading, error } = useOneInchTokens({ chain: 'bsc' });
  
  return (
     <div>
        {error && <>{JSON.stringify(error)}</>}
        <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

## `Web3`
In order to use (non enabled) web3 functionalities, you can just use:
```jsx
const { web3 } = useMoralis()
```

### Enable web3 via metamask

If you need features from an enabled web3 instance, then you need to enable web3 first. By default, metamask will be used to get a provider:

*Example:*

```jsx
const EnableWeb3 = ({user, score}) => {
  const { web3, enableWeb3, isWeb3Enabled, isWeb3EnableLoading, web3EnableError } = useMoralis()

  if(isWeb3Enabled){
    return null
  }

  return <div>
    {web3EnableError && <ErrorMessage error={web3EnableError} />}
    <button onClick={() => enableWeb3()} disabled={isWeb3EnableLoading}>Enable web3</button>
  </div>
}
```

### Enable web3 via Walletconnect

Optionally, you  can specify to use walletconnect as a provider, to enable web3 via walletconnect:

*Example:*

```jsx
const EnableWeb3 = ({user, score}) => {
  const { web3, enableWeb3, isWeb3Enabled, isWeb3EnableLoading, web3EnableError } = useMoralis()

  if(isWeb3Enabled){
    return null
  }

  return <div>
    {web3EnableError && <ErrorMessage error={web3EnableError} />}
    <button onClick={() => enableWeb3({provider: 'walletconnect'})} disabled={isWeb3EnableLoading}>Enable web3</button>
  </div>
}
```

## Utils

### Resolve/Lookup ens names
If you want to resolve/lookup ENS names, then you can use `useEnsName` or `useEnsAddress`.

#### `useEnsName`
Resolve the ENS name and lookup the address, avatar, email and url details (if they are set)

*example:*
```javascript
  const {
    address,
    avatar,
    email,
    url,
    isLoading,
    error
  } = useEnsName("ricmoo.eth");

```

#### `useEnsAddress`
Lookup if an ENS name is registered for the address
*example:*
```javascript
  const { name, isLoading, error } = useEnsAddress("0x5555763613a12D8F3e73be831DFf8598089d3dCa");
```


## Components
If you want to support Moralis, you can use the `ByMoralis` component, to render our logo 🙏:

*Example:*

```jsx
const App = () => {
import { ByMoralis } from "react-moralis";

  return (
    <div>
      <ByMoralis width={300} />
      <ByMoralis width={300} variant="dark" />
      <ByMoralis width={300} variant="light" />
    </div>
  )
}
```

You can specify the color scheme; `dark`, `light` or `colour`(default), the width (defaults to 250px) and a custom styling via the `style` prop.

#  Handling responses
The easiest way to handle the responses of the different async methods (fetch, save etc.), is to read the data directly from the hook. The data will return `error`, `data` and `isLoading`/`isFetching`. These values can easily be used to (conditionally) render different parts of your app.

For other logic, you might want to listen directly for success/error responses. This is facilitated by passing one or more callback (`onComplete`, `onError` and/or `onSuccess`) to the fetch/save etc. functions:


| Callback     | Description                                                                                      |
| ------------ | ------------------------------------------------------------------------------------------------ |
| `onSuccess`  | Fires when the request resolves successfully. If possible it is returned with the resolved data. |
| `onError`    | Fires when the request returns an error. It will return the corresponding error.                 |
| `onComplete` | Fires when a request finishes (regardless of a success/error response)                           |

*Example:*

```jsx
const { fetch } = useMoralisQuery("GameScore");

const fetchAndNotify = () => {
  fetch({ 
    onSuccess: () => notifyUser(user.get("objectId")),
    onError: (error) => showErrorToast(error)
  });
};
```

# Webpack v5 support

You may see the following error in your project:
```jsx
ERROR in ../../node_modules/dotenv/lib/main.js 26:13-28
Module not found: Error: Can't resolve 'path' in '../node_modules/dotenv/lib'

BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.
This is no longer the case. Verify if you need this module and configure a polyfill for it.
```

There are a lot of breaking changes in Webpack v5. Set up your project to work with `moralis` and `react-moralis`:

### configuring Webpack v5

We highly recommend you to use the stable `4.0.3` version of Webpack. If you want to use Moralis on your project with Webpack v5 you need to add the fallback to your `webpack.config.js` file:

```jsx
module.exports = {
    resolve: {
        fallback: {
            assert: require.resolve('assert'),
            crypto: require.resolve('crypto-browserify'),
            http: require.resolve('stream-http'),
            https: require.resolve('https-browserify'),
            os: require.resolve('os-browserify/browser'),
            stream: require.resolve('stream-browserify'),
        },
    },
};
```

### create-react-app

To be able to work with `moralis` and `react-moralis` on the create-react-app project you need to use the `< 5` version of `react-scripts`:

`npx create-react-app --scripts-version 4.0.3`

# 😖 Error handling

For most hooks, we will resolve the error for you in an error variable. For example, the following function will not throw an error (initially or when you call `fetch` manually).

If you have a useCase where you do want to respond to an error directly you can provide `throwOnError` as an options parameter. For example:

```jsx
const { data, error, isLoading, fetch } = useMoralisQuery("GameScore");

const fetchAndUseError = async () => {
  try {
    await fetch({ throwOnError: true });
  } catch (error) {
    alert("You got an error");
  }
};
```

# ⌨️ Typescript

This library offers first-class Typescript support.

# ⚛️ React native

In order to use this library with react-native, you need to provide the `environment="native"` property to the `MoralisProvider`. Also you need to provide the Moralis library from `moralis/react-native.js` like:

```js
import Moralis from "moralis/react-native.js"

const getMoralis = () => Moralis
<MoralisProvider
  appId={appId}
  serverUrl={serverUrl}
  environment="native"
  getMoralis={getMoralis}
>
  <App/>
</MoralisProvider>
```
# 🧑‍💻 Development

Make sure to have `node` and `yarn` installed.

- Clone this repo
- ```sh
    cd react-moralis
    yarn install
  ```

Please follow the code guidelines before submitting a PR.

- Make sure the code is clear and readable
- Adhere to the style rules of Eslint, Prettier and Conventional Commit

## Examples

React Boilerplate https://github.com/ethereum-boilerplate/ethereum-boilerplate

React Native Boilerplate https://github.com/ethereum-boilerplate/ethereum-react-native-boilerplate
