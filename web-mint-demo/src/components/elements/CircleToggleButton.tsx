import React, { MouseEvent } from 'react';
import styled from '@emotion/styled';
import hexToRGB from '../../utils/hexToRGB';
import Sounds from '../../utils/sounds';

const sizeOption = {
  small: 0.3,
  medium: 0.6,
  large: 1,
};

interface SoundButtonProps {
  onClick: () => void;
  hoverColor?: string;
  activeColor?: string;
  borderColor?: string;
  hoverSound?: boolean;
  initialActive?: number;
  borderHoverColor?: string;
  hoverGlowColor?: string;
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  onMouseUp?: (e: any) => void;
  onMouseLeave?: (e: any) => void;
}

type StyledSoundButtonProps = Omit<SoundButtonProps, `onClick` | `children`>;

const getRGB = (hex: string) => {
  const rgb = hexToRGB(hex);
  return `rgb(${rgb[0]} ${rgb[1]} ${rgb[2]} / 10%)`;
};

const StyledSoundButton = styled.button`
  margin: 50px;
  border: 1px solid ${(props: StyledSoundButtonProps) => props.borderColor};
  box-shadow: 0px 0px 15px 10px
    ${(props: StyledSoundButtonProps) => getRGB(props.borderColor || `#00ffc8`)};

  user-select: none;

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
  transform: scale(
    ${(props: StyledSoundButtonProps) => sizeOption[props.size || `small`]}
  );

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
    pointer-events: none;
  }

  &:hover {
    border: 1px solid
      ${(props: StyledSoundButtonProps) => props.borderHoverColor};
    box-shadow: 0px 0px 50px 26px
      ${(props: StyledSoundButtonProps) => props.hoverGlowColor};
    transition: all 0.4s ease;
  }

  &:hover::after {
    border: 1px solid
      ${(props: StyledSoundButtonProps) => props.borderHoverColor};
    transform: scale(1.15);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 100%;
  }

  &:hover::before {
    background: ${(props: StyledSoundButtonProps) => props.hoverColor};
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
    transform: scale(1.1);
  }

  &:active::before {
    background: ${(props: StyledSoundButtonProps) => props.activeColor};
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
    width: 200px;
    height: 200px;
    left: -10px;
    top: -10px;
  }

  > div {
    transition: 0.2s ease all;
    font-size: 24px;
    width: 140px;
    white-space: nowrap;
    isplay: flex;
    justify-content: center;
    align-items: center;
    text-overflow: ellipsis;
    position: relative;

    &::before {
      content: '';
      font-family: 'mokoto glitch outline';
      font-size: 24px;
      position: absolute;
      left: -30px;
      opacity: 0.5;
      letter-spacing: 3;
    }
  }

  ${(props: StyledSoundButtonProps) =>
    props.initialActive !== 0 &&
    ` &::before{
        width: ${props.initialActive}%;
        height: ${props.initialActive}%;
        left: calc(50% - ${(props.initialActive || 0) / 2}%);
        top: calc(50% - ${(props.initialActive || 0) / 2}%);
        background:${props.hoverColor}
      }
  `}
`;

const CircleToggleButton = ({
  onClick,
  children,
  hoverSound,
  size = `small`,
  initialActive = 0,
  hoverGlowColor = `rgba(0, 255, 200, 0.2)`,
  borderColor = `rgba(0, 255, 200, 0.5)`,
  borderHoverColor = `rgba(0, 255, 200, 0.5)`,
  activeColor = `linear-gradient( 180deg, rgba(205, 255, 0, 1) 0%, rgba(225, 0, 255, 1) 100% );`,
  hoverColor = `linear-gradient( 90deg, rgba(0,216,255,0.8) 0%, rgba(0,255,140,0.8) 100% );`,
  onMouseUp,
  onMouseLeave,
}: SoundButtonProps) => {
  const onMouseEnter = (event: MouseEvent<HTMLElement>) => {
    if (hoverSound) new Sounds(`OnHover`).play();
    if (onMouseUp) onMouseUp(event);
  };

  const onMouseExit = (event: MouseEvent<HTMLElement>) => {
    if (onMouseLeave) onMouseLeave(event);
  };

  const props = {
    onMouseEnter,
    onMouseLeave: onMouseExit,
  };

  return (
    <StyledSoundButton
      size={size}
      onClick={onClick}
      hoverColor={hoverColor}
      borderColor={borderColor}
      activeColor={activeColor}
      hoverGlowColor={hoverGlowColor}
      borderHoverColor={borderHoverColor}
      initialActive={initialActive}
      {...props}
    >
      <div>{children}</div>
    </StyledSoundButton>
  );
};

export default CircleToggleButton;
