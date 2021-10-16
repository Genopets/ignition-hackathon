/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { gsap, Power4 } from 'gsap';
import styled from '@emotion/styled';
import Sounds from '../../utils/sounds';
import GlitchText from './GlitchText';
import CircleButtonText from './CircleButtonText';

interface CircleButtonProps {
  text: string;
  fontSize?: number;
  onClick?: () => void;
}

const StyleBoundry = styled.div`
  padding: 60px;
  width: auto;
  height: auto;
`;
const StyledContainer = styled.div`
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCircleButton = styled.button`
  border: 1px solid rgba(0, 255, 200, 0.5);
  background-color: transparent;
  padding: 0px 20px 0 20px;
  color: black;
  min-width: 180px;
  min-height: 180px;
  border-radius: 100%;
  font-family: 'mokoto glitch';
  letter-spacing: 2px;
  color: #00ffc8;
  font-size: 15px;
  position: relative;
  line-height: 1.3;
  cursor: pointer;
  transition: all 0.4s;
  background-repeat: no-repeat;
  background-position: -140px 0;
  background-size: 280px 100%;
  transition: background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  @media (max-width: 767px) {
    width: 128px;
    height: 128px;
    min-width: 128px;
    min-height: 128px;
  }

  &::before {
    transition: all 0.3s ease;
    display: inline-block;
    content: '';
    position: absolute;
    border-radius: 4rem;
    width: 0;
    box-sizing: border-box;
    z-index: -2;
    left: 50%;
    top: 50%;
    pointer-events: none;
    height: 0;
    box-shadow: 0px 0px 50px 26px rgba(0, 255, 200, 0);
  }

  &::after {
    transition: all 0.2s ease;
    display: inline-block;
    content: '';
    position: absolute;
    border-radius: 50%;
    width: 0;
    height: 0;
    box-sizing: border-box;
    z-index: -2;
    left: 50%;
    top: 50%;
    height: 0;
    pointer-events: none;
  }

  &:hover {
    border: 1px solid rgba(0, 255, 200, 0.8);
    box-shadow: 0px 0px 50px 26px rgba(0, 255, 200, 0.2);
    transition: box-shadow 0.4s ease;
  }

  &:hover::after {
    border: 1px solid rgba(0, 255, 200, 0.3);
    transform: scale(1.15);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }

  &:hover::before {
    background: linear-gradient(
      90deg,
      rgba(0, 216, 255, 0.8) 0%,
      rgba(0, 255, 140, 0.8) 100%
    );
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 100%;
  }

  &:active {
    border: 1px solid rgba(255, 0, 255, 0.5);
  }

  &:active div {
    color: #fff100;
  }

  &:active::before {
    background: linear-gradient(
      180deg,
      rgba(205, 255, 0, 1) 0%,
      rgba(225, 0, 255, 1) 100%
    );
    border: 1px solid
      linear-gradient(
        180deg,
        rgba(205, 255, 0, 1) 0%,
        rgba(225, 0, 255, 1) 100%
      );
    box-shadow: 0px 0px 100px 80px rgba(225, 0, 255, 0.2);
  }

  &:active::after {
    border: 1px solid rgba(255, 0, 255, 0.5);
    height: 100%;
    left: 0;
    top: 0;
    transform: scale(1.25);
    width: 100%;
  }

  div {
    font-size: 24px;
    width: 140px;
    white-space: nowrap;
    display: block;
    text-overflow: ellipsis;
    position: relative;
    left: -109%;
    transform: translateX(-50%);
    @media (max-width: 992px) {
      left: -61%;
    }
    @media (max-width: 767px) {
      left: -25%;
    }
    h1 {
      @media (max-width: 767px) {
        font-size: 18px;
      }
    }
  }
`;

const StyleTextContainer = styled.div`
  pointer-events: none;
  position: absolute;
  z-index: 1;

  h1 {
    @media (max-width: 767px) {
      font-size: 20px;
    }
  }
`;

const CircleButton = ({ text, fontSize, ...props }: CircleButtonProps) => {
  // Ref elements
  const ButtonRef = React.useRef<HTMLButtonElement>(null);
  const ContainerRef = React.useRef<HTMLDivElement>(null);
  const textContinerRef = React.useRef<HTMLDivElement>(null);

  const [hover, setHover] = React.useState(false);
  const [mousePosition, setMousePosition] = React.useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  const updateMousePosition = (ev: { clientX: number; clientY: number }) => {
    setMousePosition({ x: ev?.clientX || 0, y: ev?.clientY || 0 });
  };

  const magnaticEffect = (elementRef: HTMLElement | null, factor: number) => {
    const { x, y } = mousePosition;
    const elementPosition = elementRef?.getBoundingClientRect();

    const elementX =
      ((elementPosition?.left ?? 0) + (elementPosition?.right ?? 0)) / 2;
    const elementY =
      ((elementPosition?.top ?? 0) + (elementPosition?.bottom ?? 0)) / 2;

    gsap.to(elementRef, {
      x: hover ? (-elementX + (x || -(-elementX))) / factor : 0,
      y: hover ? (-elementY + (y || -(-elementY))) / factor : 0,
      duration: hover ? 0.3 : 0.3,
      ease: Power4.easeOut,
    });
  };

  React.useEffect(() => {
    window.addEventListener(`mousemove`, updateMousePosition);
    return () => window.removeEventListener(`mousemove`, updateMousePosition);
  }, []);

  React.useEffect(() => {
    magnaticEffect(textContinerRef.current, 10);
    magnaticEffect(ButtonRef.current, 1);
  }, [hover, mousePosition]);

  const containerProps = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
  };

  const buttonEventsProps = {
    onMouseEnter: () => new Sounds(`OnHover`).play(),
    onMouseDown: () => new Sounds(`OnPress`).play(),
  };

  const buttonProps = { ...props, ...buttonEventsProps };

  return (
    <StyleBoundry {...containerProps}>
      <StyledContainer ref={ContainerRef}>
        <StyleTextContainer ref={textContinerRef}>
          <CircleButtonText color="#00ffc8" fontSize={fontSize}>
            {text}
          </CircleButtonText>
        </StyleTextContainer>
        <StyledCircleButton ref={ButtonRef} {...buttonProps} />
      </StyledContainer>
    </StyleBoundry>
  );
};

export default CircleButton;
