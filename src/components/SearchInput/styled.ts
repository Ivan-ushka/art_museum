import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const SearchWrapper = styled.div`
   padding: 120px;
   text-align: center;

   @media (max-width: 1024px) {
      padding: 60px;
   }

   @media (max-width: 760px) {
      padding: 10px;
      margin: 30px 0;
   }
`;

export const SearchTitle = styled.div`
   font-family: 'Lexend Deca', sans-serif;
   font-size: 64px;
   max-width: 684px;
   font-weight: bold;

   @media (max-width: 1024px) {
      font-size: 32px;
   }
`;

export const InputWrapper = styled.div`
   display: flex;
   margin-top: 72px;
   background: ${colors.white};
   padding: 16px;
   border-radius: 16px;
   width: 100%;

   &:active {
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
   }

   &:hover {
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
   }
`;

export const Input = styled.input`
   all: unset;
   text-align: start;
   width: 100%;
`;
