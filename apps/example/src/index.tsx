import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { lazily } from 'react-lazily';
import { Suspense } from 'react';
// const { Button, Logo, Typography, Avatar, BannerStrip, VerifyCode } = lazily(
//     () => import('@web3uikit/core'),
// );
// const { ConnectButton } = lazily(() => import('@web3uikit/ui'))
// const { Icon } = lazily(() => import('@web3uikit/icons'));
import {
    // Button,
    // Logo,
    // Typography,
    // Avatar,
    BannerStrip,
    VerifyCode,
} from '@web3uikit/core';
// import { Icon } from '@web3uikit/icons';
export const App = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Suspense fallback={<>Loading...</>}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                margin: '20px',
                            }}
                        >
                            {/* <Icon svg="avax" fill="#000" /> */}
                            {/* <Button
                                size="large"
                                text="Large"
                                isFullWidth
                                theme="primary"
                            />
                            <Logo theme="default" color="white" />
                            <Typography children="text" variant="h1" />
                            <Avatar theme="image" /> */}
                            <BannerStrip
                                text="Hey this is a notification you should check out"
                                type="standard"
                            />
                            <VerifyCode />
                            {/* <Icon svg="bell" fill="#000" /> */}
                            {/* <ConnectButton /> */}
                        </div>
                    </Suspense>
                }
            />
            <Route path="*" element={<>Not found...</>}></Route>
        </Routes>
    );
};
