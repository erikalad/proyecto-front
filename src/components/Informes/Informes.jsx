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


export default function Informes() {
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


  {/*Datos solicitados*/}
  const cliente = "Hugo Passalacqua"
  const tiempo ="la ultima semana"
  const clienteUp = cliente.toUpperCase()
  const desdeDiaHora="16:27 hs del 20/03/2023"
  const hastaDiaHora="16:27 hs del 27/03/2023"


  return (
    <Fragment>
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
        <p className='subtitulo'>Se mide el impacto de las conversaciones sobre {cliente} durante {tiempo}.</p>
      </div>

    </div>



    <div className='cuerpo'>
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


    <div className='cuerpo'>
      <div className='icon'><BsFillDashCircleFill/> </div>
      <div>TOTAL (VOLUMEN DE PUBLICACIONES)</div>
     
    </div>

    <div>
    <div className="grafico">
            <ReactApexChart
                options={data2.options}
                series={data2.series}
                type="bar"
                height={350}
                width={500}
                />
            </div>
    </div>
    </Fragment>
  )
}
