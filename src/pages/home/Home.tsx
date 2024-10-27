import { ErrorMessage } from '@components/ErrorMessage';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { RandomArts } from '@components/RandomArts';
import { SearchArts } from '@components/SearchArts';
import { useState } from 'react';

export const Home = () => {
   const [error, setError] = useState<Error | null>(null);

   if (error) return <ErrorMessage error={error.message} />;

   return (
      <>
         <Header />
         <main className='main-container'>
            <SearchArts setError={setError} />
            <RandomArts setError={setError} />
         </main>
         <Footer />
      </>
   );
};
