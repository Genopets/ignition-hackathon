/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import styled from '@emotion/styled';
import TerminalText from './terminal-text';
import TerminalContext from './terminal-context';
import TerminalAction from './terminal-action';

const ContainerTerminal = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  user-select: none;
`;

interface ITerminalProps {
  color?: string;
  writeSpeed?: number;
  children: Array<React.ReactElement> | React.ReactElement;
}

export function Terminal({
  children,
  color = `#00ffc8`,
  writeSpeed = 60,
}: ITerminalProps) {
  return (
    <TerminalContext.Provider value={{ color, writeSpeed }}>
      <ContainerTerminal>
        {React.Children.map(children, (child) => React.cloneElement(child))}
      </ContainerTerminal>
    </TerminalContext.Provider>
  );
}

Terminal.Text = React.memo(TerminalText);
Terminal.Action = React.memo(TerminalAction);
