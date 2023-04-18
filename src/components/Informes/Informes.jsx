import React, { Fragment,useState } from 'react';
import './Informes.css'
import {SlNotebook } from 'react-icons/sl';
import logo from './../../assest/qsocialnow.jpg'
import fb from './../../assest/fb.png'
import tw from './../../assest/tw.jpg'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {CiVolumeHigh} from 'react-icons/ci'
import { Tag } from 'antd';
import { BsFillDashCircleFill } from 'react-icons/bs'
import ReactApexChart from 'react-apexcharts';
import { PieChart, Pie, Cell } from 'recharts';
import { TbTargetArrow} from 'react-icons/tb'
import clave from './../../assest/clave.jpg'
import hashtags from './../../assest/hashtags.jpg'



export default function Informes() {


  const [data2, setData2] = useState({
    series: [
      {
        name: 'Periodo Actual',
        data: [31],
        color:"#0083CA"
      },
      {
        name: 'Periodo Anterior',
        data: [40],
        color:"#b5b5b5"
      },
    ],
    options: {
      chart: {
     
        type: 'area',
      },
      plotOptions: {
          bar: {
      
            horizontal: true,
          }
        },
        toolbar: {
          show: false, // Deshabilitar la funcionalidad de filtro
        },
   
      xaxis: {
        categories: ['Periodo Actual', 'Periodo Anterior'],
      },
      fill: {

        opacity: 0.6, // Opacidad del área
      },
    },
  });


  const [datafb, setDatafb] = useState({
    series: [
      {
        name: 'Periodo Actual',
        data: [12],
        color:"#3b5998"
      },
      {
        name: 'Periodo Anterior',
        data: [40],
        color:"#eaeaea"
      },
    ],
    options: {
      chart: {
        type: 'area',
      },
      plotOptions: {
        bar: {
          horizontal: false,
        }
      },
      toolbar: {
        show: false, // Deshabilitar la funcionalidad de filtro
      },
      xaxis: {
        categories: ['Periodo Actual', 'Periodo Anterior'],
      },
     
      stroke: {
        show: false, // Deshabilitar las líneas
        curve: 'smooth', // Tipo de curva
        colors: undefined, // Color de las líneas
        width: 2 // Ancho de las líneas
      }
    },
  });

  const [datatw, setDatatw] = useState({
    series: [
      {
        name: 'Periodo Actual',
        data: [12],
        color:"#00acee"
      },
      {
        name: 'Periodo Anterior',
        data: [40],
        color:"#eaeaea"
      },
    ],
    options: {
      chart: {
     
        type: 'area',
      },
      plotOptions: {
          bar: {
      
            horizontal: false,
          }
        },
        toolbar: {
          show: false, // Deshabilitar la funcionalidad de filtro
        },
   
      xaxis: {
        categories: ['Periodo Actual', 'Periodo Anterior'],
      },
     
    },
  });



  const dataOuter = [
    { name: 'Positivo', value: 70, fill: '#53b253bd' },
    { name: 'Negativo', value: 30, fill: '#ff4c4cd7' },
  ];
  
  const dataInner = [
    { name: 'Positivo', value: 70, fill: '#53b253bd' },
    { name: 'Negativo', value: 10, fill: '#ff4c4cd7' },
  ];
  
  

  const CustomLabel = ({ viewBox, value }) => {
    const { cx, cy } = viewBox;
    return (
      <text x={cx} y={cy} textAnchor="middle" fontSize="20">
        {value}%
      </text>
    );
  }
  


  {/*Datos solicitados*/}
  const cliente = "Titulo"
  const tiempo ="la ultima semana"
  const clienteUp = cliente.toUpperCase()
  const desdeDiaHora="16:27 hs del 20/03/2023"
  const hastaDiaHora="16:27 hs del 27/03/2023"
  const tendencia= "predominante"
  const indicadorImpacto = "POSITIVIDAD"
  const porcentajeImpacto = "32%"


  return (
    <Fragment >
      <div className="contenedor">
      <div className='contenedor-extremo'>
      {/*Nav*/}
      <div className='nav'>
      <div className='reporte'>
      <SlNotebook/>
      <p>REPORTE DE SÍNTESIS</p>
      </div>

     
      <img src={logo} className='img'></img>
      
      </div>

      {/*Titulo*/}
      <div>
        <div className='titulo'>{clienteUp}</div>
        <p className='subtitulo margen-boton'>Se mide el impacto de las conversaciones sobre {cliente} durante {tiempo}.</p>
      </div>

      </div>



    <div className='cuerpo  '>
    <div className='titulo0'>MONITOREO Y ANÁLISIS DE:</div>
    <img className="fb" src={fb}></img>
    <img className="tw" src={tw}></img>
    |
    <div className='titulo1'>PERíODO</div>



    <div className='cuerpo'>
    <div className='titulo1'>< AiOutlineClockCircle/></div>
    <div className='titulo1'>Desde {desdeDiaHora} - Hasta {hastaDiaHora}</div>
    </div>

    </div>


    <div className='cuerpo'>
    <div className='titulo2'><CiVolumeHigh/></div>
   
    <div className='titulo2'>PUBLICACIONES </div>
    </div>
    <Tag className='tag'>Eventos analizados y su comparación con el mismo período anterior</Tag>


    <div className='cuerpo' style={{marginTop:"15px"}}>
      <div className='titulo1' style={{color:"#0083CA"}}><BsFillDashCircleFill/> </div>
      <div className='titulo1'>TOTAL (VOLUMEN DE PUBLICACIONES)</div>
     
    </div>

    <div className='graficos-cuerpo'>
    <div className="grafico">
            <ReactApexChart
                options={data2.options}
                series={data2.series}
                type="bar"
                height={150}
                width={400}
                />
                
            </div>
            <hr></hr>
            <div className='periodosfbtw'>
              <div className='facebook-grafico-bar'>
              <div className='icon-nombre'>
              <img className="fb" src={fb}/>
                FACEBOOK</div>
                <ReactApexChart
                options={datafb.options}
                series={datafb.series}
                type="bar"
                height={300}
                width={200}
                />
                </div>
                <div className='twitter-grafico-bar'>
                <div className='icon-nombre'>
                <img className="tw" src={tw}/>
                 TWITTER</div>
                 <ReactApexChart
                options={datatw.options}
                series={datatw.series}
                type="bar"
                height={300}
                width={200}
                />
                </div>

            </div>
    </div>



    <div className='totalizador-1'>

    <div className='contenedor-totales'>

      <div className='box'>
      <div className='numeros frases-total'>111</div> 
      <div className='frase'>
      <div className='frases-total'>PUBLICACIONES</div>
      <div className='frases-total'>TOTALES</div>
      </div>
      <hr/>
      </div>

     

      <div className='box'>
      <div className='numeros frases-total'>1</div>
      <div className='frase'>
      <div className='frases-total'>POR HORA </div>
      <div className='frases-total'>TOTALES</div>
      </div>
      <hr/>
      </div>

      

      <div className='box'>
      <div className='numeros frases-total'>36</div>
      <div className='frase'>
      <div className='frases-total'>PICO MÁXIMO </div>
      <div className='frases-total'>DE PUBLICACIONES</div>
      </div>
      </div>

      </div>

      <div className='contenedor-totales'>

      <div className='box'>
      <div className='numeros frases-total'>DESCENDENTE</div>
      <div className='frase'>
      <div className='frases-total'>TENDENCIA </div>
      <div className='frases-total'>DE PUBLICACIONES</div>
      </div>
      <hr/>
      </div>

      

      <div className='box'>
      <div className='numeros frases-total'>124.524</div>
      <div className='frase'>
      <div className='frases-total'>ALCANCE</div>
      <div className='frases-total'>IMPRESIONES</div>
      </div>
      </div>
      </div>

    </div>

  


    <div className='cuerpo'>
    <div className='titulo2'><TbTargetArrow/></div>
   
    <div className='titulo2'>IMPACTO</div>
    </div>
    <Tag className='tag'>Polaridad y su comparación con el mismo período anterior (excluye neutralidad)</Tag>

    <div className='cuerpo' style={{marginTop:"15px"}}>
      <div className='titulo1' style={{color:"#0083CA"}}><BsFillDashCircleFill/> </div>
      <div className='titulo1'>TOTAL (VOLUMEN DE PUBLICACIONES)</div>
     
    </div>


    <div className='contenedor-pie-texto'>
    <div className='pie'>
    <PieChart width={200} height={200}>
                <Pie
                  data={dataOuter}
                  dataKey="value"
                  cx={100}
                  cy={100}
                  startAngle={-90}
                  endAngle={270}
                  innerRadius={30}
                  outerRadius={60}
                  paddingAngle={1}
                >
                  {dataOuter.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Pie
                  data={dataInner}
                  dataKey="value"
                  cx={100}
                  cy={100}
                  startAngle={-90}
                  endAngle={270}
                  innerRadius={10}
                  outerRadius={30}
                  paddingAngle={1}
                >
                  {dataInner.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
              </PieChart>
    </div>


    <div className='texto'>
      <div>Tendencia {tendencia}</div> 
      <div> en relación al mismo
       período anterior:</div>
      <div className={indicadorImpacto === "POSITIVIDAD" ? "positivo" : "negativo"} >{indicadorImpacto}</div>
      <div className={indicadorImpacto === "POSITIVIDAD" ? "positivo" : "negativo"} >{porcentajeImpacto}</div>
    </div>

    <hr></hr>


    <div className='pie'>
    <div className='icon-nombre'>
              <img className="fb" src={fb}/>
                FACEBOOK</div>
                <PieChart width={200} height={200}>
                <Pie
                  data={dataOuter}
                  dataKey="value"
                  cx={100}
                  cy={100}
                  startAngle={-90}
                  endAngle={270}
                  innerRadius={30}
                  outerRadius={60}
                  paddingAngle={1}
                >
                  {dataOuter.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Pie
                  data={dataInner}
                  dataKey="value"
                  cx={100}
                  cy={100}
                  startAngle={-90}
                  endAngle={270}
                  innerRadius={10}
                  outerRadius={30}
                  paddingAngle={1}
                >
                  {dataInner.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
              </PieChart>
    </div>

    <div className='pie'>
                <div className='icon-nombre'>
                <img className="tw" src={tw}/>
                 TWITTER</div>
                 <PieChart width={200} height={200}>
                <Pie
                  data={dataOuter}
                  dataKey="value"
                  cx={100}
                  cy={100}
                  startAngle={-90}
                  endAngle={270}
                  innerRadius={30}
                  outerRadius={60}
                  paddingAngle={1}
                >
                  {dataOuter.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Pie
                  data={dataInner}
                  dataKey="value"
                  cx={100}
                  cy={100}
                  startAngle={-90}
                  endAngle={270}
                  innerRadius={10}
                  outerRadius={30}
                  paddingAngle={1}
                >
                  {dataInner.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
              </PieChart>
  
    </div>
    </div>

    <div className='subtitulo-anillos'>
    <div>ANILLO INTERNO: Período Anterior</div>
    <div>|</div>
    <div>ANILLO EXTERNO: Período Actual</div> 
    </div>

   
    <div className='contenedor-principales'>
    <div >
    <div className='principales-hashtags'>
    <div>PRINCIPALES</div>
    <div className='titulo3'>HASHTAGS</div>
    <img src={hashtags} className='hashtags'/>
    </div>
    <div>
                  

    </div>
    </div>

    <div >
    <div className='principales-hashtags'>
    <div>PALABRAS</div>
    <div className='titulo3'>CLAVE</div>
    <img src={clave} className='hashtags'/>
    </div>
    <div>


    </div>

    </div>
    </div>
   

    </div>
    </Fragment>
  )
}
