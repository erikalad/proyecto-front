import React from 'react';
import Dashboard from './Dashboard';
import { Route , Routes } from "react-router-dom";
import Mail from './Mail';
  

function MyDocument() {
  return (
   <Routes>
    <Route path="/" element={<Dashboard/> } />
    <Route path="/mail" element={<Mail/> } />
  </Routes>
  );
}

export default MyDocument;