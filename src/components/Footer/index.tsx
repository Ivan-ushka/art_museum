import React from 'react';
import { Container, Logo, Wrapper } from './styled';
import museumLogo from '../../assets/museumLogoDark.svg';
import modsenLogo from '../../assets/logoModsen.svg';

export const Footer = () => {
   return (
      <Wrapper>
         <Container>
            <Logo src={museumLogo} alt='museumLogo' />
            <Logo src={modsenLogo} alt='modsenLogo' />
         </Container>
      </Wrapper>
   );
};
