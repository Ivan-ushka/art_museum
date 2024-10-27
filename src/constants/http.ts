export const API_URL = `https://api.artic.edu/api/v1`;
export const ART_LIST_LIMIT = 100;
export const ART_FOR_PAGE = 3;

export const API_ROUTES = {
   ART_LIST: '/artworks',
   ART_BY_ID: (id: number) => `/artworks/${id}`,
   ART_SEARCH: '/artworks/search',
};
