import React from 'react';

import styled from '@emotion/styled';

import { AppContext } from '@/hooks/app-context';
import { useAtom } from 'jotai';
import Borders from './modules/nav';
import GlobalStyle from './styles';
import { summoningAtom } from './modules/onboarding/record-pet';

interface StyleWrapperProps {
  IsMin: boolean;
  isSummoning: boolean;
}

const Noise = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('imgs/noise.png') repeat;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 1;
  z-index: 5;
`;

const Wrapper = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  height: 100vh;
  width: 100vw;
  min-height: 100vh;
  transition: transform 3s ease;
  background-color: #181a1c;
  transform-origin: bottom;

  ${({ IsMin }: StyleWrapperProps) =>
    IsMin &&
    `
    border-radius:15px;
    transform: scale(0.5);
    position: fixed;
    bottom: -100px;
    width: 100%;
    overflow: hidden;
    @media(max-width:767px){
      transform: scale(0.6);
    }
    `}

  ${({ isSummoning }: StyleWrapperProps) =>
    isSummoning &&
    `
    transform: translateY(100vh);
    `}
`;

const SiteContent = styled.main`
  background-color: transparent;
  overflow: hidden;
  scroll-behavior: smooth;
  transition: background-color 1s ease-out;
  color: #fff;
  padding: 75px 20px;
  background: linear-gradient(320deg, rgb(24, 26, 28) 50%, rgb(0, 57, 63) 100%);

  @media (min-height: 30em) {
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    overflow-x: hidden;
    overflow-y: ${({ IsMin }: { IsMin: boolean }) =>
      IsMin ? `hidden` : `scroll`};
    -ms-scroll-snap-type: y mandatory;
    scroll-snap-type: y mandatory;
    -webkit-overflow-scrolling: touch;
  }
`;

const mobileViewport = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty(`--vh`, `${vh}px`);
};

const Layout: React.FC = ({ children }) => {
  React.useEffect(() => {
    mobileViewport();
    window.addEventListener(`resize`, mobileViewport, !1);

    return () => {
      window.removeEventListener(`resize`, mobileViewport, !1);
    };
  }, []);

  const [isSummoning] = useAtom(summoningAtom);

  return (
    <AppContext.Consumer>
      {(props: any) => (
        <Wrapper IsMin={props?.IsMinimize} isSummoning={isSummoning}>
          <GlobalStyle />
          <Noise />
          <Borders />
          <SiteContent IsMin={props?.IsMinimize}>{children}</SiteContent>
        </Wrapper>
      )}
    </AppContext.Consumer>
  );
};

export default Layout;
