import React, { FC } from 'react';
import { Art } from '../../../http/interfaces';
import museum from '../../../assets/museum.svg';
import { CardDescription } from '../CardDescription';
import { LargeCard, LargeCardImage, TopContainer } from './styled';

interface CardProps {
   art: Art;
}

export const LargeArtCard: FC<CardProps> = ({ art }) => {
   return (
      <LargeCard>
         {art.imageUrl ? (
            <LargeCardImage src={art.imageUrl} alt={art.imageUrl} />
         ) : (
            <LargeCardImage src={museum} alt='museum' />
         )}
         <TopContainer>
            <CardDescription title={art.title} artist_title={art.artist_title} />
         </TopContainer>
      </LargeCard>
   );
};
