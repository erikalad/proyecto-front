import React, { useState, useEffect } from 'react';
import { Column, G2 } from '@ant-design/plots';

export default function DemoColumn() {
  /* const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/jSRiL%26YNql/percent-column.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  }; */

  const data=
  [
    {
        "year": "25/4",
        "type": "Ambiente",
        "value": 92.1
    },
    {
        "year": "25/4",
        "type": "Conflictividad",
        "value": 145.1
    },
    {
        "year": "25/4",
        "type": "Corrupción",
        "value": 110.6
    },
    {
        "year": "25/4",
        "type": "Educación",
        "value": 39.4
    },
    {
        "year": "25/4",
        "type": "Inflación",
        "value": 21
    },
    {
        "year": "25/4",
        "type": "Salud",
        "value": 48.3
    },
    {
        "year": "25/4",
        "type": "Seguridad",
        "value": 47.2
    },
    {
        "year": "25/4",
        "type": "Trabajo",
        "value": 29.7
    },
    {
      "year": "25/4",
      "type": "Vivienda",
      "value": 15.7
  },
    /* */
    {
      "year": "26/4",
      "type": "Ambiente",
        "value": 91.8
    },
    {
        "year": "26/4",
        "type": "Conflictividad",
        "value": 140.9
    },
    {
        "year": "26/4",
        "type": "Corrupción",
        "value": 99
    },
    {
        "year": "26/4",
        "type": "Educación",
        "value": 33.2
    },
    {
        "year": "26/4",
        "type": "Inflación",
        "value": 18.5
    },
    {
        "year": "26/4",
        "type": "Salud",
        "value": 53.9
    },
    {
        "year": "26/4",
        "type": "Seguridad",
        "value": 51.4
    },
    {
        "year": "26/4",
        "type": "Trabajo",
        "value": 32.8
    },
    {
        "year": "26/4",
        "type": "Vivienda",
        "value": 87.1
    },
     /* */
     {
      "year": "27/4",
      "type": "Ambiente",
      "value": 87.1
  },
    {
        "year": "27/4",
        "type": "Conflictividad",
        "value": 139.4
    },
    {
        "year": "27/4",
        "type": "Corrupción",
        "value": 103.9
    },
    {
        "year": "27/4",
        "type": "Educación",
        "value": 30
    },
    {
        "year": "27/4",
        "type": "Inflación",
        "value": 20.2
    },
    {
        "year": "27/4",
        "type": "Salud",
        "value": 56.5
    },
    {
        "year": "27/4",
        "type": "Seguridad",
        "value": 84.6
    },
    {
        "year": "27/4",
        "type": "Trabajo",
        "value": 36.8
    },
    {
        "year": "27/4",
        "type": "Vivienda",
        "value": 80
    },
    {
        "year": "28/4",
        "type": "Ambiente",
        "value": 134.8
    },
    {
        "year": "28/4",
        "type": "Conflictividad",
        "value": 100
    },
    {
        "year": "28/4",
        "type": "Corrupción",
        "value": 45.2
    },
    {
        "year": "28/4",
        "type": "Educación",
        "value": 20.8
    },
    {
        "year": "28/4",
        "type": "Inflación",
        "value": 49.3
    },
    {
        "year": "28/4",
        "type": "Salud",
        "value": 77.8
    },
    {
        "year": "28/4",
        "type": "Seguridad",
        "value": 37.5
    },
    {
      "year": "28/4",
      "type": "Trabajo",
      "value": 13.5
  },
  {
    "year": "28/4",
    "type": "Vivienda",
    "value": 85.2
}
]



  G2.registerInteraction('element-link', {
    start: [
      {
        trigger: 'interval:mouseenter',
        action: 'element-link-by-color:link',
      },
    ],
    end: [
      {
        trigger: 'interval:mouseleave',
        action: 'element-link-by-color:unlink',
      },
    ],
  });
  const config = {
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'type',
    isPercent: true,
    isStack: true,
    meta: {
      value: {
        min: 0,
        max: 1,
      },
    },
    label: {
      position: 'middle',
      content: (item) => {
        return `${(item.value * 100).toFixed(2)}%`;
      },
      style: {
        fill: '#fff',
      },
    },
    tooltip: false,
    interactions: [
      {
        type: 'element-highlight-by-color',
      },
      {
        type: 'element-link',
      },
    ],
  };

  return <Column {...config} />;
};