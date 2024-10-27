import { sortCard } from '@utils/sortUtils';
import { ChangeEvent, FC, useEffect, useState } from 'react';

import { Art } from '@/interfaces/interfaces';

import { SelectContainer, SelectWrapper, StyledSelect } from './styled';

interface SortArtsProps {
   artList: Art[];
   setArtList: (artList: Art[]) => void;
}

export const SortArts: FC<SortArtsProps> = ({ artList, setArtList }) => {
   const [howToSort, setHowToSort] = useState<string>('');

   useEffect(() => {
      setArtList(sortCard({ artList, howToSort }));
   }, [howToSort]);

   const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
      setHowToSort(event.target.value);
   };

   return (
      <SelectContainer>
         <SelectWrapper>
            <StyledSelect value={howToSort} onChange={handleSelectChange}>
               <option value=''>Sorting by</option>
               <option value='A-Z'>Title by A-Z</option>
               <option value='Z-A'>Title by Z-A</option>
            </StyledSelect>
         </SelectWrapper>
      </SelectContainer>
   );
};
