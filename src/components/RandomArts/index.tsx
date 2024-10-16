import React, { useEffect, useState } from 'react';
import { Art } from '../../http/interfaces';
import { GridContainer } from './styled';
import { SmallArtCard } from '../Cards/SmallArtCard';
import { Title } from '../Title';
import { CenteredFlex, Padding } from '../../pages/styled';
import { getArtList } from '../../http/ArtActions';
import Loader from '../Loader';

export const RandomArts: React.FC = () => {
   const [artList, setArtList] = useState<Art[]>([]);
   const [error, setError] = useState<Error | null>(null);
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

   if (error) return <div>{error.message}</div>;

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
