import React from 'react';
import { Route , Routes } from "react-router-dom";
import Mail from './Mail';
import Layouts from './Layout';
import Informes from './components/Informes/Informes';
  

function MyDocument() {
  return (
   <Routes>
    <Route path="/" element={<Layouts/> } />
    <Route path="/mail" element={<Mail/> } />
    <Route path="/informe" element={<Informes/> } />
  </Routes>
  );
}

export default MyDocument;