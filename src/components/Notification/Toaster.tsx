import React, { useEffect, useMemo, useReducer, useState } from 'react';
import Notification from './Notification';
// import { useMoralis } from 'react-moralis';
import ToasterContext from './ToasterContext';

const toastReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                toasts: [...state.toasts, action.toast],
            };
        // case 'remove': {
        //     return {
        //         ...state,
        //         toasts: [
        //             ...state.toasts.filter(
        //                 (toast: any) => toast.id !== action.id,
        //             ),
        //         ],
        //     };
        // }
        default:
            throw new Error();
    }
};

const initialState: any = {
    toasts: [],
};

const Toaster = () => {
    // const { web3, Moralis, user } = useMoralis();
    // const [walletAddress, setWalletAddress] = useState();
    // const [chainId, setChainId] = useState();
    // const [toasts, setToasts] = useState();

    // const [state, dispatch] = useNotification();
    // const context = useNotification();

    // console.log('context', context);

    const [{ toasts }] = useNotification();
    console.log('toasts', toasts);

    return (
        <>
            {toasts.map(() => (
                <>Hello</>
                // <Notification
                //     message="TX: 0x2134...e82c5"
                //     title="New Event Sync"
                //     isVisible={true}
                //     type="info"
                // />
            ))}
        </>
    );
};

const ToastProvider = () => {
    const [state, dispatch] = useReducer(toastReducer, initialState);
    return (
        <ToasterContext.Provider value={[state, dispatch]}>
            <Toaster />
        </ToasterContext.Provider>
    );
};

function useNotification() {
    // const [state, dispatch] = useReducer(toastReducer, initialState);
    // @ts-ignore
    const context = React.useContext(ToasterContext);
    // if (context === undefined) {
    //     throw new Error();
    // }
    return context;
}

export { ToastProvider, useNotification };
