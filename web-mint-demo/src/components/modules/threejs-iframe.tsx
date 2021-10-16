import { useAppContext } from '@/hooks/app-context';
import styled from '@emotion/styled';
import React from 'react';

const Iframe = styled.iframe`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
const IFrameThree: React.FC = () => {
  const { iFrameRef, petExists } = useAppContext();

  if (!petExists) {
    return (
      <Iframe
        src={
          process.env.NEXT_PUBLIC_THREEJS_URL ||
          `https://genopets-three-app.vercel.app`
        }
        ref={iFrameRef}
        frameBorder="0"
      />
    );
  }

  return <></>;
};

export default IFrameThree;
