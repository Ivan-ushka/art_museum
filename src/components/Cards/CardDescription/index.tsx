import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Art } from '@/interfaces/interfaces';

import { SaveArtButton } from '../../SaveArtButton';
import { ArtTitle, Author, CardDetails, CardFavorites, Public } from './styled';

interface CardDescriptionProps {
   art: Art;
}

export const CardDescription: FC<CardDescriptionProps> = ({
   art,
   art: { id, title, artist_title },
}) => {
   return (
      <>
         <Link to={`/art-info/${id}`}>
            <CardDetails>
               <ArtTitle>{title || 'Unknown title'}</ArtTitle>
               <Author>{artist_title || 'Unknown artist'}</Author>
               <Public>Public</Public>
            </CardDetails>
         </Link>
         <CardFavorites>
            <SaveArtButton art={art} />
         </CardFavorites>
      </>
   );
};
