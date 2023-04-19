/** @format */

import React, { Fragment, useEffect, useState } from "react";
import "./Informes.css";
import { SlNotebook } from "react-icons/sl";
import logo from "./../../assest/qsocialnow.jpg";
import logo2 from "./../../assest/qsocialnow2.jpg";
import fb from "./../../assest/fb.png";
import tw from "./../../assest/tw.jpg";
import { AiOutlineClockCircle, AiOutlineStar } from "react-icons/ai";
import { CiVolumeHigh } from "react-icons/ci";
import { Table, Tag, Button, Input } from "antd";
import { BsFillDashCircleFill } from "react-icons/bs";
import ReactApexChart from "react-apexcharts";
import { PieChart, Pie, Cell } from "recharts";
import { TbTargetArrow } from "react-icons/tb";
import clave from "./../../assest/clave.jpg";
import hashtags from "./../../assest/hashtags.jpg";
import ReactWordcloud from "react-wordcloud";
import WordCloud from "react-wordcloud";
import { BiConversation } from "react-icons/bi";
import { MdOutlineContactSupport } from "react-icons/md";
import { RiUserStarLine, RiFileUserLine, RiPushpinLine } from "react-icons/ri";
import { IoAlert } from "react-icons/io5";
import { TiHeartOutline } from "react-icons/ti";
import html2pdf from "html2pdf.js";
import TextArea from "antd/es/input/TextArea";




