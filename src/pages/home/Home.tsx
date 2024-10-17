import React, { useState } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { RandomArts } from '../../components/RandomArts';
import { colors } from '../../constants/colors';
import { MainContainer } from '../styled';
import { SearchArts } from '../../components/SearchArts';
import ErrorMessage from '../../components/ErrorMessage';

const Home = () => {
   const [error, setError] = useState<Error | null>(null);

   if (error) return <ErrorMessage error={error.message} />;

   return (
      <>
         <Header />
         <MainContainer $backgroundColor={colors.background}>
            <SearchArts setError={setError} />
            <RandomArts setError={setError} />
         </MainContainer>
         <Footer />
      </>
   );
};

export default Home;
