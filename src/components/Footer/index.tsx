import { images } from '@assets/images';
import { colors } from '@constants/colors';
import { BetweenFlex, Logo, MainContainer } from '@pages/styled';
import { Link } from 'react-router-dom';

export const Footer = () => {
   return (
      <MainContainer $backgroundColor={colors.white}>
         <BetweenFlex>
            <Link to='/'>
               <Logo src={images.museumLogoDark} alt='museumLogo' />
            </Link>
            <Logo src={images.logoModsen} alt='modsenLogo' />
         </BetweenFlex>
      </MainContainer>
   );
};
