import { images } from '@assets/images';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Art } from '@/interfaces/interfaces';

import { CardDescription } from '../CardDescription';
import { LargeCard, LargeCardImage, TopContainer } from './styled';

interface CardProps {
   art: Art;
}

export const LargeArtCard: FC<CardProps> = ({ art, art: { id, imageUrl } }) => {
   return (
      <LargeCard>
         <Link to={`/art-info/${id}`}>
            {imageUrl ? (
               <LargeCardImage src={imageUrl} alt='Don`t found image' />
            ) : (
               <LargeCardImage src={images.museum} alt='museum' />
            )}
         </Link>
         <TopContainer>
            <CardDescription art={art} />
         </TopContainer>
      </LargeCard>
   );
};
