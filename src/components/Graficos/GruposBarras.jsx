import React, { useState, useEffect } from 'react';

import { Column } from '@ant-design/plots';

export default function DemoColumnBarras(){
  /* const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/iPY8JFnxdb/dodge-padding.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  }; */

  const data=
  [
    {
        "name": "Eventos",
        "月份": "20/4",
        "月均降雨量": 18
    },
    {
        "name": "Eventos",
        "月份": "21/4",
        "月均降雨量": 28
    },
    {
        "name": "Eventos",
        "月份": "22/4",
        "月均降雨量": 39
    },
    {
        "name": "Eventos",
        "月份": "23/4",
        "月均降雨量": 81
    },
    {
        "name": "Eventos",
        "月份": "24/4",
        "月均降雨量": 47
    },
    {
        "name": "Eventos",
        "月份": "25/4",
        "月均降雨量": 20
    },
    {
        "name": "Eventos",
        "月份": "26/4",
        "月均降雨量": 24
    },
    {
        "name": "Eventos",
        "月份": "27/4",
        "月均降雨量": 35
    },
    {
        "name": "Autores",
        "月份": "20/4",
        "月均降雨量": 12
    },
    {
        "name": "Autores",
        "月份": "21/4",
        "月均降雨量": 23
    },
    {
        "name": "Autores",
        "月份": "22/4",
        "月均降雨量": 34
    },
    {
        "name": "Autores",
        "月份": "23/4",
        "月均降雨量": 59
    },
    {
        "name": "Autores",
        "月份": "24/4",
        "月均降雨量": 26
    },
    {
        "name": "Autores",
        "月份": "25/4",
        "月均降雨量": 12
    },
    {
        "name": "Autores",
        "月份": "26/4",
        "月均降雨量": 20
    },
    {
        "name": "Autores",
        "月份": "27/4",
        "月均降雨量": 21
    }
]


  const config = {
    color: '#ff9e6e88-#a0a0a023',
    data,
    isGroup: true,
    xField: '月份',
    yField: '月均降雨量',
    seriesField: 'name',
    // 分组柱状图 组内柱子间的间距 (像素级别)
    dodgePadding: 2,
    // 分组柱状图 组间的间距 (像素级别)
    intervalPadding: 20,
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'middle', 'bottom'
      // 可配置附加的布局方法
      layout: [
        // 柱形图数据标签位置自动调整
        {
          type: 'interval-adjust-position',
        }, // 数据标签防遮挡
        {
          type: 'interval-hide-overlap',
        }, // 数据标签文颜色自动调整
        {
          type: 'adjust-color',
        },
      ],
    },
  };

  return <Column {...config} />;
};