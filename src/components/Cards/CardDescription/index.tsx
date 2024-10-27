import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Art } from '@/interfaces/interfaces';

import { SaveArtButton } from '../../SaveArtButton';

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
            <div className='card-details'>
               <div className='title'>{title || 'Unknown title'}</div>
               <div className='author'>{artist_title || 'Unknown artist'}</div>
               <div className='public'>Public</div>
            </div>
         </Link>
         <div className='end-flex'>
            <SaveArtButton art={art} />
         </div>
      </>
   );
};
