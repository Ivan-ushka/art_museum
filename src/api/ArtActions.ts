import { Art, ArtById } from '@/interfaces/interfaces';

import ArtService from './http/ArtService';

export const getArtList = async (): Promise<Art[]> => {
   const response = await ArtService.getArtList();
   const data = response.data.data;
   return data.map((data: Art) => ({
      ...data,
      imageUrl: data.image_id
         ? `https://www.artic.edu/iiif/2/${data.image_id}/full/387,/0/default.jpg`
         : '',
   }));
};

export const getArtById = async (id: number): Promise<ArtById> => {
   const response = await ArtService.getArtById(id);
   const data = response.data.data;
   return {
      ...data,
      imageUrl: data.image_id
         ? `https://www.artic.edu/iiif/2/${data.image_id}/full/387,/0/default.jpg`
         : '',
   };
};

export const getSearchArtList = async (
   dataToSearch: string = 'Leonardo Da Vinci',
   page: number = 0,
): Promise<Art[]> => {
   const response = await ArtService.getSearchArtList(dataToSearch, page);
   const data = response.data.data;

   return data.map((data: Art) => ({
      ...data,
      imageUrl: data.image_id
         ? `https://www.artic.edu/iiif/2/${data.image_id}/full/387,/0/default.jpg`
         : '',
   }));
};
