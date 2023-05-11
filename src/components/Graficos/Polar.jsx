import React, { useState, useEffect } from 'react';
import { Heatmap } from '@ant-design/plots';


export default function DemoHeatmap() {
/*   const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/polar-heatmap.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  }; */

  const data=
  [
    {
        "week": "Lunes",
        "time": "Medianoche",
        "value": 0.176042
    },
    {
        "week": "Lunes",
        "time": "1am",
        "value": 0.096146
    },
    {
        "week": "Lunes",
        "time": "2am",
        "value": 0.076414
    },
    {
        "week": "Lunes",
        "time": "3am",
        "value": 0.334734
    },
    {
        "week": "Lunes",
        "time": "4am",
        "value": 0.132583
    },
    {
        "week": "Lunes",
        "time": "5am",
        "value": 0.135422
    },
    {
        "week": "Lunes",
        "time": "6am",
        "value": 0.060884
    },
    {
        "week": "Lunes",
        "time": "7am",
        "value": 0.768601
    },
    {
        "week": "Lunes",
        "time": "8am",
        "value": 0.230771
    },
    {
        "week": "Lunes",
        "time": "9am",
        "value": 0.07572
    },
    {
        "week": "Lunes",
        "time": "10am",
        "value": 0.210855
    },
    {
        "week": "Lunes",
        "time": "11am",
        "value": 0.090938
    },
    {
        "week": "Lunes",
        "time": "Mediodia",
        "value": 0.094296
    },
    {
        "week": "Lunes",
        "time": "1pm",
        "value": 0.290368
    },
    {
        "week": "Lunes",
        "time": "2pm",
        "value": 0.093755
    },
    {
        "week": "Lunes",
        "time": "3pm",
        "value": 0.099166
    },
    {
        "week": "Lunes",
        "time": "4pm",
        "value": 0.429278
    },
    {
        "week": "Lunes",
        "time": "5pm",
        "value": 0.962314
    },
    {
        "week": "Lunes",
        "time": "6pm",
        "value": 0.43833
    },
    {
        "week": "Lunes",
        "time": "7pm",
        "value": 0.244464
    },
    {
        "week": "Lunes",
        "time": "8pm",
        "value": 0.550621
    },
    {
        "week": "Lunes",
        "time": "9pm",
        "value": 0.173093
    },
    {
        "week": "Lunes",
        "time": "10pm",
        "value": 0.103659
    },
    {
        "week": "Lunes",
        "time": "11pm",
        "value": 0.0773
    },
    {
        "week": "Martes",
        "time": "Medianoche",
        "value": 0.096146
    },
    {
        "week": "Martes",
        "time": "1am",
        "value": 0.076414
    },
    {
        "week": "Martes",
        "time": "2am",
        "value": 0.334734
    },
    {
        "week": "Martes",
        "time": "3am",
        "value": 0.132583
    },
    {
        "week": "Martes",
        "time": "4am",
        "value": 0.135422
    },
    {
        "week": "Martes",
        "time": "5am",
        "value": 0.060884
    },
    {
        "week": "Martes",
        "time": "6am",
        "value": 0.768601
    },
    {
        "week": "Martes",
        "time": "7am",
        "value": 0.230771
    },
    {
        "week": "Martes",
        "time": "8am",
        "value": 0.07572
    },
    {
        "week": "Martes",
        "time": "9am",
        "value": 0.210855
    },
    {
        "week": "Martes",
        "time": "10am",
        "value": 0.090938
    },
    {
        "week": "Martes",
        "time": "11am",
        "value": 0.094296
    },
    {
        "week": "Martes",
        "time": "Mediodia",
        "value": 0.290368
    },
    {
        "week": "Martes",
        "time": "1pm",
        "value": 0.093755
    },
    {
        "week": "Martes",
        "time": "2pm",
        "value": 0.099166
    },
    {
        "week": "Martes",
        "time": "3pm",
        "value": 0.429278
    },
    {
        "week": "Martes",
        "time": "4pm",
        "value": 0.962314
    },
    {
        "week": "Martes",
        "time": "5pm",
        "value": 0.43833
    },
    {
        "week": "Martes",
        "time": "6pm",
        "value": 0.244464
    },
    {
        "week": "Martes",
        "time": "7pm",
        "value": 0.550621
    },
    {
        "week": "Martes",
        "time": "8pm",
        "value": 0.173093
    },
    {
        "week": "Martes",
        "time": "9pm",
        "value": 0.103659
    },
    {
        "week": "Martes",
        "time": "10pm",
        "value": 0.0773
    },
    {
        "week": "Martes",
        "time": "11pm",
        "value": 0.265913
    },
    {
        "week": "Miercoles",
        "time": "Medianoche",
        "value": 0.076414
    },
    {
        "week": "Miercoles",
        "time": "1am",
        "value": 0.334734
    },
    {
        "week": "Miercoles",
        "time": "2am",
        "value": 0.132583
    },
    {
        "week": "Miercoles",
        "time": "3am",
        "value": 0.135422
    },
    {
        "week": "Miercoles",
        "time": "4am",
        "value": 0.060884
    },
    {
        "week": "Miercoles",
        "time": "5am",
        "value": 0.768601
    },
    {
        "week": "Miercoles",
        "time": "6am",
        "value": 0.230771
    },
    {
        "week": "Miercoles",
        "time": "7am",
        "value": 0.07572
    },
    {
        "week": "Miercoles",
        "time": "8am",
        "value": 0.210855
    },
    {
        "week": "Miercoles",
        "time": "9am",
        "value": 0.090938
    },
    {
        "week": "Miercoles",
        "time": "10am",
        "value": 0.094296
    },
    {
        "week": "Miercoles",
        "time": "11am",
        "value": 0.290368
    },
    {
        "week": "Miercoles",
        "time": "Mediodia",
        "value": 0.093755
    },
    {
        "week": "Miercoles",
        "time": "1pm",
        "value": 0.099166
    },
    {
        "week": "Miercoles",
        "time": "2pm",
        "value": 0.429278
    },
    {
        "week": "Miercoles",
        "time": "3pm",
        "value": 0.962314
    },
    {
        "week": "Miercoles",
        "time": "4pm",
        "value": 0.43833
    },
    {
        "week": "Miercoles",
        "time": "5pm",
        "value": 0.244464
    },
    {
        "week": "Miercoles",
        "time": "6pm",
        "value": 0.550621
    },
    {
        "week": "Miercoles",
        "time": "7pm",
        "value": 0.173093
    },
    {
        "week": "Miercoles",
        "time": "8pm",
        "value": 0.103659
    },
    {
        "week": "Miercoles",
        "time": "9pm",
        "value": 0.0773
    },
    {
        "week": "Miercoles",
        "time": "10pm",
        "value": 0.265913
    },
    {
        "week": "Miercoles",
        "time": "11pm",
        "value": 0.099811
    },
    {
        "week": "Jueves",
        "time": "Medianoche",
        "value": 0.334734
    },
    {
        "week": "Jueves",
        "time": "1am",
        "value": 0.132583
    },
    {
        "week": "Jueves",
        "time": "2am",
        "value": 0.135422
    },
    {
        "week": "Jueves",
        "time": "3am",
        "value": 0.060884
    },
    {
        "week": "Jueves",
        "time": "4am",
        "value": 0.768601
    },
    {
        "week": "Jueves",
        "time": "5am",
        "value": 0.230771
    },
    {
        "week": "Jueves",
        "time": "6am",
        "value": 0.07572
    },
    {
        "week": "Jueves",
        "time": "7am",
        "value": 0.210855
    },
    {
        "week": "Jueves",
        "time": "8am",
        "value": 0.090938
    },
    {
        "week": "Jueves",
        "time": "9am",
        "value": 0.094296
    },
    {
        "week": "Jueves",
        "time": "10am",
        "value": 0.290368
    },
    {
        "week": "Jueves",
        "time": "11am",
        "value": 0.093755
    },
    {
        "week": "Jueves",
        "time": "Mediodia",
        "value": 0.099166
    },
    {
        "week": "Jueves",
        "time": "1pm",
        "value": 0.429278
    },
    {
        "week": "Jueves",
        "time": "2pm",
        "value": 0.962314
    },
    {
        "week": "Jueves",
        "time": "3pm",
        "value": 0.43833
    },
    {
        "week": "Jueves",
        "time": "4pm",
        "value": 0.244464
    },
    {
        "week": "Jueves",
        "time": "5pm",
        "value": 0.550621
    },
    {
        "week": "Jueves",
        "time": "6pm",
        "value": 0.173093
    },
    {
        "week": "Jueves",
        "time": "7pm",
        "value": 0.103659
    },
    {
        "week": "Jueves",
        "time": "8pm",
        "value": 0.0773
    },
    {
        "week": "Jueves",
        "time": "9pm",
        "value": 0.265913
    },
    {
        "week": "Jueves",
        "time": "10pm",
        "value": 0.099811
    },
    {
        "week": "Jueves",
        "time": "11pm",
        "value": 0.076164
    },
    {
        "week": "Viernes",
        "time": "Medianoche",
        "value": 0.132583
    },
    {
        "week": "Viernes",
        "time": "1am",
        "value": 0.135422
    },
    {
        "week": "Viernes",
        "time": "2am",
        "value": 0.060884
    },
    {
        "week": "Viernes",
        "time": "3am",
        "value": 0.768601
    },
    {
        "week": "Viernes",
        "time": "4am",
        "value": 0.230771
    },
    {
        "week": "Viernes",
        "time": "5am",
        "value": 0.07572
    },
    {
        "week": "Viernes",
        "time": "6am",
        "value": 0.210855
    },
    {
        "week": "Viernes",
        "time": "7am",
        "value": 0.090938
    },
    {
        "week": "Viernes",
        "time": "8am",
        "value": 0.094296
    },
    {
        "week": "Viernes",
        "time": "9am",
        "value": 0.290368
    },
    {
        "week": "Viernes",
        "time": "10am",
        "value": 0.093755
    },
    {
        "week": "Viernes",
        "time": "11am",
        "value": 0.099166
    },
    {
        "week": "Viernes",
        "time": "Mediodia",
        "value": 0.429278
    },
    {
        "week": "Viernes",
        "time": "1pm",
        "value": 0.962314
    },
    {
        "week": "Viernes",
        "time": "2pm",
        "value": 0.43833
    },
    {
        "week": "Viernes",
        "time": "3pm",
        "value": 0.244464
    },
    {
        "week": "Viernes",
        "time": "4pm",
        "value": 0.550621
    },
    {
        "week": "Viernes",
        "time": "5pm",
        "value": 0.173093
    },
    {
        "week": "Viernes",
        "time": "6pm",
        "value": 0.103659
    },
    {
        "week": "Viernes",
        "time": "7pm",
        "value": 0.0773
    },
    {
        "week": "Viernes",
        "time": "8pm",
        "value": 0.265913
    },
    {
        "week": "Viernes",
        "time": "9pm",
        "value": 0.099811
    },
    {
        "week": "Viernes",
        "time": "10pm",
        "value": 0.076164
    },
    {
        "week": "Viernes",
        "time": "11pm",
        "value": 0.3154
    },
    {
        "week": "Sabado",
        "time": "Medianoche",
        "value": 0.135422
    },
    {
        "week": "Sabado",
        "time": "1am",
        "value": 0.060884
    },
    {
        "week": "Sabado",
        "time": "2am",
        "value": 0.768601
    },
    {
        "week": "Sabado",
        "time": "3am",
        "value": 0.230771
    },
    {
        "week": "Sabado",
        "time": "4am",
        "value": 0.07572
    },
    {
        "week": "Sabado",
        "time": "5am",
        "value": 0.210855
    },
    {
        "week": "Sabado",
        "time": "6am",
        "value": 0.090938
    },
    {
        "week": "Sabado",
        "time": "7am",
        "value": 0.094296
    },
    {
        "week": "Sabado",
        "time": "8am",
        "value": 0.290368
    },
    {
        "week": "Sabado",
        "time": "9am",
        "value": 0.093755
    },
    {
        "week": "Sabado",
        "time": "10am",
        "value": 0.099166
    },
    {
        "week": "Sabado",
        "time": "11am",
        "value": 0.429278
    },
    {
        "week": "Sabado",
        "time": "Mediodia",
        "value": 0.962314
    },
    {
        "week": "Sabado",
        "time": "1pm",
        "value": 0.43833
    },
    {
        "week": "Sabado",
        "time": "2pm",
        "value": 0.244464
    },
    {
        "week": "Sabado",
        "time": "3pm",
        "value": 0.550621
    },
    {
        "week": "Sabado",
        "time": "4pm",
        "value": 0.173093
    },
    {
        "week": "Sabado",
        "time": "5pm",
        "value": 0.103659
    },
    {
        "week": "Sabado",
        "time": "6pm",
        "value": 0.0773
    },
    {
        "week": "Sabado",
        "time": "7pm",
        "value": 0.265913
    },
    {
        "week": "Sabado",
        "time": "8pm",
        "value": 0.099811
    },
    {
        "week": "Sabado",
        "time": "9pm",
        "value": 0.076164
    },
    {
        "week": "Sabado",
        "time": "10pm",
        "value": 0.3154
    },
    {
        "week": "Sabado",
        "time": "11pm",
        "value": 0.146557
    },
    {
        "week": "Domingo",
        "time": "Medianoche",
        "value": 0.060884
    },
    {
        "week": "Domingo",
        "time": "1am",
        "value": 0.768601
    },
    {
        "week": "Domingo",
        "time": "2am",
        "value": 0.230771
    },
    {
        "week": "Domingo",
        "time": "3am",
        "value": 0.07572
    },
    {
        "week": "Domingo",
        "time": "4am",
        "value": 0.210855
    },
    {
        "week": "Domingo",
        "time": "5am",
        "value": 0.090938
    },
    {
        "week": "Domingo",
        "time": "6am",
        "value": 0.094296
    },
    {
        "week": "Domingo",
        "time": "7am",
        "value": 0.290368
    },
    {
        "week": "Domingo",
        "time": "8am",
        "value": 0.093755
    },
    {
        "week": "Domingo",
        "time": "9am",
        "value": 0.099166
    },
    {
        "week": "Domingo",
        "time": "10am",
        "value": 0.429278
    },
    {
        "week": "Domingo",
        "time": "11am",
        "value": 0.962314
    },
    {
        "week": "Domingo",
        "time": "Mediodia",
        "value": 0.43833
    },
    {
        "week": "Domingo",
        "time": "1pm",
        "value": 0.244464
    },
    {
        "week": "Domingo",
        "time": "2pm",
        "value": 0.550621
    },
    {
        "week": "Domingo",
        "time": "3pm",
        "value": 0.173093
    },
    {
        "week": "Domingo",
        "time": "4pm",
        "value": 0.103659
    },
    {
        "week": "Domingo",
        "time": "5pm",
        "value": 0.0773
    },
    {
        "week": "Domingo",
        "time": "6pm",
        "value": 0.265913
    },
    {
        "week": "Domingo",
        "time": "7pm",
        "value": 0.099811
    },
    {
        "week": "Domingo",
        "time": "8pm",
        "value": 0.076164
    },
    {
        "week": "Domingo",
        "time": "9pm",
        "value": 0.3154
    },
    {
        "week": "Domingo",
        "time": "10pm",
        "value": 0.146557
    },
    {
        "week": "Domingo",
        "time": "11pm",
        "value": 0.108531
    }
]



  const config = {
    data,
    xField: 'time',
    yField: 'week',
    colorField: 'value',
    legend: true,
    color: '#BAE7FF-#1890FF-#1028ff',
    coordinate: {
      // 坐标轴属性配置
      type: 'polar',
      // 极坐标
      cfg: {
        innerRadius: 0.2,
      },
    },
    heatmapStyle: {
      stroke: '#f5f5f5',
      opacity: 0.8,
    },
    meta: {
      time: {
        type: 'cat',
      },
      value: {
        min: 0,
        max: 1,
      },
    },
    xAxis: {
      line: null,
      grid: null,
      tickLine: null,
      label: {
        offset: 12,
        style: {
          fill: '#666',
          fontSize: 12,
          textBaseline: 'top',
        },
      },
    },
    yAxis: {
      top: true,
      line: null,
      grid: null,
      tickLine: null,
      label: {
        offset: 0,
        style: {
          fill: '#fff',
          textAlign: 'center',
          shadowBlur: 2,
          shadowColor: 'rgba(0, 0, 0, .45)',
        },
      },
    },
    tooltip: {
      showMarkers: false,
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };

  return <Heatmap {...config} />;
};