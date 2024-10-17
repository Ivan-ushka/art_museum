import React, { FC, useEffect, useState } from 'react';
import { Art } from '../../http/interfaces';
import { GridContainer } from './styled';
import { SmallArtCard } from '../Cards/SmallArtCard';
import { Title } from '../Title';
import { CenteredFlex, Padding } from '../../pages/styled';
import { getArtList } from '../../http/ArtActions';
import Loader from '../Loader';

interface RandomArtsProps {
   setError: (error: Error | null) => void;
}

export const RandomArts: FC<RandomArtsProps> = ({ setError }) => {
   const [artList, setArtList] = useState<Art[]>([]);
   const [isLoading, setIsLoading] = useState<boolean>(true);

   useEffect(() => {
      setIsLoading(true);
      (async () => {
         try {
            const response = await getArtList();
            setArtList(response);
         } catch (e) {
            setError(e as Error);
         } finally {
            setIsLoading(false);
         }
      })();
   }, []);

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
