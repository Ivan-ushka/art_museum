import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Favorites from '../pages/favorites/Favorites';
import '@testing-library/jest-dom';

describe('Favorites Component', () => {
   beforeEach(() => {
      sessionStorage.clear();
   });

   test('renders component', () => {
      render(
         <MemoryRouter>
            <Favorites />
         </MemoryRouter>,
      );
      expect(screen.getByText(/Here Are You/i)).toBeInTheDocument();
      expect(screen.getByText(/Saved by you/i)).toBeInTheDocument();
   });

   test('displays no favorites message when no paintings are saved', () => {
      render(
         <MemoryRouter>
            <Favorites />
         </MemoryRouter>,
      );
      expect(screen.getByText(/No favorites.../i)).toBeInTheDocument();
   });

   test('displays saved favorites when paintings are in sessionStorage', () => {
      const mockPaintings = [
         {
            artist_title: 'Vincent van Gogh',
            id: 28560,
            imageUrl:
               'https://www.artic.edu/iiif/2/25c31d8d-21a4-9ea1-1d73-6a2eca4dda7e/full/387,/0/default.jpg',
            image_id: '25c31d8d-21a4-9ea1-1d73-6a2eca4dda7e',
            title: 'The Bedroom',
            _score: 9497.718,
         },
         {
            artist_title: 'Alma Thomas',
            id: 129884,
            imageUrl:
               'https://www.artic.edu/iiif/2/e966799b-97ee-1cc6-bd2f-a94b4b8bb8f9/full/387,/0/default.jpg',
            image_id: 'e966799b-97ee-1cc6-bd2f-a94b4b8bb8f9',
            title: 'Starry Night and the Astronauts',
            _score: 18995.436,
         },
      ];

      sessionStorage.setItem('paintings', JSON.stringify(mockPaintings));

      render(
         <MemoryRouter>
            <Favorites />
         </MemoryRouter>,
      );

      expect(screen.getByText(/Vincent van Gogh/i)).toBeInTheDocument();
      expect(screen.getByText(/Alma Thomas/i)).toBeInTheDocument();
   });
});
