import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const HeaderContainer = styled.div`
   margin: 0 auto;
   padding: 16px 10vw;
   background: ${colors.gradient};
`;

export const MenuMobile = styled.img`
   display: none;
   cursor: pointer;
   position: relative;
   height: 35px;
   width: 35px;
   border: 1px solid ${colors.grey};
   border-radius: 3px;
   transition: box-shadow 0.3s ease;

   @media (max-width: 760px) {
      display: block;
   }

   &:hover {
      box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
   }
`;

export const DropdownMenu = styled.div<{ isOpen: boolean }>`
   display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
   position: absolute;
   right: 0;
   top: 65px;
   background-color: white;
   border: 1px solid #ddd;
   border-radius: 5px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
   margin-top: 5px;
   z-index: 1000;

   @media (min-width: 760px) {
      display: none;
   }
`;

export const DropdownMenuItem = styled.div`
   padding: 10px 15px;
   cursor: pointer;

   &:hover {
      background-color: #f0f0f0;
   }
`;

export const MenuDesktop = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;

   @media screen and (max-width: 760px) {
      display: none;
   }
`;

export const MenuDesktopItem = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0 8px;
`;

export const MenuDesktopImage = styled.img`
   height: 24px;
   width: 24px;
`;

export const MenuDesktopText = styled.text`
   font-family: 'Inter', sans-serif;
   font-weight: 400;
   font-size: 16px;
   color: ${colors.white};
   padding: 0 4px;

   @media (max-width: 760px) {
      font-size: 12px;
   }
`;
