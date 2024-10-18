import React from 'react';
import museumLogo from '../../assets/museumLogoDark.svg';
import modsenLogo from '../../assets/logoModsen.svg';
import { BetweenFlex, Logo, MainContainer } from '../../pages/styled';
import { colors } from '../../constants/colors';
import { Link } from 'react-router-dom';

export const Footer = () => {
   return (
      <MainContainer $backgroundColor={colors.white}>
         <BetweenFlex>
            <Link to='/'>
               <Logo src={museumLogo} alt='museumLogo' />
            </Link>
            <Logo src={modsenLogo} alt='modsenLogo' />
         </BetweenFlex>
      </MainContainer>
   );
};
