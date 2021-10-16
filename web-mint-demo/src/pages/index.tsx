/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image';
import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import LayoutWrapper from '@/components/layout-wrapper';
import Welcome from '@/components/modules/onboarding/welcome';
import CircleToggleButton from '@/components/elements/CircleToggleButton';
import { useSolana } from '@/hooks/solana';
import { QuestionType } from '@/types/questions';
import RecordPet from '@/components/modules/onboarding/record-pet';
import { useAppContext } from '@/hooks/app-context';

// assest
import SoundOn from '@/assets/svgs/sound-on.svg';
import SoundOff from '@/assets/svgs/sound-off.svg';

interface SetCenterProps {
  IsMin: boolean;
}

const Container = styled.div`
  height: auto;
`;

const StyledTerminalControl = styled.div`
  width: 50px;
  height: 50px;
  opacity: 0.7;
  margin: 0 auto;
`;

const Center = styled.div`
  position: fixed;
  transform: ${({ IsMin }: SetCenterProps) =>
    IsMin ? `none` : `translateX(-50%)`};
  right: ${({ IsMin }: SetCenterProps) => (IsMin ? `-20px` : ``)};
  bottom: ${({ IsMin }: SetCenterProps) => (IsMin ? `160px` : `0`)};
  left: ${({ IsMin }: SetCenterProps) => (IsMin ? `auto` : `50%`)};

  button {
    margin: 0;
  }
`;

function DiscoverPet() {
  const { provider } = useSolana();
  const isWalletConnected = provider?.isConnected;
  const { IsMinimize, setMinimize, soundPlay } = useAppContext();
  const [isMute, setIsMute] = React.useState<boolean>(false);
  const [state, setState] = React.useState<QuestionType>();
  const [stateKey, setKey] = React.useState<number>(+new Date());

  const toggleSound = () => {
    setIsMute(!isMute);
  };

  const IsState = (value: QuestionType) => state === value;

  const nextState = (value: QuestionType) => setState(value);

  useEffect(() => {
    if (!isWalletConnected) {
      setMinimize(false);
      setKey(+new Date());
    }
  }, [isWalletConnected]);

  useEffect(() => {
    if (isMute) soundPlay?.fadeOut();
    else soundPlay?.fadeIn();
  }, [isMute]);

  useEffect(() => {
    setMinimize(false);
  }, []);

  useEffect(() => setState(QuestionType.STATE_1), [isWalletConnected]);

  const styledProps = {
    borderColor: isMute ? `#FF0063` : `#00ffc8`,
  };

  const StateProps = {
    nextState,
    soundOff: () => setIsMute(true),
  };

  return (
    <LayoutWrapper key={stateKey}>
      <Container>
        {IsState(QuestionType.STATE_1) && <Welcome {...StateProps} />}
        {IsState(QuestionType.STATE_2) && <RecordPet {...StateProps} />}

        {soundPlay && (
          <Center IsMin={IsMinimize}>
            <CircleToggleButton onClick={toggleSound} {...styledProps}>
              <StyledTerminalControl>
                <Image
                  src={isMute ? SoundOff : SoundOn}
                  width="100%"
                  height="100%"
                  alt="sound"
                />
              </StyledTerminalControl>
            </CircleToggleButton>
          </Center>
        )}
      </Container>
    </LayoutWrapper>
  );
}

export default DiscoverPet;
