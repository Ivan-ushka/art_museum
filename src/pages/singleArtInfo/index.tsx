import { getArtById } from '@api/ArtActions';
import { ErrorMessage } from '@components/ErrorMessage';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { Loader } from '@components/Loader';
import { SaveArtButton } from '@components/SaveArtButton';
import { Art, ArtById } from '@interfaces/interfaces';
import { getArtDetails } from '@utils/artDetailsUtils';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface SingleArtInfoParams {
   artId: string | undefined;
   [key: string]: string | undefined;
}

export const SingleArtInfo = () => {
   const { artId } = useParams<SingleArtInfoParams>();

   const [art, setArt] = useState<ArtById>();
   const [error, setError] = useState<Error | null>(null);
   const [isLoading, setIsLoading] = useState<boolean>(true);

   useEffect(() => {
      setIsLoading(true);

      if (artId) {
         getArtById(Number(artId))
            .then(response => {
               setArt(response);
            })
            .catch(e => {
               setError(e as Error);
            });
      }

      setIsLoading(false);
   }, [artId]);

   if (error) return <ErrorMessage error={error.message} />;

   const artDetails = getArtDetails(art);

   return (
      <>
         <Header />
         <main className='main-container'>
            {!art || isLoading ? (
               <div className='centered-flex'>
                  <div className='padding-150'>
                     <Loader size={100} />
                  </div>
               </div>
            ) : (
               <div className='art-info-container'>
                  <div className='art-info-image-wrap'>
                     <img className='art-info-image' src={art.imageUrl} alt='art title' />
                     <div className='z-container'>
                        <SaveArtButton art={art as Art} />
                     </div>
                  </div>
                  <div className='art-info-details'>
                     <div className='art-info-title-container'>
                        <div className='title'>{art.title}</div>
                        <div className='artist'>
                           <span className='yellow-text'>{art.artist_title}</span>
                        </div>
                        <div className='year'>
                           {art.date_start}-{art.date_end}
                        </div>
                     </div>
                     <div>
                        <div className='art-info-overview-title'>Overview</div>
                        <div className='art-info-overview'>
                           {artDetails.map(({ label, value }) => (
                              <div key={value}>
                                 <span className='yellow-text'>
                                    {label}
                                    {'\u00A0'}
                                 </span>
                                 <p>{value || 'N/A'}</p>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            )}
         </main>
         <Footer />
      </>
   );
};
