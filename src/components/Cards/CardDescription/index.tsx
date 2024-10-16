import React, { FC } from 'react';
import {
   ArtTitle,
   Author,
   CardDetails,
   CardFavorites,
   FavoritesImageWrap,
   Public,
} from './styled';
import { Icon } from '../../../pages/styled';
import bookmark from '../../../assets/bookmark.svg';
import { Link } from 'react-router-dom';

interface CardDescriptionProps {
   title: string;
   artist_title: string;
   artId: number;
}

export const CardDescription: FC<CardDescriptionProps> = ({
   title,
   artist_title,
   artId,
}) => {
   return (
      <>
         <Link to={`/art-info/${artId}`}>
            <CardDetails>
               <ArtTitle>{title || 'Unknown title'}</ArtTitle>
               <Author>{artist_title || 'Unknown artist'}</Author>
               <Public>Public</Public>
            </CardDetails>
         </Link>
         <CardFavorites>
            <FavoritesImageWrap>
               <Icon src={bookmark} alt='bookmark' />
            </FavoritesImageWrap>
         </CardFavorites>
      </>
   );
};
