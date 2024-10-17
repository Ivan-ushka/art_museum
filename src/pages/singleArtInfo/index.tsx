import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { CenteredFlex, MainContainer, Padding, YellowText } from '../styled';
import { colors } from '../../constants/colors';
import { Art, ArtById } from '../../http/interfaces';
import { getArtById } from '../../http/ArtActions';
import { useParams } from 'react-router-dom';
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
import SaveArtButton from '../../components/SaveArtButton';
import Loader from '../../components/Loader';
import ErrorMessage from '../../components/ErrorMessage';

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
      (async (): Promise<void> => {
         if (artId) {
            try {
               const response = await getArtById(Number(artId));
               setArt(response);
               setIsLoading(false);
            } catch (e) {
               setError(e as Error);
            }
         } else {
            setIsLoading(false);
         }
      })();
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