export default function Informes() {

   function descargarPDF() {
    // Obtener el contenedor que queremos descargar como PDF
    const contenedor = document.getElementById("contenedor");
  
   // Crear una instancia de html2pdf con las opciones deseadas
   const opciones = {
    margin: [0, 0, 0, 0], // reducir los márgenes a 0
    filename: "mi-pagina.pdf",
    image: { type: "jpeg", quality: 1.0 },
    html2canvas: { scale: 2 },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "landscape",
      compressPDF: true
    },
    pagebreak: { before: ".page-break" } // agregar saltos de página antes de elementos con clase .saltopagina
  };
  const convertir = html2pdf().set(opciones);

  // Convertir el HTML del contenedor en un archivo PDF y descargarlo
  convertir.from(contenedor).save();
  } 

  const dataPieNivo = [
    { name: "Sección 1", value: 10, fill: "#8884d8" },
    { name: "Sección 2", value: 20, fill: "#83a6ed" },
    { name: "Sección 3", value: 30, fill: "#8dd1e1" },
    { name: "Sección 4", value: 40, fill: "#82ca9d" },
  ];

  //COMPONENTE TABLE  DE ANTD

  const columns = [
    {
      title: "N°",
      dataIndex: "key",
      rowScope: "row",
      headerStyle: { backgroundColor: "#0083CA" },
    },
    {
      title: "Influenciador",
      dataIndex: "influenciador",
      render: (text) => <div>{text}</div>,
      headerStyle: { backgroundColor: "#0083CA" },
    },
    {
      title: "Impresiones",
      dataIndex: "impresiones",
    },
  ];

  const data = [
    {
      key: "1",
      influenciador: "passalacquaok",
      impresiones: 38691,
    },
    {
      key: "2",
      influenciador: "PabbloZapata",
      impresiones: 6292,
    },
    {
      key: "3",
      influenciador: "noticiasen3ok",
      impresiones: 3495,
    },
    {
      key: "4",
      influenciador: "NHoughan",
      impresiones: 65,
    },
    {
      key: "5",
      influenciador: "alejavier68",
      impresiones: 64,
    },
  ];

  const data2ant = [
    {
      key: "6",
      influenciador: "Erika",
      impresiones: "",
    },
    {
      key: "7",
      influenciador: "",
      impresiones: "",
    },
    {
      key: "8",
      influenciador: "",
      impresiones: "",
    },
    {
      key: "9",
      influenciador: "",
      impresiones: "",
    },
    {
      key: "10",
      influenciador: "",
      impresiones: "",
    },
  ];

  const rowClassName = (record, index) => {
    if (index % 2 === 0) {
      return "odd-row";
    } else {
      return "even-row";
    }
  };
  //FIN COMPONENTE DE ANTD

  const columnsPreocupacionesTotal = [
    {
      title: (
        <div className="title-total icon-nombre-columnas">
          <div className="icon-nombre-columnas">
            <BsFillDashCircleFill />{" "}
          </div>
          TOTAL
        </div>
      ),
      dataIndex: "total",
      className: "hover-black",
    },
  ];

  const columnsPreocupacionesTw = [
    {
      title: (
        <div className="icon-nombre-columnas">
          <img className="tw" src={tw} />
          TWITTER
        </div>
      ),
      dataIndex: "twitter",
      className: "hover-black",
    },
  ];

  const columnsPreocupacionesFb = [
    {
      title: (
        <div className="icon-nombre-columnas">
          <img className="fb" src={fb} />
          FACEBOOK
        </div>
      ),
      dataIndex: "facebook",
      className: "hover-black",
    },
  ];

  const dataPreocupaciones = [
    {
      total: (
        <div className="totalizador-preocupaciones">
          <div>TRABAJO </div>
          <div>44.83%</div>
        </div>
      ),
    },
    {
      total: (
        <div className="totalizador-preocupaciones">
          <div>VIVIENDA </div>
          <div>24.14%</div>
        </div>
      ),
    },
    {
      total: (
        <div className="totalizador-preocupaciones">
          <div>EDUCACIÓN </div>
          <div>10.34%</div>
        </div>
      ),
    },
  ];

  const dataPreocupacionesTw = [
    {
      twitter: (
        <div className="totalizador-preocupaciones">
          <div>TRABAJO </div>
          <div>36.84%</div>
        </div>
      ),
    },
    {
      twitter: (
        <div className="totalizador-preocupaciones">
          <div>VIVIENDA </div>
          <div>36.84%</div>
        </div>
      ),
    },
    {
      twitter: (
        <div className="totalizador-preocupaciones">
          <div>EDUCACIÓN </div>
          <div>15.79%</div>
        </div>
      ),
    },
  ];

  const dataPreocupacionesFb = [
    {
      facebook: (
        <div className="totalizador-preocupaciones">
          <div>TRABAJO </div>
          <div>60.00%</div>
        </div>
      ),
    },
    {
      facebook: (
        <div className="totalizador-preocupaciones">
          <div>VIVIENDA </div>
          <div>20.00%</div>
        </div>
      ),
    },
    {
      facebook: (
        <div className="totalizador-preocupaciones">
          <div>EDUCACIÓN </div>
          <div>10.00%</div>
        </div>
      ),
    },
  ];

  const dataEmociones = [
    {
      total: (
        <div className="totalizador-preocupaciones">
          <div>ANTICIPACIÓN </div>
          <div>65.63%</div>
        </div>
      ),
    },
    {
      total: (
        <div className="totalizador-preocupaciones">
          <div>ALEGRÍA </div>
          <div>9.38%</div>
        </div>
      ),
    },
    {
      total: (
        <div className="totalizador-preocupaciones">
          <div>CONFIANZA </div>
          <div>6.25%</div>
        </div>
      ),
    },
  ];

  const dataEmocionesTw = [
    {
      twitter: (
        <div className="totalizador-preocupaciones">
          <div>ANTICIPACIÓN </div>
          <div>91.30%</div>
        </div>
      ),
    },
    {
      twitter: (
        <div className="totalizador-preocupaciones">
          <div>INSATISFACCIÓN </div>
          <div>4.35%</div>
        </div>
      ),
    },
    {
      twitter: (
        <div className="totalizador-preocupaciones">
          <div>DESEO </div>
          <div>4.35%</div>
        </div>
      ),
    },
  ];

  const dataEmocionesFb = [
    {
      facebook: (
        <div className="totalizador-preocupaciones">
          <div>ALEGRÍA </div>
          <div>33.33%</div>
        </div>
      ),
    },
    {
      facebook: (
        <div className="totalizador-preocupaciones">
          <div>CONFIANZA </div>
          <div>22.22%</div>
        </div>
      ),
    },
    {
      facebook: (
        <div className="totalizador-preocupaciones">
          <div>AGRADO </div>
          <div>11.11%</div>
        </div>
      ),
    },
  ];

  const dataImagenes = [
    {
      total: (
        <div className="totalizador-preocupaciones">
          <div>FRIALDAD </div>
          <div>22.22%</div>
        </div>
      ),
    },
    {
      total: (
        <div className="totalizador-preocupaciones">
          <div>CONOCIMIENTO </div>
          <div>222.224%</div>
        </div>
      ),
    },
    {
      total: (
        <div className="totalizador-preocupaciones">
          <div>LABORASIDAD </div>
          <div>22.22%</div>
        </div>
      ),
    },
  ];

  const dataImagenesTw = [
    {
      twitter: (
        <div className="totalizador-preocupaciones">
          <div>FRIALDAD </div>
          <div>66.67%</div>
        </div>
      ),
    },
    {
      twitter: (
        <div className="totalizador-preocupaciones">
          <div>EFICIENCIA </div>
          <div>33.33%</div>
        </div>
      ),
    },
    {
      twitter: (
        <div className="totalizador-preocupaciones">
          <div></div>
          <div></div>
        </div>
      ),
    },
  ];

  const dataImagenesFb = [
    {
      facebook: (
        <div className="totalizador-preocupaciones">
          <div>CONOCIMIENTO </div>
          <div>33.33%</div>
        </div>
      ),
    },
    {
      facebook: (
        <div className="totalizador-preocupaciones">
          <div>LABORISIDAD </div>
          <div>33.33%</div>
        </div>
      ),
    },
    {
      facebook: (
        <div className="totalizador-preocupaciones">
          <div>OPTIMISMO </div>
          <div>16.67%</div>
        </div>
      ),
    },
  ];

  const columnsEmociones = [
    {
      title: (
        <div className="title-total icon-nombre-columnas">
          <div className="icon-nombre-columnas">
          <TiHeartOutline/>
          </div>
          EMOCIONES
        </div>
      ),
      dataIndex: "emociones",
      className: "hover-black",
    },
  ];

  const dataEmocionesComunicacion = [
    {
      emociones: (
        <div className="totalizador-preocupaciones">
          <div>DESEO </div>
        
        </div>
      ),
    },
    {
      emociones: (
        <div className="totalizador-preocupaciones">
          <div>CALMA </div>
          
        </div>
      ),
    },
    {
      emociones: (
        <div className="totalizador-preocupaciones">
          <div>AGRADO </div>
          
        </div>
      ),
    },
    {
      emociones: (
        <div className="totalizador-preocupaciones">
          <div>AMOR </div>
          
        </div>
      ),
    },
  ];

  const rowClassNameTotal = (name) => {
    if (name === "TOTAL") {
      return "preocupaciones-total";
    } else if (name === "TWITTER") {
      return "preocupaciones-twitter";
    } else if (name === "EMOCIONES") {
      return "emociones-color";
    }
    else {
      return "preocupaciones-facebook";
    }
  };

  const opciones = {
    fontFamily: "Helvetica, sans-serif",
    fontSizes: [8, 30],
    colors: ["#0083CA"],
    rotations: 0,
    rotate: 90,
  };

  const [data2, setData2] = useState({
    series: [
      {
        name: "Periodo Actual",
        data: [31],
        color: "#0083CA",
      },
      {
        name: "Periodo Anterior",
        data: [40],
        color: "#b5b5b5",
      },
    ],
    options: {
      chart: {
        type: "area",
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      toolbar: {
        show: false, // Deshabilitar la funcionalidad de filtro
      },

      xaxis: {
        categories: ["Periodo Actual", "Periodo Anterior"],
      },
      fill: {
        opacity: 0.6, // Opacidad del área
      },
    },
  });

  const [datafb, setDatafb] = useState({
    series: [
      {
        name: "Periodo Actual",
        data: [12],
        color: "#3b5998",
      },
      {
        name: "Periodo Anterior",
        data: [40],
        color: "#eaeaea",
      },
    ],
    options: {
      chart: {
        type: "area",
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      toolbar: {
        show: false, // Deshabilitar la funcionalidad de filtro
      },
      xaxis: {
        categories: ["Periodo Actual", "Periodo Anterior"],
      },

      stroke: {
        show: false, // Deshabilitar las líneas
        curve: "smooth", // Tipo de curva
        colors: undefined, // Color de las líneas
        width: 2, // Ancho de las líneas
      },
    },
  });

  const [datatw, setDatatw] = useState({
    series: [
      {
        name: "Periodo Actual",
        data: [12],
        color: "#00acee",
      },
      {
        name: "Periodo Anterior",
        data: [40],
        color: "#eaeaea",
      },
    ],
    options: {
      chart: {
        type: "area",
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      toolbar: {
        show: false, // Deshabilitar la funcionalidad de filtro
      },

      xaxis: {
        categories: ["Periodo Actual", "Periodo Anterior"],
      },
    },
  });

  const dataOuter = [
    { name: "Positivo", value: 70, fill: "#53b253bd" },
    { name: "Negativo", value: 30, fill: "#ff4c4cd7" },
  ];

  const dataInner = [
    { name: "Positivo", value: 70, fill: "#53b253bd" },
    { name: "Negativo", value: 10, fill: "#ff4c4cd7" },
  ];

  {/*Datos solicitados*/}
  const cliente = "HUGO PASSALACQUA";
  const tiempo = "la ultima semana";
  const clienteUp = cliente.toUpperCase();
  const desdeDiaHora = "16:27 hs del 20/03/2023";
  const hastaDiaHora = "16:27 hs del 27/03/2023";
  const tendencia = "predominante";
  const indicadorImpacto = "POSITIVIDAD";
  const porcentajeImpacto = "32%";
  const principalesHashtags = [
    { text: "#posadas", value: 50 },
    { text: "#ahora", value: 50 },
    { text: "#buensabado", value: 50 },
    { text: "#puertorico", value: 50 },
  ];
  const palabrasClaves = [
    { text: "compomiso", value: 50 },
    { text: "esfuerzo", value: 20 },
    { text: "futuro", value: 20 },
    { text: "construir", value: 15 },
    { text: "alba", value: 12 },
    { text: "comunidad", value: 25 },
    { text: "deporte", value: 45 },
    { text: "abrazo", value: 36 },
    { text: "hugo", value: 20 },
    { text: "fuerzas", value: 57 },
  ];

  const palabrasRecomendadas = [
    { text: "satisfacción", value: 30 },
    { text: "disfrute", value: 30 },
    { text: "bienestar", value: 30 },
    { text: "admiración", value: 30 },
    { text: "optimismo", value: 30 },
    { text: "animación", value: 30 },
  ];

  const opcionesRecomendadas = {
    fontFamily: "Helvetica, sans-serif",
    fontSizes: [8, 40],
    colors: ["#1a8f1abd"],
    rotations: 0,
    rotate: 90,
  };

  const mapaPercepciones = [
    { text: "insensibilidad", value: 50, color:"#ff4c4cd7" },
    { text: "anticipación", value: 20, color:"#53b253bd" },
    { text: "decisión", value: 20, color:"#53b253bd" },
    { text: "mejora", value: 15, color:"#53b253bd" },
    { text: "optimismo", value: 12, color:"#53b253bd" },
    { text: "euforia", value: 25, color:"#53b253bd" },
    { text: "consciente", value: 45, color:"#53b253bd" },
    { text: "bienestar", value: 36, color:"#53b253bd" },
    { text: "eficiencia", value: 20, color:"#53b253bd" },
    { text: "frialdad", value: 60, color:"#ff4c4cd7" },
    { text: "indiferencia", value: 57, color:"#ff4c4cd7" },
    { text: "desatención", value:58, color:"#ff4c4cd7" },
    { text: "experto", value: 57, color:"#53b253bd" },
    { text: "laboriosidad", value: 57, color:"#53b253bd" },
    { text: "conocimiento", value: 57, color:"#53b253bd" },
    { text: "educación", value: 57, color:"#53b253bd" },
    { text: "confianza", value: 21, color:"#53b253bd" },
    { text: "distante", value: 60, color:"#ff4c4cd7" },
  ];

  const opcionesPercepciones = {
    fontFamily: "Helvetica, sans-serif",
    fontSizes: [10, 50],
    rotations: 0,
    rotate: 90,
    colors: mapaPercepciones.map(object=> object.color)
  };

  const [editable,setEditable] = useState(false)

  function editar(){
    console.log(editable)
    setEditable(!editable)
  }
  const [valor, setValor] = useState(111);
  const [texto, setTexto] = useState("El candidato a gobernador para Misiones recibe una connotación ampliamente positiva, y se destaca el atributo de Eficiencia que le otorga la comunidad digital. No se detectan contenidos negativos.");
  const [texto2, setTexto2] = useState(" Impacta a favor su posteo sobre la visita al barrio Don Daniel de Alem y la charla con voluntarios y voluntarias del merendero que lleva adelante la vecina Yanina Báez con el acompañamiento de la agrupación Manos Unidas.");

  const manejarCambio = (evento) => {
    setValor(evento.target.value);
  }
  const manejarCambioTexto = (evento) => {
    setTexto(evento.target.value);
  }
  const manejarCambioTexto2 = (evento) => {
    setTexto2(evento.target.value);
  }

  return (
    <Fragment>
      <Button onClick={descargarPDF}>Descargar PDF</Button>
      <Button onClick={editar}>Editar</Button>
      <div className="contenedor" id="contenedor">
        <div className="contenedor-extremo">
          {/*Nav*/}
         <div className="nav">
            <div className="reporte">
              <SlNotebook />
              <p>REPORTE DE SÍNTESIS</p>
            </div>

            <img src={logo} className="img"></img>
          </div>

          {/*Titulo*/}
          <div>
            <div className="titulo">{clienteUp}</div>
            <p className="subtitulo-principal">
              Se mide el impacto de las conversaciones sobre {cliente} durante {tiempo}.
            </p>
          </div>
        </div>

        <div className="cuerpo  ">
          <div className="titulo0">MONITOREO Y ANÁLISIS DE:</div>
          <img className="fb" src={fb}></img>
          <img className="tw" src={tw}></img>|
          <div className="titulo1">PERíODO</div>
          <div className="cuerpo">
            <div className="titulo1">
              <AiOutlineClockCircle />
            </div>
            <div className="titulo1">
              Desde {desdeDiaHora} - Hasta {hastaDiaHora}
            </div>
          </div>
        </div>

        <div className="cuerpo">
          <div className="titulo2">
            <CiVolumeHigh />
          </div>

          <div className="titulo2">PUBLICACIONES </div>
        </div>
        <Tag className="tag">
          Eventos analizados y su comparación con el mismo período anterior
        </Tag>

        <div className="cuerpo" style={{ marginTop: "15px" }}>
          <div className="titulo1" style={{ color: "#0083CA" }}>
            <BsFillDashCircleFill />{" "}
          </div>
          <div className="titulo1">TOTAL (VOLUMEN DE PUBLICACIONES)</div>
        </div>

        <div className="graficos-cuerpo">
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
          <div className="periodosfbtw">
            <div className="facebook-grafico-bar">
              <div className="icon-nombre">
                <img className="fb" src={fb} />
                FACEBOOK
              </div>
              <ReactApexChart
                options={datafb.options}
                series={datafb.series}
                type="bar"
                height={250}
                width={200}
              />
            </div>
            <div className="twitter-grafico-bar">
              <div className="icon-nombre">
                <img className="tw" src={tw} />
                TWITTER
              </div>
              <ReactApexChart
                options={datatw.options}
                series={datatw.series}
                type="bar"
                height={250}
                width={200}
              />
            </div>
          </div>
        </div>

        <div className="totalizador-1">
          <div className="contenedor-totales">
            <div className="box">
            {editable ? (
              <Input
              style={{ width: '70px' , height:'70px'}}
                type="text"
                value={valor}
                onChange={manejarCambio}
                className="numeros frases-total"
              />
            ) : (
              <div className="numeros frases-total">{valor}</div>
            )}
             {/*  <div className="numeros frases-total">111</div> */}
              <div className="frase">
                <div className="frases-total">PUBLICACIONES</div>
                <div className="frases-total">TOTALES</div>
              </div>
              <hr />
            </div>

            <div className="box">
              
              <div className="numeros frases-total">1</div>
              <div className="frase">
                <div className="frases-total">POR HORA </div>
                <div className="frases-total">TOTALES</div>
              </div>
              <hr />
            </div>

            <div className="box">
              <div className="numeros frases-total">36</div>
              <div className="frase">
                <div className="frases-total">PICO MÁXIMO </div>
                <div className="frases-total">DE PUBLICACIONES</div>
              </div>
            </div>
          </div>

          <div className="contenedor-totales">
            <div className="box">
              <div className="numeros frases-total">DESCENDENTE</div>
              <div className="frase">
                <div className="frases-total">TENDENCIA </div>
                <div className="frases-total">DE PUBLICACIONES</div>
              </div>
              <hr />
            </div>

            <div className="box">
              <div className="numeros frases-total">124.524</div>
              <div className="frase">
                <div className="frases-total">ALCANCE</div>
                <div className="frases-total">IMPRESIONES</div>
              </div>
            </div>
          </div>
        </div>


        <div class="page-break" data-html2pdf-pagebreak>

        {/*Nav*/}
        <div className="contenedor-extremo">
          <div className="nav">
            <div className="reporte">
              <SlNotebook />
              <p>REPORTE DE SÍNTESIS</p>
            </div>

            <img src={logo} className="img"></img>
          </div> 
        </div>

        <div className="cuerpo">
          <div className="titulo2">
            <TbTargetArrow />
          </div>

          <div className="titulo2">IMPACTO</div>
        </div>
        <Tag className="tag">
          Polaridad y su comparación con el mismo período anterior (excluye
          neutralidad)
        </Tag>

        <div className="cuerpo" style={{ marginTop: "15px" }}>
          <div className="titulo1" style={{ color: "#0083CA" }}>
            <BsFillDashCircleFill />{" "}
          </div>
          <div className="titulo1">TOTAL (VOLUMEN DE PUBLICACIONES)</div>
        </div>

        <div className="contenedor-pie-texto">
          <div className="pie">
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
                paddingAngle={1}>
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
                paddingAngle={1}>
                {dataInner.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </div>

          <div className="texto">
            <div>Tendencia {tendencia}</div>
            <div> en relación al mismo período anterior:</div>
            <div
              className={
                indicadorImpacto === "POSITIVIDAD" ? "positivo" : "negativo"
              }>
              {indicadorImpacto}
            </div>
            <div
              className={
                indicadorImpacto === "POSITIVIDAD" ? "positivo" : "negativo"
              }>
              {porcentajeImpacto}
            </div>
          </div>

          <hr></hr>

          <div className="pie">
            <div className="icon-nombre">
              <img className="fb" src={fb} />
              FACEBOOK
            </div>
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
                paddingAngle={1}>
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
                paddingAngle={1}>
                {dataInner.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </div>

          <div className="pie">
            <div className="icon-nombre">
              <img className="tw" src={tw} />
              TWITTER
            </div>
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
                paddingAngle={1}>
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
                paddingAngle={1}>
                {dataInner.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>

        <div className="subtitulo-anillos">
          <div>ANILLO INTERNO: Período Anterior</div>
          <div>|</div>
          <div>ANILLO EXTERNO: Período Actual</div>
        </div>

        <div className="contenedor-principales">
          <div className="contenedor-img-words">
            <div className="principales-hashtags">
              <div>PRINCIPALES</div>
              <div className="titulo3">HASHTAGS</div>
              <img src={hashtags} className="hashtags" />
            </div>
            <div className="grafico-palabras">
              <ReactWordcloud words={principalesHashtags} options={opciones} />
            </div>
          </div>

          <div className="contenedor-img-words">
            <div className="principales-hashtags">
              <div>PALABRAS</div>
              <div className="titulo3">CLAVE</div>
              <img src={clave} className="hashtags" />
            </div>
            <div className="grafico-palabras">
              <ReactWordcloud words={palabrasClaves} options={opciones} />
            </div>
          </div>
        </div>

        </div>


        <div class="page-break" data-html2pdf-pagebreak>
        {/*Nav*/}
        <div className="contenedor-extremo">
          <div className="nav">
            <div className="reporte">
              <SlNotebook />
              <p>REPORTE DE SÍNTESIS</p>
            </div>

            <img src={logo} className="img"></img>
          </div>

        </div>

        <div className="cuerpo">
          <div className="titulo2">
            <BiConversation />
          </div>

          <div className="titulo2">ANÁLISIS</div>
        </div>

        <div className="contenedor-analisis">
          <div className="contenedor-dos-analisis">
            <div className="contenedor-texto-analisis">
              <div className="icono-analisis">
                <MdOutlineContactSupport />
              </div>
              {editable ? (
              <TextArea
                style={{ height: '100px' }}
                type="text"
                value={texto}
                onChange={manejarCambioTexto}
              />
            ) : (
              <div>
                {texto}
              </div>
            )}
            </div>

            <div className="contenedor-texto-analisis">
              <div className="icono-analisis">
                <MdOutlineContactSupport />
              </div>
              {editable ? (
              <TextArea
                style={{ height: '100px' }}
                type="text"
                value={texto2}
                onChange={manejarCambioTexto2}
              />
            ) : (
              <div>
                {texto2}
              </div>
            )}
         {/*      <div>
                Impacta a favor su posteo sobre la visita al barrio Don Daniel
                de Alem y la charla con voluntarios y voluntarias del merendero
                que lleva adelante la vecina Yanina Báez con el acompañamiento
                de la agrupación Manos Unidas.
              </div> */}
            </div>
          </div>

          <hr className="hr-estilos" />

          <div className="contenedor-dos-analisis">
            <div className="contenedor-texto-analisis">
              <div className="icono-analisis">
                <MdOutlineContactSupport />
              </div>
              <div>
                El candidato pone de relieve la reunión que mantuvo con la
                concejala Gabriela Bastarrechea, de Puerto Rico, y su equipo,
                donde conversaron sobre ideas y e iniciativas que quieren llevar
                a cabo en la comunidad.
              </div>
            </div>

            <div className="contenedor-texto-analisis">
              <div className="icono-analisis">
                <MdOutlineContactSupport />
              </div>
              <div>
                Repercute la publicación de la cuenta del Frente Renovador de la
                Concordia, que subraya las palabras del candidato: "Al futuro lo
                tenemos que construir nosotros".
              </div>
            </div>
          </div>
          <hr className="hr-estilos" />

          <div className="contenedor-dos-analisis">
            <div className="contenedor-texto-analisis">
              <div className="icono-analisis">
                <MdOutlineContactSupport />
              </div>
              <div>
                Los medios difunden que el diputado provincial se acercó a
                Colonia Gisela para visitar dos establecimientos educativos y
                charlar con el cuerpo docente que se desempeña en este paraje
                ubicado entre los municipios de Colonia Polana y General
                Urquiza.
              </div>
            </div>

            <div className="contenedor-texto-analisis">
              <div className="icono-analisis">
                <MdOutlineContactSupport />
              </div>
              <div>
                Passalacqua logra importante engagement en su saludo a “la
                querida” comunidad de Alba Posse en su 88° aniversario.
              </div>
            </div>
          </div>
          <hr className="hr-estilos" />
        </div>

        </div>


        <div class="page-break" data-html2pdf-pagebreak>
        {/*Nav*/}
        <div className="contenedor-extremo">
          <div className="nav">
            <div className="reporte">
              <SlNotebook />
              <p>REPORTE DE SÍNTESIS</p>
            </div>

            <img src={logo} className="img"></img>
          </div>
        </div>

        <div className="cuerpo">
          <div className="titulo2">
            <RiUserStarLine />
          </div>

          <div className="titulo2">INFLUENCIADORES</div>
        </div>
        <Tag className="tag">Top 10 principales</Tag>

        <div className="container-table">
          <div className="table">
            <Table
              columns={columns}
              dataSource={[...data]}
              pagination={false}
              rowClassName={rowClassName}
              style={{ width: "100%" }}
              components={{
                header: {
                  cell: (props) => (
                    <th
                      {...props}
                      style={{
                        backgroundColor: "#0083CA",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    />
                  ),
                },
              }}
            />
         
         {data2ant && data2ant[0].influenciador !== "" && (
        <Table
          columns={columns}
          dataSource={data2ant}
          pagination={false}
          rowClassName={rowClassName}
          style={{ width: "100%" }}
          components={{
            header: {
              cell: (props) => (
                <th
                  {...props}
                  style={{
                    backgroundColor: "#0083CA",
                    color: "white",
                    fontWeight: "bold",
                  }}
                />
              ),
            },
          }}
        />
      )}
      {(!data2ant || data2ant[0].influenciador === "") && (
        <div style={{ display: 'none' }}>
          {/* Aquí puede agregar cualquier contenido que desee que se oculte cuando no hay datos */}
        </div>
      )}
          </div>
        </div>

        <div className="cuerpo">
          <div className="titulo2">
            <IoAlert />
          </div>

          <div className="titulo2">PREOCUPACIONES</div>
        </div>
        <Tag className="tag">Top 3 principales</Tag>

        <div className="container-table">
          <div className="table">
            <Table
              columns={columnsPreocupacionesTotal}
              dataSource={[...dataPreocupaciones]}
              pagination={false}
              rowClassName={rowClassNameTotal("TOTAL")}
              style={{ width: "100%", margin: "3px" }}
              components={{
                header: {
                  cell: (props) => (
                    <th
                      {...props}
                      style={{ backgroundColor: "white", color: "black" }}
                    />
                  ),
                },
              }}
            />
            <Table
              columns={columnsPreocupacionesTw}
              dataSource={[...dataPreocupacionesTw]}
              pagination={false}
              rowClassName={rowClassNameTotal("TWITTER")}
              style={{ width: "100%", margin: "3px" }}
              components={{
                header: {
                  cell: (props) => (
                    <th
                      {...props}
                      style={{ backgroundColor: "white", color: "black" }}
                    />
                  ),
                },
              }}
            />

            <Table
              columns={columnsPreocupacionesFb}
              dataSource={[...dataPreocupacionesFb]}
              pagination={false}
              rowClassName={rowClassNameTotal("FACEBOOK")}
              style={{ width: "100%", margin: "3px" }}
              components={{
                header: {
                  cell: (props) => (
                    <th
                      {...props}
                      style={{ backgroundColor: "white", color: "black" }}
                    />
                  ),
                },
              }}
            />
          </div>
        </div>

        </div>


        <div class="page-break" data-html2pdf-pagebreak>
        {/*Nav*/}
        <div className="contenedor-extremo">
          <div className="nav">
            <div className="reporte">
              <SlNotebook />
              <p>REPORTE DE SÍNTESIS</p>
            </div>

            <img src={logo} className="img"></img>
          </div>
        </div>

        <div className="cuerpo">
          <div className="titulo2">
            <TiHeartOutline />
          </div>

          <div className="titulo2">EMOCIONES</div>
        </div>
        <Tag className="tag">Top 3 principales</Tag>

        <div className="container-table">
          <div className="table">
            <Table
              columns={columnsPreocupacionesTotal}
              dataSource={[...dataEmociones]}
              pagination={false}
              rowClassName={rowClassNameTotal("TOTAL")}
              style={{ width: "100%", margin: "3px" }}
              components={{
                header: {
                  cell: (props) => (
                    <th
                      {...props}
                      style={{ backgroundColor: "white", color: "black" }}
                    />
                  ),
                },
              }}
            />
            <Table
              columns={columnsPreocupacionesTw}
              dataSource={[...dataEmocionesTw]}
              pagination={false}
              rowClassName={rowClassNameTotal("TWITTER")}
              style={{ width: "100%", margin: "3px" }}
              components={{
                header: {
                  cell: (props) => (
                    <th
                      {...props}
                      style={{ backgroundColor: "white", color: "black" }}
                    />
                  ),
                },
              }}
            />

            <Table
              columns={columnsPreocupacionesFb}
              dataSource={[...dataEmocionesFb]}
              pagination={false}
              rowClassName={rowClassNameTotal("FACEBOOK")}
              style={{ width: "100%", margin: "3px" }}
              components={{
                header: {
                  cell: (props) => (
                    <th
                      {...props}
                      style={{ backgroundColor: "white", color: "black" }}
                    />
                  ),
                },
              }}
            />
          </div>
        </div>

        <div className="cuerpo">
          <div className="titulo2">
            <RiFileUserLine />
          </div>

          <div className="titulo2">IMAGEN</div>
        </div>
        <Tag className="tag">Top 3 principales</Tag>

        <div className="container-table">
          <div className="table">
            <Table
              columns={columnsPreocupacionesTotal}
              dataSource={[...dataImagenes]}
              pagination={false}
              rowClassName={rowClassNameTotal("TOTAL")}
              style={{ width: "100%", margin: "3px" }}
              components={{
                header: {
                  cell: (props) => (
                    <th
                      {...props}
                      style={{ backgroundColor: "white", color: "black" }}
                    />
                  ),
                },
              }}
            />
            <Table
              columns={columnsPreocupacionesTw}
              dataSource={[...dataImagenesTw]}
              pagination={false}
              rowClassName={rowClassNameTotal("TWITTER")}
              style={{ width: "100%", margin: "3px" }}
              components={{
                header: {
                  cell: (props) => (
                    <th
                      {...props}
                      style={{ backgroundColor: "white", color: "black" }}
                    />
                  ),
                },
              }}
            />

            <Table
              columns={columnsPreocupacionesFb}
              dataSource={[...dataImagenesFb]}
              pagination={false}
              rowClassName={rowClassNameTotal("FACEBOOK")}
              style={{ width: "100%", margin: "3px" }}
              components={{
                header: {
                  cell: (props) => (
                    <th
                      {...props}
                      style={{ backgroundColor: "white", color: "black" }}
                    />
                  ),
                },
              }}
            />
          </div>
        </div>
        </div>


        <div class="page-break" data-html2pdf-pagebreak>
        {/*Nav*/}
        <div className="contenedor-extremo">
          <div className="nav">
            <div className="reporte">
              <SlNotebook />
              <p>REPORTE DE SÍNTESIS</p>
            </div>

            <img src={logo} className="img"></img>
          </div>
        </div>

        <div className="cuerpo">
          <div className="titulo2">
            <RiPushpinLine />
          </div>

          <div className="titulo2">
            CLAVES PARA INTERPRETAR PREOCUPACIONES, EMOCIONES E IMAGENES
          </div>
        </div>


      <div className="contenedor9cartas"> {/*contenedor de 9*/}

        <div className="contenedor3cartas color"> {/*contenedor de 3*/}
          <div className="contenedor1carta"> {/*contenedor de 1*/}
            <div className="titulo2">01.</div>
            <div>El trabajo (13%) como preocupación
            presente en las audiencias da lugar a un
            clima negativo y a las emociones de
            desaliento e incertidumbre. Están
            presentes el temor a la exclusión social, la
            precarización y la ruptura de los lazos
            sociales. Según este análisis, en lo personal
            hay sentimientos de culpabilidad, fracaso y
            vergüenza.
            </div>
          </div>

          <div className="contenedor1carta"> {/*contenedor de 1*/}
          <div className="titulo2">02.</div>
            <div>Ante la preocupación registrada en las
            audiencias por la vivienda (7%), se revelan
            emociones ansiedad, incertidumbre y
            desesperanza. Según este análisis, hay
            enojo y sensación de injusticia, y en lo
            personal se vive con culpa, vergüenza y
            sensación de fracaso. Quienes viven en
            villas y realizan ocupaciones ilegales, son
            estigmatizados y rechazados.
            </div>
          </div>

          <div className="contenedor1carta"> {/*contenedor de 1*/}
          <div className="titulo2">03.</div>
            <div>La preocupación por la educación (3%)
            registrada en las audiencias muestra una
            percepción de crisis del sistema e
            incertidumbre e inseguridad sobre los
            aprendizajes y las condiciones edilicias. En
            este clima negativo hay desconfianza en
            lo público y estrés por el costo de la
            escuela privada. Hay pesimismo y temor
            por niñes y adolescentes.</div>
          </div>

        </div>

        <div className="contenedor3cartas"> {/*contenedor de 3*/}
          <div className="contenedor1carta"> {/*contenedor de 1*/}
          <div className="titulo2">04.</div>
            <div>La presencia de un clima negativo,
              asociado a la emoción de la anticipación
              (21%), incluye en las audiencias, según el
              presente análisis, una predisposición a
              realizar suposiciones y valoraciones
              prejuiciosas sobre situaciones y
              personas. La anticipación puede darse
              junto con la tristeza y generar una visión
              pesimista y desmovilizante.

            </div>
         
          </div>

          <div className="contenedor1carta"> {/*contenedor de 1*/}
            <div className="titulo2">05.</div>
            <div>La alegría (3%) como emoción presente
            en las audiencias contribuye a crear un
            clima positivo que incluye, según el
            presente análisis, la presencia de una
            mirada optimista. Hay un espacio
            favorable a la escucha y la empatía, junto
            a una predisposición a la solidaridad.
            </div>
          </div>

          <div className="contenedor1carta"> {/*contenedor de 1*/}
          <div className="titulo2">06.</div>
            <div>Hay configurado un cuadro que incluye la
            emoción positiva de confianza (2%),
            reforzando en las audiencias un estado de
            expectativas favorables sobre las que se
            tiene un considerable grado de certeza.
            Se refuerza la empatía, la seguridad, la
            tranquilidad y el optimismo,
            conformando un terreno favorable a la
            participación.
            </div>
          </div>
        </div>

        <div className="contenedor3cartas color"> {/*contenedor de 3*/}
          <div className="contenedor1carta"> {/*contenedor de 1*/}
          <div className="titulo2">07.</div>
            <div>Se refleja en las audiencias la percepción
            de frialdad (2%) como un componente
            negativo de la imagen de los
            protagonistas. Según el presente análisis
            también aparecen como percepciones
            negativas asociadas las siguientes:
            distancia, soberbia, desesperanza,
            insensibilidad e incapacidad para
            escuchar.</div>
          </div>
        
          <div className="contenedor1carta"> {/*contenedor de 1*/}
          <div className="titulo2">08.</div>
            <div>Se refleja en las audiencias un cuadro
            positivo a partir de la percepción del
            atributo conocimiento (2%), destacando
            también los elementos de poder,
            eficiencia, éxito, orden y credibilidad.
            Se observa la presencia de una disposición
            favorable hacia quienes protagonizan el
            tema analizado.
            </div>
            
          </div>

          <div className="contenedor1carta"> {/*contenedor de 1*/}
            <div className="titulo2">09.</div>
            <div>Se refleja en las audiencias un cuadro
            positivo a partir de la percepción del
            atributo laboriosidad (2%), destacando
            también los elementos de acción,
            compromiso, éxito, esfuerzo,
            honestidad y eficiencia. Hay una
            disposición favorable hacia quienes
            protagonizan el tema analizado, percibidos
            también como trabajadores
            </div>
          </div>
        </div>

      </div>
      </div>

      <div class="page-break" data-html2pdf-pagebreak>
        {/*Nav*/}
        <div className="contenedor-extremo">
         <div className="nav">
            <div className="reporte">
              <SlNotebook />
              <p>REPORTE DE SÍNTESIS</p>
            </div>

            <img src={logo} className="img"></img>
          </div>
        </div>


      <div className="cuerpo">
          <div className="titulo2">
            <RiPushpinLine />
          </div>

          <div className="titulo2">
            MAPA DE PERCEPCIONES
          </div>
        </div>
        <Tag className="tag">Síntesis de términos y vocablos que connotan las valoraciones positivas y negativas de las audiencias en el marco del presente análisis</Tag>

        <div className="subtitulo">
        <div className="titulo0 subtitulo">LO QUE SE DESTACADA DE LAS PERCEPCIONES POSITIVAS Y NEGATIVAS</div>
        </div>

        <div>
      <WordCloud
        words={mapaPercepciones}
        options={opcionesPercepciones}
      />
    </div>
    </div>

    <div class="page-break" data-html2pdf-pagebreak>
    {/*Nav*/}
    <div className="contenedor-extremo">
         <div className="nav">
            <div className="reporte">
              <SlNotebook />
              <p>REPORTE DE SÍNTESIS</p>
            </div>

            <img src={logo} className="img"></img>
          </div>
        </div>

        <div className="cuerpo">
          <div className="titulo2">
            <AiOutlineStar />
          </div>

          <div className="titulo2">RECOMENDACIONES PARA LA COMUNICACIÓN</div>
        </div>
        <Tag className="tag">
        Temas, emociones y atributos que en el marco del presente análisis se recomiendan trabajar a través de las acciones comunicacionales.
        </Tag>


        <div className="contenedorGralEmociones"> {/*CONTENEDOR GRAL */}
          <div className="contenedorSugerencia"> {/*CONTENEDOR SEGURENCIA 1 */}
          <div className="titulo2"> {/* Titulo*/}
          SUGERENCIA 1
          </div>
          <div className="contenedorTextoTerminos"> {/*Contenedor textoTerminos */}
          <div> {/* texto*/}
          Desarrollar acciones que se centren en la
          problemática del TRABAJO de manera
          propositiva con iniciativas que demuestren
          algunos de los siguientes objetivos: la vocación de
          favorecer la creación de empleo, la mejora en
          las condiciones laborales, la dignificación de la
          persona a través del trabajo, la lucha contra el
          desempleo, el combate a la informalidad o la
          educación como herramienta para la futura
          inserción laboral.
          </div>
          <div> {/* terminos*/}
          Términos que se recomiendan utilizar en los
          textos: obras, esfuerzo, cumplimiento,
          metas, trabajo, futuro, retos,
          compromiso, dignidad, diálogo,
          innovación, acción.
          </div>
          </div>

          </div>

          <div className="contenedorEmocionesAtributos"> {/*CONTENEDOR EMOCIONES Y ATRIBUTOS */}
          <div className="emocionesAtributos"> {/*nav */}
            EMOCIONES Y ATRIBUTOS PARA INCLUIR EN EL MENSAJE*
            </div>
            <div className="contenedorTablas"> {/*Contenedor tablas */}
            <div className="contenedorEmociones"> {/*CONTENEDOR emociones */}
            <div> {/*tabla */}
            <Table
              columns={columnsEmociones}
              dataSource={[...dataEmocionesComunicacion]}
              pagination={false}
              rowClassName={rowClassNameTotal("EMOCIONES")}
              style={{ width: "100%", margin: "3px" }}
              components={{
                header: {
                  cell: (props) => (
                    <th
                      {...props}
                      style={{ backgroundColor: "white", color: "black" }}
                    />
                  ),
                },
              }}
            />
            </div>
            <div className="subtitulo"> {/*subtitulo */}
            VOCABLOS SUGERIDOS

            </div>
            <div className="nube-palabras"> {/*nube palabras */}
            <ReactWordcloud words={palabrasRecomendadas} options={opcionesRecomendadas} />
            </div>
            </div>
            <div> {/*CONTENEDOR atributos */}
            <div> {/*tabla */}
            <Table
              columns={columnsEmociones}
              dataSource={[...dataEmocionesComunicacion]}
              pagination={false}
              rowClassName={rowClassNameTotal("EMOCIONES")}
              style={{ width: "100%", margin: "3px" }}
              components={{
                header: {
                  cell: (props) => (
                    <th
                      {...props}
                      style={{ backgroundColor: "white", color: "black" }}
                    />
                  ),
                },
              }}
            />
            </div>
            <div className="subtitulo"> {/*subtitulo */}
            VOCABLOS SUGERIDOS

            </div>
            <div className="nube-palabras"> {/*nube palabras */}
            <ReactWordcloud words={palabrasRecomendadas} options={opcionesRecomendadas} width="200" height="200" />
            </div>
            </div>
            </div>

          </div>
        

        </div>
        <Tag className="tag piepagina"> {/*pie de pag */}
          *Ver documento de QSocialNow "Criterios y técnicas para la producción de contenidos"
        </Tag>
        </div>
        


        <div class="page-break" data-html2pdf-pagebreak>
        {/*Nav*/}
    <div className="contenedor-extremo">
          <div className="nav">
            <div className="reporte">
              <SlNotebook />
              <p>REPORTE DE SÍNTESIS</p>
            </div>

            <img src={logo} className="img"></img>
          </div>
        </div>

        <div className="cuerpo">
          <div className="titulo2">
            <AiOutlineStar />
          </div>

          <div className="titulo2">RECOMENDACIONES PARA LA COMUNICACIÓN</div>
        </div>
        <Tag className="tag">
        Temas, emociones y atributos que en el marco del presente análisis se recomiendan trabajar a través de las acciones comunicacionales.
        </Tag>


        <div className="contenedorGralEmociones"> {/*CONTENEDOR GRAL */}
          <div className="contenedorSugerencia"> {/*CONTENEDOR SEGURENCIA 1 */}
          <div className="titulo2"> {/* Titulo*/}
          SUGERENCIA 2
          </div>
          <div className="contenedorTextoTerminos"> {/*Contenedor textoTerminos */}
          <div> {/* texto*/}
          Informar con asertividad sobre las acciones
          emprendidas para atender la problemática de la
          VIVIENDA, incluyendo las gestiones para
          aumentar la oferta de unidades
          habitacionales, morigerar los costos de los
          alquileres y promover la construcción y el
          crédito, con los objetivos de llevar tranquilidad
          a las familias y aportar estabilidad, proyección
          y seguridad.

          </div>
          <div> {/* terminos*/}
          Términos que se recomiendan utilizar en los
          textos: vivienda, hábitat, seguridad,
          estabilidad, tranquilidad, oferta,
          políticas activas, construcción, crédito,
          urbanización, servicios, habitabilidad. 
          </div>
          </div>

          </div>

          <div className="contenedorEmocionesAtributos"> {/*CONTENEDOR EMOCIONES Y ATRIBUTOS */}
          <div className="emocionesAtributos"> {/*nav */}
            EMOCIONES Y ATRIBUTOS PARA INCLUIR EN EL MENSAJE*
            </div>
            <div className="contenedorTablas"> {/*Contenedor tablas */}
            <div className="contenedorEmociones"> {/*CONTENEDOR emociones */}
            <div> {/*tabla */}
            <Table
              columns={columnsEmociones}
              dataSource={[...dataEmocionesComunicacion]}
              pagination={false}
              rowClassName={rowClassNameTotal("EMOCIONES")}
              style={{ width: "100%", margin: "3px" }}
              components={{
                header: {
                  cell: (props) => (
                    <th
                      {...props}
                      style={{ backgroundColor: "white", color: "black" }}
                    />
                  ),
                },
              }}
            />
            </div>
            <div className="subtitulo"> {/*subtitulo */}
            VOCABLOS SUGERIDOS

            </div>
            <div className="nube-palabras"> {/*nube palabras */}
            <ReactWordcloud words={palabrasRecomendadas} options={opcionesRecomendadas} />
            </div>
            </div>
            <div> {/*CONTENEDOR atributos */}
            <div> {/*tabla */}
            <Table
              columns={columnsEmociones}
              dataSource={[...dataEmocionesComunicacion]}
              pagination={false}
              rowClassName={rowClassNameTotal("EMOCIONES")}
              style={{ width: "100%", margin: "3px" }}
              components={{
                header: {
                  cell: (props) => (
                    <th
                      {...props}
                      style={{ backgroundColor: "white", color: "black" }}
                    />
                  ),
                },
              }}
            />
            </div>
            <div className="subtitulo"> {/*subtitulo */}
            VOCABLOS SUGERIDOS

            </div>
            <div className="nube-palabras"> {/*nube palabras */}
            <ReactWordcloud words={palabrasRecomendadas} options={opcionesRecomendadas} />
            </div>
            </div>
            </div>

          </div>
        

        </div>
        <Tag className="tag piepagina"> {/*pie de pag */}
          *Ver documento de QSocialNow "Criterios y técnicas para la producción de contenidos"
        </Tag>
        </div>






      <div class="page-break" data-html2pdf-pagebreak>
      {/*ULTIMA DIAPOSITIVA */}        
       <div className="final">
       <img className="logo-final" src={logo2}/>
       <div className="contenedor-footer"> {/*contenedor footer */}
          <div className="contenedor-pais"> {/*contenedor pais */}
              <div><strong>Argentina</strong></div>
              <div>Juncal 1311 7 Piso</div>
              <div>C1062ABO. Buenos Aires.</div>
              <div>info@qsocialnow.com</div>
          </div>
          <div className="contenedor-pais"> {/*contenedor pais */}
          <div><strong>España</strong></div>
              <div>Parque Empresarial Cortijo del Conde</div>
              <div>C/ Pago de Cambea 14, Nave 7</div>
              <div>CP 18015. Granada España.</div>
          </div>
          <div className="contenedor-pais"> {/*contenedor pais */}
          <div><strong>Estados Unidos</strong></div>
              <div>Latin Insights | Partner local</div>
              <div>111 West 33rd St.</div>
              <div>NY 10001, Nueva York.</div>
              <div>Tel.: +1 646 717 3131</div>
          </div>
       </div>
      </div>  
      </div>
      </div>
    </Fragment>
  );
}
