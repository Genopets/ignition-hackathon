import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import styled from '@emotion/styled';

import LogoSVG from 'assets/svgs/logo.svg';
import WalletSVG from 'assets/svgs/wallet.svg';
import { ClickableItemProps } from 'types';

import { useRouter } from 'next/dist/client/router';

import { useSolana } from 'hooks/solana';
import DynamicLogo from 'components/elements/DynamicLogo';
import Policy from 'components/modules/policy';
import SocialIcon from 'components/elements/SocialIcon';
import Button from 'components/elements/Button';
import { connectWalletVisible } from 'components/modules/connect-wallet';
import { useAtom } from 'jotai';

const Line = styled.div`
  transition: opacity 0.3s ease-in-out;
  opacity: ${(props: ClickableItemProps) => (props.clicked ? 0.5 : 0.2)};
  z-index: 99;
`;

const TopLeftCorner = styled(Line)`
  position: fixed;
  top: 12px;
  left: 9.9px;
  border-top: 1px solid #00ffc8;
  border-left: 1px solid #00ffc8;
  border-top: 1px solid #00ffc8;
  border-bottom: ${(props) => (props.clicked ? `none` : `1px solid #00ffc8`)};
  border-right: ${(props) => (props.clicked ? `none` : `1px solid #00ffc8`)};
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 89px;
  height: 50px;
  display: grid;
  place-items: center;
`;

const LogoWrapper = styled.div`
  position: fixed;
  top: 12px;
  left: 9.9px;
  width: 89px;
  height: 50px;
  display: ${(props: ClickableItemProps) => (props.clicked ? `none` : `grid`)};
  place-items: center;
  z-index: 99;

  svg {
    z-index: 99;
  }
`;

const TopRightCorner = styled(Line)`
  position: fixed;
  top: 12px;
  right: 10px;
  border: 1px solid #00ffc8;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 89px;
  height: 50px;
  display: grid;
  place-items: center;
`;

const ConnectWalletBorders = styled(Line)`
  display: none;

  @media only screen and (min-width: 1024px) {
    position: fixed;
    top: 12px;
    right: 94px;
    border-bottom: 1px solid #00ffc8;
    border-left: 1px solid #00ffc8;
    border-bottom-left-radius: 10px;
    width: 250px;
    height: 50px;
    display: ${(props) => (props.clicked ? `none` : `flex`)};
    align-items: center;
    cursor: pointer;
  }
`;

const ConnectWalletContainer = styled.div`
  display: none;

  @media only screen and (min-width: 1024px) {
    position: fixed;
    top: 12px;
    right: 94px;
    width: 250px;
    height: 50px;
    display: ${(props: ClickableItemProps) =>
      props.clicked ? `none` : `flex`};
    align-items: center;
    padding: 7px;
    cursor: pointer;
    z-index: 100;

    color: #00ffc8;

    &:hover {
      color: #7cffe3;
    }
  }
`;

const MobileConnectWalletContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0 30px 0;
  padding: 0 20px;
  flex-grow: 1;
  border-radius: 30px;
  max-height: 60px;

  @media only screen and (min-width: 1024px) {
    display: none;
  }
`;

const WalletLogoContainer = styled.div`
  width: 25%;
  height: 60%;

  position: relative;
`;

const ConnectWalletText = styled.h2`
  flex-grow: 1;
  color: inherit;
`;

const HamburgerIconWrapper = styled.div`
  position: fixed;
  top: 12px;
  right: 10px;
  height: 25px;
  width: 25px;
  width: 89px;
  height: 50px;
  display: grid;
  place-items: center;
  z-index: 99;

  cursor: pointer;

  opacity: 1;
`;

const BottomRightCorner = styled.div`
  position: fixed;
  bottom: 10px;
  right: 15px;
  height: 25px;
  width: 25px;
  transition: opacity 0.2s ease-in-out;
  z-index: 99;
`;

const BottomLeftCorner = styled.div`
  position: fixed;
  bottom: 10px;
  left: 5px;
  height: 25px;
  width: 25px;
  transition: opacity 0.3s ease-in-out;
  z-index: 99;
`;

const TopBorderLine = styled(Line)`
  border-top: 1px solid #00ffc8;
  width: calc(100% - 197px);
  position: fixed;
  top: 12px;
  left: 99px;
`;

const BottomBorderLine = styled(Line)`
  border-top: 1px solid #00ffc8;
  width: calc(100% - 65px);
  position: fixed;
  bottom: 8px;
  left: 33px;
`;

