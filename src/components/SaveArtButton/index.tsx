import { images } from '@assets/images';
import { Icon } from '@pages/styled';
import { SessionStorageManager } from '@utils/sessionStorageManager';
import { FC, useEffect, useState } from 'react';

import { Art } from '@/interfaces/interfaces';

import { FavoritesImageWrap } from '../Cards/CardDescription/styled';

interface SaveArtButtonProp {
   art: Art;
}

export const SaveArtButton: FC<SaveArtButtonProp> = ({ art }) => {
   const [isInStorage, setIsInStorage] = useState<boolean>(false);

   useEffect(() => {
      setIsInStorage(SessionStorageManager.isPaintingInStorage(art));
   }, [art.id]);

   const saveFavorites = () => {
      SessionStorageManager.savePainting(art);
      setIsInStorage(SessionStorageManager.isPaintingInStorage(art));
   };

   return (
      <FavoritesImageWrap
         $isInStorage={isInStorage}
         onClick={saveFavorites}
         data-testid={art.id}
      >
         <Icon src={images.bookmark} alt='bookmark' />
      </FavoritesImageWrap>
   );
};
