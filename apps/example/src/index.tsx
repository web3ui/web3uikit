import { Route, Routes } from 'react-router-dom';
import { lazily } from 'react-lazily';
import { Suspense } from 'react';

const { Button, Logo, Typography, Avatar, BannerStrip, NewComp } = lazily(() => import('@web3uikit/core'));
// const {  } = lazily(() => import('@web3uikit/ui'));
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
              <NewComp textOn='green light' textOff='red light!' />
            </div>
            {/* <ConnectWallet /> */}
          </Suspense>
        }
      />
      <Route path='*' element={<>Not found...</>}></Route>
    </Routes>
  );
};
