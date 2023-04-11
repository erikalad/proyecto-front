import React, { useEffect, useState } from 'react';
import { Pie } from '@nivo/pie';
import { Button, Col, Row, Statistic } from 'antd';
import CountUp from 'react-countup';
import ReactApexChart from 'react-apexcharts';
import { Select } from 'antd';
import { Progress } from 'antd';
import "./Dashboard.css"
import html2pdf from 'html2pdf.js';




function descargarPDF() {
    // Obtener el contenedor que queremos descargar como PDF
    const contenedor = document.body;
    
    
    // Crear una instancia de html2pdf con las opciones deseadas
    const opciones = {
      margin: 0,
      filename: 'mi-pagina.pdf',
      image: { type: 'jpeg', quality: 1.0 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'px', format: [1500, 1500], orientation: 'portrait' },
    };
    const convertir = html2pdf().set(opciones);
    
    // Convertir el HTML del contenedor en un archivo PDF y descargarlo
    convertir.from(contenedor).save();
  }

const Dashboard = () => {

    const [selectedSeries, setSelectedSeries] = useState("Serie 1");
    const [chartData, setChartData] = useState([]);
    const [data,setData] = useState([
            { label: 'Progreso 1', percent: 75 },
            { label: 'Progreso 2', percent: 23 },
            { label: 'Progreso 3', percent: 47 }
    
    ])

    const [data2, setData2] = useState({
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
      });


    



      useEffect(() => {
        let newData;
        if (selectedSeries === "Serie 1") {
          setData2({
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
                opacity: 0.6,
              },
            },
          });
          setData([
            { label: "Progreso 1", percent: 50 },
            { label: "Progreso 2", percent: 70 },
            { label: "Progreso 3", percent: 90 }
          ]);
          newData = [
            {
              id: 'Alegría',
              value: 15,
            },
            {
              id: 'Miedo',
              value: 5,
            },
            {
              id: 'Ira',
              value: 20,
            },
            {
              id: 'Tristeza',
              value: 10,
            },
            {
              id: 'Aversión',
              value: 7,
            },
            {
              id: 'Confianza',
              value: 8,
            },
            {
              id: 'Anticipación',
              value: 3,
            },
            {
              id: 'Sorpresa',
              value: 12,
            },
          ];
          setChartData(newData)
        } else if (selectedSeries === "Serie 2") {
          setData2({
            series: [
              {
                name: 'Area 2',
                data: [10, 20, 30, 40, 50, 60, 70],
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
                opacity: 0.6,
              },
            },
          });
          setData([
            { label: "Progreso 1", percent: 10 },
            { label: "Progreso 2", percent: 30 },
            { label: "Progreso 3", percent: 50 }
          ]);
          newData = [
            {
              id: 'Serie 2 - A',
              value: 10,
            },
            {
              id: 'Serie 2 - B',
              value: 20,
            },
            {
              id: 'Serie 2 - C',
              value: 5,
            },
            {
              id: 'Serie 2 - D',
              value: 15,
            },
            {
              id: 'Serie 2 - E',
              value: 12,
            },
          ];
          setChartData(newData)
        }else if (selectedSeries === "Serie 3") {
            setData2({
              series: [
                {
                  name: 'Area 3',
                  data: [90, 80, 70, 60, 50, 40, 30],
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
                  opacity: 0.6,
                },
              },
            });
            setData([
              { label: "Progreso 1", percent: 80 },
              { label: "Progreso 2", percent: 20 },
              { label: "Progreso 3", percent: 60 }
            ]);
            const newData = [
              {
                id: 'Serie 3 - X',
                value: 25,
              },
              {
                id: 'Serie 3 - Y',
                value: 15,
              },
              {
                id: 'Serie 3 - Z',
                value: 30,
              },
              {
                id: 'Serie 3 - W',
                value: 5,
              },
            ];
            setChartData(newData);
          }
        },[selectedSeries])

          

  /*     const data = [
        { label: 'Progreso 1', percent: 75 },
        { label: 'Progreso 2', percent: 23 },
        { label: 'Progreso 3', percent: 47 }
      ]; */


  /* const data2 = {
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
  }; */

 
  
  const formatter = (value) => <CountUp end={value} separator="," />;

  const handleSeriesChange = (value) => {
    setSelectedSeries(value);
  };

  const filteredChartData = chartData.filter((item) => item.series === selectedSeries);

  return (

    <div className='stadisticas-dashboard-component'>
        <div className='filtro-gral'>
        <Select
          placeholder="Serie"
          className='selectores-dash'
          onChange={handleSeriesChange}
          value={selectedSeries}
        >
          <Select.Option value="Serie 1">Serie 1</Select.Option>
          <Select.Option value="Serie 2">Serie 2</Select.Option>
          <Select.Option value="Serie 3">Serie 3</Select.Option>
        </Select> 

            <Button onClick={descargarPDF}>Descargar PDF</Button>
            <Button href='/mail' disabled>Enviar por email</Button>
        </div>
        <div className='estadisticas'>
        <Row className='stadisticas' gutter={16}>
          <Col span={12}>
            <Statistic title="Total de eventos" value={32753} formatter={formatter}  />
          </Col>
          <Col span={12}>
            <Statistic title="Total actores" value={230} precision={2} formatter={formatter} />
          </Col>
        </Row>
      </div>

        <div className='dashboard-component'>

            <div className="pie">


            <Pie
                
                data={chartData}
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

            <div className='progress'>
                {data.map((item, index) => (
                    <Progress 
                    key={index} 
                    strokeColor="rgba(0, 143, 251, 0.6)" 
                    strokeLinecap="butt" 
                    type="circle" 
                    percent={item.percent}
                    />
                ))}
                </div>
            </div>
        
            <div>
       
            <ReactApexChart
                options={data2.options}
                series={data2.series}
                type="area"
                height={300}
                width={500}
                />
            </div>    

            
            </div>
            
        </div>
  

    </div>
        


);
};

export default Dashboard;

