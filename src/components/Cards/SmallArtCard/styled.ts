import styled from 'styled-components';

import { colors } from '../../../constants/colors';

export const SmallCard = styled.div`
   display: grid;
   grid-template-columns: 1fr 2fr auto;
   gap: 16px;
   flex-wrap: wrap;
   align-items: center;
   padding: 13px;
   background-color: ${colors.white};
   font-family: 'Inter', sans-serif;
`;

export const SmallCardImage = styled.img`
   height: 80px;
   width: 80px;
   cursor: pointer;

   @media (max-width: 1024px) {
      height: 70px;
      width: 70px;
   }

   @media (max-width: 720px) {
      height: 65px;
      width: 65px;
   }

   @media (max-width: 400px) {
      height: 45px;
      width: 45px;
   }
`;
