import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const StyledSelect = styled.select`
   font-size: 16px;
   padding: 6px 15px;
   border: 1px solid ${colors.grey};
   border-radius: 4px;
   color: ${colors.black};
   background-color: ${colors.white};
   opacity: 0.7;
   cursor: pointer;

   &:focus {
      outline: none;
      border-color: ${colors.yellow}; /* Change to your desired color */
      opacity: 1; /* Optional: make it fully opaque when focused */
   }
`;
export const SelectWrapper = styled.div`
   width: 100px;
   height: 50px;
`;

export const SelectContainer = styled.div`
   position: absolute;
   right: 120px;
   bottom: 60px;

   @media (max-width: 1040px) {
      right: 60px;
      bottom: 0;
   }

   @media (max-width: 768px) {
      right: 10px;
      bottom: 0;
   }
`;
