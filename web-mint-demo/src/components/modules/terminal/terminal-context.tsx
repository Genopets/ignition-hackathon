import React from 'react';

const TerminalContext = React.createContext({
  writeSpeed: 60,
  color: `red`,
});

export default TerminalContext;
