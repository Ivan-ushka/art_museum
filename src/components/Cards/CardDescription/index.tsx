import React, { FC } from 'react';
import { ArtTitle, Author, CardDetails, CardFavorites, Public } from './styled';
import { Link } from 'react-router-dom';
import { Art } from '../../../http/interfaces';
import SaveArtButton from '../../SaveArtButton';

interface CardDescriptionProps {
   art: Art;
}

export const CardDescription: FC<CardDescriptionProps> = ({ art }) => {
   return (
      <>
         <Link to={`/art-info/${art.id}`}>
            <CardDetails>
               <ArtTitle>{art.title || 'Unknown title'}</ArtTitle>
               <Author>{art.artist_title || 'Unknown artist'}</Author>
               <Public>Public</Public>
            </CardDetails>
         </Link>
         <CardFavorites>
            <SaveArtButton art={art} />
         </CardFavorites>
      </>
   );
};
