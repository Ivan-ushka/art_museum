import React, { FC } from 'react';
import { SmallCard, SmallCardImage } from './styled';
import { Art } from '../../../http/interfaces';
import museum from '../../../assets/museum.svg';
import { CardDescription } from '../CardDescription';
import { Link } from 'react-router-dom';

interface CardProps {
   art: Art;
}

export const SmallArtCard: FC<CardProps> = ({ art }) => {
   return (
      <SmallCard key={art.id}>
         <Link to={`/art-info/${art.id}`}>
            {art.imageUrl ? (
               <SmallCardImage src={art.imageUrl} alt={art.imageUrl} />
            ) : (
               <SmallCardImage src={museum} alt='museum' />
            )}
         </Link>
         <CardDescription
            title={art.title}
            artist_title={art.artist_title}
            artId={art.id}
         />
      </SmallCard>
   );
};
