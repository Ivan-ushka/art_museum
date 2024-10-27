import { getArtList } from '@api/ArtActions';
import { CenteredFlex, Padding } from '@pages/styled';
import { FC, useEffect, useState } from 'react';

import { Art } from '@/interfaces/interfaces';

import { SmallArtCard } from '../Cards/SmallArtCard';
import { Loader } from '../Loader';
import { Title } from '../Title';
import { GridContainer } from './styled';

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
      <CenteredFlex>
         <Title preTitle={'Here some more'} title={'Other works for you'} />
         {isLoading ? (
            <CenteredFlex>
               <Padding $padding={'200px'}>
                  <Loader size={100} />
               </Padding>
            </CenteredFlex>
         ) : (
            <GridContainer>
               {artList && artList.map(art => <SmallArtCard art={art} key={art.id} />)}
            </GridContainer>
         )}
      </CenteredFlex>
   );
};
