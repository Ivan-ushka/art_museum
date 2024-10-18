import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { CenteredFlex, MainContainer, NoResultFound } from '../styled';
import { colors } from '../../constants/colors';
import bookmark from '../../assets/bookmark.svg';
import { Title } from '../../components/Title';
import { FavoritesTitle, HugeIcon, WarningText } from './styled';
import { Art } from '../../http/interfaces';
import { SmallArtCard } from '../../components/Cards/SmallArtCard';
import { GridContainer } from '../../components/RandomArts/styled';

const Favorites = () => {
   const [artListStorage, setArtListStorage] = useState<Art[]>([]);

   useEffect(() => {
      handlePaintings();
   }, []);

   const handlePaintings = () => {
      const savedPaintings: Art[] = JSON.parse(
         sessionStorage.getItem('paintings') || '[]',
      );
      setArtListStorage(savedPaintings);
   };

   return (
      <>
         <Header />
         <MainContainer $backgroundColor={colors.background}>
            <CenteredFlex>
               <FavoritesTitle>
                  Here Are You
                  <WarningText>
                     <HugeIcon src={bookmark} alt='bookmark'></HugeIcon>
                     Favorites
                  </WarningText>
               </FavoritesTitle>
               <Title preTitle={'Saved by you'} title={'Your favorites list'} />
               {artListStorage && artListStorage.length > 0 ? (
                  <GridContainer onClick={handlePaintings}>
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

export default Favorites;
