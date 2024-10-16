import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { RandomArts } from '../../components/RandomArts';
import { colors } from '../../constants/colors';
import { MainContainer } from '../styled';
import { SearchArts } from '../../components/SearchArts';

const Home = () => {
   return (
      <>
         <Header />
         <MainContainer $backgroundColor={colors.background}>
            <SearchArts />
            <RandomArts />
         </MainContainer>
         <Footer />
      </>
   );
};

export default Home;