const RightBorderLine = styled(Line)`
  border-right: 1px solid #00ffc8;
  height: calc(100% - 91px);
  position: fixed;
  right: 10px;
  top: 60px;
`;

const LeftBorderLine = styled(Line)`
  border-left: 1px solid #00ffc8;
  height: calc(100% - 91px);
  position: fixed;
  left: 10px;
  top: 60px;
`;

const CornerIcon = styled.i`
  color: #00ffc8;
  font-size: 25px;
  opacity: ${(props: ClickableItemProps) => (props.clicked ? 0.5 : 0.4)};
  z-index: 99;

  &:before {
    font-family: 'corners';
    font-style: normal;
    font-weight: normal;

    display: inline-block;
    text-decoration: inherit;
    width: 1em;
    margin-right: 0.2em;
    text-align: center;
    /* opacity: .8; */

    /* For safety - reset parent styles, that can break glyph codes*/
    font-variant: normal;
    text-transform: none;

    /* fix buttons height, for twitter bootstrap */
    line-height: 1em;

    /* Animation center compensation - margins should be symmetric */
    /* remove if not needed */
    margin-left: 0.2em;

    /* you can be more comfortable with increased icons size */
    /* font-size: 120%; */

    /* Font smoothing. That was taken from TWBS */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    /* Uncomment for 3D effect */
    /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */
  }
`;

const BottomRightIcon = styled(CornerIcon)`
  &:before {
    content: '\\e801';
  }
`;

const BottomLeftIcon = styled(CornerIcon)`
  &:before {
    content: '\\e800';
  }
`;

const HamburgerIcon = styled.div`
  display: block;
  z-index: 99;
  cursor: pointer;
  position: relative;

  div {
    width: 48px;
    height: 12px;
    padding: 5px 0;
  }

  span {
    position: absolute;
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${(props: ClickableItemProps) =>
      props.clicked ? `#00ffc8` : props.color || `#00ffc8`};
    border-radius: 1px;
    transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);
  }
  span:first-of-type {
    ${(props) =>
      !props.clicked
        ? `
            top: 0;
            `
        : `
            transform: rotate(45deg);
            top: 5px;
            `}
  }
  span:last-of-type {
    ${(props) =>
      !props.clicked
        ? `
            bottom: 0;
          `
        : `
            transform: rotate(-45deg);
            bottom: 5px;
            `}
  }
`;

const NavContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('imgs/noise.png') repeat;
  position: fixed;
  top: 0;
  left: 0;

  text-align: right;
  grid-area: nav;
  margin-right: 2em;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  opacity: 1;
  backdrop-filter: contrast(1.2) blur(10px);
  width: 100%;
  height: 100%;
  top: 0;
  overflow: hidden;
  z-index: 10;
  margin: 0;
  grid-area: unset;
  padding: 1rem 0;

  ${(props: ClickableItemProps) =>
    !props.clicked
      ? `opacity: 0;
    visibility: hidden;`
      : `opacity: 1;
    visibility: visible;`}
`;

const NavLeftWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: 1024px) {
    width: 400px;
    position: absolute;
    left: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const NavDividerLine = styled.div`
  display: none;
  @media only screen and (min-width: 1024px) {
    display: block;
    border-right: 1px solid #00ffc8;
    height: calc(100% - 23px);
    position: fixed;
    left: 400px;
    top: 13px;
    opacity: 0.5;
    z-index: 99;
  }
`;

const NavLogoContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  width: 100%;
`;

const NavLogo = styled.div`
  height: 104px;
  width: 100%;
  position: relative;

  @media only screen and (max-width: 321px) {
    height: 64px;
  }
`;

const NavLinksContainer = styled.div`
  flex-grow: 2;
  display: flex;
  align-items: center;
`;

const NavLinks = styled.ul`
  font-family: 'optician';
  font-weight: 100;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #00ffc8;
  font-weight: 100;

  ul li {
    display: inline;
  }
  li {
    display: inline;
    margin-left: 4em;
    list-style-type: none;
    font-size: 1.2rem;
  }

  a {
    color: #cfcfcf;
    text-decoration: none;
  }

  a:hover {
    color: #7cffe3;
  }

  text-align: center;
  position: relative;
  padding: 0;

  li {
    margin-left: 0;
    display: block;
    margin-bottom: 15px;
    text-align: left;
    font-family: 'optician', sans-serif;
    font-weight: 100;
    font-size: 24px;
    padding-bottom: 1.5rem;
    -webkit-box-align: center;
    -webkit-box-direction: normal;
    -webkit-font-smoothing: antialiased;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  a {
    color: #00ffc8;
    text-decoration: none;
  }
  a:active {
    color: #fff100;
  }
`;

const NavRightWrapper = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;

const SocialIconsContainer = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  width: 160px;
`;

const StylelessButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  &:active {
    color: #fff100;
  }

  &:hover {
    color: #7cffe3;
  }
`;

type GoToPageProps = { href: string; children: JSX.Element | string };

const Borders = () => {
  const [mobileMenuClicked, toggleMenu] = React.useState(false);

  const [, setConnectWalletScreenVisible] = useAtom(connectWalletVisible);

  const router = useRouter();

  const { provider, getAddress } = useSolana();

  const GoToPage = (props: GoToPageProps) => {
    const { href, children } = props;
    return (
      <StylelessButton
        type="button"
        onClick={() => {
          router.push(href);
          toggleMenu(false);
        }}
      >
        {children}
      </StylelessButton>
    );
  };

  return (
    <>
      <TopLeftCorner clicked={mobileMenuClicked} />
      <Link passHref href="/">
        <LogoWrapper clicked={mobileMenuClicked}>
          <DynamicLogo />
        </LogoWrapper>
      </Link>
      <TopRightCorner clicked={mobileMenuClicked} />
      <ConnectWalletBorders clicked={mobileMenuClicked} />
      <ConnectWalletContainer
        clicked={mobileMenuClicked}
        onClick={() => setConnectWalletScreenVisible(true)}
      >
        <WalletLogoContainer>
          <Image src={WalletSVG} layout="fill" alt="wallet" />
        </WalletLogoContainer>
        <ConnectWalletText>
          {provider?.isConnected ? getAddress() : `Connect Wallet`}
        </ConnectWalletText>
      </ConnectWalletContainer>
      <HamburgerIconWrapper onClick={() => toggleMenu(!mobileMenuClicked)}>
        <HamburgerIcon clicked={mobileMenuClicked}>
          <div>
            <span />
            <span />
          </div>
        </HamburgerIcon>
      </HamburgerIconWrapper>
      <BottomRightCorner>
        <BottomRightIcon clicked={mobileMenuClicked} />
      </BottomRightCorner>
      <BottomLeftCorner>
        <BottomLeftIcon clicked={mobileMenuClicked} />
      </BottomLeftCorner>
      <TopBorderLine clicked={mobileMenuClicked} />
      <BottomBorderLine clicked={mobileMenuClicked} />
      <RightBorderLine clicked={mobileMenuClicked} />
      <LeftBorderLine clicked={mobileMenuClicked} />
      <NavContainer clicked={mobileMenuClicked}>
        <NavDividerLine />
        <NavLeftWrapper>
          <NavLogoContainer>
            <NavLogo>
              <Image src={LogoSVG} layout="fill" alt="" />
            </NavLogo>
          </NavLogoContainer>

          <NavLinksContainer>
            <NavLinks>
              <li>
                <GoToPage href="/my-pet">Pet</GoToPage>
              </li>
              <li>
                <a href="https://genopets.me">Exit</a>
              </li>
            </NavLinks>
          </NavLinksContainer>
          <MobileConnectWalletContainer>
            <Button
              onClick={() => setConnectWalletScreenVisible(true)}
              leftIcon="wallet"
            >
              {provider?.isConnected ? getAddress() : `Connect Wallet`}
            </Button>
          </MobileConnectWalletContainer>
          <NavRightWrapper>
            <SocialIconsContainer>
              <SocialIcon
                type="twitter"
                url="https://twitter.com/genopets"
                color="#00ffc8"
                size="24px"
              />
              <SocialIcon
                type="discord"
                url="https://discord.gg/U6fvpEj7yS"
                color="#00ffc8"
                size="24px"
              />
              <SocialIcon
                type="medium"
                url="https://medium.com/@genopets"
                color="#00ffc8"
                size="24px"
              />
              <SocialIcon
                type="reddit"
                url="https://reddit.com/r/genopets"
                color="#00ffc8"
                size="24px"
              />
            </SocialIconsContainer>
            <Policy />
          </NavRightWrapper>
        </NavLeftWrapper>
      </NavContainer>
    </>
  );
};

export default Borders;
