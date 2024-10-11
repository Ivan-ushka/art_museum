import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Favorites from './pages/favorites/Favorites';
import ArtworkInfo from './pages/artworkInfo/ArtworkInfo';

const AppRouter = () => {
   return (
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/favorites' element={<Favorites />} />
         <Route path='/artwork-info' element={<ArtworkInfo />} />
      </Routes>
   );
};

export default AppRouter;
