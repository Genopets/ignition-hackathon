/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import styled from '@emotion/styled';
import { useSolana } from '@/hooks/solana';
import Router from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import Button from '@/components/elements/Button';
import Pattern2 from '@/assets/svgs/lineDesign.png';
import cornerEye from '@/assets/svgs/assetsCorner.svg';
import c1 from '@/assets/svgs/c1.svg';
import c2 from '@/assets/svgs/c2.svg';
import c3 from '@/assets/svgs/c3.svg';
import c4 from '@/assets/svgs/c4.svg';

// assets
import centerBg from '@/assets/svgs/q.png';
import GlitchText from '@/components/elements/GlitchText';
import IFramePet from '@/components/pet-iframe';
import SocialIcon from '@/components/elements/SocialIcon';

const Container = styled.div`
  display: flex;
  place-content: center;
  grid-gap: 2rem;
  height: 100%;
  flex-direction: column;
  @media (max-height: 768px) {
    height: auto;
  }
`;

const BackgroundSection = styled.div`
  background: linear-gradient(320deg, rgb(24, 26, 28) 50%, rgb(0, 57, 63) 100%);
  inset: 0px;
  overflow: hidden;
  pointer-events: none;
  position: fixed;
  width: 100%;
  transition: all 0.5s ease-in-out;
`;

const LandingCenter = styled.div`
  max-width: 100%;
  position: relative;
  @media (max-height: 430px) {
    position: initial;
  }
`;

const CenterPattern = styled.div`
  position: absolute;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  overflow: hidden;
  > div {
    width: 100%;

    img {
      width: 100%;
    }
  }
  img {
    opacity: 1;
  }
  @media (max-width: 767px) {
    width: 300px;
    overflow: visible;
  }
  @media (max-height: 550px) {
    height: auto;
    min-height: 100vh;
    overflow-y: auto;
  }
`;

const LandinInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  @media (max-height: 550px) {
    height: 100%;
    min-height: 100vh;
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
const CircleDiv = styled.div`
  margin-bottom: 12px;
  max-height: 650px;
  min-width: 630px;
  position: relative;

  @media (max-width: 767px) {
    min-width: 315px;
  }

  @media (max-width: 384px) {
    margin-top: 60px;
  }
  @media (max-width: 359px) {
    min-width: 270px;
  }
  @media screen and (max-device-height: 640px) and (min-device-height: 641px) {
    margin-top: 190px;
  }
  @media screen and (max-device-width: 640px) and (max-device-height: 360px) {
    margin-top: 250px;
  }
  @media screen and (max-device-width: 320px) and (max-device-height: 568px) {
    margin-top: 145px;
  }
`;

const TopEye = styled.div`
  position: absolute;
  top: -3px;
  left: -1px;
`;

const BottomEye = styled.div`
  position: absolute;
  right: -2px;
  bottom: -4px;
`;

const CircleSqure = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid rgb(0, 255, 200, 0.2);
  border-radius: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const PetsCicles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -30px;
  @media (max-width: 767px) {
    top: 0;
    padding-bottom: 50px;
  }
`;

const TagLineText = styled.h6`
  font-size: 14px;
  color: #00ffc8;
  font-family: 'optician', sans-serif;
  font-weight: 100;
  text-align: center;
  margin-top: 0px;
  letter-spacing: 0px;

  span {
    display: block;
    &:first-of-type {
      opacity: 0.5;
      font-size: 12px;
      letter-spacing: 2px;
    }
  }
`;

const Circle1 = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    width: 200px;
    height: 200px;
    position: absolute;
    top: 0;
    left: 0;
    @media (max-width: 767px) {
      width: 100px;
      height: 100px;
    }
  }

  @media (max-width: 767px) {
    width: 100px;
    height: 100px;
  }
`;

const TopCircle = styled.div`
  position: relative;
  bottom: -45px;
  @media (max-width: 767px) {
    bottom: -20px;
  }
`;

const CenterCircle = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 458px;
  @media (max-width: 767px) {
    min-width: 250px;
  }
`;

const BottomCircle = styled.div`
  position: relative;
  top: -45px;
  @media (max-width: 767px) {
    top: 0;
  }
`;

const SpanContainer = styled.div`
  text-align: center;
  font-size: 54px;
  color: #d4fff6;
  position: relative;
  font-family: 'morganite';
  line-height: normal;
  @media (max-width: 767px) {
    font-size: 20px;
    ${({ aligment }: { aligment: TextPosition }) => `${aligment}:-8px;`}
  }

  ${({ aligment }: { aligment: TextPosition }) => `${aligment}:-28px;`}

  ${({ aligment }: { aligment: TextPosition }) =>
    aligment === `left` &&
    `div {
      left: 22px;
      @media (max-width: 767px) {
        left: 12px;
      }
    }`}
`;

const SpanText = styled.div`
  font-size: 14px;
  text-transform: uppercase;
  position: relative;
  top: -7px;
  font-family: 'optician', sans-serif;
  opacity: 0.5;
  font-weight: 400;
  color: #ffffff;
  line-height: 18px;
  letter-spacing: 2px;

  @media (max-width: 767px) {
    top: -3px;
    font-size: 8px;
  }
`;
const JoinCommunityBox = styled.div`
  padding: 10px 34px;
  width: auto;
  height: 60px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 100;
  color: #d4fff6;
  max-width: 634px;
  min-width: 600px;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
  display: flex;
  border-radius: 20px;
  display: flex !important;
  margin-top: 12px;
  border: 1px solid #d4fff630;
  border-radius: 20px;

  @media (max-width: 767px) {
    flex-direction: column;
    width: 100%;
    min-width: 100%;
    height: auto;
    margin-top: 0;
  }
`;

const PetDetails = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  bottom: 45px;
  @media (max-width: 767px) {
    padding: 0 20px;
    bottom: 30px;
  }
  h1 {
    @media (max-width: 767px) {
      font-size: 11px !important;
    }
  }
  h6 {
    margin-bottom: 4px;
  }
`;

const LeftPet = styled.div`
  font-size: 45px;
  margin-right: 30px;
  margin-top: 5px;
  text-align: center;
  font-family: 'morganite';
  @media (max-width: 767px) {
    font-size: 20px;
    margin-bottom: 10px;
    margin-right: 15px;
  }
`;

const LeftSpantext = styled.div`
  font-size: 13px;
  opacity: 0.5;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: 'optician', sans-serif;
  @media (max-width: 767px) {
    font-size: 10px;
  }
`;

const RightDetails = styled.div`
  h1 {
    font-size: 20px;
    color: #d4fff6;
  }
  h6 {
    text-align: left;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;

  a {
    display: inline-block;
    width: auto;
    height: 18px;
    margin-left: 13px;
  }

  svg {
    height: 100%;
    width: auto;

    &:hover path {
      fill: #00ffc8;
    }
  }
`;

const CSpan = styled.div`
  font-family: 'optician', sans-serif;
  font-size: 14px;

  @media (max-width: 767px) {
    padding-bottom: 10px;
  }
`;

interface ISocialLinks {
  alt: string;
  link: string;
}

const SocialLinks: Array<ISocialLinks> = [
  { alt: `twitter`, link: `https://twitter.com/genopets` },
  { alt: `discord`, link: `https://discord.gg/A2dTq9Pv` },
  { alt: `medium`, link: `https://medium.com/@genopets` },
  { alt: `reddit`, link: `https://reddit.com/r/genopets` },
];

type TextPosition = 'left' | 'right' | 'top' | 'bottom';

const CircleAttributes = ({
  circlePath,
  alt,
  label,
  value,
  position,
}: {
  circlePath: 'c1' | 'c2' | 'c3' | 'c4';
  alt: string;
  label: string;
  value: number;
  position: TextPosition;
}) => (
  <Circle1>
    <img src={`/imgs/${circlePath}.svg`} alt={alt} />
    <SpanContainer aligment={position}>
      {value}
      <SpanText>{label}</SpanText>
    </SpanContainer>
  </Circle1>
);

export default function Home() {
  const { getSOLBalance, provider, getFullAddress } = useSolana();

  const thisAddress = useMemo(() => getFullAddress(), [getFullAddress]);

  const [, setBalance] = useState<number | null>(null);
  const navigateToPet = () => Router.push(`/summon-pet`);
  useEffect(() => {
    getSOLBalance().then(setBalance);
  }, [getSOLBalance, provider]);

  return (
    <Container>
      <BackgroundSection />
      <LandingCenter>
        <LandinInner>
          <CenterPattern>
            <Image priority src={Pattern2} alt="Pattern" />
          </CenterPattern>
          <ContentOuter>
            <CenterBg>
              <Image priority src={centerBg} alt="centerBg" />
            </CenterBg>
            <CircleDiv>
              <PetsCicles>
                <TopCircle>
                  <CircleAttributes
                    alt="c1"
                    circlePath="c1"
                    label="HP"
                    value={100}
                    position="top"
                  />
                </TopCircle>
                <CenterCircle>
                  <CircleAttributes
                    alt="c2"
                    circlePath="c2"
                    label="Strength"
                    value={92}
                    position="left"
                  />
                  <CircleAttributes
                    alt="c3"
                    circlePath="c3"
                    label="speed"
                    value={92}
                    position="right"
                  />
                </CenterCircle>
                <BottomCircle>
                  <CircleAttributes
                    alt="c4"
                    circlePath="c4"
                    label="skill"
                    value={55}
                    position="bottom"
                  />
                </BottomCircle>
              </PetsCicles>
              <PetDetails>
                <LeftPet>
                  01
                  <LeftSpantext>Level</LeftSpantext>
                </LeftPet>
                <RightDetails>
                  <GlitchText opacity={1}>Genopets#B974</GlitchText>
                  <TagLineText>
                    <span>summoned by</span>
                    <span>{thisAddress}</span>
                  </TagLineText>
                </RightDetails>
              </PetDetails>
              <CircleSqure>
                <IFramePet />
                <TopEye>
                  <Image priority src={cornerEye} alt="cornerEye" />
                </TopEye>
                <BottomEye>
                  <Image priority src={cornerEye} alt="cornerEye" />
                </BottomEye>
              </CircleSqure>
            </CircleDiv>
            <GlitchWrapper>
              <CenterContainer>
                <Button
                  iconSize={18}
                  justify="center"
                  rightIcon="next"
                  width="auto"
                  onClick={navigateToPet}
                >
                  connect your wearable
                </Button>
                <Button
                  iconSize={18}
                  justify="center"
                  rightIcon="next"
                  width="auto"
                  onClick={navigateToPet}
                >
                  share your genopet
                </Button>
              </CenterContainer>
              <JoinCommunityBox style={{ display: `flex !important` }}>
                <CSpan>join the community</CSpan>
                <SocialIcons>
                  {SocialLinks.map(({ link, alt }: ISocialLinks) => (
                    <SocialIcon
                      type={alt}
                      url={link}
                      key={alt}
                      size="24px"
                      color="#D4FFF6"
                    />
                  ))}
                </SocialIcons>
              </JoinCommunityBox>
            </GlitchWrapper>
          </ContentOuter>
        </LandinInner>
      </LandingCenter>
    </Container>
  );
}
