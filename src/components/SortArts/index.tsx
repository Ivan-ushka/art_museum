import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { Art } from '../../http/interfaces';
import { SelectContainer, SelectWrapper, StyledSelect } from './styled';

interface SortArtsProps {
   artList: Art[];
   setArtList: (artList: Art[]) => void;
}

const SortArts: FC<SortArtsProps> = ({ artList, setArtList }) => {
   const [howToSort, setHowToSort] = useState<string>('');

   function sortCard() {
      if (howToSort === 'A-Z') {
         setArtList([...artList].sort((a, b) => a.title.localeCompare(b.title)));
      } else if (howToSort === 'Z-A') {
         setArtList([...artList].sort((a, b) => b.title.localeCompare(a.title)));
      } else {
         return setArtList(artList);
      }
   }

   useEffect(() => {
      sortCard();
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

export default SortArts;
