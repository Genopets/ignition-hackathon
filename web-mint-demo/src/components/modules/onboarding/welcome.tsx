/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import CircleButton from '@/components/elements/CircleButton';
import {
  Terminal,
  ITerminalSubscription,
  ITerminalTextProps,
} from '@/components/modules/terminal';
import { useSolana } from '@/hooks/solana';
import { useAppContext } from '@/hooks/app-context';
import Questions from '@/config/questions';
import { IQuestions, QuestionType } from '@/types/questions';
import { useAtom } from 'jotai';
import { NextStateProps } from '.';
import { StyleTerminal } from './styled';
import { connectWalletVisible } from '../connect-wallet';

interface DiscoverState {
  choice: Array<number | string>;
  IsEnabled: boolean;
  answers: number[];
}

const TerminalContent = ({
  IsAction,
  ...props
}: ITerminalTextProps & {
  IsAction: boolean;
  options?: Array<string>;
  setAnswers: (value: number) => void;
}) => {
  const TerminalComponent = IsAction ? Terminal.Action : Terminal.Text;
  return props.visible ? <TerminalComponent options={[]} {...props} /> : <></>;
};

function Welcome({ nextState }: NextStateProps) {
  const { provider } = useSolana();
  const isWalletConnected = provider?.isConnected;
  const {
    petExists,
    setMinimize,
    answers,
    setAnswers,
    soundPlay,
    setPetAnswers,
  } = useAppContext();

  const [, setConnectWalletScreenVisible] = useAtom(connectWalletVisible);

  const [state, setState] = React.useState<DiscoverState>({
    IsEnabled: false,
    choice: [Questions[0].id],
    answers: [],
  });

  const addChoice = (
    value: number | string,
    removeElement?: number | string,
  ): Array<number | string> => {
    let list = [...state.choice];
    const IsExist = state.choice.includes(value);

    if (!IsExist) list.push(value);
    if (removeElement) list = list.filter((e) => e !== removeElement);

    return list;
  };

  const IsWritte = (value: number | string): boolean =>
    state.choice.includes(value);

  const subscription = React.useCallback(
    async ({ isBusy, value }: ITerminalSubscription) => {
      if (!value) return;
      const lastQuestion = Questions[Questions.length - 1].id;
      setState({ ...state, choice: addChoice(value), IsEnabled: isBusy });
      if (lastQuestion === value) {
        setPetAnswers();
        nextState(QuestionType.STATE_2);
      }
    },
    [state],
  );

  const onClickPet = () => {
    const IsWalletConnected: boolean = provider?.isConnected;

    if (!IsWalletConnected) setConnectWalletScreenVisible(true);
    else {
      soundPlay.play();
      setState({
        ...state,
        choice: addChoice(QuestionType.TEXT_2, QuestionType.USER_CONFIRM),
      });
    }
  };

  const addAnswer = (n: number) => setAnswers([...answers, n]);

  useEffect(() => {
    if (IsWritte(QuestionType.TEXT_3)) {
      setTimeout(() => {
        setMinimize(true);
      }, 1000);
    }
  }, [state.choice]);

  useEffect(() => {
    if (isWalletConnected && petExists) {
      setState({
        ...state,
        choice: addChoice(QuestionType.TEXT_1, QuestionType.USER_CONFIRM),
      });
    } else if (isWalletConnected && !petExists) {
      setState({
        ...state,
        choice: addChoice(QuestionType.TEXT_1, QuestionType.USER_CONFIRM),
      });
    }
  }, [isWalletConnected]);

  const petExistText = petExists ? `genopet detected` : `no genopet detected _`;
  const buttonText = isWalletConnected ? `summon my genopet` : `connect wallet`;

  const textMap: any = { petExistText };
  const skipSize = 2;
  const choiceSize = state.choice.length - skipSize;
  const clientY = choiceSize > 0 ? choiceSize * 14 : 0;

  const getContent = (content: string | string[]): string | string[] =>
    Array.isArray(content)
      ? content.map((t) => textMap[t] || t)
      : textMap[content] || content;

  const getQuestionProps = (question: IQuestions, n: number) => ({
    ...question,
    setAnswers: addAnswer,
    subscribe: subscription,
    IsFade: IsWritte(Questions[n + question.IsFade]?.id),
    IsAction: question.IsAction || false,
    visible: IsWritte(question.id),
    content: getContent(question.content),
    next: question.next || Questions[n + 1]?.id,
  });

  return (
    <>
      <Terminal writeSpeed={10}>
        <StyleTerminal offsetY={clientY}>
          {Questions.map((question, i) => (
            <TerminalContent
              {...getQuestionProps(question, i)}
              key={`terminal_text_${question.id}`}
            />
          ))}
        </StyleTerminal>
      </Terminal>

      {IsWritte(QuestionType.USER_CONFIRM) && (
        <CircleButton text={buttonText} onClick={onClickPet} />
      )}
    </>
  );
}

export default Welcome;
