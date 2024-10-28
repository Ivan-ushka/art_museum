import { sortCard } from '@utils/sortUtils';
import { ChangeEvent, FC, useEffect, useState } from 'react';

import { Art } from '@/interfaces/interfaces';

interface SortArtsProps {
   artList: Art[];
   setArtList: (artList: Art[]) => void;
}

export const SortArts: FC<SortArtsProps> = ({ artList, setArtList }) => {
   const [howToSort, setHowToSort] = useState<string>('');

   useEffect(() => {
      setArtList(sortCard({ artList, howToSort }));
   }, [howToSort, setArtList]);

   const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
      setHowToSort(event.target.value);
   };

   return (
      <div className='select-container'>
         <div className='select-wrapper'>
            <select
               className='styled-select'
               value={howToSort}
               onChange={handleSelectChange}
            >
               <option value=''>Sorting by</option>
               <option value='A-Z'>Title by A-Z</option>
               <option value='Z-A'>Title by Z-A</option>
            </select>
         </div>
      </div>
   );
};
