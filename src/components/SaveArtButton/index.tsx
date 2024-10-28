import { images } from '@assets/images';
import { SessionStorageManager } from '@utils/sessionStorageManager';
import { FC, useEffect, useState } from 'react';

import { Art } from '@/interfaces/interfaces';

interface SaveArtButtonProp {
   art: Art;
}

export const SaveArtButton: FC<SaveArtButtonProp> = ({ art }) => {
   const [isInStorage, setIsInStorage] = useState<boolean>(false);

   useEffect(() => {
      setIsInStorage(SessionStorageManager.isPaintingInStorage(art));
   }, [art]);

   const saveFavorites = () => {
      SessionStorageManager.savePainting(art);
      setIsInStorage(SessionStorageManager.isPaintingInStorage(art));
   };

   return (
      <div
         className={`favorites-image-wrap ${isInStorage ? 'in-storage' : ''}`}
         onClick={saveFavorites}
         data-testid={art.id}
      >
         <img className='icon' src={images.bookmark} alt='bookmark' />
      </div>
   );
};
