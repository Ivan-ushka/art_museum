import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Favorites from './pages/favorites/Favorites';
import { SingleArtInfo } from './pages/singleArtInfo';

const AppRouter = () => {
   return (
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/favorites' element={<Favorites />} />
         <Route path='/art-info/:artId' element={<SingleArtInfo />} />
      </Routes>
   );
};

export default AppRouter;
