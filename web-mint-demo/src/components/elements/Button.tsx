import React from 'react';

import styled from '@emotion/styled';

import hexToRGB from 'utils/hexToRGB';
import Icon, { IconName } from 'components/icons';

export interface ButtonProps {
  color?: string;
  leftIcon?: IconName;
  rightIcon?: IconName;
  iconSize?: number;
  children: string;
  width?: number | 'auto';
  justify?: 'flex-start' | 'flex-end' | 'center';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

type StyledButtonProps = {
  red: number;
  green: number;
  blue: number;
  width?: number | 'auto';
  justifyContent: string;
};

const StyledButton = styled.button`
  background: none;
  position: relative;
  overflow: hidden;
  color: inherit;
  border: 1px solid
    ${(props: StyledButtonProps) =>
      `rgba(${props.red}, ${props.green}, ${props.blue}, 0.2)`};
  border-radius: 1rem;
  padding: 10px 34px;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  display: inline-flex;
  user-select: none;

  align-items: center;
  justify-content: ${(props) => props.justifyContent};

  width: ${(props) =>
    typeof props.width === `number`
      ? `${props.width}px`
      : props.width || `100%`};

  height: 60px;

  font-family: 'optician', sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 100;

  color: ${(props) => `rgba(${props.red}, ${props.green}, ${props.blue}, 1)`};

  &:after {
    width: 100%;
    height: 100%;

    display: block;
    background-color: ${(props: StyledButtonProps) =>
      `rgba(${props.red}, ${props.green}, ${props.blue}, 0.1)`};

    content: ' ';
    position: absolute;
    top: 0;
    left: 0;

    @media (hover: hover) {
      transition: transform 0.5s linear;
    }

    transform: translateX(-100%);

    z-index: -1;
  }

  &:hover {
    &:after {
      transform: translateX(0%);
    }
  }

  &:active {
    &:after {
      background-color: ${(props: StyledButtonProps) =>
        `rgba(${props.red}, ${props.green}, ${props.blue}, 0.2)`};
    }
  }
`;

const IconWrapper = styled.span<{ iconSize: number; left?: boolean }>`
  display: inline-flex;
  align-self: center;
  flex-shrink: 0;
  width: ${({ iconSize }) => iconSize}px;
  height: ${({ iconSize }) => iconSize}px;

  ${(props) =>
    props.left ? `margin-inline-end: 1rem` : `margin-inline-start: 1rem`};
`;

const Button = ({
  color = `#00ffc8`,
  iconSize = 22,
  leftIcon,
  rightIcon,
  width,
  justify,
  children,
  ...rest
}: ButtonProps) => {
  const [red, green, blue] = hexToRGB(color);

  let justifyContent = `center`;

  if (leftIcon && !rightIcon) justifyContent = `flex-start`;

  if (rightIcon && !leftIcon) justifyContent = `flex-end`;

  if (justify) justifyContent = justify;

  const styledProps = { red, green, blue, width, justifyContent };

  return (
    <StyledButton {...styledProps} {...rest}>
      {leftIcon ? (
        <IconWrapper iconSize={iconSize} left>
          <Icon iconName={leftIcon} />
        </IconWrapper>
      ) : (
        ``
      )}
      {children}
      {rightIcon ? (
        <IconWrapper iconSize={iconSize}>
          <Icon iconName={rightIcon} />
        </IconWrapper>
      ) : (
        ``
      )}
    </StyledButton>
  );
};

export default Button;
