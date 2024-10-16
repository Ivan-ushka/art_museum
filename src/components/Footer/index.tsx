import React from 'react';
import museumLogo from '../../assets/museumLogoDark.svg';
import modsenLogo from '../../assets/logoModsen.svg';
import { BetweenFlex, Logo, MainContainer } from '../../pages/styled';
import { colors } from '../../constants/colors';

export const Footer = () => {
   return (
      <MainContainer backgroundColor={colors.white}>
         <BetweenFlex>
            <Logo src={museumLogo} alt='museumLogo' />
            <Logo src={modsenLogo} alt='modsenLogo' />
         </BetweenFlex>
      </MainContainer>
   );
};
