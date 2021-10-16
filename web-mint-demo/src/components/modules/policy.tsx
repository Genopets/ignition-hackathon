import React from 'react';
import styled from '@emotion/styled';

const PolicyContainer = styled.div`
  height: 80px;
  margin: 19px 22px 0 23px;
  opacity: 0.5;
  font-family: 'optician';
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: 2.57px;
  text-align: center;
  color: #00ffc8;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
`;

const BottomLink = styled.a`
  display: block;
  font-family: 'optician';
`;

const Gap = styled.div`
  flex-grow: 1;
`;

const Policy = () => (
  <PolicyContainer>
    <BottomLink>Terms of Use</BottomLink>
    <BottomLink>Privacy Policy</BottomLink>
    <Gap> </Gap>
    <div>© genopets 2021 </div>
  </PolicyContainer>
);

export default Policy;
