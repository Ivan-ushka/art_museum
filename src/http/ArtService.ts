import $api from '../http';
import { ART_LIST_LIMIT } from '../constants/http';

export default class ArtService {
   static async getArtList() {
      return $api.get(`/artworks`, {
         params: {
            page: Math.floor(Math.random() * ART_LIST_LIMIT),
            fields: 'id,title,artist_title,image_id',
         },
      });
   }

   static async getArtById(id: number) {
      return $api.get(`/artworks/${id}`, {
         params: {
            id,
            fields:
               'dimensions,place_of_origin,copyright_notice,artist_title,title,image_id,date_start,date_end,credit_line',
         },
      });
   }

   static async getSearchArtList(dataToSearch: string, page: number) {
      return $api.get(`/artworks/search`, {
         params: {
            q: dataToSearch,
            page: page,
            limit: 3,
            fields: 'id,artist_title,title,image_id',
         },
      });
   }
}
