import { getArtList } from '@api/ArtActions';
import { FC, useEffect, useState } from 'react';

import { Art } from '@/interfaces/interfaces';

import { SmallArtCard } from '../Cards/SmallArtCard';
import { Loader } from '../Loader';
import { Title } from '../Title';

interface RandomArtsProps {
   setError: (error: Error | null) => void;
}

export const RandomArts: FC<RandomArtsProps> = ({ setError }) => {
   const [artList, setArtList] = useState<Art[]>([]);
   const [isLoading, setIsLoading] = useState<boolean>(true);

   useEffect(() => {
      setIsLoading(true);

      getArtList()
         .then(response => {
            setArtList(response);
         })
         .catch(e => {
            setError(e as Error);
         })
         .finally(() => {
            setIsLoading(false);
         });
   }, [setError]);

   return (
      <div className='centered-flex'>
         <Title preTitle={'Here some more'} title={'Other works for you'} />
         {isLoading ? (
            <div className='centered-flex'>
               <div className='padding-175'>
                  <Loader size={100} />
               </div>
            </div>
         ) : (
            <div className='small-grid-container'>
               {artList && artList.map(art => <SmallArtCard art={art} key={art.id} />)}
            </div>
         )}
      </div>
   );
};
