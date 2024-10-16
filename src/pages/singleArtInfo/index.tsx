import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { MainContainer, YellowText } from '../styled';
import { colors } from '../../constants/colors';
import { ArtById } from '../../http/interfaces';
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

   if (!art || isLoading) return <div>Loading...</div>;
   if (error) return <div>{error.message}</div>;

   return (
      <>
         <Header />
         <MainContainer $backgroundColor={colors.background}>
            <ArtInfoContainer>
               <ArtInfoImageWrap>
                  <ArtInfoImage src={art.imageUrl} alt='art title' />
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
         </MainContainer>
         <Footer />
      </>
   );
};
