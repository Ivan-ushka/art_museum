import { images } from '@assets/images';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Art } from '@/interfaces/interfaces';

import { CardDescription } from '../CardDescription';

interface CardProps {
   art: Art;
}

export const LargeArtCard: FC<CardProps> = ({ art, art: { id, imageUrl } }) => {
   return (
      <div className='large-card'>
         <Link to={`/art-info/${id}`}>
            {imageUrl ? (
               <img className='large-card-image' src={imageUrl} alt='Don`t found image' />
            ) : (
               <img className='large-card-image' src={images.museum} alt='museum' />
            )}
         </Link>
         <div className='top-container'>
            <CardDescription art={art} />
         </div>
      </div>
   );
};
