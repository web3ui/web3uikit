import { Button } from "@web3uikit/core"
import Moralis from '@moralisweb3/evm-wallet-connect-connector'
export const ConnectButton = () => {
    return (
        <Button text="Connect Wallet" onClick={() => Moralis.connect()}/>
    )
}