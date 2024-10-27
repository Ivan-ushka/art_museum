import { getArtById } from '@api/ArtActions';
import { ErrorMessage } from '@components/ErrorMessage';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { Loader } from '@components/Loader';
import { SaveArtButton } from '@components/SaveArtButton';
import { colors } from '@constants/colors';
import { Art, ArtById } from '@interfaces/interfaces';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CenteredFlex, MainContainer, Padding, YellowText } from '../styled';
import {
   ArtInfoArtist,
   ArtInfoContainer,
   ArtInfoDetails,
   ArtInfoImage,
   ArtInfoImageWrap,
   ArtInfoOverview,
   ArtInfoOverviewItem,
   ArtInfoOverviewTitle,
   ArtInfoTitle,
   ArtInfoTitleContainer,
   ArtInfoYear,
   ZContainer,
} from './styled';

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

   return (
      <>
         <Header />
         <MainContainer $backgroundColor={colors.background}>
            {!art || isLoading ? (
               <CenteredFlex>
                  <Padding $padding={'150px'}>
                     <Loader size={100} />
                  </Padding>
               </CenteredFlex>
            ) : (
               <ArtInfoContainer>
                  <ArtInfoImageWrap>
                     <ArtInfoImage src={art.imageUrl} alt='art title' />
                     <ZContainer>
                        <SaveArtButton art={art as Art} />
                     </ZContainer>
                  </ArtInfoImageWrap>
                  <ArtInfoDetails>
                     <ArtInfoTitleContainer>
                        <ArtInfoTitle>{art.title}</ArtInfoTitle>
                        <ArtInfoArtist>
                           <YellowText>{art.artist_title}</YellowText>
                        </ArtInfoArtist>
                        <ArtInfoYear>
                           {art.date_start}-{art.date_end}
                        </ArtInfoYear>
                     </ArtInfoTitleContainer>
                     <div>
                        <ArtInfoOverviewTitle>Overview</ArtInfoOverviewTitle>
                        <ArtInfoOverview>
                           <ArtInfoOverviewItem>
                              <YellowText>Artist nacionality:{'\u00A0'} </YellowText>
                              <p>{art.place_of_origin}</p>
                           </ArtInfoOverviewItem>
                           <ArtInfoOverviewItem>
                              <YellowText>Dimensions: Sheet:{'\u00A0'}</YellowText>
                              <p>{art.dimensions}</p>
                           </ArtInfoOverviewItem>
                           <ArtInfoOverviewItem>
                              <YellowText>Credit Line:{'\u00A0'}</YellowText>
                              <p>{art.credit_line}</p>
                           </ArtInfoOverviewItem>
                           <ArtInfoOverviewItem>
                              <YellowText>Repository:{'\u00A0'}</YellowText>
                              <p>{art.place_of_origin}</p>
                           </ArtInfoOverviewItem>
                        </ArtInfoOverview>
                     </div>
                  </ArtInfoDetails>
               </ArtInfoContainer>
            )}
         </MainContainer>
         <Footer />
      </>
   );
};
