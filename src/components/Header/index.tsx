import React, { useState } from 'react';
import {
   MenuDesktop,
   MenuMobile,
   DropdownMenu,
   DropdownMenuItem,
   MenuDesktopItem,
   MenuDesktopText,
   MenuDesktopImage,
} from './styled';
import museumLogo from '../../assets/museumLogo.svg';
import burgerMenu from '../../assets/burgerMenu.png';
import home from '../../assets/home.svg';
import bookmark from '../../assets/bookmark.svg';
import { Link, useLocation } from 'react-router-dom';
import { BetweenFlex, Logo, MainContainer } from '../../pages/styled';
import { colors } from '../../constants/colors';

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
               <Logo src={museumLogo} alt='museumLogo' />
            </Link>
            <MenuDesktop>
               {!isHome && (
                  <Link to='/'>
                     <MenuDesktopItem>
                        <MenuDesktopImage src={home} alt='home' />
                        <MenuDesktopText>Home</MenuDesktopText>
                     </MenuDesktopItem>
                  </Link>
               )}

               <Link to='/favorites'>
                  <MenuDesktopItem>
                     <MenuDesktopImage src={bookmark} alt='bookmark' />
                     <MenuDesktopText>Your favorites</MenuDesktopText>
                  </MenuDesktopItem>
               </Link>
            </MenuDesktop>

            <MenuMobile src={burgerMenu} alt='burgerMenu' onClick={toggleDropdown} />
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
