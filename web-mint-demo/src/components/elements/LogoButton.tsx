import React from 'react';
import styled from '@emotion/styled';

interface LogoButtonProps {
  onClick?: () => void;
  children: React.ReactElement;
  onMouseDown?: (e: any) => void;
  onTouchStart?: (e: any) => void;
  onMouseUp?: (e: any) => void;
  onMouseLeave?: (e: any) => void;
  onTouchEnd?: (e: any) => void;
  isLoading?: boolean;
}

const LogoContainer = styled.div`
  display: flex;
  margin: 0 auto;
  text-align: center;
  padding: 40px;
  align-items: center;
  justify-content: center;

  ${(props: { isLoading: boolean }) =>
    props.isLoading ? `pointer-events: none` : ``};
`;

const LogoOutLine = styled.div`
  border-radius: 50%;
  padding: 10px;
  border-radius: 50%;
  border: 1px solid rgba(0, 255, 200, 0.5);
  position: relative;
  box-shadow: 0px 0px 20px 6px rgb(0 255 200 / 20%);
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &::after {
    content: '';
    transition: all 0.3s ease-in-out;
    width: 136px;
    height: 136px;
    position: absolute;
    left: 50%;
    top: 50%;
    background: #fff0;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid rgba(0, 255, 200, 0.5);
    box-shadow: 0px 0px 20px 6px rgb(0 255 200 / 20%);
  }

  &::active {
    transform: scale(1.1);
    transform-origin: center;
    box-shadow: none;
  }

  &:active &::after {
    transform: scale(0.9);
    transform-origin: center;
  }

  &:hover::after {
    width: 136px;
    height: 136px;
    box-shadow: none;
  }

  &:hover {
    box-shadow: none;
  }

  &:hover > div::before {
    background: linear-gradient(
      313deg,
      rgba(0, 216, 255, 0.8) 0%,
      rgba(0, 255, 140, 0.8) 100%
    );
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 100%;
    z-index: 9;
  }

  &:hover > div {
    box-shadow: 0px 0px 50px 42px rgb(0 255 200 / 20%);
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(0, 255, 200, 0.5);
    border-radius: 50%;
    left: -1.5px;
    top: -1.5px;
    transform: scale(1);
    opacity: 0;
    transition: all 0.4s ease-in-out;
  }

  &:active::before {
    opacity: 1;
    transform: scale(1.2);
  }

  &:active {
    border-color: transparent;
  }

  &:active::after {
    left: 50%;
    top: 50%;
  }

  &:active > div::before {
    transform: scale(1);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }

  ${(props: { isLoading: boolean }) =>
    props.isLoading
      ? `
    transform: scale(1.1);
    transform-origin: center;
    box-shadow: none;


  &::after {
    display: none;
  }

  & {
    box-shadow: none;
  }

  & > div::before {
    background: linear-gradient(
      313deg,
      rgba(0, 216, 255, 0.8) 0%,
      rgba(0, 255, 140, 0.8) 100%
    );
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 100%;
    z-index: 9;
  }

  & > div {
    box-shadow: 0px 0px 50px 42px rgb(0 255 200 / 20%);
  }

  &::before {
    opacity: 1;
    transform: scale(1.2);
  }

  & {
    border-color: transparent;
  }

  & > div::before {
    transform: scale(1);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
`
      : ``}
`;

const LogoStyledButton = styled.div`
  position: relative;
  transition: all 0.5s ease-in-out;
  border-radius: 50%;
  width: 136px;
  height: 136px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  &::before {
    transition: all 0.3s ease-in-out;
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
    box-shadow: 0px 0px 50px 26px rgb(0 255 200 / 0%);
    border-radius: 50%;
  }
`;

const LogoButton = ({
  children,
  isLoading = false,
  ...props
}: LogoButtonProps) => (
  <LogoContainer isLoading={isLoading} {...props}>
    <LogoOutLine isLoading={isLoading}>
      <LogoStyledButton>{children}</LogoStyledButton>
    </LogoOutLine>
  </LogoContainer>
);

export default LogoButton;
