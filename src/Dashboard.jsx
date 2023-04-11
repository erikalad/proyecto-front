import React from 'react';
import { Line } from '@nivo/line';
import { Pie } from '@nivo/pie';
import { Bar } from '@nivo/bar';
import { Col, Row, Statistic } from 'antd';
import CountUp from 'react-countup';
import ReactApexChart from 'react-apexcharts';
import { Select } from 'antd';
import { useEffect } from 'react';
import { Progress, Space } from 'antd';
import "./Dashboard.css"


const Dashboard = () => {

  const data = [
    // datos de ejemplo para los gráficos
    { x: 'Enero', y: 10 },
    { x: 'Febrero', y: 20 },
    { x: 'Marzo', y: 15 },
    { x: 'Abril', y: 25 },
    { x: 'Mayo', y: 30 },
  ];


  const data2 = {
    series: [
      {
        name: 'Area 1',
        data: [31, 40, 28, 51, 42, 109, 100],
      },

    ],
    options: {
      chart: {
        with:500,
        height: 350,
        type: 'area',
      },
      xaxis: {
        categories: ['Dom', 'Lun', 'Mar', 'Mier', 'Jue', 'Vie', 'Sab'],
      },
      fill: {
        opacity: 0.6, // Opacidad del área
      },
    },
  };
  const colors = ['#003785', '#1465bb', '#2196f3', '#81c9fa'];
  const formatter = (value) => <CountUp end={value} separator="," />;



  const handleChange = (value) => {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  };

  return (


        
        
        
        
    <div className='stadisticas-dashboard-component'>

        <div className='estadisticas'>
        <Row 
        className='stadisticas'
        gutter={16}>
            <Col span={12}>
            <Statistic title="Total de ventas" value={753} formatter={formatter}  />
            </Col>
            <Col span={12}>
            <Statistic title="Total facturado" value={34300} precision={2} formatter={formatter} />
            </Col>
        </Row>
        </div>

        <div className='dashboard-component'>

            <div className="pie">

            <Select
            placeholder="Consola"
            className='selectores-dash'>
            <Select.Option value="demo">PS5</Select.Option>
            <Select.Option value="demo">PS4</Select.Option>
            <Select.Option value="demo">PS3</Select.Option>
            </Select>  


            <Pie
                
                data={[
                {
                    id: 'Accion',
                    value: 10,
                },
                {
                    id: 'Deportes',
                    value: 10,
                },
                {
                    id: 'Aventura',
                    value: 10,
                },
                {
                    id: 'Conduccion',
                    value: 20,
                },
                {
                    id: 'Multijugador',
                    value: 7,
                },
                {
                    id: 'Combos',
                    value: 3,
                },
                {
                    id: 'Estrategia',
                    value: 4,
                },
                {
                    id: 'Infantiles',
                    value: 5,
                },
                ]}
                width={500}
                height={300}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                colors={{ scheme: 'blues' }}
                borderWidth={1}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.2
                        ]
                    ]
                }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            2
                        ]
                    ]
                }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'ruby'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'c'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'go'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'python'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'scala'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'lisp'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'elixir'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'javascript'
                        },
                        id: 'lines'
                    }
                ]}
                legends={[
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        justify: false,
                        translateX: 0,
                        translateY: 56,
                        itemsSpacing: 0,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: '#999',
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        symbolSize: 18,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
                                }
                            }
                        ]
                    }
                ]}
            />
            </div>
            
            <div>
            
            <Select
            placeholder="Filtro ejemplo 1"
            className='selectores-dash'>
            <Select.Option value="demo">Opcion 1</Select.Option>
            <Select.Option value="demo">Opcion 2</Select.Option>
            <Select.Option value="demo">Opcion 3</Select.Option>

            </Select>  
            <ReactApexChart
                options={data2.options}
                series={data2.series}
                type="bar"
                height={350}
                width={500}
                />
            </div>
            <div className='total-area'>


            <div className=''>

            <Select
            placeholder="Filtro ejemlo 2"
            className='selectores-dash'>
                <Select.Option value="demo">Opcion 1</Select.Option>
                <Select.Option value="demo">Opcion 2</Select.Option>
                <Select.Option value="demo">Opcion 3</Select.Option>
            </Select>  

            <div className='progress'>
                <Progress 
                strokeColor="rgba(0, 143, 251, 0.6)" 
                strokeLinecap="butt" type="circle" percent={75} />
                <Progress 
                strokeColor="rgba(0, 143, 251, 0.6)" 
                strokeLinecap="butt" type="circle" percent={23} />
                <Progress
                strokeColor="rgba(0, 143, 251, 0.6)" 
                strokeLinecap="butt" type="circle" percent={47} />
        
            </div>
            </div>
        
            <div>
            <Select
            placeholder="Filtro ejemplo 3"
            className='selectores-dash'>
                <Select.Option value="demo">Opcion 1</Select.Option>
                <Select.Option value="demo">Opcion 2</Select.Option>
                <Select.Option value="demo">Opcion 3</Select.Option>
            </Select>  
            <ReactApexChart
                options={data2.options}
                series={data2.series}
                type="area"
                height={300}
                width={500}
                />
            </div>    
            </div>

            <Progress
            strokeColor="rgba(0, 143, 251, 0.6)" 
            strokeLinecap="butt" percent={62} />
        </div>
    </div>
        


);
};

export default Dashboard;