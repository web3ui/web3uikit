import { Route, Routes } from 'react-router-dom';
import { lazily } from 'react-lazily';
import { Suspense } from 'react';
const { Button, Logo, Typography, Avatar, BannerStrip, VerifyCode } = lazily(() => import('@web3uikit/core'));
// const { ConnectButton } = lazily(() => import('@web3uikit/ui'))
export const App = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Suspense fallback={<>Loading...</>}>
            <div style={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>
              <Logo theme='default' color='white' />
              <Button size='large' text='Large' isFullWidth theme='primary' />
              <Typography children='text' variant='h1' />
              <Avatar theme='image' />
              <BannerStrip text='Hey this is a notification you should check out' type='standard' />
              <VerifyCode />
            </div>
            {/* <ConnectButton /> */}
          </Suspense>
        }
      />
      <Route path='*' element={<>Not found...</>}></Route>
    </Routes>
  );
};
