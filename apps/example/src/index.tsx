import { Route, Routes } from 'react-router-dom';
import { lazily } from 'react-lazily';
import { Suspense } from 'react';
import {
    Ada,
    Button,
    Breadcrumbs,
    Logo,
    Typography,
    Avatar,
    BannerStrip,
    useNotification,
    ConnectButton,
    NFT,
    SendTransaction,
    Modal,
    VerifyCode,
    Edit,
} from 'web3uikit';

const MockBreadCrumbs = [
    {
        breadcrumb: 'Syncs',
        path: '/',
    },
    {
        breadcrumb: 'Smart Contract Events',
        path: '/',
    },
    {
        breadcrumb: 'Add New Token Erc20',
        path: '/',
    },
];

export const App = () => {
    const dispatch = useNotification();
    return (
        <Routes>
            <Route
                path="*"
                element={
                    <Suspense fallback={<>Loading...</>}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                margin: '20px',
                            }}
                        >
                            <Breadcrumbs routes={MockBreadCrumbs} />
                            <Ada
                                style={{
                                    fontSize: '100px',
                                    color: 'black',
                                }}
                            />
                            <Logo theme="default" color="white" />
                            <Button
                                size="large"
                                text="Large"
                                isFullWidth
                                theme="primary"
                            />
                            <Typography children="text" variant="h1" />
                            <Avatar theme="image" />
                            <BannerStrip
                                text="Hey this is a notification you should check out"
                                type="standard"
                            />
                            <VerifyCode />
                        </div>
                        <ConnectButton />
                        <Modal
                            isVisible={true}
                            title={
                                <div>
                                    <Edit key="icon" />
                                    <Typography>Edit Heading</Typography>{' '}
                                </div>
                            }
                            hasFooter={false}
                            headerHasBottomBorder={false}
                        >
                            <NFT
                                address="0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"
                                chain="eth"
                                fetchMetadata
                                tokenId="1"
                            />

                            <SendTransaction
                                chainId="0x4"
                                contractOptions={{
                                    abi: contractData['abi'],
                                    contractAddress:
                                        contractData['contractAddress'],
                                    functionName: 'purchaseCandy',
                                    params: {
                                        _amount: 1,
                                    },
                                    msgValue: 1000000000000000000,
                                }}
                                buttonConfig={{
                                    text: 'Send',
                                    theme: 'primary',
                                }}
                                notificationConfig={{ dispatch }}
                            />
                        </Modal>
                        <SendTransaction
                            chainId="0x1"
                            contractOptions={{
                                abi: contractData['abi'],
                                contractAddress:
                                    contractData['contractAddress'],
                                functionName: 'purchaseCandy',
                                params: {
                                    _amount: 1,
                                },
                                msgValue: 1000000000000000000,
                            }}
                            buttonConfig={{
                                text: 'Send',
                                theme: 'primary',
                            }}
                            notificationConfig={{ dispatch }}
                        />
                    </Suspense>
                }
            />
            <Route path="*" element={<>Not found...</>}></Route>
        </Routes>
    );
};

const contractData = {
    contractAddress: '0xDd6141fb76828957ba5b9628E72728f62EC291dA',
    abi: [
        {
            inputs: [],
            stateMutability: 'nonpayable',
            type: 'constructor',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            name: 'candyBalances',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'getVendingMachineBalance',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'owner',
            outputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: '_amount',
                    type: 'uint256',
                },
            ],
            name: 'purchaseCandy',
            outputs: [],
            stateMutability: 'payable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: '_amount',
                    type: 'uint256',
                },
            ],
            name: 'restockVendingMachine',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
    ],
};
