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

interface CardDescriptionProps {
   title: string;
   artist_title: string;
}
export const CardDescription: FC<CardDescriptionProps> = ({ title, artist_title }) => {
   return (
      <>
         <CardDetails>
            <ArtTitle>{title || 'Unknown title'}</ArtTitle>
            <Author>{artist_title || 'Unknown artist'}</Author>
            <Public>Public</Public>
         </CardDetails>
         <CardFavorites>
            <FavoritesImageWrap>
               <Icon src={bookmark} alt='bookmark' />
            </FavoritesImageWrap>
         </CardFavorites>
      </>
   );
};
