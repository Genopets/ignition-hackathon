import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Pattern from '@/assets/svgs/eso1bg.svg';
import centerBg from '@/assets/svgs/q.png';
import Button from '@/components/elements/Button';
import Router from 'next/router';

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
  position: fixed;
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
const CenterBg = styled.div`
  width: 1000px;
  grid-row-start: 1;
  grid-column-start: 1;
  place-self: center;
  opacity: 0.9;
  position: absolute;
  top: 63%;

  transform: translate(-47%, -63%);
  left: 47.6%;
  height: 400px;

  @media (max-width: 767px) {
    width: 500px;
    top: 82%;
    transform: translate(-47%, -77%);
  }

  @media (max-width: 375px) {
    top: 79%;
  }

  > div {
    width: 100%;
  }

  img {
    right: 0;
    top: 0;
    width: 100%;
    object-fit: cover;
    max-width: 100%;
    display: block;
    position: static;
  }
`;
const GlitchWrapper = styled.div`
  margin: 0 auto;
  position: relative;
  bottom: 0;
  left: 0;
  z-index: 9;
  -webkit-transform: none;
  -moz-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: none;
  @media (max-height: 768px) {
    padding-bottom: 30px;
  }
  @media (max-width: 420px) {
    text-align: center;

    img {
      width: 234px;
      margin: 0 auto;
    }
  }
`;
const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 767px) {
    flex-direction: column;
  }
  button {
    margin-right: 15px;
    padding: 10px 26px;
    &:last-child {
      margin-right: 0;
    }
    @media (max-width: 767px) {
      width: 100%;
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
  button {
    border: 1px solid rgb(197 26 120);
    color: rgb(198 29 124);
    &:after {
      background-color: rgb(187 16 121 / 13%);
    }
    &:hover {
      &:after {
        background-color: rgb(187 16 121 / 13%);
      }
    }
  }
`;
const ErrorH = styled.div`
  @keyframes glitch-anim {
    0% {
      transform: skew(0.09deg);
    }
    5% {
      transform: skew(0.99deg);
    }
    10% {
      transform: skew(0.01deg);
    }
    15% {
      transform: skew(0.37deg);
    }
    20% {
      transform: skew(0.46deg);
    }
    25% {
      transform: skew(0.94deg);
    }
    30% {
      transform: skew(0.3deg);
    }
    35% {
      transform: skew(0.03deg);
    }
    40% {
      clip: rect(31px, 9999px, 60px, 0);
      transform: skew(0.53deg);
    }
    45% {
      clip: rect(82px, 9999px, 46px, 0);
      transform: skew(0.77deg);
    }
    50% {
      clip: rect(34px, 9999px, 44px, 0);
      transform: skew(0.04deg);
    }
    55% {
      clip: rect(36px, 9999px, 6px, 0);
      transform: skew(0.8deg);
    }
    60% {
      clip: rect(17px, 9999px, 41px, 0);
      transform: skew(0.94deg);
    }
    65% {
      clip: rect(9px, 9999px, 29px, 0);
      transform: skew(0.07deg);
    }
    70% {
      clip: rect(69px, 9999px, 6px, 0);
      transform: skew(0.78deg);
    }
    75% {
      clip: rect(92px, 9999px, 76px, 0);
      transform: skew(0.98deg);
    }
    80% {
      clip: rect(30px, 9999px, 4px, 0);
      transform: skew(0.18deg);
    }
    85% {
      transform: skew(0.56deg);
    }
    90% {
      transform: skew(0.16deg);
    }
    95% {
      transform: skew(0.08deg);
    }
    100% {
      transform: skew(0.07deg);
    }
  }
  @keyframes glitch-anim2 {
    0% {
      transform: skew(0.16deg);
    }
    5% {
      transform: skew(0.5deg);
    }
    10% {
      transform: skew(0.1deg);
    }
    15% {
      transform: skew(0.28deg);
    }
    20% {
      transform: skew(0.05deg);
    }
    25% {
      transform: skew(0.18deg);
    }
    30% {
      transform: skew(0.41deg);
    }
    35% {
      transform: skew(0.88deg);
    }
    40% {
      clip: rect(12px, 9999px, 33px, 0);
      transform: skew(0.19deg);
    }
    45% {
      clip: rect(30px, 9999px, 86px, 0);
      transform: skew(0.72deg);
    }
    50% {
      clip: rect(12px, 9999px, 59px, 0);
      transform: skew(0.47deg);
    }
    55% {
      clip: rect(32px, 9999px, 10px, 0);
      transform: skew(0.44deg);
    }
    60% {
      clip: rect(67px, 9999px, 35px, 0);
      transform: skew(0.45deg);
    }
    65% {
      clip: rect(83px, 9999px, 13px, 0);
      transform: skew(0.41deg);
    }
    70% {
      clip: rect(47px, 9999px, 26px, 0);
      transform: skew(0.05deg);
    }
    75% {
      clip: rect(31px, 9999px, 68px, 0);
      transform: skew(0.17deg);
    }
    80% {
      clip: rect(18px, 9999px, 67px, 0);
      transform: skew(0.6deg);
    }
    85% {
      clip: rect(49px, 9999px, 87px, 0);
      transform: skew(0.6deg);
    }
    90% {
      clip: rect(96px, 9999px, 84px, 0);
      transform: skew(0.34deg);
    }
    95% {
      clip: rect(10px, 9999px, 79px, 0);
      transform: skew(0.38deg);
    }
    100% {
      clip: rect(23px, 9999px, 38px, 0);
      transform: skew(0.41deg);
    }
  }
  @keyframes glitch-skew {
    0% {
      transform: skew(1deg);
    }
    33.3333333333% {
      transform: skew(2deg);
    }
    66.6666666667% {
      transform: skew(2deg);
    }
    100% {
      transform: skew(1deg);
    }
  }
  position: relative;
  animation: glitch-skew 1s infinite linear alternate-reverse;
  opacity: 1;
  letter-spacing: 0.2em;
  padding-left: 30px;
  padding-right: 30px;
  font-family: 'mokoto_glitchregular';
  font-size: 90px;
  background: -webkit-linear-gradient(108deg, #f20272 36%, #bf0bd7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 480px) {
    font-size: 56px;
  }
  &::before {
    content: attr(data-text);
    position: absolute;
    top: 40px;
    width: 100%;
    height: 100%;
    left: -7px;
    letter-spacing: 4px;
    font-family: 'mokto_glitch_mark_outline';
    letter-spacing: 36px;
    clip: rect(44px, 450px, 56px, 0);
    font-family: 'mokto_glitch_mark_outline';
    animation: glitch-anim 4s infinite linear alternate-reverse;
    text-shadow: -2px 0 rgb(186 13 118);
    z-index: -1;
    opacity: 0.7;
    @media (max-width: 480px) {
      top: 20px;
      letter-spacing: 20px;
    }
  }

  &::after {
    content: attr(data-text);
    position: absolute;
    top: 15px;
    left: 10px;
    width: 100%;
    height: 100%;
    letter-spacing: 4px;
    font-family: 'mokto_glitch_mark_outline';
    animation: glitch-anim2 3s infinite linear alternate-reverse;
    opacity: 1;
    z-index: -1;
    @media (max-width: 480px) {
      top: 20px;
    }
  }
`;
const ErrorText = styled.div`
  h4 {
    color: #ee0873;
    text-align: center;
    font-family: 'optician', sans-serif;
    line-height: 19px;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 100;
    margin-bottom: 40px;
    opacity: 1;
    span {
      display: block;
    }
  }
`;

function NotFound() {
  return (
    <Container>
      <BackgroundSection />
      <LandingCenter>
        <LandinInner>
          <CenterPattern>
            <Image src={Pattern} alt="Pattern" />
          </CenterPattern>
          <ContentOuter>
            <CenterBg>
              <Image src={centerBg} alt="centerBg" />
            </CenterBg>
            <ErrorH data-text="404">404</ErrorH>
            <ErrorText>
              <h4>
                <span>Error.</span> This page does not exist.
              </h4>
            </ErrorText>
            <GlitchWrapper>
              <CenterContainer>
                <Button
                  iconSize={18}
                  justify="center"
                  leftIcon="next"
                  width="auto"
                  onClick={() => Router.push(`/`)}
                >
                  return home
                </Button>
              </CenterContainer>
            </GlitchWrapper>
          </ContentOuter>
        </LandinInner>
      </LandingCenter>
    </Container>
  );
}

export default NotFound;
