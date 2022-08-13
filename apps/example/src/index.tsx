import { Route, Routes } from 'react-router-dom';
import { lazily } from 'react-lazily';
import { Suspense } from 'react';
import { Input, ConnectWallet } from 'test_kit_4';

export const App = () => {
    return (
        <>
            <ConnectWallet />
            <Input />
        </>
        // <Routes>
        //     <Route
        //         path="/"
        //         element={
        //             <Suspense fallback={<>Loading...</>}>
        //                 <NB />
        //                 <div
        //                     style={{
        //                         display: 'flex',
        //                         flexDirection: 'column',
        //                         margin: '20px',
        //                     }}
        //                 >
        //                     <Ada
        //                         style={{ fontSize: '100px', color: 'black' }}
        //                     />
        //                     <Logo theme="default" color="white" />
        //                     <Button
        //                         size="large"
        //                         text="Large"
        //                         isFullWidth
        //                         theme="primary"
        //                     />
        //                     <Typography children="text" variant="h1" />
        //                     <Avatar theme="image" />
        //                     <BannerStrip
        //                         text="Hey this is a notification you should check out"
        //                         type="standard"
        //                     />
        //                     <VerifyCode />
        //                 </div>
        //                 {/* <ConnectWallet /> */}
        //             </Suspense>
        //         }
        //     />
        //     <Route path="*" element={<>Not found...</>}></Route>
        // </Routes>
    );
};
