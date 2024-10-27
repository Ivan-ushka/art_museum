import { images } from '@assets/images';
import { colors } from '@constants/colors';
import { BetweenFlex, Logo, MainContainer } from '@pages/styled';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
   DropdownMenu,
   DropdownMenuItem,
   MenuDesktop,
   MenuDesktopImage,
   MenuDesktopItem,
   MenuDesktopText,
   MenuMobile,
} from './styled';

export const Header = () => {
   const location = useLocation();
   const isHome: boolean = location.pathname === '/';

   const [isOpen, setIsOpen] = useState(false);

   const toggleDropdown = () => {
      setIsOpen(!isOpen);
   };

   return (
      <MainContainer $backgroundColor={colors.gradient}>
         <BetweenFlex>
            <Link to='/'>
               <Logo src={images.museumLogo} alt='museumLogo' />
            </Link>
            <MenuDesktop>
               {!isHome && (
                  <Link to='/'>
                     <MenuDesktopItem>
                        <MenuDesktopImage src={images.home} alt='home' />
                        <MenuDesktopText>Home</MenuDesktopText>
                     </MenuDesktopItem>
                  </Link>
               )}

               <Link to='/favorites'>
                  <MenuDesktopItem>
                     <MenuDesktopImage src={images.bookmark} alt='bookmark' />
                     <MenuDesktopText>Your favorites</MenuDesktopText>
                  </MenuDesktopItem>
               </Link>
            </MenuDesktop>

            <MenuMobile
               src={images.burgerMenu}
               alt='burgerMenu'
               onClick={toggleDropdown}
            />
            <DropdownMenu $isOpen={isOpen}>
               <Link to='/'>
                  <DropdownMenuItem>Home</DropdownMenuItem>
               </Link>
               <Link to='/favorites'>
                  <DropdownMenuItem>Your favorites</DropdownMenuItem>
               </Link>
            </DropdownMenu>
         </BetweenFlex>
      </MainContainer>
   );
};
