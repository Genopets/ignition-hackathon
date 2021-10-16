import styled from '@emotion/styled';
import React from 'react';

interface IStyledLineRotatorProps {
  size: number;
}

interface IStyleLineProps {
  color?: string;
  speed?: number;
}

type ILineRotatorProps = IStyledLineRotatorProps &
  IStyleLineProps & { duration?: number };

const StyledContainer = styled.div`
  width: ${(props: IStyledLineRotatorProps) => props.size}px;
  height: ${(props: IStyledLineRotatorProps) => props.size}px;
`;

const StyledLine = styled.span`
  width: 1px;
  height: 100%;
  display: block;
  margin: 0 15px;
  animation: rotation infinite forwards;
  background: ${({ color }: IStyleLineProps) => color ?? `#00FFC8`};
  animation-duration: ${({ speed }: IStyleLineProps) => speed ?? `1`}s;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(160deg);
    }
    50% {
      transform: rotate(190deg);
    }
    75% {
      transform: rotate(200deg);
    }
    85% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LineRotator = ({ color, speed, ...props }: ILineRotatorProps) => (
  <StyledContainer {...props} className="line">
    <StyledLine color={color} speed={speed} />
  </StyledContainer>
);

export default LineRotator;
