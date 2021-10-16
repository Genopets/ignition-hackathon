import PatternGreen from '@/assets/svgs/eso1bg.svg';
import PatternPink from '@/assets/svgs/eso1bgPink.svg';
import { useAppContext } from '@/hooks/app-context';
import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';

const Container = styled.div`
  display: flex;
  place-content: center;
  grid-gap: 2rem;
  height: 100%;
  flex-direction: column;
`;

const BackgroundSection = styled.div`
  background: linear-gradient(320deg, rgb(24, 26, 28) 50%, rgb(0, 57, 63) 100%);
  inset: 0px;
  overflow: hidden;
  pointer-events: none;
  position: fixed;
  z-index: -1;
  width: 100%;
  transition: all 0.5s ease-in-out;
`;

const LandingCenter = styled.div`
  max-width: 100%;
  position: relative;
`;

const CenterPattern = styled.div`
  width: 600px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: center;
  overflow: hidden;
  user-select: none;

  > div {
    width: 100%;

    img {
      width: 100%;
    }
  }
  img {
    opacity: 0.2;
  }

  @media (max-width: 767px) {
    width: 300px;
    overflow: visible;
  }
  @media (max-height: 430px) {
    height: auto;
    min-height: 100vh;
    overflow: visible;
  }

  ${({ IsMin }: { IsMin: boolean }) =>
    IsMin &&
    ` 
      position: relative;
      transform: scale(1.3);
      bottom: 75px;
    `}
`;

const LandinInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  @media (max-height: 430px) {
    height: 100%;
  }
`;

const ContentOuter = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  width: 100%;
`;

const ContentInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PatternType: any = {
  GREEN: PatternGreen,
  PINK: PatternPink,
};

function LayoutWrapper({ children }: { children: React.ReactElement }) {
  const { layoutPattern, IsMinimize } = useAppContext();
  const Pattern = PatternType[layoutPattern || `GREEN`];

  return (
    <Container>
      <BackgroundSection />
      <LandingCenter>
        <LandinInner>
          <CenterPattern IsMin={IsMinimize}>
            <Image src={Pattern} alt="Pattern" />
          </CenterPattern>
          <ContentOuter>
            <ContentInner>{children}</ContentInner>
          </ContentOuter>
        </LandinInner>
      </LandingCenter>
    </Container>
  );
}

export default LayoutWrapper;
