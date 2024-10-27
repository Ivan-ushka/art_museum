import { images } from '@assets/images';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Art } from '@/interfaces/interfaces';

import { CardDescription } from '../CardDescription';
import { SmallCard, SmallCardImage } from './styled';

interface CardProps {
   art: Art;
}

export const SmallArtCard: FC<CardProps> = ({ art, art: { id, imageUrl } }) => {
   return (
      <SmallCard key={id}>
         <Link to={`/art-info/${id}`}>
            {imageUrl ? (
               <SmallCardImage src={imageUrl} alt='Don`t found image' />
            ) : (
               <SmallCardImage src={images.museum} alt='museum' />
            )}
         </Link>
         <CardDescription art={art} />
      </SmallCard>
   );
};
