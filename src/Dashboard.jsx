import React, { useEffect, useState } from 'react';
import { Pie } from '@nivo/pie';
import { Button, Col, Row, Statistic } from 'antd';
import CountUp from 'react-countup';
import ReactApexChart from 'react-apexcharts';
import { Select } from 'antd';
import { Progress } from 'antd';
import "./Dashboard.css"
import html2pdf from 'html2pdf.js';
import emailjs from 'emailjs-com';



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

    const [chartData, setChartData] = useState([]);
    useEffect(() => {
        // Aquí puedes hacer una llamada a una API para obtener los datos
        // y luego actualizar la variable de estado con los nuevos datos.
        const newData = [
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
    
        setChartData(newData);
      }, []);
    

      const data = [
        { label: 'Progreso 1', percent: 75 },
        { label: 'Progreso 2', percent: 23 },
        { label: 'Progreso 3', percent: 47 }
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
  
  const formatter = (value) => <CountUp end={value} separator="," />;



  const sendEmail = (e, file) => {
    e.preventDefault();
  
    // verificar si el archivo existe y no es null
    if (file) {
      // crear un objeto EmailJSAttachment con la información del archivo
      const attachment = {
        name: file.name,
        data: file,
        type: file.type,
      };
  
      // enviar el correo electrónico con el archivo adjunto
      emailjs.sendForm('service_50my90o', 'template_g7nhzdq', document.getElementById('myForm'), 'PmEa6BoX3zJ1n-2pa', { attachment })
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });

        
    } else {
      console.log('Archivo no seleccionado');
    }
  };
  
  // función para manejar el cambio de archivo seleccionado
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    sendEmail(e, file);
  };



  return (


        
        
        
        
    <div className='stadisticas-dashboard-component'>
        <div className='filtro-gral'>
            <Select
            placeholder="Serie"
            className='selectores-dash'>
            <Select.Option value="Serie 1">Serie 1</Select.Option>
            <Select.Option value="Serie 2">Serie 2</Select.Option>
            <Select.Option value="Serie 3">Serie 3</Select.Option>
            </Select> 

            <Button onClick={descargarPDF}>Descargar PDF</Button>
            <Button >Enviar por email</Button>
        </div>

        <div className='estadisticas'>

     
        <Row 
        className='stadisticas'
        gutter={16}>
            
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
            <div>
      <form onSubmit={sendEmail} id="myForm">
        <label htmlFor="to_email">Correo electrónico del destinatario:</label>
        <input type="email" name="to_email" required />

        <label htmlFor="from_name">Tu nombre:</label>
        <input type="text" name="from_name" required />

        <label htmlFor="message">Mensaje:</label>
        <textarea name="message" required />
      

     <input type="file" name="attachment" onChange={handleFileChange} />

        <button type="submit">Enviar correo electrónico</button>
      </form>
    </div>


        </div>
    </div>
        


);
};

export default Dashboard;

