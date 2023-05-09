import React, { useState, useEffect } from 'react';
import { Treemap } from '@ant-design/plots';

export default function DemoTreemap() {
  const data = {
    name: 'root',
    children: [
      {
        name: 'Autoridad',
        value: 560,
      },
      {
        name: 'Eficiencia',
        value: 500,
      },
      {
        name: 'Responsabilidad',
        value: 150,
      },
      {
        name: 'Experiencia',
        value: 140,
      },
      {
        name: 'Popularidad',
        value: 115,
      },
      {
        name: 'Coherencia',
        value: 95,
      },
      {
        name: 'Comunicativo',
        value: 90,
      },
     
    ],
  };
  const config = {
    data,
    colorField: 'name',
  };
  return <Treemap {...config} />;
};