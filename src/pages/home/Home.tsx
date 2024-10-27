import { ErrorMessage } from '@components/ErrorMessage';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { RandomArts } from '@components/RandomArts';
import { SearchArts } from '@components/SearchArts';
import { colors } from '@constants/colors';
import { useState } from 'react';

import { MainContainer } from '../styled';

export const Home = () => {
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
