import { AppContextProvider } from '@/hooks/app-context';
import Layout from 'components/layout';
import { SolanaProvider } from 'hooks/solana';
import { AppProps } from 'next/app';
import IFrameThree from 'components/modules/threejs-iframe';
import ConnectWalletScreen from 'components/modules/connect-wallet';
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (`serviceWorker` in navigator) {
      window.addEventListener(`load`, () => {
        navigator.serviceWorker.register(`/sw.js`);
      });
    }
  }, []);

  return (
    <SolanaProvider>
      <AppContextProvider>
        <IFrameThree />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ConnectWalletScreen />
      </AppContextProvider>
    </SolanaProvider>
  );
}
