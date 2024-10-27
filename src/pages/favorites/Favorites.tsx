import { images } from '@assets/images';
import { SmallArtCard } from '@components/Cards/SmallArtCard';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { GridContainer } from '@components/RandomArts/styled';
import { Title } from '@components/Title';
import { colors } from '@constants/colors';
import { Art } from '@interfaces/interfaces';
import { SessionStorageManager } from '@utils/sessionStorageManager';
import { useEffect, useState } from 'react';

import { CenteredFlex, MainContainer, NoResultFound } from '../styled';
import { FavoritesTitle, HugeIcon, WarningText } from './styled';

export const Favorites = () => {
   const [artListStorage, setArtListStorage] = useState<Art[]>([]);

   useEffect(() => {
      loadPaintings();
   }, []);

   const loadPaintings = () => {
      setArtListStorage(SessionStorageManager.getPaintings());
   };

   return (
      <>
         <Header />
         <MainContainer $backgroundColor={colors.background}>
            <CenteredFlex>
               <FavoritesTitle>
                  Here Are You
                  <WarningText>
                     <HugeIcon src={images.bookmark} alt='bookmark'></HugeIcon>
                     Favorites
                  </WarningText>
               </FavoritesTitle>
               <Title preTitle={'Saved by you'} title={'Your favorites list'} />
               {artListStorage && artListStorage.length > 0 ? (
                  <GridContainer onClick={loadPaintings}>
                     {artListStorage.map(art => (
                        <SmallArtCard art={art} key={art.id} />
                     ))}
                  </GridContainer>
               ) : (
                  <NoResultFound>No favorites...</NoResultFound>
               )}
            </CenteredFlex>
         </MainContainer>
         <Footer />
      </>
   );
};
