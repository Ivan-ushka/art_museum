import { API_ROUTES, ART_FOR_PAGE, ART_LIST_LIMIT } from '@constants/http';

import $api from './index';

export default class ArtService {
   static async getArtList() {
      return $api.get(API_ROUTES.ART_LIST, {
         params: {
            page: Math.floor(Math.random() * ART_LIST_LIMIT),
            fields: 'id,title,artist_title,image_id',
         },
      });
   }

   static async getArtById(id: number) {
      return $api.get(API_ROUTES.ART_BY_ID(id), {
         params: {
            id,
            fields:
               'id,dimensions,place_of_origin,copyright_notice,artist_title,title,image_id,date_start,date_end,credit_line',
         },
      });
   }

   static async getSearchArtList(dataToSearch: string, page: number) {
      return $api.get(API_ROUTES.ART_SEARCH, {
         params: {
            q: dataToSearch,
            page: page,
            limit: ART_FOR_PAGE,
            fields: 'id,artist_title,title,image_id',
         },
      });
   }
}
