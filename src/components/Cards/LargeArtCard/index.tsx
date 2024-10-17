import React, { FC } from 'react';
import { Art } from '../../../http/interfaces';
import museum from '../../../assets/museum.svg';
import { CardDescription } from '../CardDescription';
import { LargeCard, LargeCardImage, TopContainer } from './styled';
import { Link } from 'react-router-dom';

interface CardProps {
   art: Art;
}

export const LargeArtCard: FC<CardProps> = ({ art }) => {
   return (
      <LargeCard>
         <Link to={`/art-info/${art.id}`}>
            {art.imageUrl ? (
               <LargeCardImage src={art.imageUrl} alt={art.imageUrl} />
            ) : (
               <LargeCardImage src={museum} alt='museum' />
            )}
         </Link>
         <TopContainer>
            <CardDescription art={art} />
         </TopContainer>
      </LargeCard>
   );
};
