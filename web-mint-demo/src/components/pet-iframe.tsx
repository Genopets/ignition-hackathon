import { useAppContext } from '@/hooks/app-context';
import styled from '@emotion/styled';
import React from 'react';

const Iframe = styled.iframe`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
`;
const IFramePet: React.FC = () => {
  const { petTraits } = useAppContext();

  const traits: number[] = petTraits
    ? [...petTraits]
    : [0, 0, 0, 0, 0, 0, 0, 0];

  return (
    <Iframe
      src={
        process.env.NEXT_PUBLIC_THREEJS_URL
          ? `${process.env.NEXT_PUBLIC_THREEJS_URL}/pet.html?q=${JSON.stringify(
              traits,
            )}`
          : `https://genopets-three-app.vercel.app/pet.html?q=${JSON.stringify(
              traits,
            )}`
      }
      frameBorder="0"
    />
  );
};

export default IFramePet;
