import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const Wrapper = styled.div`
   display: flex;
   align-items: center;
   flex-wrap: nowrap;
   justify-content: center;
   background: ${colors.white};
   padding: 32px;

   @media (max-width: 1024px) {
      padding: 16px;
   }
`;

export const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 70%;

   @media (max-width: 1024px) {
      width: 100%;
   }
`;

export const Logo = styled.img`
   height: 63px;
   width: 206px;

   @media (max-width: 720px) {
      height: 45px;
      width: 150px;
   }
`;
