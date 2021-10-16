import React, { useState } from 'react';

import {
  Connection,
  PublicKey,
  Transaction,
  clusterApiUrl,
  // SystemProgram,
  LAMPORTS_PER_SOL,
} from '@solana/web3.js';

import { NETWORK_VERSION } from 'config';

const SolanaContext = React.createContext({});

declare let window: any;

type PhantomEvent = 'disconnect' | 'connect';

type PhantomRequestMethod =
  | 'connect'
  | 'disconnect'
  | 'signTransaction'
  | 'signAllTransactions';

interface ConnectOpts {
  onlyIfTrusted: boolean;
}
interface PhantomProvider {
  publicKey: PublicKey | null;
  isConnected: boolean | null;
  autoApprove: boolean | null;
  signTransaction: (transaction: Transaction) => Promise<Transaction>;
  signAllTransactions: (transactions: Transaction[]) => Promise<Transaction[]>;
  connect: (opts?: Partial<ConnectOpts>) => Promise<void>;
  disconnect: () => Promise<void>;
  on: (event: PhantomEvent, handler: (args: any) => void) => void;
  request: (method: PhantomRequestMethod, params: any) => Promise<any>;
}

const NETWORK = clusterApiUrl(NETWORK_VERSION);

export const SolanaProvider: React.FC = (props) => {
  const { children } = props;

  const [provider, setProvider] = useState<PhantomProvider | null>(null);

  const connection = new Connection(NETWORK);

  const getSOLBalance: () => Promise<number | null> = async () => {
    if (provider?.publicKey) {
      const lamports = await connection.getBalance(provider.publicKey);

      return lamports / LAMPORTS_PER_SOL;
    }
    return null;
  };

  const getProviderOrDownloadPhantom: () => void = () => {
    if (typeof window !== `undefined`) {
      if (`solana` in window) {
        const { solana } = window;
        if (solana.isPhantom) {
          solana.connect();
          solana.on(`connect`, () => setProvider(solana));
        } else {
          window.open(`https://phantom.app/`, `_blank`);
        }
      } else {
        window.open(`https://phantom.app/`, `_blank`);
      }
    }
  };

  const getAddress: () => string | null = () => {
    const address = provider?.publicKey?.toString();
    if (address) {
      return `${address.substr(0, 5)}...${address.substr(
        address.length - 5,
        5,
      )}`;
    }

    return null;
  };

  const getFullAddress: () => string | undefined = () =>
    provider?.publicKey?.toString();

  const disconnect: () => void = () => {
    provider?.disconnect();
    setProvider(null);
  };

  const context = {
    provider,
    getProviderOrDownloadPhantom,
    getAddress,
    getFullAddress,
    getSOLBalance,
    disconnect,
  };

  return (
    <SolanaContext.Provider value={context}>{children}</SolanaContext.Provider>
  );
};

export const useSolana: () => any = () => {
  const context = React.useContext(SolanaContext);
  if (context === undefined) {
    throw new Error(`useSolana must be used within a SolanaProvider`);
  }
  return context;
};
