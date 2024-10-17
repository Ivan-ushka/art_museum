import styled from 'styled-components';

export const GridContainer = styled.div`
   display: flex;
   justify-content: space-between;
   width: 100%;
   margin: 0 auto;

   @media (max-width: 900px) {
      flex-direction: column;
      justify-content: center;
   }
`;

export const PositionRelative = styled.div`
   position: relative;
`;
