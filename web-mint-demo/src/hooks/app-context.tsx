import hashAnswers from '@/utils/hashAnswers';
import Sounds, { SoundsFn } from '@/utils/sounds';
import React, { useEffect, useRef, useState } from 'react';
import { useSolana } from './solana';

export const AppContext = React.createContext({});

export const AppContextProvider: React.FC = (props) => {
  const { children } = props;

  const [answers, setAnswers] = React.useState<Array<number>>([]);
  const [petExists, setPetExists] = useState(false);
  const [eggColor, setEggColor] = useState(1);
  const [IsMinimize, setMinimize] = useState(false);
  const [petTraits, setPetTraits] = useState<Uint8Array | number[] | null>(
    null,
  );
  const [layoutPattern, setPattern] = useState(``);
  const iFrameRef = useRef<HTMLIFrameElement>(null);
  const [soundPlay, setSoundPlay] = useState<SoundsFn>();

  useEffect(() => {
    setSoundPlay(new Sounds(`ambience`, { loop: true, maxVolume: 0.2 }));
  }, []);

  const { getFullAddress } = useSolana();

  const setPetAnswers = async (): Promise<void> => {
    // eslint-disable-next-line no-console
    console.log({ answers });
    const toHash = answers.join(`,`) + getFullAddress();

    const traits = hashAnswers(toHash);

    iFrameRef.current?.contentWindow?.postMessage(
      {
        method: `setAttributes`,
        arg: traits,
        genopets: true,
      },
      `*`,
    );

    setPetTraits(traits);
  };

  const generatePet = async (): Promise<void> => {
    const mockLoading = () =>
      new Promise((resolve) => {
        setTimeout(resolve, 4000);
      });

    iFrameRef.current?.contentWindow?.postMessage(
      {
        method: `nextPhase`,
        genopets: true,
      },
      `*`,
    );

    await mockLoading();

    // setPetExists(true);
  };

  const updateAnswerForEgg = (): void => {
    iFrameRef.current?.contentWindow?.postMessage(
      {
        method: `setEggColor`,
        arg: eggColor,
        genopets: true,
      },
      `*`,
    );

    setEggColor(eggColor + 1);
  };

  const context = {
    petExists,
    generatePet,
    IsMinimize,
    setMinimize,
    layoutPattern,
    setPattern,
    iFrameRef,
    updateAnswerForEgg,
    answers,
    setAnswers,
    soundPlay,
    setSoundPlay,
    petTraits,
    setPetTraits,
    setPetAnswers,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export const useAppContext: () => any = () => {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error(`useAppContext must be used within a AppContextProvider`);
  }
  return context;
};
