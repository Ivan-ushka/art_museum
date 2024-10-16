import React, { FC } from 'react';
import { SmallCard, SmallCardImage } from './styled';
import { Art } from '../../../http/interfaces';
import museum from '../../../assets/museum.svg';
import { CardDescription } from '../CardDescription';

interface CardProps {
   art: Art;
}

export const SmallArtCard: FC<CardProps> = ({ art }) => {
   return (
      <SmallCard key={art.id}>
         {art.imageUrl ? (
            <SmallCardImage src={art.imageUrl} alt={art.imageUrl} />
         ) : (
            <SmallCardImage src={museum} alt='museum' />
         )}
         <CardDescription title={art.title} artist_title={art.artist_title} />
      </SmallCard>
   );
};
