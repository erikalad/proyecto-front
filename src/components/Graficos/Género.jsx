import React, { useState, useEffect } from 'react';
import { Pie, G2 } from '@ant-design/plots';

export default function DemoPieGenero(){
  const G = G2.getEngine('canvas');
  const data = [
    {
      sex: 'Masculino',
      sold: 0.45,
    },
    {
      sex: 'Femenino',
      sold: 0.55,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'sold',
    colorField: 'sex',
    radius: 0.66,
    color: ['#1890ff', '#f04864'],
    label: {
      content: (obj) => {
        const group = new G.Group({});
        group.addShape({
          type: 'image',
          attrs: {
            x: 0,
            y: 0,
            width: 40,
            height: 50,
            img:
              obj.sex === 'Masculino'
                ? 'https://gw.alipayobjects.com/zos/rmsportal/oeCxrAewtedMBYOETCln.png'
                : 'https://gw.alipayobjects.com/zos/rmsportal/mweUsJpBWucJRixSfWVP.png',
          },
        });
        group.addShape({
          type: 'text',
          attrs: {
            x: 20,
            y: 54,
            text: obj.sex,
            textAlign: 'center',
            textBaseline: 'top',
            fill: obj.sex === 'Masculino' ? 'black' : 'black',
          },
        });
        return group;
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };
  return <Pie {...config} />;
};