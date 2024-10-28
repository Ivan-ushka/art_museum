import { images } from '@assets/images';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Art } from '@/interfaces/interfaces';

import { CardDescription } from '../CardDescription';

interface CardProps {
   art: Art;
}

export const SmallArtCard: FC<CardProps> = ({ art, art: { id, imageUrl } }) => {
   return (
      <div className='small-card' key={id}>
         <Link to={`/art-info/${id}`}>
            {imageUrl ? (
               <img
                  className='small-card-image'
                  src={imageUrl}
                  alt={`Dont found ${id}`}
               />
            ) : (
               <img className='small-card-image' src={images.museum} alt='museum' />
            )}
         </Link>
         <CardDescription art={art} />
      </div>
   );
};
