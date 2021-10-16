import styled from '@emotion/styled';

interface StyledTerminalProps {
  offsetY: number;
}
export const StyleTerminal = styled.div`
  position: fixed;
  left: 100px;
  margin-left: 30px;
  ${({ offsetY }: StyledTerminalProps) => offsetY > 0 && `bottom: 72%;`}
  ${({ offsetY }: StyledTerminalProps) => offsetY <= 0 && `top:100px;`}
  transition: all 0.3s ease-out;
  @media (max-width: 767px) {
    left: 30px;
  }
`;
