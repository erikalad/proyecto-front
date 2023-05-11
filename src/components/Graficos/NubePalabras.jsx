import React, { useState, useEffect } from 'react';
import { WordCloud } from '@ant-design/plots';

export default function DemoWordCloud() {
 /*  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/antv-keywords.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  }; */

  const data =[
    {
        "value": 9,
        "name": "cristina"
    },
    {
        "value": 8,
        "name": "kirchner"
    },
    {
        "value": 8,
        "name": "cfk"
    },
    {
        "value": 8,
        "name": "bullrich"
    },
    {
        "value": 8,
        "name": "san"
    },
    {
        "value": 8,
        "name": "paso"
    },
    {
        "value": 6,
        "name": "carlos"
    },
    {
        "value": 6,
        "name": "elecciones"
    },
    {
        "value": 6,
        "name": "juntos"
    },
    {
        "value": 6,
        "name": "justicia"
    },
    {
        "value": 6,
        "name": "cambio"
    },
    {
        "value": 6,
        "name": "mayor"
    },
    {
        "value": 6,
        "name": "candidato"
    },
    {
        "value": 6,
        "name": "macri"
    },
    {
        "value": 6,
        "name": "massa"
    },
    {
        "value": 6,
        "name": "salud"
    },
    {
        "value": 6,
        "name": "mayo"
    },
    {
        "value": 6,
        "name": "historia"
    },
    {
        "value": 6,
        "name": "gobernador"
    },
    {
        "value": 6,
        "name": "fernandez"
    },
    {
        "value": 6,
        "name": "suprema"
    },
    {
        "value": 6,
        "name": "video"
    },
    {
        "value": 4,
        "name": "corte"
    },
    {
        "value": 4,
        "name": "milei"
    },
    {
        "value": 4,
        "name": "política"
    },
    {
        "value": 4,
        "name": "luis"
    },
    {
        "value": 4,
        "name": "causa"
    },
    {
        "value": 4,
        "name": "frente"
    },
    {
        "value": 4,
        "name": "larreta"
    },
    {
        "value": 4,
        "name": "nacional"
    },
    {
        "value": 4,
        "name": "personas"
    },
    {
        "value": 4,
        "name": "maria"
    },
    {
        "value": 4,
        "name": "patobullrich"
    },
    {
        "value": 4,
        "name": "cordoba"
    },
    {
        "value": 4,
        "name": "presidente"
    },
    {
        "value": 4,
        "name": "milman"
    },
    {
        "value": 4,
        "name": "argentina"
    },
    {
        "value": 4,
        "name": "nicolas"
    },
    {
        "value": 4,
        "name": "vida"
    },
    {
        "value": 3,
        "name": "millones"
    },
    {
        "value": 3,
        "name": "alberto"
    },
    {
        "value": 3,
        "name": "corte"
    },
    {
        "value": 3,
        "name": "mundo"
    },
    {
        "value": 3,
        "name": "provincia"
    },
    {
        "value": 3,
        "name": "rosario"
    },
    {
        "value": 3,
        "name": "cfkargentina"
    },
    {
        "value": 3,
        "name": "video"
    },
   
]

  const config = {
    data,
    wordField: 'name',
    weightField: 'value',
    colorField: 'name',
    wordStyle: {
      fontFamily: 'Verdana',
      fontSize: [8, 32],
      rotation: 0,
    },
    random: () => 0.5,
  };

  return <WordCloud {...config} />;
};