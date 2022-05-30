import { Route, Routes } from 'react-router-dom';
import { lazily } from 'react-lazily';
import { Suspense } from 'react';

const { Button } = lazily(() => import('@web3uikit/core'));
const { ConnectWallet } = lazily(() => import('@web3uikit/ui'));
export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<>Loading...</>}>
            <Button size="large" text="Large" />
            <Button text="Regular" />
            <Button size="small" text="Small" />
            <Button text="Primary" iconType="leading" />
            <Button text="Primary" iconType="trailing" />
            <Button text="Primary" iconType="iconOnly" />
            <Button size="large" theme="outline" text="Large" />
            <Button text="Regular" theme="outline" />
            <Button size="small" text="Small" theme="outline" />
            <Button text="leading" iconType="leading" theme="outline" />
            <Button text="trailing" iconType="trailing" theme="outline" />
            <Button iconType="iconOnly" theme="outline" />
            <ConnectWallet />
          </Suspense>
        }
      />
      <Route path="*" element={<>Not found...</>}></Route>
    </Routes>
  );
};
