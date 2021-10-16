/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Sounds, { SoundType } from '@/utils/sounds';
import styled from '@emotion/styled';
import LineRotator from '@/components/elements/LineRotator';
import { useAppContext } from '@/hooks/app-context';
import { IQuestions } from '@/types/questions';
import TerminalContext from './terminal-context';

export interface ITerminalSubscription {
  isBusy: boolean;
  value: string | number;
}

interface StyledTerminalProps {
  color?: string;
  IsFade?: boolean;
  IsMin?: boolean;
}

export interface ITerminalTextProps
  extends StyledTerminalProps,
    Pick<IQuestions, 'sound' | 'soundEffect'> {
  visible: boolean;
  content: string | string[];
  writeSpeed?: number;
  next: string | number;
  hasIndicator?: boolean;
  IndicatorDelay?: number;
  subscribe: (payloads: ITerminalSubscription) => void;
}

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTerminal = styled.p`
  background-color: transparent;
  color: ${({ color }: StyledTerminalProps) => color};
  font-size: 14px;
  border: 0px;
  display: flex;
  resize: none;
  display: block;
  margin: 0px;
  min-height: 15px;
  line-height: 25px;
  font-family: 'optician', sans-serif;
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ IsFade }: StyledTerminalProps) => IsFade && `0.3`};

  ${({ IsMin }: StyledTerminalProps) =>
    IsMin &&
    `
    font-size:20px;
    line-height:35px;
    @media(max-width:767px){
      font-size:14px;
      line-height:normal;
    }
    `}
`;

function TerminalTextLine({
  visible,
  next,
  IsFade,
  content,
  hasIndicator,
  IndicatorDelay = 3,
  color: TextColor,
  soundEffect = `play`,
  writeSpeed: TextwriteSpeed,
  subscribe: publish,
  sound,
}: ITerminalTextProps & { content: string }) {
  const { writeSpeed, color } = React.useContext(TerminalContext);
  let timer: NodeJS.Timeout;

  const { IsMinimize, soundPlay, setSoundPlay } = useAppContext();
  const [text, setText] = React.useState<string>(``);
  const [indicator, setIndicator] = React.useState<boolean>(false);
  const terminalRef = React.useRef<HTMLDivElement | null>(null);

  const clearTerminal = () => setText(``);

  const soundUpdate = (effect: SoundType): void => {
    soundPlay.fadeOut();
    const nextAudio = new Sounds(effect, { loop: true });
    nextAudio[soundEffect]();
    setSoundPlay(nextAudio);
  };

  const terminalWrite = (texts: string) => {
    let counter = 0;
    const terminal: HTMLDivElement | null = terminalRef.current;

    if (!visible) return;

    (function writer(): void {
      if (counter < texts.length) {
        const terminalValue = terminal?.innerText?.replace(`|`, ``);
        let terminalText = `${terminalValue}${texts.charAt(counter)}`;

        if (counter !== texts.length - 1) {
          terminalText = `${terminalText}|`;
        }

        new Sounds(`keyPress`).play();
        counter += 1;
        setText(terminalText);
        timer = setTimeout(writer, TextwriteSpeed || writeSpeed);
      } else {
        if (hasIndicator) setIndicator(true);
        else publish({ isBusy: false, value: next });
        clearTimeout(timer);

        if (sound) soundUpdate(sound);
      }
    })();
  };

  React.useEffect(() => {
    if (!indicator) return;
    setTimeout(() => {
      setIndicator(false);
      publish({ isBusy: false, value: next });
    }, IndicatorDelay * 1000);
  }, [indicator]);

  React.useEffect(() => {
    clearTerminal();
    new Sounds(`keyPress`).play();
    setTimeout(() => terminalWrite(content), 300);

    // Unmount Event: clear text animation subscription
    return () => clearTimeout(timer);
  }, [visible]);

  if (!visible) return <></>;

  const loading = hasIndicator ? indicator : false;

  return (
    <Row>
      <StyledTerminal
        ref={terminalRef}
        IsFade={IsFade}
        color={TextColor || color}
        IsMin={IsMinimize}
      >
        {text}
      </StyledTerminal>
      {loading && <LineRotator size={10} speed={1.5} duration={5} />}
    </Row>
  );
}

const TerminalText = ({
  visible,
  content,
  subscribe,
  ...props
}: ITerminalTextProps) => {
  const [state, setState] = React.useState<Array<number | string>>([0]);

  const contents = Array.isArray(content) ? content : [content];

  const getKey = (value: string, n: number): string => `text_line_${value + n}`;

  const listener = (payloads: ITerminalSubscription) => {
    setState([...state, payloads.value]);
    if (contents.length === state.length) subscribe(payloads);
  };

  return (
    <>
      {contents.map((text, i) => (
        <TerminalTextLine
          key={getKey(text, i)}
          {...props}
          content={text}
          subscribe={listener}
          visible={visible && state.length > i}
        />
      ))}
    </>
  );
};

export default React.memo(TerminalText);
