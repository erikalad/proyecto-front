import React, { useState, useEffect } from 'react';
import { Radar } from '@ant-design/plots';

export default function DemoRadar (){
 /*  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/svFjSfJkYy/radar.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  }; */
  const data=
  [
    {
        "item": "Responsable",
        "user": "a",
        "score": 70
    },
    {
        "item": "Coherencia",
        "user": "a",
        "score": 30
    },
    {
        "item": "Experiencia",
        "user": "a",
        "score": 60
    },
    {
        "item": "Autoridad",
        "user": "a",
        "score": 70
    },
    {
        "item": "Eficiencia",
        "user": "a",
        "score": 50
    },
    {
        "item": "Comunica",
        "user": "a",
        "score": 60
    },
    {
        "item": "Popular",
        "user": "a",
        "score": 40
    },
   /*  {
        "item": "Users",
        "user": "b",
        "score": 50
    },
    {
        "item": "Test",
        "user": "a",
        "score": 60
    },
    {
        "item": "Test",
        "user": "b",
        "score": 70
    },
    {
        "item": "Language",
        "user": "a",
        "score": 70
    },
    {
        "item": "Language",
        "user": "b",
        "score": 50
    },
    {
        "item": "Technology",
        "user": "a",
        "score": 50
    },
    {
        "item": "Technology",
        "user": "b",
        "score": 40
    },
    {
        "item": "Support",
        "user": "a",
        "score": 30
    },
    {
        "item": "Support",
        "user": "b",
        "score": 40
    },
    {
        "item": "Sales",
        "user": "a",
        "score": 60
    },
    {
        "item": "Sales",
        "user": "b",
        "score": 40
    },
    {
        "item": "UX",
        "user": "a",
        "score": 50
    },
    {
        "item": "UX",
        "user": "b",
        "score": 60
    } */
]
  const config = {
    data,
    xField: 'item',
    yField: 'score',
    seriesField: 'user',
    meta: {
      score: {
        alias: '分数',
        min: 0,
        max: 80,
      },
    },
    xAxis: {
      line: null,
      tickLine: null,
      grid: {
        line: {
          style: {
            lineDash: null,
          },
        },
      },
    },
    yAxis: {
      line: null,
      tickLine: null,
      grid: {
        line: {
          type: 'line',
          style: {
            lineDash: null,
          },
        },
        alternateColor: 'rgba(0, 0, 0, 0.04)',
      },
    },
    // 开启面积
    area: {},
    // 开启辅助点
    point: {
      size: 2,
    },
  };

  return <Radar {...config} />;
};