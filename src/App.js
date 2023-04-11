import React from 'react';
import { Route , Routes } from "react-router-dom";
import Mail from './Mail';
import Layouts from './Layout';
  

function MyDocument() {
  return (
   <Routes>
    <Route path="/" element={<Layouts/> } />
    <Route path="/mail" element={<Mail/> } />
  </Routes>
  );
}

export default MyDocument;