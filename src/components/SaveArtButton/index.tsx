import React, { FC, useEffect, useState } from 'react';
import { Icon } from '../../pages/styled';
import bookmark from '../../assets/bookmark.svg';
import { FavoritesImageWrap } from '../Cards/CardDescription/styled';
import { Art } from '../../http/interfaces';

interface SaveArtButtonProp {
   art: Art;
}

export const SaveArtButton: FC<SaveArtButtonProp> = ({ art }) => {
   const [isInStorage, setIsInStorage] = useState<boolean>(false);

   useEffect(() => {
      const savedPaintings: Art[] = JSON.parse(
         sessionStorage.getItem('paintings') || '[]',
      );

      setIsInStorage(savedPaintings.some(p => p.id === art.id));
   }, [art.id]);

   const saveFavorites = () => {
      let newDataStorage: Art[] = JSON.parse(sessionStorage.getItem('paintings') || '[]');

      if (!newDataStorage.some(p => p.id === art.id)) {
         newDataStorage.push(art);
         setIsInStorage(true);
      } else {
         newDataStorage = newDataStorage.filter(item => item.id !== art.id);
         setIsInStorage(false);
      }

      sessionStorage.setItem('paintings', JSON.stringify(newDataStorage));
   };

   return (
      <FavoritesImageWrap
         $isInStorage={isInStorage}
         onClick={saveFavorites}
         data-testid={art.id}
      >
         <Icon src={bookmark} alt='bookmark' />
      </FavoritesImageWrap>
   );
};

export default SaveArtButton;
