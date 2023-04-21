import React from 'react';
import { Route , Routes } from "react-router-dom";
import Mail from './Mail';
import Layouts from './Layout';
import Informes from './components/Informes/Informes';
import Long from './components/Informes/Long';
  

function MyDocument() {
  return (
   <Routes>
    <Route path="/" element={<Layouts/> } />
    <Route path="/mail" element={<Mail/> } />
    <Route path="/informe" element={<Informes/> } />
    <Route path='/coordenadas' element={<Long/>} />
  </Routes>
  );
}

export default MyDocument;