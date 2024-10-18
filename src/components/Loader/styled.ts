import styled, { keyframes } from 'styled-components';
import { colors } from '../../constants/colors';

export const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div<{ size: number }>`
   display: flex;
   justify-content: center;
   align-items: center;
   width: ${({ size }) => size}px;
   height: ${({ size }) => size}px;
`;

export const Spinner = styled.div`
   border: 8px solid transparent; /* Прозрачный бордер */
   border-top-color: ${colors.yellow}; /* Цвет верхней части */
   border-radius: 50%; /* Круглая форма */
   animation: ${spin} 1s linear infinite; /* Анимация вращения */
   width: 100%;
   height: 100%;
`;
