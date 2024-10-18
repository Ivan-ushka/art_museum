import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import SaveArtButton from '../components/SaveArtButton';

describe('SaveArtButton Component', () => {
   beforeEach(() => {
      sessionStorage.clear();
   });

   test('remove painting from sessionStorage', () => {
      const mockPainting = [
         {
            artist_title: 'Vincent van Gogh',
            id: 28560,
            imageUrl:
               'https://www.artic.edu/iiif/2/25c31d8d-21a4-9ea1-1d73-6a2eca4dda7e/full/387,/0/default.jpg',
            image_id: '25c31d8d-21a4-9ea1-1d73-6a2eca4dda7e',
            title: 'The Bedroom',
            _score: 9497.718,
         },
      ];

      sessionStorage.setItem('paintings', JSON.stringify(mockPainting));

      render(<SaveArtButton art={mockPainting[0]} />);

      const favoritesImageWrap = screen.getByTestId(mockPainting[0].id);
      userEvent.click(favoritesImageWrap);

      const updatedStoredPaintings = JSON.parse(
         sessionStorage.getItem('paintings') || '[]',
      );
      expect(updatedStoredPaintings).not.toContainEqual(mockPainting[0].id);
   });

   test('add painting to sessionStorage', () => {
      const mockPainting = [
         {
            artist_title: 'Vincent van Gogh',
            id: 28560,
            imageUrl:
               'https://www.artic.edu/iiif/2/25c31d8d-21a4-9ea1-1d73-6a2eca4dda7e/full/387,/0/default.jpg',
            image_id: '25c31d8d-21a4-9ea1-1d73-6a2eca4dda7e',
            title: 'The Bedroom',
            _score: 9497.718,
         },
      ];

      sessionStorage.setItem('paintings', JSON.stringify(mockPainting));

      render(<SaveArtButton art={mockPainting[0]} />);

      const updatedStoredPaintings = JSON.parse(
         sessionStorage.getItem('paintings') || '[]',
      );
      const result = updatedStoredPaintings[0].id === mockPainting[0].id;
      expect(result).toBe(true);
   });
});
