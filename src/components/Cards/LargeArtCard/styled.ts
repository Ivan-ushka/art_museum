import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export const LargeCard = styled.div`
   flex: 1;
   position: relative;
   z-index: 1;
   margin: 0 15px 100px 0;

   &:first-child {
      margin-left: 0;
   }

   &:last-child {
      margin-right: 0;
   }

   @media (max-width: 900px) {
      margin: 0 0 100px;
   }
`;

export const LargeCardImage = styled.img`
   max-width: 387px;
   max-height: 444px;
   height: 50vh;
   width: 100%;
   object-fit: cover;
   border-radius: 2px;
`;

export const TopContainer = styled.div`
   position: absolute;
   padding: 24px;
   z-index: 10;
   bottom: -70px;
   left: 50%;
   transform: translateX(-50%);

   background-color: ${colors.white};
   display: flex;
   align-items: center;
   justify-content: space-between;

   max-width: 330px;
   width: 80%;

   @media (max-width: 1250px) {
      padding: 12px;
   }
`;
