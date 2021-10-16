import React, { Dispatch } from 'react';
import { atom, useAtom } from 'jotai';
import styled from '@emotion/styled';

import { useSolana } from 'hooks/solana';

import Button from 'components/elements/Button';
import GlitchText from 'components/elements/GlitchText';

type Props = { visible: boolean; setVisible: Dispatch<boolean> };

const Container = styled.div`
  display: grid;
  position: fixed;
  place-content: center;
  backdrop-filter: contrast(1.2) blur(10px);
  grid-gap: 2rem;

  grid-template-columns: minmax(173px, 270px);

  width: 100vw;
  height: 100vh;
  z-index: 2;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;

  opacity: ${(props: Props) => (props.visible ? `1` : `0`)};

  visibility: ${(props: Props) => (props.visible ? `visible` : `hidden`)};
`;

export const connectWalletVisible = atom(false);

const ConnectWalletScreen = () => {
  const [visible, setVisible] = useAtom(connectWalletVisible);

  const { getProviderOrDownloadPhantom, provider, disconnect } = useSolana();

  const disconnectWallet = () => {
    disconnect();
    setVisible(false);
  };

  const connectWallet = () => {
    getProviderOrDownloadPhantom();
    setVisible(false);
  };

  if (provider?.isConnected) {
    return (
      <Container visible={visible} setVisible={setVisible}>
        <GlitchText fontSize={33}>LOG OFF?</GlitchText>

        <Button color="#ff0063" onClick={disconnectWallet}>
          Disconnect
        </Button>
        <Button
          leftIcon="back"
          justify="center"
          onClick={() => setVisible(false)}
        >
          Go Back
        </Button>
      </Container>
    );
  }

  return (
    <Container visible={visible} setVisible={setVisible}>
      <GlitchText color="#00ffc8" fontSize={18.6}>
        Choose Wallet
      </GlitchText>

      <Button leftIcon="phantom" onClick={connectWallet}>
        Phantom
      </Button>
      <Button
        color="#ff0063"
        leftIcon="back"
        justify="center"
        onClick={() => setVisible(false)}
      >
        Go Back
      </Button>
    </Container>
  );
};

export default ConnectWalletScreen;
