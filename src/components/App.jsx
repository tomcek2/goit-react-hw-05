import React from 'react';
import { Trending } from './Trending/Trending';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Trending />} />
        </Route>
        <Route path="*" element={'Not Found'} />
      </Routes>
    </div>
  );
};
