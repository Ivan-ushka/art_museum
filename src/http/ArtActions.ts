import ArtService from './ArtService';

import { Art } from './interfaces';

export const getArtList = async (): Promise<Art[]> => {
   try {
      const response = await ArtService.getArtList();
      const data = response.data.data;
      return data.map((data: Art) => ({
         ...data,
         imageUrl: data.image_id
            ? `https://www.artic.edu/iiif/2/${data.image_id}/full/387,/0/default.jpg`
            : '',
      }));
   } catch (error) {
      console.error('Ошибка при получении данных:', error);
      throw error;
   }
};

export const getArtById = async (id: number) => {
   try {
      const response = await ArtService.getArtById(id);
      return response.data;
   } catch (error) {
      console.error('Ошибка при получении данных:', error);
      throw error;
   }
};

export const getSearchArtList = async (
   dataToSearch: string = 'Leonardo Da Vinci',
   page: number = 0,
): Promise<Art[]> => {
   try {
      const response = await ArtService.getSearchArtList(dataToSearch, page);
      const data = response.data.data;
      console.log(data);

      return data.map((data: Art) => ({
         ...data,
         imageUrl: data.image_id
            ? `https://www.artic.edu/iiif/2/${data.image_id}/full/387,/0/default.jpg`
            : '',
      }));
   } catch (error) {
      console.error('Ошибка при получении данных:', error);
      throw error;
   }
};
