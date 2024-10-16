import styled from 'styled-components';
import { colors } from '../constants/colors';

export const Icon = styled.img`
   height: 24px;
   width: 24px;

   @media (max-width: 1024px) {
      height: 20px;
      width: 20px;
   }
`;

export const Logo = styled.img`
   height: 63px;
   width: 206px;

   @media (max-width: 760px) {
      height: 45px;
      width: 150px;
   }
`;

export const MainContainer = styled.div<{ $backgroundColor: string }>`
   margin: 0 auto;
   padding: 16px 15vw;
   background: ${({ $backgroundColor }) => $backgroundColor || colors.white};
`;

export const CenteredFlex = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   text-align: center;
`;
export const EndFlex = styled.div`
   display: flex;
   align-items: center;
   justify-content: end;
   flex-direction: column;
`;

export const BetweenFlex = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

export const YellowText = styled.span`
   color: ${colors.yellow};
`;

export const Padding = styled.div<{ $padding: string }>`
   padding: ${({ $padding }) => $padding};
`;

export const NoResultFound = styled.div`
   padding: 150px;
   text-align: center;
   font-size: 32px;

   @media (max-width: 760px) {
      padding: 50px;
      font-size: 16px;
   }
`;

export const HugeTitle = styled.div`
   font-family: 'Lexend Deca', sans-serif;
   font-size: 64px;
   max-width: 684px;
   font-weight: bold;

   @media (max-width: 1024px) {
      font-size: 32px;
   }
`;

export const FullHeight = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   min-height: 70vh;
   background: ${colors.background};
`;
