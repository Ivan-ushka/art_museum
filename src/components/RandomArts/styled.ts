import styled from 'styled-components';

export const GridContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 30px;
   margin-bottom: 120px;

   @media (min-width: 1250px) and (max-width: 1920px) {
      gap: 20px;
   }

   @media (min-width: 769px) and (max-width: 1250px) {
      grid-template-columns: repeat(2, 1fr);
      margin-bottom: 100px;
   }

   @media (max-width: 769px) {
      grid-template-columns: repeat(1, 1fr);
      margin-bottom: 80px;
   }
`;
