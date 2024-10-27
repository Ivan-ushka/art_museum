import styled from 'styled-components';

import { colors } from '../../constants/colors';

export const FavoritesImageWrap = styled.div<{ $isInStorage: boolean }>`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 59px;
   height: 59px;
   border-radius: 50%;
   background-color: ${({ $isInStorage }) =>
      !$isInStorage ? colors.background : colors.backgroundYellow};
   cursor: pointer;

   @media (max-width: 1024px) {
      height: 45px;
      width: 45px;
   }

   @media (max-width: 600px) {
      height: 35px;
      width: 35px;
   }
`;
