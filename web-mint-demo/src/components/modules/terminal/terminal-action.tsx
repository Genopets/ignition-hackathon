import GlitchText from '@/components/elements/GlitchText';
import { useAppContext } from '@/hooks/app-context';
import Sounds from '@/utils/sounds';
import styled from '@emotion/styled';
import React from 'react';
import { ITerminalTextProps } from './terminal-text';

const StyleActionContainer = styled.div`
  width: calc(100vw - 200px);
  height: auto;
  opacity: ${({ IsFade }: { IsFade: boolean }) => IsFade && `0.3`};

  ${({ IsFade }: { IsFade: boolean }) =>
    !IsFade &&
    `
    position: fixed;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 640px);
  `}

  @media (max-width: 767px) {
    width: 88vw;
  }
`;

const AnswerText = styled.h6`
  font-size: 20px;
  color: #00ffc8;
  font-family: 'optician', sans-serif;
  font-weight: 700;
  letter-spacing: 5px;
  margin: 10px 30px;
`;

const Row = styled.div`
  display: flex;
  margin: 0 auto;
`;

const StyleActionButton = styled.div`
  width: auto;
  height: 100%;
  padding: 0px 25px;
  margin: 0 25px;
  @media (max-width: 767px) {
    padding: 0px 8px;
  }
  h1 {
    @media (max-width: 767px) {
      font-size: 14px;
    }
  }
`;

const ActionButtons = ({
  label,
  value,
  onSelect,
}: {
  label: string;
  value: number;
  onSelect: (n: number) => void;
}) => (
  <StyleActionButton>
    <GlitchText
      onClick={() => onSelect(value)}
      color="#00ffc8"
      activeColor="#FFF100"
      hoverColor="gradient(linear,left top,right top,color-stop(0.1, #AEFF00),color-stop(1,#00FFC8));"
    >
      {label}
    </GlitchText>
  </StyleActionButton>
);

const ActionOption = ({
  options,
  onSelect,
}: {
  options: Array<string>;
  onSelect: (value: number) => void;
}) => (
  <Row>
    {options.map((e, i) => (
      <ActionButtons
        key={`ans_option_${e}`}
        label={e}
        value={i}
        onSelect={onSelect}
      />
    ))}
  </Row>
);

function TerminalAction({
  options,
  setAnswers,
  next,
  sound,
  soundEffect = `play`,
  subscribe: publish,
}: ITerminalTextProps & {
  options: Array<string>;
  setAnswers: (value: number) => void;
}) {
  const [selected, setSelected] = React.useState<number>(-1);
  const { soundPlay, setSoundPlay } = useAppContext();

  const { updateAnswerForEgg } = useAppContext();

  const onClickAnswer = (n: number) => {
    new Sounds(`select`).play();

    if (sound) {
      soundPlay.fadeOut();
      const nextAudio = new Sounds(sound, { loop: true });
      nextAudio[soundEffect]();
      setSoundPlay(nextAudio);
    }

    setAnswers(n);
    setSelected(n);
    updateAnswerForEgg(n);
    publish({ isBusy: false, value: next });
  };

  const hasSelected = selected >= 0;
  return (
    <StyleActionContainer IsFade={hasSelected}>
      {!hasSelected && (
        <ActionOption options={options} onSelect={onClickAnswer} />
      )}
      {hasSelected && <AnswerText>{options[selected]}</AnswerText>}
    </StyleActionContainer>
  );
}

export default TerminalAction;
