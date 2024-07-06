import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import Homepage1 from '../Homepage/Homepage1';
import Homepage2 from '../Homepage/Homepage2';
import Homepage3 from '../Homepage/Homepage3';
import Homepage4 from '../Homepage/Homepage4';
import Category1 from '../Category/Category1';
import Category2 from '../Category/Category2';
import Category3 from '../Category/Category3';
import Category4 from '../Category/Category4';

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage1 />} />
        <Route path="/homepage1" element={<Homepage2 />} />
        <Route path="/homepage2" element={<Homepage3 />} />
        <Route path="/homepage3" element={<Homepage4 />} />
        <Route path="/category" element={<Category1 />} />
        <Route path="/category1" element={<Category2 />} />
        <Route path="/category2" element={<Category3 />} />
        <Route path="/category3" element={<Category4/>} />
      </Routes>
    </div>
  );
};

export default MainRoute;
