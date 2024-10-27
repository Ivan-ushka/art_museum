import { images } from '@assets/images';
import { SmallArtCard } from '@components/Cards/SmallArtCard';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { Title } from '@components/Title';
import { Art } from '@interfaces/interfaces';
import { SessionStorageManager } from '@utils/sessionStorageManager';
import { useEffect, useState } from 'react';

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
         <main className='main-container'>
            <div className='centered-flex'>
               <div className='favorites-title'>
                  Here Are You
                  <div className='warning-text'>
                     <img
                        className='huge-icon'
                        src={images.bookmark}
                        alt='bookmark'
                     ></img>
                     Favorites
                  </div>
               </div>
               <Title preTitle={'Saved by you'} title={'Your favorites list'} />
               {artListStorage && artListStorage.length > 0 ? (
                  <div className='small-grid-container' onClick={loadPaintings}>
                     {artListStorage.map(art => (
                        <SmallArtCard art={art} key={art.id} />
                     ))}
                  </div>
               ) : (
                  <div className='no-result-found'>No favorites...</div>
               )}
            </div>
         </main>
         <Footer />
      </>
   );
};
