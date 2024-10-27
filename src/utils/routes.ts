import { Favorites } from '@pages/favorites/Favorites';
import { Home } from '@pages/home/Home';
import { SingleArtInfo } from '@pages/singleArtInfo';

export const routes = [
   {
      path: '/',
      element: Home,
   },
   {
      path: '/favorites',
      element: Favorites,
   },
   {
      path: '/art-info/:artId',
      element: SingleArtInfo,
   },
];
