import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export const CardDetails = styled.div`
   text-align: start;
   max-width: 100px;

   @media (min-width: 1024px) {
      max-width: 200px;
   }
`;

export const ArtTitle = styled.div`
   font-size: 17.54px;
   font-weight: 500;
   line-height: 26.32px;
   letter-spacing: -0.03em;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
   color: ${colors.primary};
`;

export const Author = styled.div`
   font-size: 15.35px;
   font-weight: 400;
   margin-bottom: 10px;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
   color: ${colors.secondary};
`;

export const Public = styled.div`
   font-size: 15.35px;
   font-weight: 700;
   line-height: 26.32px;
   letter-spacing: -0.01em;
   color: ${colors.primary};
`;

export const CardFavorites = styled.div`
   display: flex;
   align-items: center;
   justify-content: end;
`;

export const FavoritesImageWrap = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 59px;
   height: 59px;
   border-radius: 50%;
   background-color: ${colors.background};

   @media (max-width: 1024px) {
      height: 45px;
      width: 45px;
   }

   @media (max-width: 600px) {
      height: 35px;
      width: 35px;
   }
`;
