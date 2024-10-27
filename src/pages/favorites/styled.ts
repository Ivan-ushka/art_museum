import { colors } from '@constants/colors';
import styled from 'styled-components';

export const HugeIcon = styled.img`
   height: 55px;
`;

export const FavoritesTitle = styled.div`
   font-family: 'Lexend Deca', sans-serif;
   font-size: 64px;
   max-width: 684px;
   margin: 120px 0;
   font-weight: bold;

   @media (max-width: 1024px) {
      font-size: 40px;
   }
`;

export const WarningText = styled.div`
   color: ${colors.yellow};
   display: flex;
   align-items: center;
   justify-content: center;
`;
