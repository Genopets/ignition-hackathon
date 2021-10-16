import CircleButton from '@/components/elements/CircleButton';
import LogoButton from '@/components/elements/LogoButton';
import Steps from '@/config/steps';
import { QuestionType } from '@/types/questions';
import Image from 'next/image';
import React from 'react';
import Router from 'next/router';
import Logo from '@/assets/svgs/genopets-logo.svg';
import { useAppContext } from '@/hooks/app-context';
import Sounds from '@/utils/sounds';
import { atom, useAtom } from 'jotai';
import styled from '@emotion/styled';
import { ITerminalSubscription, Terminal } from '../terminal';
import { StyleTerminal } from './styled';
import { NextStateProps } from '.';

export const summoningAtom = atom(false);

const StyleContainer = styled.div<{ isSummon: boolean }>`
  position: relative;
  bottom: 75px;
  width: 80vw;

  @media (max-width: 767px) {
    width: 100%;
  }

  ${({ isSummon }) =>
    isSummon &&
    `> div {
      transform: scale(1.9);
      @media (max-width: 1280px) {
        transform: scale(1.6);
      }
      @media (max-width: 768px) {
        transform: scale(1);
      }
    }`}
`;

function RecordPet({ nextState }: NextStateProps) {
  const { layoutPattern, setPattern, setMinimize, generatePet, soundPlay } =
    useAppContext();
  const [state, setState] = React.useState<Array<number | string>>([
    QuestionType.TEXT_8,
    Steps[0].id,
  ]);

  const [loadingPet, setLoadingPet] = React.useState(false);

  const [, setIsSummoning] = useAtom(summoningAtom);

  const IsWritte = (value: number | string): boolean => state.includes(value);

  const subscription = React.useCallback(
    async ({ value }: ITerminalSubscription) => {
      if (!value) return;
      setState([...state, value]);
    },
    [state],
  );
  const addChoice = (
    value: number | string,
    removeElement?: number | string,
  ): Array<number | string> => {
    let list = [...state];
    const IsExist = state.includes(value);

    if (!IsExist) list.push(value);
    if (removeElement) list = list.filter((e) => e !== removeElement);

    return list;
  };

  const claimPet = () => {
    nextState(QuestionType.STATE_3);
    Router.push(`/my-pet`).then(() => {
      setTimeout(() => {
        setMinimize(false);
      }, 800);
    });
  };

  React.useEffect(() => {
    // Prefetch the my-pet page
    Router.prefetch(`/my-pet`);
  }, []);

  return (
    <>
      <Terminal writeSpeed={20}>
        <StyleTerminal offsetY={0}>
          {Steps.map((question, n) => (
            <Terminal.Text
              {...question}
              subscribe={subscription}
              content={question.content}
              visible={IsWritte(question.id)}
              key={`terminal_text_${question.id}`}
              next={question.next || Steps[n + 1]?.id}
              IsFade={IsWritte(Steps[n + question.IsFade]?.id)}
            />
          ))}
        </StyleTerminal>
      </Terminal>

      {/* {IsWritte(QuestionType.ANSWER_1) && (
        <>
          <StyleTextContainer>
            <CircleToggleButton
              hoverSound
              size="large"
              onClick={onClickLove}
              onMouseUp={onMouseEnter}
              onMouseLeave={onMouseExit}
              initialActive={20}
              borderColor="#FF0063"
              activeColor="#FF0063"
              hoverColor="#FF0063"
              borderHoverColor="#FF0063"
              hoverGlowColor="#fc046766"
            />
          </StyleTextContainer>
          <GlitchText
            color={layoutPattern ? `#FF0063` : `#00FFC8`}
            fontSize={24}
          >
            &quot; i love you &quot;
          </GlitchText>
        </>
      )} */}
      <StyleContainer isSummon={IsWritte(QuestionType.TEXT_8)}>
        {IsWritte(QuestionType.TEXT_8) && (
          <LogoButton
            isLoading={loadingPet}
            onClick={() => {
              setLoadingPet(true);

              const birthSound = new Sounds(`birth`);
              const bornMusic = new Sounds(`born`);

              soundPlay.pause();
              setIsSummoning(true);
              birthSound.playToEndThen(() => bornMusic.play());

              generatePet().then(() => {
                setIsSummoning(false);
                setState([
                  ...addChoice(QuestionType.ANSWER_3, QuestionType.TEXT_8),
                ]);
              });
            }}
          >
            <Image src={Logo} alt="logo-button" />
          </LogoButton>
        )}

        {IsWritte(QuestionType.ANSWER_3) && (
          <CircleButton text="claim & share" onClick={claimPet} />
        )}
      </StyleContainer>
    </>
  );
}

export default RecordPet;
