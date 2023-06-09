/** @format */

import React, { Fragment, useEffect, useState ,useRef} from "react";
import "./Informes.css";
import { SlNotebook } from "react-icons/sl";
import logo from "./../../assest/qsocialnow.jpg";
import logo2 from "./../../assest/qsocialnow2.jpg";
import fb from "./../../assest/fb.png";
import tw from "./../../assest/tw.jpg";
import { AiOutlineClockCircle, AiOutlineStar } from "react-icons/ai";
import { CiVolumeHigh } from "react-icons/ci";
import { Table, Tag, Input,message,Collapse, Space, Divider, Tour, InputNumber} from "antd";
import { Button, Modal } from 'antd';
import { BsFillDashCircleFill } from "react-icons/bs";
import ReactApexChart from "react-apexcharts";
import { PieChart, Pie, Cell } from "recharts";
import { TbTargetArrow } from "react-icons/tb";
import clave from "./../../assest/clave.jpg";
import hashtags from "./../../assest/hashtags.jpg";
import ReactWordcloud from "react-wordcloud";
import WordCloud from "react-wordcloud";
import { BiConversation , BiUserCircle } from "react-icons/bi";
import { MdOutlineContactSupport } from "react-icons/md";
import { RiUserStarLine, RiFileUserLine, RiPushpinLine, RiSkipForwardMiniLine } from "react-icons/ri";
import { IoAlert } from "react-icons/io5";
import { VscCompass } from "react-icons/vsc";
import { TiHeartOutline } from "react-icons/ti";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import html2pdf from "html2pdf.js";
import TextArea from "antd/es/input/TextArea";
import editando from './../../assest/editando.png'
import editarpdf from './../../assest/editar.png'
import pdfdescargado from './../../assest/pdf.png'
import noticias from './../../assest/noticias.png'
import { getToken, getCloudWordsByRangePost, getReportExecution } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

export default function Informes() {

  const token = useSelector(state => state.token);
  const nubepalabras = useSelector(state => state.cloud_words_by_range_post)
  const familyreports = useSelector(state => state.familyreports)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getToken());
    /* dispatch(getCloudWordsByRangePost()) */
    dispatch(getReportExecution())
    console.log(token);
    console.log("familys",familyreports)
   /*  console.log("nube",nubepalabras) */
  }, [dispatch]);

 


  const sendWhatsAppMessage = async (phoneNumber, fileUrl) => {
    const axios = require('axios');
    const BASE_URL = 'https://api.whatsapp.com';
    const MESSAGE_ENDPOINT = '/send';
    const API_KEY = 'your_api_key_here'; // replace with your own API key
  
    const message = {
      phone: phoneNumber,
      message: 'Hola',
      file: fileUrl,
      filename: 'filename.txt',
      type: 'file'
    };
  
    const requestBody = {
      apiKey: API_KEY,
      message
    };
  
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    try {
      const response = await axios.post(`${BASE_URL}${MESSAGE_ENDPOINT}`, requestBody, config);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const { Panel } = Collapse;
  const [editable,setEditable] = useState({
    general: false,
    diapositiva1: false,
    diapositiva2:false,
    diapositiva3: false,
    diapositiva4: false,
    diapositiva5: false,
    diapositiva6: false,
    diapositiva7: false,
    diapositiva8: false,
    diapositiva9: false,
    diapositiva10: false,
    })

  {/*DESCARGAR PDF*/}
  function descargarPDF() {
    if (editable.general) {
      messageApi.error('No podes descargar en modo editable!');
    } else {
      // Obtener el contenedor que queremos descargar como PDF
      const contenedor = document.getElementById("contenedor");
  
      // Crear una instancia de html2pdf con las opciones deseadas
      const opciones = {
        margin: [0, 0, 0, 0], // reducir los márgenes a 0
        filename: "QSOCIALNOW - Reporte de síntesis.pdf",
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
      return convertir.from(contenedor)
    }
  }
  {/*FIN DESCARGAR PDF*/}

   {/*MODAL*/}
  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';
  const openMessage = (diapositivaName) => {
   
      if (!editable[diapositivaName]) {
      messageApi.error('Primero debes editar la diapositiva');
      return;
    }
  
    messageApi.open({
      key,
      type: 'loading',
      content: 'Cargando...',
    });
  
    setEditable((prevState) => ({
      ...prevState,
      [diapositivaName]: !prevState[diapositivaName],
    }));
  
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content: 'Guardado!',
        duration: 2,
      });
    }, 1000);
  };

  const openMessageEdit = (diapositivaName) => {
 
    setEditable((prevState) => ({
      ...prevState,
      [diapositivaName]: !prevState[diapositivaName],
    }));

  };
  {/*FIN MODAL*/}

  
  {/*TOUR*/}
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: 'Descargar PDF sin editar',
      description: 'Podes descargar directamente el PDF acá sin editarlo o después de editarlo.',
      cover: (
        <img
          alt="tour.png"
          src={pdfdescargado}
        />
      ),
      target: () => ref1.current,
      nextButtonProps: {
        children:'Siguiente',
      },
      prevButtonProps:{
        children:'Anterior'
      }
    
    },
    {
      title: 'Editar el PDF',
      description: 'Apretando acá vas a poder habilitar las opciones de editar el PDF diapositiva por diapositiva.',
      cover: (
        <img
          alt="tour.png"
          src={editando}
        />
      ),
      target: () => ref2.current,
      nextButtonProps: {
        children:'Siguiente',
      },
      prevButtonProps:{
        children:'Anterior'
      }
    },
    {
      title: 'Editar, guardar o descartar',
      description: 'Cuando hayas apretado "Editar" vas a poder habilitar un menu debajo de las diapositivas para editar,guardar o descartar cambios.',
      cover: (
        <img
          alt="tour.png"
          src={editarpdf}
        />
      ),
      target: () => ref3.current,
      nextButtonProps: {
        children:'Finalizar',

      },
      prevButtonProps:{
        children:'Anterior'
      }
    },
    
  ];
  {/*FIN TOUR*/}

    const rowClassName = (record, index) => {
    if (index % 2 === 0) {
      return "odd-row";
    } else {
      return "even-row";
    }
  };


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
    width: 200,
    height: 200
  };


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

  const [dataMedios, setDataMedios] = useState({
    series: [
      {
        name: "Periodo Actual",
        data: [15],
        color: "#0091ae",
      },
      {
        name: "Periodo Anterior",
        data: [32],
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

  const opcionesRecomendadas = {
    fontFamily: "Helvetica, sans-serif",
    fontSizes: [8, 40],
    colors: ["#1a8f1abd"],
    rotations: 0,
    rotate: 90,
  };

  const opcionesPercepciones = {
    fontFamily: "Helvetica, sans-serif",
    fontSizes: [10, 50],
    rotations: 0,
    rotate: 90,
    colors: ["#ff4c4cd7","#53b253bd"]
  } 

    function editar() {
      const newEditableValue = !editable.general;
      setEditable({
        general: newEditableValue,
        diapositiva1: newEditableValue,
        diapositiva2: newEditableValue,
        diapositiva3: newEditableValue,
        diapositiva4: newEditableValue,
        diapositiva5: newEditableValue,
        diapositiva6: newEditableValue,
        diapositiva7: newEditableValue,
        diapositiva8: newEditableValue,
        diapositiva9: newEditableValue,
        diapositiva10: newEditableValue,
      });
    }

    const [defaultValues, setDefaultValues] = useState({
      data2:{
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
      },
      dataAtributosComunicacion: [
        {
          atributos: (
            <div className="totalizador-preocupaciones">
              <div>CALIDEZ</div>
            
            </div>
          ),
        },
        {
          atributos: (
            <div className="totalizador-preocupaciones">
              <div>CONOCIMIENTO</div>
              
            </div>
          ),
        },
        {
          atributos: (
            <div className="totalizador-preocupaciones">
              <div>LABORIOSIDAD</div>
              
            </div>
          ),
        },
        {
          atributos: (
            <div className="totalizador-preocupaciones">
              <div>EFICIENCIA</div>
              
            </div>
          ),
        },
      ],
     
      displayFacebookIcon: 'flex',
      displayTwitterIcon: 'flex',
      displayMediosIcon: 'flex',
      diapositivaInicial: { display: "flex" },
      diapositiva1: { display: "flex" },
      diapositiva2: { display: "flex" },
      diapositiva3: { display: "flex" },
      diapositiva4: { display: "flex" },
      diapositiva5: { display: "flex" },
      diapositiva6: { display: "flex" },
      diapositiva7: { display: "flex" },
      diapositiva8: { display: "flex" },
      diapositiva9: { display: "flex" },
      diapositiva10: { display: "flex" },
      fortalezasDebilidades:[{
        text:"positivo", value:"80.6%",
      },
      {
        text:"negativo", value:"19.4%"
      }],
      fortalezasDebilidadestexto1:'Trascienden las notas sobre la reapertura del Puerto de Posadas y la activa gestión comercial de Misiones con Brasil, destacada por el embajador Daniel Scioli: Lile agradezco su compromiso para seguir vendiendo bienes y servicios de alto valor agregado”, sostuvo.',
      fortalezasDebilidadestexto2:'Circula una petición de firmas a través de @Changeorg para que una niña de siete años, con discapacidad, viva en condiciones “dignas”. Se menciona a Oscar Herrera Ahuad: “Vivienda Social de Iprodha para Abigail YA! @herrerayflia - ¡Firmá la petición!”.',
      
      columnsPreocupacionesTotal: [
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
      ],
    
      columnsPreocupacionesTw: [
        {
          title: (
            <div className="icon-nombre-columnas">
              <img className="tw" src={tw} alt="logo"/>
              TWITTER
            </div>
          ),
          dataIndex: "twitter",
          className: "hover-black",
        },
      ],
    
     columnsPreocupacionesFb:[
        {
          title: (
            <div className="icon-nombre-columnas">
              <img className="fb" src={fb} alt="logo"/>
              FACEBOOK
            </div>
          ),
          dataIndex: "facebook",
          className: "hover-black",
        },
      ],
      columns: [
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
      ],
      palabrasRecomendadas:[
        { text: "satisfacción", value: 30 },
        { text: "disfrute", value: 30 },
        { text: "bienestar", value: 30 },
        { text: "admiración", value: 30 },
        { text: "optimismo", value: 30 },
        { text: "animación", value: 30 },
      ],
      dataEmocionesComunicacion: [
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
      ],
    columnsEmociones: [
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
      ],
    columnsAtributos:[
        {
          title: (
            <div className="title-total icon-nombre-columnas">
              <div className="icon-nombre-columnas">
              <BiUserCircle/>
              </div>
              ATRIBUTOS
            </div>
          ),
          dataIndex: "emociones",
          className: "hover-black",
        },
      ],
      mapaPercepciones: [
  
        { text: "anticipación", value: 20, color:"#53b253bd" },
        { text: "insensibilidad", value: 50, color:"#ff4c4cd7" },
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
        
      ],
      dataPreocupaciones:[
        {
          total: (
            <div className="totalizador-preocupaciones">
              <div>TRABAJO</div>
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
      ],
      dataPreocupacionesTw:[
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
      ],
      dataPreocupacionesFb:[
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
      ],
      dataOuter:[
        { name: "Positivo", value: 70, fill: "#53b253bd" },
        { name: "Negativo", value: 30, fill: "#ff4c4cd7" },
      ],
      dataInner:[
        { name: "Positivo", value: 70, fill: "#53b253bd" },
        { name: "Negativo", value: 30, fill: "#ff4c4cd7" },
      ],
      dataOuterFb:[
        { name: "Positivo", value: 90, fill: "#53b253bd" },
        { name: "Negativo", value: 10, fill: "#ff4c4cd7" },
      ],
      dataInnerFb:[
        { name: "Positivo", value: 50, fill: "#53b253bd" },
        { name: "Negativo", value: 50, fill: "#ff4c4cd7" },
      ],
      dataOuterTw:[
        { name: "Positivo", value: 60, fill: "#53b253bd" },
        { name: "Negativo", value: 40, fill: "#ff4c4cd7" },
      ],
      dataInnerTw:[
        { name: "Positivo", value: 80, fill: "#53b253bd" },
        { name: "Negativo", value: 20, fill: "#ff4c4cd7" },
      ],
      displayTotalVolumen:'flex',
      displayTotalFacebook:'flex',
      displayTotalTwitter:'flex',
      fecha: 'Desde 16:27 hs del 20/03/2023 - Hasta 16:27 hs del 27/03/2023',
      valor1: 111,
      valor2:1,
      valor3:36,
      valor4:"DESCENDENTE",
      valor5:124.524,
      texto1: 'El candidato a gobernador para Misiones recibe una connotación ampliamente positiva, y se destaca el atributo de Eficiencia que le otorga la comunidad digital. No se detectan contenidos negativos.',
      texto2: 'Impacta a favor su posteo sobre la visita al barrio Don Daniel de Alem y la charla con voluntarios y voluntarias del merendero que lleva adelante la vecina Yanina Báez con el acompañamiento de la agrupación Manos Unidas.',
      texto3: ' El candidato pone de relieve la reunión que mantuvo con la concejala Gabriela Bastarrechea, de Puerto Rico, y su equipo, donde conversaron sobre ideas y e iniciativas que quieren llevar a cabo en la comunidad.',
      texto4: 'Repercute la publicación de la cuenta del Frente Renovador de la Concordia, que subraya las palabras del candidato: "Al futuro lo tenemos que construir nosotros".',
      texto5: 'Los medios difunden que el diputado provincial se acercó a Colonia Gisela para visitar dos establecimientos educativos y charlar con el cuerpo docente que se desempeña en este paraje ubicado entre los municipios de Colonia Polana y General Urquiza.',
      texto6: 'Passalacqua logra importante engagement en su saludo a “la querida” comunidad de Alba Posse en su 88° aniversario.',
      texto7: 'El trabajo (13%) como preocupación presente en las audiencias da lugar a un clima negativo y a las emociones de desaliento e incertidumbre. Están presentes el temor a la exclusión social, la precarización y la ruptura de los lazos sociales. Según este análisis, en lo personal hay sentimientos de culpabilidad, fracaso vergüenza.',
      texto8: 'Ante la preocupación registrada en las audiencias por la vivienda (7%), se revelan emociones ansiedad, incertidumbre y desesperanza. Según este análisis, hay enojo y sensación de injusticia, y en lo personal se vive con culpa, vergüenza y sensación de fracaso. Quienes viven en villas y realizan ocupaciones ilegales, son estigmatizados y rechazados.',
      texto9: 'La preocupación por la educación (3%) registrada en las audiencias muestra una percepción de crisis del sistema e incertidumbre e inseguridad sobre los aprendizajes y las condiciones edilicias. En este clima negativo hay desconfianza en lo público y estrés por el costo de la escuela privada. Hay pesimismo y temor por niñes y adolescentes.',
      texto10: 'La presencia de un clima negativo, asociado a la emoción de la anticipación (21%), incluye en las audiencias, según el presente análisis, una predisposición a realizar suposiciones y valoraciones prejuiciosas sobre situaciones y personas. La anticipación puede darse junto con la tristeza y generar una visión pesimista y desmovilizante.',
      texto11:'La alegría (3%) como emoción presente en las audiencias contribuye a crear un clima positivo que incluye, según el presente análisis, la presencia de una mirada optimista. Hay un espacio favorable a la escucha y la empatía, junto a una predisposición a la solidaridad.',
      texto12:'Hay configurado un cuadro que incluye la emoción positiva de confianza (2%), reforzando en las audiencias un estado de expectativas favorables sobre las que se tiene un considerable grado de certeza. Se refuerza la empatía, la seguridad, la tranquilidad y el optimismo, conformando un terreno favorable a la participación.',
      texto13:'Se refleja en las audiencias la percepción de frialdad (2%) como un componente negativo de la imagen de los protagonistas. Según el presente análisis también aparecen como percepciones negativas asociadas las siguientes: distancia, soberbia, desesperanza, insensibilidad e incapacidad para escuchar.',
      texto14:'Se refleja en las audiencias un cuadro positivo a partir de la percepción del atributo conocimiento (2%), destacando también los elementos de poder, eficiencia, éxito, orden y credibilidad. Se observa la presencia de una disposición favorable hacia quienes protagonizan el tema analizado.',
      texto15:'Se refleja en las audiencias un cuadro positivo a partir de la percepción del atributo laboriosidad (2%), destacando también los elementos de acción, compromiso, éxito, esfuerzo, honestidad y eficiencia. Hay una disposición favorable hacia quienes protagonizan el tema analizado, percibidos también como trabajadores',
      texto16:'',
      sugerencia1:'Desarrollar acciones que se centren en la problemática del TRABAJO de manera propositiva con iniciativas que demuestren algunos de los siguientes objetivos: la vocación de favorecer la creación de empleo, la mejora en las condiciones laborales, la dignificación de la persona a través del trabajo, la lucha contra el desempleo, el combate a la informalidad o la educación como herramienta para la futura inserción laboral.',
      sugerencia2:'Desarrollar acciones que se centren en la problemática del TRABAJO de manera propositiva con iniciativas que demuestren algunos de los siguientes objetivos: la vocación de favorecer la creación de empleo, la mejora en las condiciones laborales, la dignificación de la persona a través del trabajo, la lucha contra el desempleo, el combate a la informalidad o la educación como herramienta para la futura inserción laboral.',
      terminos1:'Términos que se recomiendan utilizar en los textos: obras, esfuerzo, cumplimiento, metas, trabajo, futuro, retos, compromiso, dignidad, diálogo innovación, acción.',
      terminos2:'Términos que se recomiendan utilizar en los textos: obras, esfuerzo, cumplimiento, metas, trabajo, futuro, retos, compromiso, dignidad, diálogo innovación, acción.',
      cliente:"HUGO PASSALACQUA",
      tiempo:"la ultima semana",
      desdeDiaHora: "16:27 hs del 20/03/2023",
      hastaDiaHora: "16:27 hs del 27/03/2023",
      tendencia: "predominante",
      indicadorImpacto:"POSITIVIDAD",
      porcentajeImpacto:"32%",
      palabrasClaves: [
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
      ],
      principalesHashtags: [
        { text: "#posadas", value: 50 },
        { text: "#ahora", value: 50 },
        { text: "#buensabado", value: 50 },
        { text: "#puertorico", value: 50 },
      ],
      data: [
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
      ],
      data2ant:[
        {
          key: "6",
          influenciador: "",
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
      ],
      dataPreocupaciones:[
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
      ],
      dataPreocupacionesTw:[
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
      ],
      dataPreocupacionesFb:[
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
      ],
      dataEmociones:[
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
      ],
      dataEmocionesTw:[
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
      ],
      dataEmocionesFb:[
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
      ],
      dataImagenes:[
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
      ],
      dataImagenesTw:[
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
      ],
      dataImagenesFb:[
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
      ],
    });
    {/*FIN VALORES POR DEFECTO*/}
 

    const handleHashtagChange = (index, field, value) => {
      setCambios(prevCambios => {
        const newHashtags = [...prevCambios.principalesHashtags];
        newHashtags[index][field] = value;
        return { ...prevCambios, principalesHashtags: newHashtags };
      });
    };

    
    const handleHashtagChangePercepciones = (index, field, value) => {
      setCambios(prevCambios => {
        const newHashtags = [...prevCambios.mapaPercepciones];
        newHashtags[index][field] = value;
        return { ...prevCambios, mapaPercepciones: newHashtags };
      });
    };

    const handleHashtagChangeFortalezas= (index, field, value) => {
      setCambios(prevCambios => {
        const newPorcentaje = [...prevCambios.fortalezasDebilidades];
        newPorcentaje[index][field] = value;
        return { ...prevCambios, fortalezasDebilidades: newPorcentaje };
      });
    };

    const handleInputChangeEmociones = (e, indice) => {
      const newDataEmocionesComunicacion = cambios.dataEmocionesComunicacion.map((objeto, index) => {
        if (indice === index) {
          return {
            emociones: (
              <div className="totalizador-preocupaciones">
                <div>{e.target.value}</div>
              </div>
            ),
          };
        } else {
          return objeto;
        }
      });
      
    
      setCambios(prevState => {
        return {
          ...prevState,
          dataEmocionesComunicacion: newDataEmocionesComunicacion,
        };
      });
    };


    const handleInputChangeAtributos = (e, indice) => {
      const newDataAtributosComunicacion = cambios.dataAtributosComunicacion.map((objeto, index) => {
        if (indice === index) {
          return {
            emociones: (
              <div className="totalizador-preocupaciones">
                <div>{e.target.value}</div>
              </div>
            ),
          };
        } else {
          return objeto;
        }
      });
      
    
      setCambios(prevState => {
        return {
          ...prevState,
          dataAtributosComunicacion: newDataAtributosComunicacion,
        };
      });
    };
    
    const handleHashtagChangeClave = (index, field, value) => {
      setCambios(prevCambios => {
        const newHashtags = [...prevCambios.palabrasClaves];
        newHashtags[index][field] = value;
        return { ...prevCambios, palabrasClaves: newHashtags };
      });
    };
 
    {/*CAMBIOS*/}
    const [cambios, setCambios] = useState({
      dataAtributosComunicacion: [
        {
          emociones: (
            <div className="totalizador-preocupaciones">
              <div>CALIDEZ</div>
            
            </div>
          ),
        },
        {
          emociones: (
            <div className="totalizador-preocupaciones">
              <div>CONOCIMIENTO</div>
              
            </div>
          ),
        },
        {
          emociones: (
            <div className="totalizador-preocupaciones">
              <div>LABORIOSIDAD</div>
              
            </div>
          ),
        },
        {
          emociones: (
            <div className="totalizador-preocupaciones">
              <div>EFICIENCIA</div>
              
            </div>
          ),
        },
      ],
      indicadorImpacto:"POSITIVIDAD",
      porcentajeImpacto:"32%",
      data2:{
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
      },
      
      dataEmocionesComunicacion: [
        {
          emociones: (
            <div className="totalizador-preocupaciones">
              <div>DESEO</div>
            
            </div>
          ),
        },
        {
          emociones: (
            <div className="totalizador-preocupaciones">
              <div>CALMA</div>
              
            </div>
          ),
        },
        {
          emociones: (
            <div className="totalizador-preocupaciones">
              <div>AGRADO</div>
              
            </div>
          ),
        },
        {
          emociones: (
            <div className="totalizador-preocupaciones">
              <div>AMOR</div>
              
            </div>
          ),
        },
      ],
      diapositivaInicial: { display: "flex" },
      diapositiva1: { display: "flex" },
      diapositiva2: { display: "flex" },
      diapositiva3: { display: "flex" },
      diapositiva4: { display: "flex" },
      diapositiva5: { display: "flex" },
      diapositiva6: { display: "flex" },
      diapositiva7: { display: "flex" },
      diapositiva8: { display: "flex" },
      diapositiva9: { display: "flex" },
      diapositiva10: { display: "flex" },
      displayTotalVolumen:'flex',
      displayTotalFacebook:'flex',
      displayTotalTwitter:'flex',
      displayTotalMedios:'flex',
      displayFacebookIcon: 'flex',
      displayTwitterIcon: 'flex',
      displayMediosIcon: 'flex',
      fortalezasDebilidades:[{
        text:"positivo", value:"80.6%",
      },
      {
        text:"negativo", value:"19.4%"
      }],
      fortalezasDebilidadestexto1:'Trascienden las notas sobre la reapertura del Puerto de Posadas y la activa gestión comercial de Misiones con Brasil, destacada por el embajador Daniel Scioli: Lile agradezco su compromiso para seguir vendiendo bienes y servicios de alto valor agregado”, sostuvo.',
      fortalezasDebilidadestexto2:'Circula una petición de firmas a través de @Changeorg para que una niña de siete años, con discapacidad, viva en condiciones “dignas”. Se menciona a Oscar Herrera Ahuad: “Vivienda Social de Iprodha para Abigail YA! @herrerayflia - ¡Firmá la petición!”.',
      columnsPreocupacionesTotal: [
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
      ],
    
      columnsPreocupacionesTw: [
        {
          title: (
            <div className="icon-nombre-columnas">
              <img className="tw" src={tw} alt="logo"/>
              TWITTER
            </div>
          ),
          dataIndex: "twitter",
          className: "hover-black",
        },
      ],
    
     columnsPreocupacionesFb:[
        {
          title: (
            <div className="icon-nombre-columnas">
              <img className="fb" src={fb} alt="logo"/>
              FACEBOOK
            </div>
          ),
          dataIndex: "facebook",
          className: "hover-black",
        },
      ],
      columns: [
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
      ],
      palabrasRecomendadas:[
        { text: "satisfacción", value: 30 },
        { text: "disfrute", value: 30 },
        { text: "bienestar", value: 30 },
        { text: "admiración", value: 30 },
        { text: "optimismo", value: 30 },
        { text: "animación", value: 30 },
      ],
     
      columnsEmociones: [
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
      ],
    columnsAtributos:[
        {
          title: (
            <div className="title-total icon-nombre-columnas">
              <div className="icon-nombre-columnas">
              <BiUserCircle/>
              </div>
              ATRIBUTOS
            </div>
          ),
          dataIndex: "emociones",
          className: "hover-black",
        },
      ],
      mapaPercepciones: [
  
        { text: "anticipación", value: 20, color:"#53b253bd" },
        { text: "insensibilidad", value: 50, color:"#ff4c4cd7" },
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
        
      ],
      dataPreocupaciones:[
        {
          total: (
            <div className="totalizador-preocupaciones">
              <div>TRABAJO</div>
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
      ],
      dataPreocupacionesTw:[
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
      ],
      dataPreocupacionesFb:[
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
      ],
      data: [
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
      ],
      data2ant:[
        {
          key: "6",
          influenciador: "",
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
      ],
      palabrasClaves: [
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
      ],
      principalesHashtags: [
        { text: "#posadas", value: 50 },
        { text: "#ahora", value: 50 },
        { text: "#buensabado", value: 50 },
        { text: "#puertorico", value: 50 },
      ],
      datafb:{ 
        series: [
        {
          name: "Periodo Actual",
          data: [5],
          color: "#3b5998",
        },
        {
          name: "Periodo Anterior",
          data: [15],
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
      }},
   dataOuter:[
      { name: "Positivo", value: 70, fill: "#53b253bd" },
      { name: "Negativo", value: 30, fill: "#ff4c4cd7" },
    ],
    dataInner:[
      { name: "Positivo", value: 70, fill: "#53b253bd" },
      { name: "Negativo", value: 30, fill: "#ff4c4cd7" },
    ],
    dataOuterFb:[
      { name: "Positivo", value: 90, fill: "#53b253bd" },
      { name: "Negativo", value: 10, fill: "#ff4c4cd7" },
    ],
    dataInnerFb:[
      { name: "Positivo", value: 50, fill: "#53b253bd" },
      { name: "Negativo", value: 50, fill: "#ff4c4cd7" },
    ],
    dataOuterTw:[
      { name: "Positivo", value: 60, fill: "#53b253bd" },
      { name: "Negativo", value: 40, fill: "#ff4c4cd7" },
    ],
    dataInnerTw:[
      { name: "Positivo", value: 80, fill: "#53b253bd" },
      { name: "Negativo", value: 20, fill: "#ff4c4cd7" },
    ],
    fecha: 'Desde 16:27 hs del 20/03/2023 - Hasta 16:27 hs del 27/03/2023',
    valor1: 111,
    valor2:1,
    valor3:36,
    valor4:"DESCENDENTE",
    valor5:124.524,
    texto1: 'El candidato a gobernador para Misiones recibe una connotación ampliamente positiva, y se destaca el atributo de Eficiencia que le otorga la comunidad digital. No se detectan contenidos negativos.',
    texto2: 'Impacta a favor su posteo sobre la visita al barrio Don Daniel de Alem y la charla con voluntarios y voluntarias del merendero que lleva adelante la vecina Yanina Báez con el acompañamiento de la agrupación Manos Unidas.',
    texto3: ' El candidato pone de relieve la reunión que mantuvo con la concejala Gabriela Bastarrechea, de Puerto Rico, y su equipo, donde conversaron sobre ideas y e iniciativas que quieren llevar a cabo en la comunidad.',
    texto4: 'Repercute la publicación de la cuenta del Frente Renovador de la Concordia, que subraya las palabras del candidato: "Al futuro lo tenemos que construir nosotros".',
    texto5: 'Los medios difunden que el diputado provincial se acercó a Colonia Gisela para visitar dos establecimientos educativos y charlar con el cuerpo docente que se desempeña en este paraje ubicado entre los municipios de Colonia Polana y General Urquiza.',
    texto6: 'Passalacqua logra importante engagement en su saludo a “la querida” comunidad de Alba Posse en su 88° aniversario.',
    texto7: 'El trabajo (13%) como preocupación presente en las audiencias da lugar a un clima negativo y a las emociones de desaliento e incertidumbre. Están presentes el temor a la exclusión social, la precarización y la ruptura de los lazos sociales. Según este análisis, en lo personal hay sentimientos de culpabilidad, fracaso vergüenza.',
    texto8: 'Ante la preocupación registrada en las audiencias por la vivienda (7%), se revelan emociones ansiedad, incertidumbre y desesperanza. Según este análisis, hay enojo y sensación de injusticia, y en lo personal se vive con culpa, vergüenza y sensación de fracaso. Quienes viven en villas y realizan ocupaciones ilegales, son estigmatizados y rechazados.',
    texto9: 'La preocupación por la educación (3%) registrada en las audiencias muestra una percepción de crisis del sistema e incertidumbre e inseguridad sobre los aprendizajes y las condiciones edilicias. En este clima negativo hay desconfianza en lo público y estrés por el costo de la escuela privada. Hay pesimismo y temor por niñes y adolescentes.',
    texto10: 'La presencia de un clima negativo, asociado a la emoción de la anticipación (21%), incluye en las audiencias, según el presente análisis, una predisposición a realizar suposiciones y valoraciones prejuiciosas sobre situaciones y personas. La anticipación puede darse junto con la tristeza y generar una visión pesimista y desmovilizante.',
    texto11:'La alegría (3%) como emoción presente en las audiencias contribuye a crear un clima positivo que incluye, según el presente análisis, la presencia de una mirada optimista. Hay un espacio favorable a la escucha y la empatía, junto a una predisposición a la solidaridad.',
    texto12:'Hay configurado un cuadro que incluye la emoción positiva de confianza (2%), reforzando en las audiencias un estado de expectativas favorables sobre las que se tiene un considerable grado de certeza. Se refuerza la empatía, la seguridad, la tranquilidad y el optimismo, conformando un terreno favorable a la participación.',
    texto13:'Se refleja en las audiencias la percepción de frialdad (2%) como un componente negativo de la imagen de los protagonistas. Según el presente análisis también aparecen como percepciones negativas asociadas las siguientes: distancia, soberbia, desesperanza, insensibilidad e incapacidad para escuchar.',
    texto14:'Se refleja en las audiencias un cuadro positivo a partir de la percepción del atributo conocimiento (2%), destacando también los elementos de poder, eficiencia, éxito, orden y credibilidad. Se observa la presencia de una disposición favorable hacia quienes protagonizan el tema analizado.',
    texto15:'Se refleja en las audiencias un cuadro positivo a partir de la percepción del atributo laboriosidad (2%), destacando también los elementos de acción, compromiso, éxito, esfuerzo, honestidad y eficiencia. Hay una disposición favorable hacia quienes protagonizan el tema analizado, percibidos también como trabajadores',
    texto16:'',
    sugerencia1:'Desarrollar acciones que se centren en la problemática del TRABAJO de manera propositiva con iniciativas que demuestren algunos de los siguientes objetivos: la vocación de favorecer la creación de empleo, la mejora en las condiciones laborales, la dignificación de la persona a través del trabajo, la lucha contra el desempleo, el combate a la informalidad o la educación como herramienta para la futura inserción laboral.',
    sugerencia2:'Desarrollar acciones que se centren en la problemática del TRABAJO de manera propositiva con iniciativas que demuestren algunos de los siguientes objetivos: la vocación de favorecer la creación de empleo, la mejora en las condiciones laborales, la dignificación de la persona a través del trabajo, la lucha contra el desempleo, el combate a la informalidad o la educación como herramienta para la futura inserción laboral.',
    terminos1:'Términos que se recomiendan utilizar en los textos: obras, esfuerzo, cumplimiento, metas, trabajo, futuro, retos, compromiso, dignidad, diálogo innovación, acción.',
    terminos2:'Términos que se recomiendan utilizar en los textos: obras, esfuerzo, cumplimiento, metas, trabajo, futuro, retos, compromiso, dignidad, diálogo innovación, acción.',
    cliente:"HUGO PASSALACQUA",
    tiempo:"la ultima semana",
    desdeDiaHora: "16:27 hs del 20/03/2023",
    hastaDiaHora: "16:27 hs del 27/03/2023",
    tendencia: "predominante",
    dataEmociones:[
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
    ],
    dataEmocionesTw:[
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
    ],
    dataEmocionesFb:[
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
    ],
    dataImagenes:[
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
    ],
    dataImagenesTw:[
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
    ],
    dataImagenesFb:[
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
    ],
  });
   {/*FIN CAMBIOS*/}

 

    const handleChange = (e) => {
      const { name, value } = e.target;
      setCambios((prevState) => ({
        ...prevState,
        [name]: value
      }));
    };


  function mostrarGrafico(graficoState) {
    const botonMostrar = document.getElementById("mostrarGrafico");
    setCambios(prevState => ({ ...prevState, [graficoState]: 'flex' }));
    botonMostrar.style.display = "none"; 
    if(graficoState === 'displayTotalFacebook'){
      setCambios(prevState => ({ ...prevState, displayFacebookIcon: 'flex' }));
    } else if(graficoState === 'displayTotalMedios') {
      setCambios(prevState => ({ ...prevState,displayMediosIcon: 'flex' }));
    } else if(graficoState === 'displayTotalTwitter') {
      setCambios(prevState => ({ ...prevState, displayTwitterIcon: 'flex' }));
    }
       
  }

  
  const customLocale = {
    nextText: 'Siguiente',
    prevText: 'Anterior',
    
  };


   {/*MODAL EDITAR GRAFICO TORTA */}

  const showModalTorta = (modals) => {
    setShowModal((prevState) => ({
      ...prevState,
      [modals]: !prevState[modals],
    }));
  };
  const handleOk = () => {
    setShowModal(false);
  };
  const handleCancel = () => {
    setShowModal(false);
  };
  
  const handleInputNumberChange = (index, isOuter, newValue, key) => {
    const newData = isOuter ? [...cambios[key]] : [...cambios[key.replace('Outer', 'Inner')]];
    newData[index].value = newValue;
  
    if (isOuter) {
      setCambios({
        ...cambios,
        [key]: newData,
      });
    } else {
      setCambios({
        ...cambios,
        [key.replace('Outer', 'Inner')]: newData,
      });
    }
  };

  const [modals, setShowModal] = useState([
    {dataGraficoTotal:false},
    {dataGraficoFb:false},
    { dataDatos: false },
    { showModal1: false },
    { dataTorta:false },
    { dataTortaFb:false },
    { dataTortaTw:false },
    { dataNubeHashtags: false },
    { dataNubeClave: false },
    { dataInfluenciadores: false},
    { dataPreocupaciones: false},
    {dataEmocionesComunicacion:false},
    {dataAtributosComunicacion: false},
    { dataEmociones: false },
    { dataImagenes: false },
    { dataMapaPercepciones:false },
    { fortalezasDebilidades: false},
    { showModal2: false },
    { showModal3: false },
    { showModal4: false },
    { showModal5: false },
    { showModal6: false },
    { showModal7: false },
    { showModal8: false },
    { showModal9: false },
    { showModal10: false }
  ]);

  function resetValues(valor) {
   /*  console.log(defaultValues[valor]) */
    if (Array.isArray(defaultValues[valor])) {
      setCambios(prevState => ({
        ...prevState,
        [valor]: [...defaultValues[valor]],
      }));
    } else {
      setCambios(prevState => ({
        ...prevState,
        [valor]: defaultValues[valor],
      }));
    }
     
    setShowModal(false);
    messageApi.open({
      key,
      type: 'success',
      content: 'Cambios descartados!',
      duration: 2,
    });
   
    
  };

  const handleDiscardChanges = (diapositivaName, showModal) => {
    setShowModal((prevState) => ({
      ...prevState,
      [showModal]: !prevState[showModal],
    }));
    setEditable((prevState) => ({
      ...prevState,
      [diapositivaName]: !prevState[diapositivaName],
    }));
  }

  const handleDisplay = (diapositiva) => {
    setCambios(prevState => ({
      ...prevState,
      [diapositiva]: { display: "none" }
    }));
  };

   
  function eliminarGrafico(graficoState) {
    const botonMostrar = document.getElementById("mostrarGrafico");
    setCambios(prevState => ({ ...prevState, [graficoState]: 'none' }));
    /* || 'displayTotalMedios' || 'displayTotalTwitter'  */
    if(graficoState === 'displayTotalFacebook'){
      setCambios(prevState => ({ ...prevState, displayFacebookIcon: 'none' }));
    } else if(graficoState === 'displayTotalMedios') {
      setCambios(prevState => ({ ...prevState,displayMediosIcon: 'none' }));
    } else if(graficoState === 'displayTotalTwitter') {
      setCambios(prevState => ({ ...prevState, displayTwitterIcon: 'none' }));
    }
       
  }
 
 function handleInputNumberChangeFb2(newValue) {
    const newDatafb = {...cambios.datafb};  // Crear una copia del objeto 'datafb' del estado
    newDatafb.series[1].data = [newValue]; // Actualizar el valor de la propiedad 'data' de la serie 'Periodo Anterior'
    setCambios({ ...cambios, datafb: newDatafb }); // Actualizar el estado con el nuevo objeto 'datafb'
  }

  function handleInputNumberChangetotal1(newValue) {
    const newDatafb = {...cambios.data2};  // Crear una copia del objeto 'datafb' del estado
    newDatafb.series[0].data = [newValue]; // Actualizar el valor de la propiedad 'data' de la serie 'Periodo Anterior'
    setCambios({ ...cambios, data2: newDatafb }); // Actualizar el estado con el nuevo objeto 'datafb'
  }

  function handleInputNumberChangetotal2(newValue) {
    const newDatafb = {...cambios.data2};  // Crear una copia del objeto 'datafb' del estado
    newDatafb.series[1].data = [newValue]; // Actualizar el valor de la propiedad 'data' de la serie 'Periodo Anterior'
    setCambios({ ...cambios, data2: newDatafb }); // Actualizar el estado con el nuevo objeto 'datafb'
  }

  function handleInputNumberChangeFb1(newValue) {
    const newDatafb = {...cambios.datafb};  // Crear una copia del objeto 'datafb' del estado
    newDatafb.series[0].data = [newValue]; // Actualizar el valor de la propiedad 'data' de la serie 'Periodo Anterior'
    setCambios({ ...cambios, datafb: newDatafb }); // Actualizar el estado con el nuevo objeto 'datafb'
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setCambios({...cambios, [name]: value});
  }

  return (
    <Fragment>
      <Collapse /* defaultActiveKey={['1']} */ className="contenedor-botones">
        <Panel /* header="Botones" */ key="1">
          <Space direction="vertical" >
            <div>
            <Button  style={{marginRight:'1rem'}} onClick={() => setOpen(true)}>
              Pasos
            </Button>
            <Button style={{marginRight:'1rem'}} onClick={editar} ref={ref2}>{editable.general ? 'Dejar de Editar' : 'Editar'}  </Button>
            <Button type="primary" onClick={descargarPDF}  ref={ref1}>Descargar PDF</Button>
            {/* <Button type="primary" onClick={()=>(console.log(token))}  ref={ref1}>Token</Button> */}
            <Tour open={open} onClose={() => setOpen(false)} steps={steps} 
             locale={customLocale}/>
            </div>
          </Space>
        </Panel>
      </Collapse>
      <div className="contenedor-margin">
      <div className="contenedor" id="contenedor">
        {/*DIAPOSITIVA INICIO*/}
        <div style={{ display: cambios.diapositivaInicial.display, flexDirection:'column'}}>
          
        <div className="contenedor-extremo" >
          {/*Nav*/}
         <div className="nav">
            <div className="reporte">
              <SlNotebook />
              <p>REPORTE DE SÍNTESIS</p>
            </div>
            {editable.general && <Button onClick={()=>handleDisplay('diapositivaInicial')}>X</Button>}
        
            <img src={logo} className="img" alt="logo"></img>
          </div>

          {/*Titulo*/}
          <div>
          {editable.diapositiva1 ? (
              <Input
              style={{ width: '500px' , height:'70px'}}
                type="text"
                name="cliente"
                value={cambios.cliente}
                onChange={handleChange}
                className="titulo"
              />
            ) : (
              <div className="titulo">{cambios.cliente}</div>
            )}
         {/*      {editable.diapositiva1 ? (
                 <p className="subtitulo-principal">
                 Se mide el impacto de las conversaciones sobre {cambios.cliente} durante {cambios.tiempo}.
               </p>
                            
                   
            ) : (
            <p className="subtitulo-principal">
              Se mide el impacto de las conversaciones sobre {cambios.cliente} durante {cambios.tiempo}.
            </p>
            )} */}
            
          </div>
        </div>

        <div className="cuerpo">
          <div className="titulo0">MONITOREO Y ANÁLISIS DE:</div>

          {editable.general 
          ? 
          <>
          <Button type="primary" onClick={()=>showModalTorta('dataDatos')} disabled={!editable.diapositiva1}>Editar</Button>
          <Modal
                title="Análisis de redes sociales"
                open={modals.dataDatos}
                onOk={handleOk}
                okText="Guardar"
                cancelText="Cancelar"
                onCancel={handleCancel}
              >
              <div className="datos">
                
                <div className="img-red"><img className="fb" src={fb} alt="logo"></img> <Button onClick={()=>eliminarGrafico('displayTotalFacebook')} >x</Button></div>
               {/*  <div className="img-red"><img className="noticias" src={noticias} alt="logo"></img> <Button onClick={()=>eliminarGrafico('displayTotalMedios')}>x</Button></div> */}
               {/*  <div className="img-red"><img className="tw" src={tw} alt="logo"></img> <Button onClick={()=>eliminarGrafico('displayTotalTwitter')}>x</Button></div> */}
              </div>
              </Modal>
        
                <img className="fb" src={fb} alt="logo" style={{display:cambios.displayFacebookIcon}}></img>
                {/* <img className="noticias" src={noticias} alt="logo" style={{display:cambios.displayMediosIcon}}></img> */}
               {/*  <img className="tw" src={tw} alt="logo" style={{display:cambios.displayTwitterIcon}}></img> */}
          </> 
          :
          <>
         <img className="fb" src={fb} alt="logo" style={{display:cambios.displayFacebookIcon}}></img>
             {/*    <img className="noticias" src={noticias} alt="logo" style={{display:cambios.displayMediosIcon}}></img> */}
               {/*  <img className="tw" src={tw} alt="logo" style={{display:cambios.displayTwitterIcon}}></img> */}
          </>  }
         |
          <div className="titulo1">PERíODO</div>
          <div className="cuerpo">
            <div className="titulo1">
              <AiOutlineClockCircle />
            </div>
            {editable.diapositiva1 ? (
                            
              <Input
              style={{ width: '450px' , height:'20px', paddingTop:'0.8rem'}}
              type="text"
              name="fecha"
              value={cambios.fecha}
              onChange={handleChange}
              className="subtitulo-editar"
              />
                        
              ) : (
            <div className="titulo1">
           {cambios.fecha}
            </div>
            )}
      
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
        {editable.diapositiva1 ? ( 
        <div className="graficoInforme" >
            <>
              <Button type="primary" style={{marginLeft:'2rem', marginTop:'1rem'}} onClick={()=>showModalTorta('dataGraficoTotal')} disabled={!editable.diapositiva1}>
                Editar valores
              </Button>
              <Modal
                title="Total - Volumen de publicaciones"
                open={modals.dataGraficoTotal}
                onOk={handleOk}
                okText="Guardar"
                cancelText="Cancelar"
                onCancel={handleCancel}
              >
              <div className="modalTorta">
                <div className="">Período Actual</div>
                <InputNumber 
                value={cambios.data2.series[0].data[0]} 
                name='datafb'  
                onChange={(value) => handleInputNumberChangetotal1(value)}
              ></InputNumber>
               
                <div>Período Anterior</div>
                <InputNumber 
                value={cambios.data2.series[1].data[0]} 
                name='datafb'  
                onChange={(value) => handleInputNumberChangetotal2(value)}
              ></InputNumber>
                
              </div>
              </Modal>
            </>
            <div id="totalVolumenPublicaciones"style={{display:cambios.displayTotalVolumen}} >
            <ReactApexChart
              options={cambios.data2.options}
              series={cambios.data2.series}
              type="bar"
              height={150}
              width={250}
            />
            <Button onClick={()=>eliminarGrafico('displayTotalVolumen')}>x</Button>
            </div>
            {cambios.displayTotalVolumen === 'none' && editable.diapositiva1 === true 
            ? <Button id="mostrarGrafico" style={{display:'flex'}} onClick={()=>mostrarGrafico('displayTotalVolumen')}>+</Button> 
            : <Button id="mostrarGrafico" style={{display:'none'}} onClick={()=>mostrarGrafico('displayTotalVolumen')}>+</Button> 
            }  
          </div>
          ) : (
          <div style={{display:cambios.displayTotalVolumen, gap:'5rem', height:'250px'}}>
            <ReactApexChart
              options={cambios.data2.options}
              series={cambios.data2.series}
              type="bar"
              height={150}
              width={300}
            />
         {(cambios.displayTotalFacebook === 'flex' || cambios.displayTotalTwitter === 'flex') && <hr/>}

         
          </div>
                 
           )} 
          
          <div className="periodosfbtw">
          {editable.diapositiva1 ? ( 
            
          <div className="editarfacebook facebook-grafico-bar">
             <>
              <Button type="primary" style={{marginLeft:'2rem', marginTop:'1rem'}} onClick={()=>showModalTorta('dataGraficoFb')} disabled={!editable.diapositiva1}>
                Editar valores
              </Button>
              <Modal
                title="Total - Volumen de publicaciones - Facebook"
                open={modals.dataGraficoFb}
                onOk={handleOk}
                okText="Guardar"
                cancelText="Cancelar"
                onCancel={handleCancel}
              >
              <div className="modalTorta">
                <div className="">Período Actual</div>
                <InputNumber 
                value={cambios.datafb.series[0].data[0]} 
                name='datafb'  
                onChange={(value) => handleInputNumberChangeFb1(value)}
              ></InputNumber>
               
                <div>Período Anterior</div>
                <InputNumber 
                value={cambios.datafb.series[1].data[0]} 
                name='datafb'  
                onChange={(value) => handleInputNumberChangeFb2(value)}
              ></InputNumber>
                
              </div>
              </Modal>
            </>
          <div style={{display:cambios.displayTotalFacebook, flexDirection:'column'}}>
          <div className="icon-nombre" >
            <img className="fb" src={fb} alt="logo"/>
            FACEBOOK
          </div>
          <div style={{display:'flex'}}>
          <ReactApexChart
            options={cambios.datafb.options}
            series={cambios.datafb.series}
            type="bar"
            height={250}
            width={150}
          />
          <Button onClick={()=>eliminarGrafico('displayTotalFacebook')}>x</Button>
          </div>
          </div>
            {cambios.displayTotalFacebook === 'none' && editable.diapositiva1 === true 
            ? <Button id="mostrarGrafico" style={{display:'flex'}} onClick={()=>mostrarGrafico('displayTotalFacebook')}>+</Button> 
            : <Button id="mostrarGrafico" style={{display:'none'}} onClick={()=>mostrarGrafico('displayTotalFacebook')}>+</Button> 
            }  
        
          
             
            </div>
          ) : (
          <div className="facebook-grafico-bar">
            <div style={{display:cambios.displayTotalFacebook, flexDirection:'column'}} >
          <div className="icon-nombre">
            <img className="fb" src={fb} alt="logo" />
            FACEBOOK
          </div>
          <div style={{display:'flex'}}>
          <ReactApexChart
            options={cambios.datafb.options}
            series={cambios.datafb.series}
            type="bar"
            height={250}
            width={150}
          />
            </div>
          </div>
        </div>
                 
           )}

{/* 
        {editable.diapositiva1 ? ( 
          <div className="editarfacebook twitter-grafico-bar">
          <div style={{display:cambios.displayTotalMedios, flexDirection:'column'}}>
          <div className="icon-nombre">
              <img className="noticias" src={noticias} alt="logo"/>
              MEDIOS
            </div>
            <div style={{display:'flex'}}>
            <ReactApexChart
              options={dataMedios.options}
              series={dataMedios.series}
              type="bar"
              height={250}
              width={150}
            />
          <Button onClick={()=>eliminarGrafico('displayTotalMedios')}>x</Button>
          </div>
          </div>
            {cambios.displayTotalMedios === 'none' && editable.diapositiva1 === true 
            ? <Button id="mostrarGrafico" style={{display:'flex'}} onClick={()=>mostrarGrafico('displayTotalMedios')}>+</Button> 
            : <Button id="mostrarGrafico" style={{display:'none'}} onClick={()=>mostrarGrafico('displayTotalMedios')}>+</Button> 
            }  
          </div>
          ) : (
            <div className="twitter-grafico-bar" style={{display:cambios.displayTotalMedios}}>
            <div className="icon-nombre">
              <img className="noticias" src={noticias} alt="logo"/>
              MEDIOS
            </div>
         
            <ReactApexChart
              options={dataMedios.options}
              series={dataMedios.series}
              type="bar"
              height={250}
              width={150}
            />
         
          </div>
                 
           )}  */}




          {/* {editable.diapositiva1 ? ( 
          <div className="editarfacebook twitter-grafico-bar">
          <div style={{display:cambios.displayTotalTwitter, flexDirection:'column'}}>
            <div className="icon-nombre">
              <img className="tw" src={tw} alt="logo"/>
              TWITTER
            </div>
            <div style={{display:'flex'}}>
            <ReactApexChart
              options={datatw.options}
              series={datatw.series}
              type="bar"
              height={250}
              width={150}
            />
          <Button onClick={()=>eliminarGrafico('displayTotalTwitter')}>x</Button>
          </div>
          </div>
            {cambios.displayTotalTwitter === 'none' && editable.diapositiva1 === true 
            ? <Button id="mostrarGrafico" style={{display:'flex'}} onClick={()=>mostrarGrafico('displayTotalTwitter')}>+</Button> 
            : <Button id="mostrarGrafico" style={{display:'none'}} onClick={()=>mostrarGrafico('displayTotalTwitter')}>+</Button> 
            }  
          </div>
          ) : (
            <div className="twitter-grafico-bar" style={{display:cambios.displayTotalTwitter}}>
            <div className="icon-nombre">
              <img className="tw" src={tw} alt="logo"/>
              TWITTER
            </div>
         
            <ReactApexChart
              options={datatw.options}
              series={datatw.series}
              type="bar"
              height={250}
              width={150}
            />
         
          </div>
                 
           )}  */}


            
      
          </div>
        </div>

        <div className="totalizador-1">
          <div className="contenedor-totales">
            <div className="box">
            {editable.diapositiva1 ? (
              <Input
              style={{ width: '70px' , height:'70px'}}
                type="text"
                name="valor1"
                value={cambios.valor1}
                onChange={handleChange}
                className="numeros frases-total"
              />
            ) : (
              <div className="numeros frases-total">{cambios.valor1}</div>
            )}
            
              <div className="frase">
                <div className="frases-total">PUBLICACIONES</div>
                <div className="frases-total">TOTALES</div>
              </div>
              <hr />
            </div>

            <div className="box">
            {editable.diapositiva1  ? (
              <Input
              style={{ width: '70px' , height:'70px'}}
                type="text"
                name="valor2"
                value={cambios.valor2}
                onChange={handleChange}
                className="numeros frases-total"
              />
            ) : (
              <div className="numeros frases-total">{cambios.valor2}</div>
            )}
      
              <div className="frase">
                <div className="frases-total">POR HORA </div>
                <div className="frases-total">TOTALES</div>
              </div>
              <hr />
            </div>

            <div className="box">
            {editable.diapositiva1  ? (
              <Input
              style={{ width: '70px' , height:'70px'}}
                type="text"
                name="valor3"
                value={cambios.valor3}
                onChange={handleChange}
                className="numeros frases-total"
              />
            ) : (
              <div className="numeros frases-total">{cambios.valor3}</div>
            )}
           
              <div className="frase">
                <div className="frases-total">PICO MÁXIMO </div>
                <div className="frases-total">DE PUBLICACIONES</div>
              </div>
            </div>
          </div>

          <div className="contenedor-totales">
            <div className="box">   
            {editable.diapositiva1 ? (
              <Input
              style={{ width: '300px' , height:'70px'}}
                type="text"
                name="valor4"
                value={cambios.valor4}
                onChange={handleChange}
                className="numeros frases-total"
              />
            ) : (
              <div className="numeros frases-total">{cambios.valor4}</div>
            )}
              <div className="frase">
                <div className="frases-total">TENDENCIA </div>
                <div className="frases-total">DE PUBLICACIONES</div>
              </div>
              <hr />
            </div>

            <div className="box">
            {editable.diapositiva1 ? (
              <Input
              style={{ width: '70px' , height:'70px'}}
                type="text"
                name="valor5"
                value={cambios.valor5}
                onChange={handleChange}
                className="numeros frases-total"
              />
            ) : (
              <div className="numeros frases-total">{cambios.valor5}</div>
            )}
              <div className="frase">
                <div className="frases-total">ALCANCE</div>
                <div className="frases-total">IMPRESIONES</div>
              </div>
            </div>
          </div>
        </div>
        {editable.general && (
          <div className="boton-confirmar">
            {contextHolder}
          <div ref={ref3}>
          <Button type="primary" className="boton-primary" onClick={()=>openMessageEdit('diapositiva1')} disabled={editable.diapositiva1}>
            Editar
          </Button>
          <Button type="primary" className="boton-primary" onClick={()=>openMessage('diapositiva1')} disabled={!editable.diapositiva1}>
            Guardar cambio
          </Button>
          <Button onClick={()=>handleDiscardChanges('diapositiva1','showModal1')} disabled={!editable.diapositiva1}>Descartar cambios</Button>
          </div>
          <Modal
          open={modals.showModal1}
          title="¿Está seguro de que desea descartar los cambios?"
          okText="Sí"
          cancelText="No"
          onOk={() => {
            setEditable((prevState) => ({
              ...prevState,
              diapositiva1: false // Cambiar la diapositiva correspondiente a false
            }));
            resetValues('displayTotalVolumen')
            resetValues('fecha')
            resetValues('displayTotalFacebook')
            resetValues('displayTotalTwitter')
            resetValues('displayTotalMedios')
            resetValues("cliente") 
            resetValues("valor1") 
            resetValues("valor2") 
            resetValues("valor3") 
            resetValues("valor4") 
            resetValues("valor5") 
            setShowModal((prevState) => ({
              ...prevState,
              showModal1: false // Cambiar la diapositiva correspondiente a false
            }));
          }}
          onCancel={() => setShowModal((prevState) => ({
            ...prevState,
            showModal1: false // Cambiar la diapositiva correspondiente a false
          }))}
        >
          <p>Los cambios realizados se perderán permanentemente.</p>
        </Modal>
          </div>
          )}
        </div>
        {/*FIN DIAPOSITIVA INICIO*/}
        {/*DIAPOSITIVA 1*/}
        <div class="page-break" data-html2pdf-pagebreak style={{ display: cambios.diapositiva1.display, flexDirection:'column'}}>

        {/*Nav*/}
        <div className="contenedor-extremo">
          <div className="nav">
            <div className="reporte">
              <SlNotebook />
              <p>REPORTE DE SÍNTESIS</p>
            </div>
            {editable.general && <Button onClick={()=>handleDisplay('diapositiva1')}>X</Button>}
            <img src={logo} className="img" alt="logo"></img>
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
            {editable.general === true ? 
            <div>
              <>
              <Button type="primary" style={{marginLeft:'2rem', marginTop:'1rem'}} onClick={()=>showModalTorta('dataTorta')} disabled={!editable.diapositiva2}>
                Editar valores
              </Button>
              <Modal
                title="Total - Volumen de publicaciones"
                open={modals.dataTorta}
                onOk={handleOk}
                okText="Guardar"
                cancelText="Cancelar"
                onCancel={handleCancel}
              >
              <div className="modalTorta">
                <div className="">Período Anterior</div>
                <InputNumber value={cambios.dataOuter[0].value} name='dataOuter0' className="input-positivo" onChange={(value) => handleInputNumberChange(0, true, value,'dataOuter')}></InputNumber>
                <InputNumber value={cambios.dataOuter[1].value} name='dataOuter1' className="input-negativo" onChange={(value) => handleInputNumberChange(1, true, value,'dataOuter')}></InputNumber>
                <div>Período Actual</div>
                <InputNumber value={cambios.dataInner[0].value} name='dataInner0' className="input-positivo" onChange={(value) => handleInputNumberChange(0, false, value,'dataInner')}></InputNumber>
                <InputNumber value={cambios.dataInner[1].value} name='dataInner1' className="input-negativo" onChange={(value) => handleInputNumberChange(1, false, value,'dataInner')}></InputNumber>
              </div>
              </Modal>
            </>
            <PieChart width={200} height={200}>
              <Pie
                data={cambios.dataOuter}
                dataKey="value"
                cx={100}
                cy={100}
                startAngle={-90}
                endAngle={270}
                innerRadius={30}
                outerRadius={60}
                paddingAngle={1}>
                {cambios.dataOuter.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Pie
                data={cambios.dataInner}
                dataKey="value"
                cx={100}
                cy={100}
                startAngle={-90}
                endAngle={270}
                innerRadius={10}
                outerRadius={30}
                paddingAngle={1}>
                {cambios.dataInner.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart> 
            </div>
            :
            <PieChart width={200} height={200}>
            <Pie
              data={cambios.dataOuter}
              dataKey="value"
              cx={100}
              cy={100}
              startAngle={-90}
              endAngle={270}
              innerRadius={30}
              outerRadius={60}
              paddingAngle={1}>
              {cambios.dataOuter.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Pie
              data={cambios.dataInner}
              dataKey="value"
              cx={100}
              cy={100}
              startAngle={-90}
              endAngle={270}
              innerRadius={10}
              outerRadius={30}
              paddingAngle={1}>
              {cambios.dataInner.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>}
            
          </div>

          <div className="texto">
            <div>Tendencia {cambios.tendencia}</div>
            <div> en relación al mismo período anterior:</div>
            {editable.general && editable.diapositiva2 ? 
            <div>
            <div className={cambios.indicadorImpacto === "POSITIVIDAD" ? "positivo" : "negativo"}>
              <Input value={cambios.indicadorImpacto} name="indicadorImpacto" onChange={handleInputChange} />
            </div>
            <div className={cambios.indicadorImpacto === "POSITIVIDAD" ? "positivo" : "negativo"}>
              <Input value={cambios.porcentajeImpacto} name="porcentajeImpacto" onChange={handleInputChange} />
            </div>
            </div>
            :
            <div>
            <div
              className={
                cambios.indicadorImpacto === "POSITIVIDAD" ? "positivo" : "negativo"
              }>
              {cambios.indicadorImpacto}
            </div>
            <div>
            <div
              className={
                cambios.indicadorImpacto === "POSITIVIDAD" ? "positivo" : "negativo"
              }>
              {cambios.porcentajeImpacto}
            </div>
            </div>
            </div>
            }
          </div>

          <hr></hr>

          <div className="pie">
            <div className="icon-nombre">
              <img className="fb" src={fb} alt="logo"/>
              FACEBOOK
            </div>
            {editable.general  ? 
            <div>
              <>
              <Button type="primary" style={{marginLeft:'2rem', marginTop:'1rem'}} onClick={()=>showModalTorta('dataTortaFb')} disabled={!editable.diapositiva2}>
                Editar valores
              </Button>
              <Modal
                title="Total - Volumen de publicaciones"
                open={modals.dataTortaFb}
                onOk={handleOk}
                okText="Guardar"
                cancelText="Cancelar"
                onCancel={handleCancel}
              >
              <div className="modalTorta">
                <div className="">Período Anterior</div>
                <InputNumber value={cambios.dataOuterFb[0].value} name='dataOuterFb0' className="input-positivo" onChange={(value) => handleInputNumberChange(0, true, value, 'dataOuterFb')}></InputNumber>
                <InputNumber value={cambios.dataOuterFb[1].value} name='dataOuterFb1' className="input-negativo" onChange={(value) => handleInputNumberChange(1, true, value, 'dataOuterFb')}></InputNumber>
                <div>Período Actual</div>
                <InputNumber value={cambios.dataInnerFb[0].value} name='dataInnerFb0' className="input-positivo" onChange={(value) => handleInputNumberChange(0, false, value, 'dataInnerFb')}></InputNumber>
                <InputNumber value={cambios.dataInnerFb[1].value} name='dataInnerFb1' className="input-negativo" onChange={(value) => handleInputNumberChange(1, false, value, 'dataInnerFb')}></InputNumber>
              </div>
              </Modal>
            </>
            <PieChart width={200} height={200}>
              <Pie
                data={cambios.dataOuterFb}
                dataKey="value"
                cx={100}
                cy={100}
                startAngle={-90}
                endAngle={270}
                innerRadius={30}
                outerRadius={60}
                paddingAngle={1}>
                {cambios.dataOuterFb.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Pie
                data={cambios.dataInnerFb}
                dataKey="value"
                cx={100}
                cy={100}
                startAngle={-90}
                endAngle={270}
                innerRadius={10}
                outerRadius={30}
                paddingAngle={1}>
                {cambios.dataInnerFb.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
            </div>
           : 
        
            <PieChart width={200} height={200}>
            <Pie
              data={cambios.dataOuterFb}
              dataKey="value"
              cx={100}
              cy={100}
              startAngle={-90}
              endAngle={270}
              innerRadius={30}
              outerRadius={60}
              paddingAngle={1}>
              {cambios.dataOuterFb.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Pie
              data={cambios.dataInnerFb}
              dataKey="value"
              cx={100}
              cy={100}
              startAngle={-90}
              endAngle={270}
              innerRadius={10}
              outerRadius={30}
              paddingAngle={1}>
              {cambios.dataInnerFb.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            </PieChart>
             }
           </div>



{/* 
          <div className="pie">
            <div className="icon-nombre">
              <img className="tw" src={tw} alt="logo"/>
              TWITTER
            </div>
            {editable.general ? 
            <div>
              <>
              <Button type="primary" style={{marginLeft:'2rem', marginTop:'1rem'}} onClick={()=>showModalTorta('dataTortaTw')}  disabled={!editable.diapositiva2}>
                Editar valores
              </Button>
              <Modal
                title="Total - Volumen de publicaciones"
                open={modals.dataTortaTw}
                onOk={handleOk}
                okText="Guardar"
                cancelText="Cancelar"
                onCancel={handleCancel}
              >
              <div className="modalTorta">
                <div className="">Período Anterior</div>
                <InputNumber value={cambios.dataOuterTw[0].value} name='dataOuterTw0' className="input-positivo" onChange={(value) => handleInputNumberChange(0, true, value, 'dataOuterTw')}></InputNumber>
                <InputNumber value={cambios.dataOuterTw[1].value} name='dataOuterTw1' className="input-negativo" onChange={(value) => handleInputNumberChange(1, true, value, 'dataOuterTw')}></InputNumber>
                <div>Período Actual</div>
                <InputNumber value={cambios.dataInnerTw[0].value} name='dataInnerTw0' className="input-positivo" onChange={(value) => handleInputNumberChange(0, false, value, 'dataOuterTw')}></InputNumber>
                <InputNumber value={cambios.dataInnerTw[1].value} name='dataInnerTw1' className="input-negativo" onChange={(value) => handleInputNumberChange(1, false, value, 'dataOuterTw')}></InputNumber>
              </div>
              </Modal>
            </>
            <PieChart width={200} height={200}>
              <Pie
                data={cambios.dataOuterTw}
                dataKey="value"
                cx={100}
                cy={100}
                startAngle={-90}
                endAngle={270}
                innerRadius={30}
                outerRadius={60}
                paddingAngle={1}>
                {cambios.dataOuterTw.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Pie
                data={cambios.dataInnerTw}
                dataKey="value"
                cx={100}
                cy={100}
                startAngle={-90}
                endAngle={270}
                innerRadius={10}
                outerRadius={30}
                paddingAngle={1}>
                {cambios.dataInnerTw.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
            </div>
           : 
        
            <PieChart width={200} height={200}>
            <Pie
              data={cambios.dataOuterTw}
              dataKey="value"
              cx={100}
              cy={100}
              startAngle={-90}
              endAngle={270}
              innerRadius={30}
              outerRadius={60}
              paddingAngle={1}>
              {cambios.dataOuterTw.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Pie
              data={cambios.dataInnerTw}
              dataKey="value"
              cx={100}
              cy={100}
              startAngle={-90}
              endAngle={270}
              innerRadius={10}
              outerRadius={30}
              paddingAngle={1}>
              {cambios.dataInnerTw.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            </PieChart>
             }
           </div> */}
        
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
              <img src={hashtags} className="hashtags"alt="logo" />
            </div>


            {editable.general ?
              <div>
                  <>
                  <Button type="primary" style={{marginLeft:'2rem', marginTop:'1rem'}} onClick={()=>showModalTorta('dataNubeHashtags')}  disabled={!editable.diapositiva2}>
                    Editar valores
                  </Button>
                  <Modal
                    title="Principales Hashtags"
                    open={modals.dataNubeHashtags}
                    onOk={handleOk}
                    okText="Guardar"
                    cancelText="Cancelar"
                    onCancel={handleCancel}
                  >
                  <div className="modalTorta">
                  {cambios.principalesHashtags && cambios.principalesHashtags.length > 0 && cambios.principalesHashtags.map((hashtag, index) => (
                  <div className="modificarnube" key={index}>
                    <Input
                      className="input-nubepalabras"
                      type="text"
                      value={hashtag.text}
                      onChange={(e) =>
                        handleHashtagChange(index, "text", e.target.value)
                      }
                    />
                    <InputNumber
                      value={hashtag.value}
                      onChange={(value) =>
                        handleHashtagChange(index, "value", value)
                      }
                    />
                  </div>
                ))}
                </div>
                  </Modal>
                  </>
            
            <div className="grafico-palabras">
            <ReactWordcloud
              words={cambios.principalesHashtags}
              options={opciones}
              style={{ width: 200, height: 200 }}
            />
           
            </div>
            </div>
          :
          
          <div className="grafico-palabras">
          <ReactWordcloud
              words={cambios.principalesHashtags}
              options={opciones}
              style={{ width: 200, height: 200 }}
            />
           
          </div>
                }
          </div>

          <div className="contenedor-img-words">
            <div className="principales-hashtags">
              <div>PALABRAS</div>
              <div className="titulo3">CLAVE</div>
              <img src={clave} className="hashtags" alt="logo"/>
            </div>

            {editable.general ?
              <div>
                  <>
                  <Button type="primary" style={{marginLeft:'2rem', marginTop:'1rem'}} onClick={()=>showModalTorta('palabrasClaves')}  disabled={!editable.diapositiva2}>
                    Editar valores
                  </Button>
                  <Modal
                    title="Palabras Clave"
                    open={modals.palabrasClaves}
                    onOk={handleOk}
                    okText="Guardar"
                    cancelText="Cancelar"
                    onCancel={handleCancel}
                  >
                  <div className="modalTorta">
                  {cambios.palabrasClaves && cambios.palabrasClaves.length > 0 && cambios.palabrasClaves.map((hashtag, index) => (
                  <div className="modificarnube" key={index}>
                    <Input
                      className="input-nubepalabras"
                      type="text"
                      value={hashtag.text}
                      onChange={(e) =>
                        handleHashtagChangeClave(index, "text", e.target.value)
                      }
                    />
                    <InputNumber
                      value={hashtag.value}
                      onChange={(value) =>
                        handleHashtagChangeClave(index, "value", value)
                      }
                    />
                  </div>
                ))}
                </div>
                  </Modal>
                  </>
            
            <div className="grafico-palabras">
            <ReactWordcloud
              words={cambios.palabrasClaves}
              options={opciones}
              style={{ width: 200, height: 200 }}
            />
           
            </div>
            </div>
          :
          
          <div className="grafico-palabras">
          <ReactWordcloud
            words={cambios.palabrasClaves}
            options={opciones}
            style={{ width: 200, height: 200 }}
          />
         
          </div>
                }
          </div>
        </div>

        {editable.general && (
          <div className="boton-confirmar">
            {contextHolder}
          <Button type="primary" className="boton-primary" onClick={()=>openMessageEdit('diapositiva2')} disabled={editable.diapositiva2}>
            Editar
          </Button>
          <Button type="primary" className="boton-primary" onClick={()=>openMessage('diapositiva2')} disabled={!editable.diapositiva2}>
            Guardar cambio
          </Button>
          <Button onClick={()=>handleDiscardChanges('diapositiva2','showModal2')} disabled={!editable.diapositiva2}>Descartar cambios</Button>
          <Modal
          open={modals.showModal2}
          title="¿Está seguro?"
          okText="Sí"
          cancelText="No"
          onOk={() => {
            setEditable((prevState) => ({
              ...prevState,
              diapositiva2: false // Cambiar la diapositiva correspondiente a false
            }));
            resetValues("dataInner")
            resetValues("dataOuter")
            resetValues("dataInnerTw")
            resetValues("dataOuterTw")
            resetValues("dataInnerFb")
            resetValues("dataOuterFb")
            resetValues("principalesHashtags")
            resetValues("palabrasClaves")
            setShowModal(false);
          }}
          onCancel={() => setShowModal(false)}
        >
          <p>Los cambios realizados se perderán permanentemente.</p>
        </Modal>
          </div>
          )}

        </div>
        {/*FIN DIAPOSITIVA 1*/}
        {/*DIAPOSITIVA 2*/}
        <div class="page-break" data-html2pdf-pagebreak style={{ display: cambios.diapositiva2.display, flexDirection:'column'}}>
        {/*Nav*/}
        <div className="contenedor-extremo">
          <div className="nav">
            <div className="reporte">
              <SlNotebook />
              <p>REPORTE DE SÍNTESIS</p>
            </div>
            {editable.general && <Button onClick={()=>handleDisplay('diapositiva2')}>X</Button>}
            <img src={logo} className="img" alt="logo"></img>
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
              {editable.diapositiva3  ? (
              <TextArea
                style={{ height: '100px' }}
                type="text"
                name="texto1"
                value={cambios.texto1}
                onChange={handleChange}
                maxLength={250}
              />
            ) : (
              <div>
                {cambios.texto1}
              </div>
            )}
            </div>

            <div className="contenedor-texto-analisis">
              <div className="icono-analisis">
                <MdOutlineContactSupport />
              </div>
              {editable.diapositiva3  ? (
              <TextArea
                style={{ height: '100px' }}
                type="text"
                name="texto2"
                value={cambios.texto2}
                onChange={handleChange}
                maxLength={250}
              />
            ) : (
              <div>
                {cambios.texto2}

              </div>
            )}
            </div>
          </div>

          <hr className="hr-estilos" />

          <div className="contenedor-dos-analisis">
            <div className="contenedor-texto-analisis">
              <div className="icono-analisis">
                <MdOutlineContactSupport />
              </div>
              {editable.diapositiva3  ? (
              <TextArea
                style={{ height: '100px' }}
                type="text"
                name="texto3"
                value={cambios.texto3}
                onChange={handleChange}
                maxLength={250}
              />
            ) : (
              <div>
                {cambios.texto3}
              </div>
            )}
            </div>

            <div className="contenedor-texto-analisis">
              <div className="icono-analisis">
                <MdOutlineContactSupport />
              </div>
             
              {editable.diapositiva3  ? (
              <TextArea
                style={{ height: '100px' }}
                type="text"
                name="texto4"
                value={cambios.texto4}
                onChange={handleChange}
                maxLength={250}
              />
            ) : (
              <div>
                {cambios.texto4}
              </div>
            )}
            
            </div>
          </div>
          <hr className="hr-estilos" />

          <div className="contenedor-dos-analisis">
            <div className="contenedor-texto-analisis">
              <div className="icono-analisis">
                <MdOutlineContactSupport />
              </div>
            
              {editable.diapositiva3  ? (
              <TextArea
                style={{ height: '100px' }}
                type="text"
                name="texto5"
                value={cambios.texto5}
                onChange={handleChange}
                maxLength={250}
              />
            ) : (
              <div>
                {cambios.texto5}
              </div>
            )}
            </div>

            <div className="contenedor-texto-analisis">
              <div className="icono-analisis">
                <MdOutlineContactSupport />
              </div>
           
              {editable.diapositiva3  ? (
              <TextArea
              style={{ height: '100px' }}
              type="text"
              name="texto6"
              value={cambios.texto6}
              onChange={handleChange}
              maxLength={250}
            />
            ) : (
              <div>
                {cambios.texto6}
              </div>
            )}
    
            </div>
          </div>
          <hr className="hr-estilos" />
        </div>


        {editable.general && (
          <div className="boton-confirmar">
            {contextHolder}
          <Button type="primary" className="boton-primary" onClick={()=>openMessageEdit('diapositiva3')} disabled={editable.diapositiva3}>
            Editar
          </Button>
          <Button type="primary" className="boton-primary" onClick={()=>openMessage('diapositiva3')} disabled={!editable.diapositiva3}>
            Guardar cambio
          </Button>
          <Button onClick={()=>handleDiscardChanges('diapositiva3',)} disabled={!editable.diapositiva3}>Descartar cambios</Button>
          <Modal
          open={modals.showModal3}
          title="¿Está seguro de que desea descartar los cambios?"
          okText="Sí"
          cancelText="No"
          onOk={() => {
            setEditable((prevState) => ({
              ...prevState,
              diapositiva3: false // Cambiar la diapositiva correspondiente a false
            }));
            resetValues('texto1')
            resetValues('texto2')
            resetValues('texto3')
            resetValues('texto4')
            resetValues('texto5')
            resetValues('texto6')
            
            setShowModal(false);
          }}
          onCancel={() => setShowModal(false)}
        >
          <p>Los cambios realizados se perderán permanentemente.</p>
        </Modal>
          </div>
          )}


        </div>
        {/*FIN DIAPOSITIVA 2*/}
        {/*DIAPOSITIVA 3*/}
        <div class="page-break" data-html2pdf-pagebreak style={{ display: cambios.diapositiva3.display, flexDirection:'column'}}>
        {/*Nav*/}
        <div className="contenedor-extremo">
          <div className="nav">
            <div className="reporte">
              <SlNotebook />
              <p>REPORTE DE SÍNTESIS</p>
            </div>
            {editable.general && <Button onClick={()=>handleDisplay('diapositiva3')}>X</Button>}
            <img src={logo} className="img" alt="logo"></img>
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

          {editable.general ?

            <div>
              <>
              <Button type="primary" style={{marginLeft:'2rem', marginTop:'1rem'}} onClick={()=>showModalTorta('dataInfluenciadores')} disabled={!editable.diapositiva4}>
                Editar valores
              </Button>
              <Modal
                title="Influenciadores - Top 10"
                open={modals.dataInfluenciadores}
                onOk={handleOk}
                okText="Guardar"
                cancelText="Cancelar"
                onCancel={handleCancel}
              >
              <div className="Influenciadores-modal">
              {cambios.data.map((objeto, indice) => (
                <div key={objeto.key || ''} className="Influenciadores-modal">
                  <Input
                   type="number"
                   className="inputnumber"
                     value={objeto.key} onChange={(e) => {
                    const nuevosDatos = [...cambios.data];
                    nuevosDatos[indice].key = e.target.value;
                    setCambios({ ...cambios, data: nuevosDatos });
                  }} />
                  <Input className="input-influenciadores" type="text" value={objeto.influenciador || ''} onChange={(e) => {
                    const nuevosDatos = [...cambios.data];
                    nuevosDatos[indice].influenciador = e.target.value;
                    setCambios({ ...cambios, data: nuevosDatos });
                  }} />
                  <Input
                   type="number"
                   className="inputnumber" 
                     value={objeto.impresiones || ''}
                     onChange={(e) => {
                    const nuevosDatos = [...cambios.data];
                    nuevosDatos[indice].impresiones = e.target.value;
                    setCambios({ ...cambios, data: nuevosDatos });
                  }} />
                </div>
              ))}

                {cambios.data2ant.map((objeto, indice) => (
                   <div key={objeto.key} className="Influenciadores-modal">
                    <Input
                    type="number"
                    className="inputnumber"
                      value={objeto.key || ''} 
                      onChange={(e) => {
                        const nuevosDatos = [...cambios.data2ant];
                        nuevosDatos[indice] = {
                          ...nuevosDatos[indice],
                          key: e.target.value
                        };
                        setCambios({ ...cambios, data2ant: nuevosDatos });
                      }} 
                    />
                    <Input 
                    className="input-influenciadores" 
                      value={objeto.influenciador || ''} 
                      onChange={(e) => {
                        const nuevosDatos = [...cambios.data2ant];
                        nuevosDatos[indice] = {
                          ...nuevosDatos[indice],
                          influenciador: e.target.value
                        };
                        setCambios({ ...cambios, data2ant: nuevosDatos });
                      }} 
                    />
                    <Input
                     type="number"
                     className="inputnumber"
                      value={objeto.impresiones || ''}
                      onChange={(e) => {
                        const nuevosDatos = [...cambios.data2ant];
                        nuevosDatos[indice] = {
                          ...nuevosDatos[indice],
                          impresiones: e.target.value
                        };
                        setCambios({ ...cambios, data2ant: nuevosDatos });
                      }} 
                    /> 

                   
                  </div>
                ))}
              </div>
              </Modal>
              </>

          <div className="table">
            <Table
              columns={cambios.columns}
              dataSource={cambios.data}
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
         
         {cambios.data2ant && cambios.data2ant[0].influenciador !== "" && (
        <Table
          columns={cambios.columns}
          dataSource={cambios.data2ant}
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
      {(!cambios.data2ant || cambios.data2ant[0].influenciador === "") && (
        <div style={{ display: 'none' }}>
          {/* Aquí puede agregar cualquier contenido que desee que se oculte cuando no hay datos */}
        </div>
      )}
          </div>
          </div>
          :
          
          
          <div className="table">
          <Table
            columns={cambios.columns}
            dataSource={cambios.data}
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
       
       {cambios.data2ant && cambios.data2ant[0].influenciador !== "" && (
      <Table
        columns={cambios.columns}
        dataSource={cambios.data2ant}
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
    {(!cambios.data2ant || cambios.data2ant[0].influenciador === "") && (
      <div style={{ display: 'none' }}>
      </div>
    )}
        </div>
        }
        </div>



        <div className="cuerpo">
          <div className="titulo2">
            <IoAlert />
          </div>

          <div className="titulo2">PREOCUPACIONES</div>
        </div>
        <Tag className="tag">Top 3 principales</Tag>

        <div className="container-table">

          {editable.general ? 
          <div>
             <>
              <Button type="primary" style={{marginLeft:'2rem', marginTop:'1rem'}} onClick={()=>showModalTorta('dataPreocupaciones')} disabled={!editable.diapositiva4}>
                Editar valores
              </Button>
              <Modal
                title="Preocupaciones - Top 3"
                open={modals.dataPreocupaciones}
                onOk={handleOk}
                okText="Guardar"
                cancelText="Cancelar"
                onCancel={handleCancel}
              >
              <div className="Influenciadores-modal">

             {/*  <div className="contenedor-modal-preocupaciones" >
                <div>Total</div>
              {cambios.dataPreocupaciones.map((objeto, indice) => (
                <div key={indice} className="Influenciadores-modal">
                 
                 <Input
                  className="input-influenciadores"
                  type="text"
                  value={objeto.total?.props?.children[0]?.props?.children}
                  onChange={(e) => {
                    const nuevosDatos = [...cambios.dataPreocupaciones];
                    nuevosDatos[indice].total = (
                      <div className="totalizador-preocupaciones">
                        <div>{e.target.value}</div>
                        <div>{objeto.total.props.children[1].props.children}</div>
                      </div>
                    );
                    setCambios(prevState => ({
                      ...prevState,
                      dataPreocupaciones: [
                        ...prevState.dataPreocupaciones.slice(0, indice),
                        {
                          total: (
                            <div className="totalizador-preocupaciones">
                              <div>{e.target.id === "input-0" ? e.target.value : objeto.total.props.children[0].props.children}</div>
                              <div>{e.target.id === "input-1" ? e.target.value : objeto.total.props.children[1].props.children}</div>
                            </div>
                          ),
                        },
                        ...prevState.dataPreocupaciones.slice(indice + 1)
                      ]
                    }));
                  }}
                />
                <Input
                  className="input-influenciadores"
                  type="text"
                  value={objeto.total?.props?.children[1]?.props?.children}
                  onChange={(e) => {
                    const nuevosDatos = [...cambios.dataPreocupaciones];
                    nuevosDatos[indice].total = (
                      <div className="totalizador-preocupaciones">
                        <div>{objeto.total.props.children[0].props.children}</div>
                        <div>{e.target.value}</div>
                      </div>
                    );
                    setCambios(prevState => ({
                      ...prevState,
                      dataPreocupaciones: [
                        ...prevState.dataPreocupaciones.slice(0, indice),
                        {
                          total: (
                            <div className="totalizador-preocupaciones">
                              <div>{e.target.id === "input-0" ? e.target.value : objeto.total.props.children[0].props.children}</div>
                              <div>{e.target.id === "input-1" ? e.target.value : objeto.total.props.children[1].props.children}</div>
                            </div>
                          ),
                        },
                        ...prevState.dataPreocupaciones.slice(indice + 1)
                      ]
                    }));
                  }}
                />
                </div>
              ))}
              </div>
          

          <div >
                <div>Twitter</div>
          {cambios.dataPreocupacionesTw.map((objeto, indice) => (
                <div key={indice} className="Influenciadores-modal">
                 
                 <Input
                  className="input-influenciadores"
                  type="text"
                  value={objeto.twitter?.props?.children[0]?.props?.children}
                  onChange={(e) => {
                    const nuevosDatos = [...cambios.dataPreocupacionesTw];
                    nuevosDatos[indice].twitter = (
                      <div className="totalizador-preocupaciones">
                        <div>{e.target.value}</div>
                        <div>{objeto.twitter.props.children[1].props.children}</div>
                      </div>
                    );
                    setCambios(prevState => ({
                      ...prevState,
                      dataPreocupacionesTw: [
                        ...prevState.dataPreocupacionesTw.slice(0, indice),
                        {
                          twitter: (
                            <div className="totalizador-preocupaciones">
                              <div>{e.target.id === "input-0" ? e.target.value : objeto.twitter.props.children[0].props.children}</div>
                              <div>{e.target.id === "input-1" ? e.target.value : objeto.twitter.props.children[1].props.children}</div>
                            </div>
                          ),
                        },
                        ...prevState.dataPreocupacionesTw.slice(indice + 1)
                      ]
                    }));
                  }}
                />
                <Input
                  className="input-influenciadores"
                  type="text"
                  value={objeto.twitter?.props?.children[1]?.props?.children}
                  onChange={(e) => {
                    const nuevosDatos = [...cambios.dataPreocupacionesTw];
                    nuevosDatos[indice].twitter = (
                      <div className="totalizador-preocupaciones">
                        <div>{objeto.twitter.props.children[0].props.children}</div>
                        <div>{e.target.value}</div>
                      </div>
                    );
                    setCambios(prevState => ({
                      ...prevState,
                      dataPreocupacionesTw: [
                        ...prevState.dataPreocupacionesTw.slice(0, indice),
                        {
                          twitter: (
                            <div className="totalizador-preocupaciones">
                              <div>{e.target.id === "input-0" ? e.target.value : objeto.twitter.props.children[0].props.children}</div>
                              <div>{e.target.id === "input-1" ? e.target.value : objeto.twitter.props.children[1].props.children}</div>
                            </div>
                          ),
                        },
                        ...prevState.dataPreocupacionesTw.slice(indice + 1)
                      ]
                    }));
                  }}
                />
                </div>
              ))}
              </div> */}

              <div >
                <div>Facebook</div>
              {cambios.dataPreocupacionesFb.map((objeto, indice) => (
                <div key={indice} className="Influenciadores-modal">
                 
                 <Input
                  className="input-influenciadores"
                  type="text"
                  value={objeto.facebook?.props?.children[0]?.props?.children}
                  onChange={(e) => {
                    const nuevosDatos = [...cambios.dataPreocupacionesFb];
                    nuevosDatos[indice].facebook = (
                      <div className="totalizador-preocupaciones">
                        <div>{e.target.value}</div>
                        <div>{objeto.facebook.props.children[1].props.children}</div>
                      </div>
                    );
                    setCambios(prevState => ({
                      ...prevState,
                      dataPreocupacionesFb: [
                        ...prevState.dataPreocupacionesFb.slice(0, indice),
                        {
                          facebook: (
                            <div className="totalizador-preocupaciones">
                              <div>{e.target.id === "input-0" ? e.target.value : objeto.facebook.props.children[0].props.children}</div>
                              <div>{e.target.id === "input-1" ? e.target.value : objeto.facebook.props.children[1].props.children}</div>
                            </div>
                          ),
                        },
                        ...prevState.dataPreocupacionesFb.slice(indice + 1)
                      ]
                    }));
                  }}
                />
                <Input
                  className="input-influenciadores"
                  type="text"
                  value={objeto.facebook?.props?.children[1]?.props?.children}
                  onChange={(e) => {
                    const nuevosDatos = [...cambios.dataPreocupacionesFb];
                    nuevosDatos[indice].facebook = (
                      <div className="totalizador-preocupaciones">
                        <div>{objeto.facebook.props.children[0].props.children}</div>
                        <div>{e.target.value}</div>
                      </div>
                    );
                    setCambios(prevState => ({
                      ...prevState,
                      dataPreocupacionesFb: [
                        ...prevState.dataPreocupacionesFb.slice(0, indice),
                        {
                          facebook: (
                            <div className="totalizador-preocupaciones">
                              <div>{e.target.id === "input-0" ? e.target.value : objeto.facebook.props.children[0].props.children}</div>
                              <div>{e.target.id === "input-1" ? e.target.value : objeto.facebook.props.children[1].props.children}</div>
                            </div>
                          ),
                        },
                        ...prevState.dataPreocupacionesFb.slice(indice + 1)
                      ]
                    }));
                  }}
                />
                </div>
              ))}
              </div>
              </div>
              </Modal>
              </>
         
          <div className="table">
            
            {/* <Table
              columns={cambios.columnsPreocupacionesTotal}
              dataSource={cambios.dataPreocupaciones}
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
            /> */}
       {/*      <Table
              columns={cambios.columnsPreocupacionesTw}
              dataSource={cambios.dataPreocupacionesTw}
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
            /> */}

            <Table
              columns={cambios.columnsPreocupacionesFb}
              dataSource={cambios.dataPreocupacionesFb}
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
          : 
           <div className="table">
            {/* <Table
              columns={cambios.columnsPreocupacionesTotal}
              dataSource={cambios.dataPreocupaciones}
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
            /> */}
           {/*  <Table
              columns={cambios.columnsPreocupacionesTw}
              dataSource={cambios.dataPreocupacionesTw}
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
            /> */}

            <Table
              columns={cambios.columnsPreocupacionesFb}
              dataSource={cambios.dataPreocupacionesFb}
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
          }

        </div>

        {editable.general && (
          <div className="boton-confirmar">
            {contextHolder}
          <Button type="primary" className="boton-primary" onClick={()=>openMessageEdit('diapositiva4')} disabled={editable.diapositiva4}>
            Editar
          </Button>
          <Button type="primary" className="boton-primary" onClick={()=>openMessage('diapositiva4')} disabled={!editable.diapositiva4}>
            Guardar cambio
          </Button>
          <Button onClick={()=>handleDiscardChanges('diapositiva4','showModal4')} disabled={!editable.diapositiva4}>Descartar cambios</Button>
          <Modal
          open={modals.showModal4}
          title="¿Está seguro de que desea descartar los cambios?"
          okText="Sí"
          cancelText="No"
          onOk={() => {
            setEditable((prevState) => ({
              ...prevState,
              diapositiva4: false // Cambiar la diapositiva correspondiente a false
            }));
            resetValues('data')
            resetValues('data2ant')
            resetValues('dataPreocupaciones')
            resetValues('dataPreocupacionesFb')
            resetValues('dataPreocupacionesTw')
            setShowModal(false);
          }}
          onCancel={() => setShowModal(false)}
        >
          <p>Los cambios realizados se perderán permanentemente.</p>
        </Modal>
          </div>
          )}


        </div>
        {/*FIN DIAPOSITIVA 3*/}
        {/*DIAPOSITIVA 4*/}
        <div class="page-break" data-html2pdf-pagebreak style={{ display: cambios.diapositiva4.display, flexDirection:'column'}}>
        {/*Nav*/}
        <div className="contenedor-extremo">
          <div className="nav">
            <div className="reporte">
              <SlNotebook />
              <p>REPORTE DE SÍNTESIS</p>
            </div>
            {editable.general && <Button onClick={()=>handleDisplay('diapositiva4')}>X</Button>}
            <img src={logo} className="img" alt="logo"></img>
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
          {editable.general ? 
              <div>  {/*CONTENEDOR MODAL */}
                <Button type="primary" style={{marginLeft:'2rem', marginTop:'1rem'}} onClick={()=>showModalTorta('dataEmociones')} disabled={!editable.diapositiva5}>
                Editar valores
                </Button>
                <Modal
                title="Emociones -Top 3"
                open={modals.dataEmociones}
                onOk={handleOk}
                okText="Guardar"
                cancelText="Cancelar"
                onCancel={handleCancel}
                >
                <div className="Influenciadores-modal">
{/* 
                <div className="contenedor-modal-preocupaciones" >
                <div>Total</div>
                {cambios.dataEmociones.map((objeto, indice) => (
                <div key={indice} className="Influenciadores-modal">
                
                <Input
                  className="input-influenciadores"
                  type="text"
                  value={objeto.total?.props?.children[0]?.props?.children}
                  onChange={(e) => {
                    const nuevosDatos = [...cambios.dataEmociones];
                    nuevosDatos[indice].total = (
                      <div className="totalizador-preocupaciones">
                        <div>{e.target.value}</div>
                        <div>{objeto.total.props.children[1].props.children}</div>
                      </div>
                    );
                    setCambios(prevState => ({
                      ...prevState,
                      dataEmociones: [
                        ...prevState.dataEmociones.slice(0, indice),
                        {
                          total: (
                            <div className="totalizador-preocupaciones">
                              <div>{e.target.id === "input-0" ? e.target.value : objeto.total.props.children[0].props.children}</div>
                              <div>{e.target.id === "input-1" ? e.target.value : objeto.total.props.children[1].props.children}</div>
                            </div>
                          ),
                        },
                        ...prevState.dataEmociones.slice(indice + 1)
                      ]
                    }));
                  }}
                />
                <Input
                  className="input-influenciadores"
                  type="text"
                  value={objeto.total?.props?.children[1]?.props?.children}
                  onChange={(e) => {
                    const nuevosDatos = [...cambios.dataEmociones];
                    nuevosDatos[indice].total = (
                      <div className="totalizador-preocupaciones">
                        <div>{objeto.total.props.children[0].props.children}</div>
                        <div>{e.target.value}</div>
                      </div>
                    );
                    setCambios(prevState => ({
                      ...prevState,
                      dataEmociones: [
                        ...prevState.dataEmociones.slice(0, indice),
                        {
                          total: (
                            <div className="totalizador-preocupaciones">
                              <div>{e.target.id === "input-0" ? e.target.value : objeto.total.props.children[0].props.children}</div>
                              <div>{e.target.id === "input-1" ? e.target.value : objeto.total.props.children[1].props.children}</div>
                            </div>
                          ),
                        },
                        ...prevState.dataEmociones.slice(indice + 1)
                      ]
                    }));
                  }}
                />
                </div>
                ))}
                </div>


                <div >
                <div>Twitter</div>
                {cambios.dataEmocionesTw.map((objeto, indice) => (
                <div key={indice} className="Influenciadores-modal">
                
                <Input
                  className="input-influenciadores"
                  type="text"
                  value={objeto.twitter?.props?.children[0]?.props?.children}
                  onChange={(e) => {
                    const nuevosDatos = [...cambios.dataEmocionesTw];
                    nuevosDatos[indice].twitter = (
                      <div className="totalizador-preocupaciones">
                        <div>{e.target.value}</div>
                        <div>{objeto.twitter.props.children[1].props.children}</div>
                      </div>
                    );
                    setCambios(prevState => ({
                      ...prevState,
                      dataEmocionesTw: [
                        ...prevState.dataEmocionesTw.slice(0, indice),
                        {
                          twitter: (
                            <div className="totalizador-preocupaciones">
                              <div>{e.target.id === "input-0" ? e.target.value : objeto.twitter.props.children[0].props.children}</div>
                              <div>{e.target.id === "input-1" ? e.target.value : objeto.twitter.props.children[1].props.children}</div>
                            </div>
                          ),
                        },
                        ...prevState.dataEmocionesTw.slice(indice + 1)
                      ]
                    }));
                  }}
                />
                <Input
                  className="input-influenciadores"
                  type="text"
                  value={objeto.twitter?.props?.children[1]?.props?.children}
                  onChange={(e) => {
                    const nuevosDatos = [...cambios.dataEmocionesTw];
                    nuevosDatos[indice].twitter = (
                      <div className="totalizador-preocupaciones">
                        <div>{objeto.twitter.props.children[0].props.children}</div>
                        <div>{e.target.value}</div>
                      </div>
                    );
                    setCambios(prevState => ({
                      ...prevState,
                      dataEmocionesTw: [
                        ...prevState.dataEmocionesTw.slice(0, indice),
                        {
                          twitter: (
                            <div className="totalizador-preocupaciones">
                              <div>{e.target.id === "input-0" ? e.target.value : objeto.twitter.props.children[0].props.children}</div>
                              <div>{e.target.id === "input-1" ? e.target.value : objeto.twitter.props.children[1].props.children}</div>
                            </div>
                          ),
                        },
                        ...prevState.dataEmocionesTw.slice(indice + 1)
                      ]
                    }));
                  }}
                />
                </div>
                ))}
                </div> */}

                <div >
                <div>Facebook</div>
                {cambios.dataEmocionesFb.map((objeto, indice) => (
                <div key={indice} className="Influenciadores-modal">
                
                <Input
                  className="input-influenciadores"
                  type="text"
                  value={objeto.facebook?.props?.children[0]?.props?.children}
                  onChange={(e) => {
                    const nuevosDatos = [...cambios.dataEmocionesFb];
                    nuevosDatos[indice].facebook = (
                      <div className="totalizador-preocupaciones">
                        <div>{e.target.value}</div>
                        <div>{objeto.facebook.props.children[1].props.children}</div>
                      </div>
                    );
                    setCambios(prevState => ({
                      ...prevState,
                      dataEmocionesFb: [
                        ...prevState.dataEmocionesFb.slice(0, indice),
                        {
                          facebook: (
                            <div className="totalizador-preocupaciones">
                              <div>{e.target.id === "input-0" ? e.target.value : objeto.facebook.props.children[0].props.children}</div>
                              <div>{e.target.id === "input-1" ? e.target.value : objeto.facebook.props.children[1].props.children}</div>
                            </div>
                          ),
                        },
                        ...prevState.dataEmocionesFb.slice(indice + 1)
                      ]
                    }));
                  }}
                />
                <Input
                  className="input-influenciadores"
                  type="text"
                  value={objeto.facebook?.props?.children[1]?.props?.children}
                  onChange={(e) => {
                    const nuevosDatos = [...cambios.dataEmocionesFb];
                    nuevosDatos[indice].facebook = (
                      <div className="totalizador-preocupaciones">
                        <div>{objeto.facebook.props.children[0].props.children}</div>
                        <div>{e.target.value}</div>
                      </div>
                    );
                    setCambios(prevState => ({
                      ...prevState,
                      dataEmocionesFb: [
                        ...prevState.dataEmocionesFb.slice(0, indice),
                        {
                          facebook: (
                            <div className="totalizador-preocupaciones">
                              <div>{e.target.id === "input-0" ? e.target.value : objeto.facebook.props.children[0].props.children}</div>
                              <div>{e.target.id === "input-1" ? e.target.value : objeto.facebook.props.children[1].props.children}</div>
                            </div>
                          ),
                        },
                        ...prevState.dataEmocionesFb.slice(indice + 1)
                      ]
                    }));
                  }}
                />
                </div>
                ))}
                </div>
                </div>
                </Modal>
          
        
          <div className="table">
          {/* <Table
            columns={cambios.columnsPreocupacionesTotal}
            dataSource={cambios.dataEmociones}
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
          /> */}
         {/*  <Table
            columns={cambios.columnsPreocupacionesTw}
            dataSource={cambios.dataEmocionesTw}
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
 */}
          <Table
            columns={cambios.columnsPreocupacionesFb}
            dataSource={cambios.dataEmocionesFb}
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

          :  <div className="table">
         {/*  <Table
            columns={cambios.columnsPreocupacionesTotal}
            dataSource={cambios.dataEmociones}
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
          /> */}
          {/* <Table
            columns={cambios.columnsPreocupacionesTw}
            dataSource={cambios.dataEmocionesTw}
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
          /> */}

          <Table
            columns={cambios.columnsPreocupacionesFb}
            dataSource={cambios.dataEmocionesFb}
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
        }
        </div>



        <div className="cuerpo">
          <div className="titulo2">
            <RiFileUserLine />
          </div>

          <div className="titulo2">IMAGEN</div>
        </div>
        <Tag className="tag">Top 3 principales</Tag>

        <div className="container-table">
       
        {editable.general ? 
          <div> {/*CONTENEDOR MODAL */}

                <Button type="primary" style={{marginLeft:'2rem', marginTop:'1rem'}} onClick={()=>showModalTorta('dataImagenes')} disabled={!editable.diapositiva5}>
                Editar valores
                </Button>
                <Modal
                title="Imagenes -Top 3"
                open={modals.dataImagenes}
                onOk={handleOk}
                okText="Guardar"
                cancelText="Cancelar"
                onCancel={handleCancel}
                >
                <div className="Influenciadores-modal">

                <div className="contenedor-modal-preocupaciones" >
                <div>Total</div>
                {cambios.dataImagenes.map((objeto, indice) => (
                <div key={indice} className="Influenciadores-modal">
                
                <Input
                  className="input-influenciadores"
                  type="text"
                  value={objeto.total?.props?.children[0]?.props?.children}
                  onChange={(e) => {
                    const nuevosDatos = [...cambios.dataImagenes];
                    nuevosDatos[indice].total = (
                      <div className="totalizador-preocupaciones">
                        <div>{e.target.value}</div>
                        <div>{objeto.total.props.children[1].props.children}</div>
                      </div>
                    );
                    setCambios(prevState => ({
                      ...prevState,
                      dataImagenes: [
                        ...prevState.dataImagenes.slice(0, indice),
                        {
                          total: (
                            <div className="totalizador-preocupaciones">
                              <div>{e.target.id === "input-0" ? e.target.value : objeto.total.props.children[0].props.children}</div>
                              <div>{e.target.id === "input-1" ? e.target.value : objeto.total.props.children[1].props.children}</div>
                            </div>
                          ),
                        },
                        ...prevState.dataImagenes.slice(indice + 1)
                      ]
                    }));
                  }}
                />
                <Input
                  className="input-influenciadores"
                  type="text"
                  value={objeto.total?.props?.children[1]?.props?.children}
                  onChange={(e) => {
                    const nuevosDatos = [...cambios.dataImagenes];
                    nuevosDatos[indice].total = (
                      <div className="totalizador-preocupaciones">
                        <div>{objeto.total.props.children[0].props.children}</div>
                        <div>{e.target.value}</div>
                      </div>
                    );
                    setCambios(prevState => ({
                      ...prevState,
                      dataImagenes: [
                        ...prevState.dataImagenes.slice(0, indice),
                        {
                          total: (
                            <div className="totalizador-preocupaciones">
                              <div>{e.target.id === "input-0" ? e.target.value : objeto.total.props.children[0].props.children}</div>
                              <div>{e.target.id === "input-1" ? e.target.value : objeto.total.props.children[1].props.children}</div>
                            </div>
                          ),
                        },
                        ...prevState.dataImagenes.slice(indice + 1)
                      ]
                    }));
                  }}
                />
                </div>
                ))}
                </div>


                {/* <div >
                <div>Twitter</div>
                {cambios.dataImagenesTw.map((objeto, indice) => (
                <div key={indice} className="Influenciadores-modal">
                
                <Input
                  className="input-influenciadores"
                  type="text"
                  value={objeto.twitter?.props?.children[0]?.props?.children}
                  onChange={(e) => {
                    const nuevosDatos = [...cambios.dataImagenesTw];
                    nuevosDatos[indice].twitter = (
                      <div className="totalizador-preocupaciones">
                        <div>{e.target.value}</div>
                        <div>{objeto.twitter.props.children[1].props.children}</div>
                      </div>
                    );
                    setCambios(prevState => ({
                      ...prevState,
                      dataImagenesTw: [
                        ...prevState.dataImagenesTw.slice(0, indice),
                        {
                          twitter: (
                            <div className="totalizador-preocupaciones">
                              <div>{e.target.id === "input-0" ? e.target.value : objeto.twitter.props.children[0].props.children}</div>
                              <div>{e.target.id === "input-1" ? e.target.value : objeto.twitter.props.children[1].props.children}</div>
                            </div>
                          ),
                        },
                        ...prevState.dataImagenesTw.slice(indice + 1)
                      ]
                    }));
                  }}
                />
                <Input
                  className="input-influenciadores"
                  type="text"
                  value={objeto.twitter?.props?.children[1]?.props?.children}
                  onChange={(e) => {
                    const nuevosDatos = [...cambios.dataImagenesTw];
                    nuevosDatos[indice].twitter = (
                      <div className="totalizador-preocupaciones">
                        <div>{objeto.twitter.props.children[0].props.children}</div>
                        <div>{e.target.value}</div>
                      </div>
                    );
                    setCambios(prevState => ({
                      ...prevState,
                      dataImagenesTw: [
                        ...prevState.dataImagenesTw.slice(0, indice),
                        {
                          twitter: (
                            <div className="totalizador-preocupaciones">
                              <div>{e.target.id === "input-0" ? e.target.value : objeto.twitter.props.children[0].props.children}</div>
                              <div>{e.target.id === "input-1" ? e.target.value : objeto.twitter.props.children[1].props.children}</div>
                            </div>
                          ),
                        },
                        ...prevState.dataImagenesTw.slice(indice + 1)
                      ]
                    }));
                  }}
                />
                </div>
                ))}
                </div> */}

                <div >
                <div>Facebook</div>
                {cambios.dataImagenesFb.map((objeto, indice) => (
                <div key={indice} className="Influenciadores-modal">
                
                <Input
                  className="input-influenciadores"
                  type="text"
                  value={objeto.facebook?.props?.children[0]?.props?.children}
                  onChange={(e) => {
                    const nuevosDatos = [...cambios.dataImagenesFb];
                    nuevosDatos[indice].facebook = (
                      <div className="totalizador-preocupaciones">
                        <div>{e.target.value}</div>
                        <div>{objeto.facebook.props.children[1].props.children}</div>
                      </div>
                    );
                    setCambios(prevState => ({
                      ...prevState,
                      dataImagenesFb: [
                        ...prevState.dataImagenesFb.slice(0, indice),
                        {
                          facebook: (
                            <div className="totalizador-preocupaciones">
                              <div>{e.target.id === "input-0" ? e.target.value : objeto.facebook.props.children[0].props.children}</div>
                              <div>{e.target.id === "input-1" ? e.target.value : objeto.facebook.props.children[1].props.children}</div>
                            </div>
                          ),
                        },
                        ...prevState.dataImagenesFb.slice(indice + 1)
                      ]
                    }));
                  }}
                />
                <Input
                  className="input-influenciadores"
                  type="text"
                  value={objeto.facebook?.props?.children[1]?.props?.children}
                  onChange={(e) => {
                    const nuevosDatos = [...cambios.dataImagenesFb];
                    nuevosDatos[indice].facebook = (
                      <div className="totalizador-preocupaciones">
                        <div>{objeto.facebook.props.children[0].props.children}</div>
                        <div>{e.target.value}</div>
                      </div>
                    );
                    setCambios(prevState => ({
                      ...prevState,
                      dataImagenesFb: [
                        ...prevState.dataImagenesFb.slice(0, indice),
                        {
                          facebook: (
                            <div className="totalizador-preocupaciones">
                              <div>{e.target.id === "input-0" ? e.target.value : objeto.facebook.props.children[0].props.children}</div>
                              <div>{e.target.id === "input-1" ? e.target.value : objeto.facebook.props.children[1].props.children}</div>
                            </div>
                          ),
                        },
                        ...prevState.dataImagenesFb.slice(indice + 1)
                      ]
                    }));
                  }}
                />
                </div>
                ))}
                </div>
                </div>
                </Modal>

          <div className="table">
           {/*  <Table
              columns={cambios.columnsPreocupacionesTotal}
              dataSource={cambios.dataImagenes}
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
            /> */}
           {/*  <Table
              columns={cambios.columnsPreocupacionesTw}
              dataSource={cambios.dataImagenesTw}
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
            /> */}

            <Table
              columns={cambios.columnsPreocupacionesFb}
              dataSource={cambios.dataImagenesFb}
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
          :

          <div className="table">
            {/* <Table
              columns={cambios.columnsPreocupacionesTotal}
              dataSource={cambios.dataImagenes}
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
            /> */}
          {/*   <Table
              columns={cambios.columnsPreocupacionesTw}
              dataSource={cambios.dataImagenesTw}
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
            /> */}

            <Table
              columns={cambios.columnsPreocupacionesFb}
              dataSource={cambios.dataImagenesFb}
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
        }
          </div>
      

        {editable.general && (
          <div className="boton-confirmar">
            {contextHolder}
          <Button type="primary" className="boton-primary" onClick={()=>openMessageEdit('diapositiva5')} disabled={editable.diapositiva5}>
            Editar
          </Button>
          <Button type="primary" className="boton-primary" onClick={()=>openMessage('diapositiva5')} disabled={!editable.diapositiva5}>
            Guardar cambio
          </Button>
          <Button onClick={()=>handleDiscardChanges('diapositiva5', 'showModal5')} disabled={!editable.diapositiva5}>Descartar cambios</Button>
          <Modal
          open={modals.showModal5}
          title="¿Está seguro de que desea descartar los cambios?"
          okText="Sí"
          cancelText="No"
          onOk={() => {
            setEditable((prevState) => ({
              ...prevState,
              diapositiva5: false // Cambiar la diapositiva correspondiente a false
            }));
            resetValues('dataEmocionesTw')
            resetValues('dataEmocionesFb')
            resetValues('dataEmociones')
            resetValues('dataImagenes')
            resetValues('dataImagenesFb')
            resetValues('dataImagenesTw')
            
            setShowModal(false);
          }}
          onCancel={() => setShowModal(false)}
        >
          <p>Los cambios realizados se perderán permanentemente.</p>
        </Modal>
          </div>
          )}

        </div>
        {/*FIN DIAPOSITIVA 4*/}
        {/*DIAPOSITIVA 5*/}
        <div class="page-break" data-html2pdf-pagebreak style={{ display: cambios.diapositiva5.display, flexDirection:'column'}}>
        {/*Nav*/}
        <div className="contenedor-extremo">
          <div className="nav">
            <div className="reporte">
              <SlNotebook />
              <p>REPORTE DE SÍNTESIS</p>
            </div>
            {editable.general && <Button onClick={()=>handleDisplay('diapositiva5')}>X</Button>}
            <img src={logo} className="img" alt="logo"></img>
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
            {editable.diapositiva6  ? (
              <TextArea
              style={{ height: '100px', width: '250px' }}
                type="text"
                name="texto7"
                value={cambios.texto7}
                onChange={handleChange}
                maxLength={350}
              />
            ) : (
              <div>
                {cambios.texto7}
              </div>
            )}
          </div>

          <div className="contenedor1carta"> {/*contenedor de 1*/}
          <div className="titulo2">02.</div>
          {editable.diapositiva6  ? (
              <TextArea
              style={{ height: '100px', width: '250px' }}
                type="text"
                name="texto8"
                value={cambios.texto8}
                onChange={handleChange}
                maxLength={350}
              />
            ) : (
              <div>
                {cambios.texto8}
              </div>
            )}
           
          </div>

          <div className="contenedor1carta"> {/*contenedor de 1*/}
          <div className="titulo2">03.</div>
          {editable.diapositiva6  ? (
              <TextArea
              style={{ height: '100px', width: '250px' }}
                type="text"
                name="texto9"
                value={cambios.texto9}
                onChange={handleChange}
                maxLength={350}
              />
            ) : (
              <div>
                {cambios.texto9}
              </div>
            )}
            
          </div>

        </div>

        <div className="contenedor3cartas"> {/*contenedor de 3*/}
          <div className="contenedor1carta"> {/*contenedor de 1*/}
          <div className="titulo2">04.</div>
          {editable.diapositiva6  ? (
              <TextArea
                style={{ height: '100px', width: '250px' }}
                type="text"
                name="texto10"
                value={cambios.texto10}
                onChange={handleChange}
                maxLength={350}
              />
            ) : (
              <div>
                {cambios.texto10}
              </div>
            )}
       
          </div>

          <div className="contenedor1carta"> {/*contenedor de 1*/}
            <div className="titulo2">05.</div>
            {editable.diapositiva6  ? (
              <TextArea
                style={{ height: '100px', width: '250px' }}
                type="text"
                name="texto11"
                value={cambios.texto11}
                onChange={handleChange}
                maxLength={350}
              />
            ) : (
              <div>
                {cambios.texto11}
              </div>
            )}
          </div>

          <div className="contenedor1carta"> {/*contenedor de 1*/}
          <div className="titulo2">06.</div>
          {editable.diapositiva6  ? (
              <TextArea
                style={{ height: '100px', width: '250px' }}
                type="text"
                name="texto12"
                value={cambios.texto12}
                onChange={handleChange}
                maxLength={350}
              />
            ) : (
              <div>
                {cambios.texto12}
              </div>
            )}
          </div>
        </div>

        <div className="contenedor3cartas color"> {/*contenedor de 3*/}
          <div className="contenedor1carta"> {/*contenedor de 1*/}
          <div className="titulo2">07.</div>
          {editable.diapositiva6  ? (
              <TextArea
                style={{ height: '100px', width: '250px' }}
                type="text"
                name="texto13"
                value={cambios.texto13}
                onChange={handleChange}
                maxLength={350}
              />
            ) : (
              <div>
                {cambios.texto13}
              </div>
            )}
          </div>
        
          <div className="contenedor1carta"> {/*contenedor de 1*/}
          <div className="titulo2">08.</div>
          {editable.diapositiva6  ? (
              <TextArea
                style={{ height: '100px', width: '250px' }}
                type="text"
                name="texto14"
                value={cambios.texto14}
                onChange={handleChange}
                maxLength={350}
              />
            ) : (
              <div>
                {cambios.texto14}
              </div>
            )}            
          </div>

          <div className="contenedor1carta"> {/*contenedor de 1*/}
            <div className="titulo2">09.</div>
            {editable.diapositiva6  ? (
              <TextArea
                style={{ height: '100px', width: '250px' }}
                type="text"
                name="texto15"
                value={cambios.texto15}
                onChange={handleChange}
                maxLength={350}
              />
            ) : (
              <div>
                {cambios.texto15}
              </div>
            )}       
          </div>
        </div>

      </div>

      {editable.general && (
          <div className="boton-confirmar">
            {contextHolder}
          <Button type="primary" className="boton-primary" onClick={()=>openMessageEdit('diapositiva6')} disabled={editable.diapositiva6}>
            Editar
          </Button>
          <Button type="primary" className="boton-primary" onClick={()=>openMessage('diapositiva6')} disabled={!editable.diapositiva6}>
            Guardar cambio
          </Button>
          <Button onClick={()=>handleDiscardChanges('diapositiva6')} disabled={!editable.diapositiva6}>Descartar cambios</Button>
          <Modal
        /*   open={modals.showModal6} */
          title="¿Está seguro de que desea descartar los cambios?"
          okText="Sí"
          cancelText="No"
          onOk={() => {
            setEditable((prevState) => ({
              ...prevState,
              diapositiva6: false // Cambiar la diapositiva correspondiente a false
            }));
            /* resetValues() */
            setShowModal(false);
          }}
          onCancel={() => setShowModal(false)}
        >
          <p>Los cambios realizados se perderán permanentemente.</p>
        </Modal>
          </div>
          )}


        </div>
        {/*FIN DIAPOSITIVA 5*/}
        {/*DIAPOSITIVA 6*/}
        <div class="page-break" data-html2pdf-pagebreak style={{ display: cambios.diapositiva6.display, flexDirection:'column'}}>
          {/*Nav*/}
          <div className="contenedor-extremo">
          <div className="nav">
              <div className="reporte">
                <SlNotebook />
                <p>REPORTE DE SÍNTESIS</p>
              </div>
              {editable.general && <Button onClick={()=>handleDisplay('diapositiva6')}>X</Button>}
              <img src={logo} className="img" alt="logo"></img>
            </div>
          </div>


        <div className="cuerpo">
            <div className="titulo2">
                <VscCompass /> 
            </div>

            <div className="titulo2">
              MAPA DE PERCEPCIONES
            </div>
          </div>
          <Tag className="tag">Síntesis de términos y vocablos que connotan las valoraciones positivas y negativas de las audiencias en el marco del presente análisis</Tag>

          <div className="subtitulo">
          <div className="titulo0 subtitulo">LO QUE SE DESTACADA DE LAS PERCEPCIONES POSITIVAS Y NEGATIVAS</div>
          </div>


          {editable.general ? 
          <> 
            <>
                  <Button type="primary" style={{marginLeft:'2rem', marginTop:'1rem'}} onClick={()=>showModalTorta('dataMapaPercepciones')}  disabled={!editable.diapositiva7}>
                    Editar valores
                  </Button>
                  <Modal
                    title="Mapa de Percepciones"
                    open={modals.dataMapaPercepciones}
                    onOk={handleOk}
                    okText="Guardar"
                    cancelText="Cancelar"
                    onCancel={handleCancel}
                  >
                  <div className="modalTorta">
                  {cambios.mapaPercepciones && cambios.mapaPercepciones.length > 0 && cambios.mapaPercepciones.map((hashtag, index) => (
                  <div className="modificarnube" key={index}>
                    <Input
                      className="input-nubepalabras"
                      type="text"
                      value={hashtag.text}
                      onChange={(e) =>
                        handleHashtagChangePercepciones(index, "text", e.target.value)
                      }
                    />
                    <InputNumber
                      value={hashtag.value}
                      onChange={(value) =>
                        handleHashtagChangePercepciones(index, "value", value)
                      }
                    />
                   {/*  <Input
                      className="input-nubepalabras"
                      type="text"
                      value={hashtag.color}
                      onChange={(e) =>
                        handleHashtagChangePercepciones(index, "color", e.target.value)
                      }
                    /> */}
                  </div>
                ))}
                </div>
                  </Modal>
                  </>
          
          <div>
          <WordCloud
            words={cambios.mapaPercepciones}
            options={opcionesPercepciones}
          />
          </div>
          </>
            : 
            
            <div>
            <WordCloud
              words={cambios.mapaPercepciones}
              options={opcionesPercepciones}
            />
          </div>}
         
      
      {editable.general && (
            <div className="boton-confirmar">
              {contextHolder}
            <Button type="primary" className="boton-primary" onClick={()=>openMessageEdit('diapositiva7')} disabled={editable.diapositiva7}>
              Editar
            </Button>
            <Button type="primary" className="boton-primary" onClick={()=>openMessage('diapositiva7')} disabled={!editable.diapositiva7}>
              Guardar cambio
            </Button>
            <Button onClick={()=>handleDiscardChanges('diapositiva7', 'showModal7')} disabled={!editable.diapositiva7}>Descartar cambios</Button>
            <Modal
            open={modals.showModal7}
            title="¿Está seguro de que desea descartar los cambios?"
            okText="Sí"
            cancelText="No"
            onOk={() => {
              setEditable((prevState) => ({
                ...prevState,
                diapositiva7: false // Cambiar la diapositiva correspondiente a false
              }));
              resetValues('mapaPercepciones')
              setShowModal(false);
            }}
            onCancel={() => setShowModal(false)}
          >
            <p>Los cambios realizados se perderán permanentemente.</p>
          </Modal>
            </div>
            )}

        </div>
        {/*FIN DIAPOSITIVA 6*/}
        {/*DIAPOSITIVA 7*/}
      <div class="page-break" data-html2pdf-pagebreak style={{ display: cambios.diapositiva7.display, flexDirection:'column'}}>
      {/*Nav*/}
      <div className="contenedor-extremo">
          <div className="nav">
              <div className="reporte">
                <SlNotebook />
                <p>REPORTE DE SÍNTESIS</p>
              </div>
              {editable.general && <Button onClick={()=>handleDisplay('diapositiva7')}>X</Button>}
              <img src={logo} className="img" alt="logo"></img>
            </div>
          </div>

          <div className="cuerpo">
            <div className="titulo2">
              <HiOutlineChatAlt2 />
            </div>

            <div className="titulo2">
            FORTALEZAS Y DEBILIDADES
            </div>
          </div>

          {editable.general ? 
            
            <div>
                <>
                  <Button type="primary" style={{marginTop:'1rem' , marginLeft:'2rem'}} onClick={()=>showModalTorta('fortalezasDebilidades')}  disabled={!editable.diapositiva10}>
                    Editar valores
                  </Button>
                  <Modal
                    title="Fortalezas y Debilidades"
                    open={modals.fortalezasDebilidades}
                    onOk={handleOk}
                    okText="Guardar"
                    cancelText="Cancelar"
                    onCancel={handleCancel}
                  >
                  <div className="modalTorta">
                  {cambios.fortalezasDebilidades && cambios.fortalezasDebilidades.length > 0 && cambios.fortalezasDebilidades.map((porcentaje, index) => (
                    <div className="modificarnube" key={index}>
                      <Input
                        className="input-nubepalabras"
                        type="text"
                        value={porcentaje.text}
                        onChange={(e) =>
                          handleHashtagChangeFortalezas(index, "text", e.target.value)
                        }
                      />
                      <Input
                        type="text"
                        value={porcentaje.value}
                        onChange={(e) =>
                          handleHashtagChangeFortalezas(index, "value", e.target.value)
                        }
                      />
                    </div>
                  ))}
                </div>
                  </Modal>
                  </>

              <div className="fortalezas-debilidades"> {/*CONTENEDOR GENERAL */}
            <div className="fortalezas-positivo"> {/*CONTENEDOR HORIZONTAL POSITIVO */}
              <div className="fortalezas-circulo"> {/*CONTENEDOR CIRCULO */}
              <div className="circulo-fortalezas-positivo">{cambios.fortalezasDebilidades[0].value}</div>
              <div>
              <div className="circulo-positivo">POSITIVIDAD</div>
              <div>Expansión comercial</div>
              </div>
              </div>
              <hr></hr>
              <div className='fortalezas-texto'> {/*CONTENEDOR TEXTO */}
              {editable.diapositiva10  ? (  
              <TextArea
                style={{ height: '150px', width: '400px' }}
                type="text"
                name="fortalezasDebilidadestexto1"
                value={cambios.fortalezasDebilidadestexto1}
                onChange={handleChange}
                maxLength={600}
              />
            ) : (
              <div>
                {cambios.fortalezasDebilidadestexto1}
              </div>
            )} 

            </div>
            </div>
            <div className="fortalezas-positivo"> {/*CONTENEDOR HORIZONTAL NEGATIVO */}
              <div className="fortalezas-circulo"> {/*CONTENEDOR CIRCULO */}
              <div className="circulo-fortalezas-negativo">{cambios.fortalezasDebilidades[1].value}</div>
              <div>
              <div className="circulo-negativo">NEGATIVIDAD</div>
              <div>Vulnerabilidad habitacional</div>
              </div>
              </div>
              <hr></hr>
              <div className='fortalezas-texto'> {/*CONTENEDOR TEXTO */}
      
              {editable.diapositiva10  ? (  
              <TextArea
                style={{ height: '150px', width: '400px' }}
                type="text"
                name="fortalezasDebilidadestexto2"
                value={cambios.fortalezasDebilidadestexto2}
                onChange={handleChange}
                maxLength={600}
              />
            ) : (
              <div>
                {cambios.fortalezasDebilidadestexto2}
              </div>
            )}  
              </div>
            </div>
          </div>
          </div>
          :

          <div className="fortalezas-debilidades"> {/*CONTENEDOR GENERAL */}
          <div className="fortalezas-positivo"> {/*CONTENEDOR HORIZONTAL POSITIVO */}
            <div className="fortalezas-circulo"> {/*CONTENEDOR CIRCULO */}
            <div className="circulo-fortalezas-positivo">{cambios.fortalezasDebilidades[0].value}</div>
            <div>
            <div className="circulo-positivo">POSITIVIDAD</div>
            <div>Expansión comercial</div>
            </div>
            </div>
            <hr></hr>
            <div className='fortalezas-texto'> {/*CONTENEDOR TEXTO */}
          {cambios.fortalezasDebilidadestexto1}

          </div>
          </div>
          <div className="fortalezas-positivo"> {/*CONTENEDOR HORIZONTAL NEGATIVO */}
            <div className="fortalezas-circulo"> {/*CONTENEDOR CIRCULO */}
            <div className="circulo-fortalezas-negativo">{cambios.fortalezasDebilidades[1].value}</div>
            <div>
            <div className="circulo-negativo">NEGATIVIDAD</div>
            <div>Vulnerabilidad habitacional</div>
            </div>
            </div>
            <hr></hr>
            <div className='fortalezas-texto'> {/*CONTENEDOR TEXTO */}
         {cambios.fortalezasDebilidadestexto2}
            </div>
          </div>
        </div>
       }

        {editable.general && (
          <div className="boton-confirmar">
            {contextHolder}
          <Button type="primary" className="boton-primary" onClick={()=>openMessageEdit('diapositiva10')} disabled={editable.diapositiva10}>
            Editar
          </Button>
          <Button type="primary" className="boton-primary" onClick={()=>openMessage('diapositiva10')} disabled={!editable.diapositiva10}>
            Guardar cambio
          </Button>
          <Button onClick={()=>handleDiscardChanges('diapositiva10','showModal10')} disabled={!editable.diapositiva10}>Descartar cambios</Button>
          <Modal
          open={modals.showModal10}
          title="¿Está seguro de que desea descartar los cambios?"
          okText="Sí"
          cancelText="No"
          onOk={() => {
            setEditable((prevState) => ({
              ...prevState,
              diapositiva10: false // Cambiar la diapositiva correspondiente a false
            }));
            resetValues('fortalezasDebilidadestexto1')
            resetValues('fortalezasDebilidadestexto2')
            resetValues('fortalezasDebilidades')
            setShowModal(false);
          }}
          onCancel={() => setShowModal(false)}
        >
          <p>Los cambios realizados se perderán permanentemente.</p>
        </Modal>
          </div>
          )}

        </div>
        {/*FIN DIAPOSITIVA 7*/}
        {/*DIAPOSITIVA 8*/}
        <div class="page-break" data-html2pdf-pagebreak style={{ display: cambios.diapositiva8.display, flexDirection:'column'}}>
    {/*Nav*/}
    <div className="contenedor-extremo">
         <div className="nav">
            <div className="reporte">
              <SlNotebook />
              <p>REPORTE DE SÍNTESIS</p>
            </div>
            {editable.general && <Button onClick={()=>handleDisplay('diapositiva8')}>X</Button>}
            <img src={logo} className="img" alt="logo"></img>
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
          {editable.diapositiva8  ? (  
              <TextArea
                style={{ height: '300px', width: '400px' }}
                type="text"
                name="sugerencia1"
                value={cambios.sugerencia1}
                onChange={handleChange}
                maxLength={600}
              />
            ) : (
              <div>
                {cambios.sugerencia1}
              </div>
            )}   {/* texto*/}

          {editable.diapositiva8  ? (  
              <TextArea
                style={{ height: '100px', width: '400px' }}
                type="text"
                name="terminos1"
                value={cambios.terminos1}
                onChange={handleChange}
                maxLength={300}
              />
            ) : (
              <div>
                {cambios.terminos1}
              </div>
            )}  {/* terminos*/}
          </div>

          </div>

          <div className="contenedorEmocionesAtributos"> {/*CONTENEDOR EMOCIONES Y ATRIBUTOS */}
          <div className="emocionesAtributos"> {/*nav */}
            EMOCIONES Y ATRIBUTOS PARA INCLUIR EN EL MENSAJE*
            </div>
            <div className="contenedorTablas"> {/*Contenedor tablas */}
            {editable.general ? 
            <div className="contenedorEmociones"> {/*CONTENEDOR emociones */}

                <>
                  <Button type="primary" style={{marginTop:'1rem'}} onClick={()=>showModalTorta('dataEmocionesComunicacion')}  disabled={!editable.diapositiva8}>
                    Editar valores
                  </Button>
                  <Modal
                    title="Emociones para incluir en el mensaje"
                    open={modals.dataEmocionesComunicacion}
                    onOk={handleOk}
                    okText="Guardar"
                    cancelText="Cancelar"
                    onCancel={handleCancel}
                  >
                <div className="modalTorta">
             
                {cambios.dataEmocionesComunicacion.map((objeto, indice) => (
                  <div key={indice}>
                    <Input
                      className="input-influenciadores"
                      type="text"
                      value={objeto.emociones.props.children.props.children}
                      onChange={(e) => handleInputChangeEmociones(e, indice)}
                    />
                  </div>
                ))}

                </div>
                  </Modal>
                  </>







            <div> {/*tabla */}
            <Table
              columns={cambios.columnsEmociones}
              dataSource={[...cambios.dataEmocionesComunicacion]}
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
            <ReactWordcloud words={cambios.palabrasRecomendadas} options={opcionesRecomendadas} />
            </div>
            </div>

            :

            <div className="contenedorEmociones"> {/*CONTENEDOR emociones */}
            <div> {/*tabla */}
            <Table
              columns={cambios.columnsEmociones}
              dataSource={[...cambios.dataEmocionesComunicacion]}
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
            <ReactWordcloud words={cambios.palabrasRecomendadas} options={opcionesRecomendadas} />
            </div>
            </div>
          
            }



            {editable.general ? 
            <div class="contenedorEmociones"> {/*CONTENEDOR atributos */}
              <>
                  <Button type="primary" style={{marginTop:'1rem'}} onClick={()=>showModalTorta('dataAtributosComunicacion')}  disabled={!editable.diapositiva8}>
                    Editar valores
                  </Button>
                  <Modal
                    title="Atributos para incluir en el mensaje"
                    open={modals.dataAtributosComunicacion}
                    onOk={handleOk}
                    okText="Guardar"
                    cancelText="Cancelar"
                    onCancel={handleCancel}
                  >
                <div className="modalTorta">
             
                {cambios.dataAtributosComunicacion.map((objeto, indice) => (
                  <div key={indice}>
                    <Input
                      className="input-influenciadores"
                      type="text"
                      value={objeto.emociones.props.children.props.children}
                      onChange={(e) => handleInputChangeAtributos(e, indice)}
                    />
                  </div>
                ))}

                </div>
                  </Modal>
                  </>


            <div> {/*tabla */}
            <Table
              columns={cambios.columnsAtributos}
              dataSource={cambios.dataAtributosComunicacion}
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
            <ReactWordcloud words={cambios.palabrasRecomendadas} options={opcionesRecomendadas} width="200" height="200" />
            </div>
            </div>
                :
                <div> {/*CONTENEDOR atributos */}
                <div> {/*tabla */}
                <Table
                  columns={cambios.columnsAtributos}
                  dataSource={cambios.dataAtributosComunicacion}
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
                <ReactWordcloud words={cambios.palabrasRecomendadas} options={opcionesRecomendadas} width="200" height="200" />
                </div>
                </div>
                }


            </div>

          </div>
        

        </div>
        <Tag className="tag piepagina"> {/*pie de pag */}
          *Ver documento de QSocialNow "Criterios y técnicas para la producción de contenidos"
        </Tag>
        {editable.general && (
          <div className="boton-confirmar">
            {contextHolder}
          <Button type="primary" className="boton-primary" onClick={()=>openMessageEdit('diapositiva8')} disabled={editable.diapositiva8}>
            Editar
          </Button>
          <Button type="primary" className="boton-primary" onClick={()=>openMessage('diapositiva8')} disabled={!editable.diapositiva8}>
            Guardar cambio
          </Button>
          <Button onClick={()=>handleDiscardChanges('diapositiva8','showModal8')} disabled={!editable.diapositiva8}>Descartar cambios</Button>
          <Modal
          open={modals.showModal8}
          title="¿Está seguro de que desea descartar los cambios?"
          okText="Sí"
          cancelText="No"
          onOk={() => {
            setEditable((prevState) => ({
              ...prevState,
              diapositiva8: false // Cambiar la diapositiva correspondiente a false
            }));
            resetValues('dataEmocionesComunicacion')
            resetValues('dataAtributosComunicacion')
            setShowModal(false);
          }}
          onCancel={() => setShowModal(false)}
        >
          <p>Los cambios realizados se perderán permanentemente.</p>
        </Modal>
          </div>
          )}


        </div>
        {/*FIN DIAPOSITIVA 8*/}
        {/*DIAPOSITIVA 9*/}        
        <div class="page-break" data-html2pdf-pagebreak style={{ display: cambios.diapositiva9.display, flexDirection:'column'}}>
        {/*Nav*/}
    <div className="contenedor-extremo">
          <div className="nav">
            <div className="reporte">
              <SlNotebook />
              <p>REPORTE DE SÍNTESIS</p>
            </div>
            {editable.general && <Button onClick={()=>handleDisplay('diapositiva9')}>X</Button>}
            <img src={logo} className="img" alt="logo"></img>
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
          {editable.diapositiva8  ? (  
              <TextArea
                style={{ height: '300px', width: '400px' }}
                type="text"
                name="sugerencia2"
                value={cambios.sugerencia2}
                onChange={handleChange}
                maxLength={600}
              />
            ) : (
              <div>
                {cambios.sugerencia2}
              </div>
            )}   {/* texto*/}

          {editable.diapositiva8  ? (  
              <TextArea
                style={{ height: '100px', width: '400px' }}
                type="text"
                name="terminos1"
                value={cambios.terminos2}
                onChange={handleChange}
                maxLength={300}
              />
            ) : (
              <div>
                {cambios.terminos2}
              </div>
            )}  {/* terminos*/}
          </div>

          </div>

          <div className="contenedorEmocionesAtributos"> {/*CONTENEDOR EMOCIONES Y ATRIBUTOS */}
          <div className="emocionesAtributos"> {/*nav */}
            EMOCIONES Y ATRIBUTOS PARA INCLUIR EN EL MENSAJE*
            </div>
            <div className="contenedorTablas"> {/*Contenedor tablas */}
            {editable.general ? 
            <div className="contenedorEmociones"> {/*CONTENEDOR emociones */}

                <>
                  <Button type="primary" style={{marginTop:'1rem'}} onClick={()=>showModalTorta('dataEmocionesComunicacion')}  disabled={!editable.diapositiva9}>
                    Editar valores
                  </Button>
                  <Modal
                    title="Emociones para incluir en el mensaje"
                    open={modals.dataEmocionesComunicacion}
                    onOk={handleOk}
                    okText="Guardar"
                    cancelText="Cancelar"
                    onCancel={handleCancel}
                  >
                <div className="modalTorta">
             
                {cambios.dataEmocionesComunicacion.map((objeto, indice) => (
                  <div key={indice}>
                    <Input
                      className="input-influenciadores"
                      type="text"
                      value={objeto.emociones.props.children.props.children}
                      onChange={(e) => handleInputChangeEmociones(e, indice)}
                    />
                  </div>
                ))}

                </div>
                  </Modal>
                  </>







            <div> {/*tabla */}
            <Table
              columns={cambios.columnsEmociones}
              dataSource={[...cambios.dataEmocionesComunicacion]}
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
            <ReactWordcloud words={cambios.palabrasRecomendadas} options={opcionesRecomendadas} />
            </div>
            </div>

            :

            <div className="contenedorEmociones"> {/*CONTENEDOR emociones */}
            <div> {/*tabla */}
            <Table
              columns={cambios.columnsEmociones}
              dataSource={[...cambios.dataEmocionesComunicacion]}
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
            <ReactWordcloud words={cambios.palabrasRecomendadas} options={opcionesRecomendadas} />
            </div>
            </div>
          
            }



            {editable.general ? 
            <div class="contenedorEmociones"> {/*CONTENEDOR atributos */}
              <>
                  <Button type="primary" style={{marginTop:'1rem'}} onClick={()=>showModalTorta('dataAtributosComunicacion')}  disabled={!editable.diapositiva9}>
                    Editar valores
                  </Button>
                  <Modal
                    title="Atributos para incluir en el mensaje"
                    open={modals.dataAtributosComunicacion}
                    onOk={handleOk}
                    okText="Guardar"
                    cancelText="Cancelar"
                    onCancel={handleCancel}
                  >
                <div className="modalTorta">
             
                {cambios.dataAtributosComunicacion.map((objeto, indice) => (
                  <div key={indice}>
                    {console.log(objeto)}
                    <Input
                      className="input-influenciadores"
                      type="text"
                      value={objeto.emociones.props.children.props.children}
                      onChange={(e) => handleInputChangeEmociones(e, indice)}
                    />
                  </div>
                ))}

                </div>
                  </Modal>
                  </>


            <div> {/*tabla */}
            <Table
              columns={cambios.columnsAtributos}
              dataSource={cambios.dataAtributosComunicacion}
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
            <ReactWordcloud words={cambios.palabrasRecomendadas} options={opcionesRecomendadas} width="200" height="200" />
            </div>
            </div>
                :
                <div> {/*CONTENEDOR atributos */}
                <div> {/*tabla */}
                <Table
                  columns={cambios.columnsAtributos}
                  dataSource={cambios.dataAtributosComunicacion}
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
                <ReactWordcloud words={cambios.palabrasRecomendadas} options={opcionesRecomendadas} width="200" height="200" />
                </div>
                </div>
                }


            </div>

          </div>
        

        </div>
        <Tag className="tag piepagina"> {/*pie de pag */}
          *Ver documento de QSocialNow "Criterios y técnicas para la producción de contenidos"
        </Tag>

        {editable.general && (
          <div className="boton-confirmar">
            {contextHolder}
          <Button type="primary" className="boton-primary" onClick={()=>openMessageEdit('diapositiva9')} disabled={editable.diapositiva9}>
            Editar
          </Button>
          <Button type="primary" className="boton-primary" onClick={()=>openMessage('diapositiva9')} disabled={!editable.diapositiva9}>
            Guardar cambio
          </Button>
          <Button onClick={()=>handleDiscardChanges('diapositiva9')} disabled={!editable.diapositiva9}>Descartar cambios</Button>
          <Modal
          /* open={modals.showModal9} */
          title="¿Está seguro de que desea descartar los cambios?"
          okText="Sí"
          cancelText="No"
          onOk={() => {
            setEditable((prevState) => ({
              ...prevState,
              diapositiva9: false // Cambiar la diapositiva correspondiente a false
            }));
            /* resetValues() */
            setShowModal(false);
          }}
          onCancel={() => setShowModal(false)}
        >
          <p>Los cambios realizados se perderán permanentemente.</p>
        </Modal>
          </div>
          )}



        </div>
        {/*FIN DIAPOSITIVA 9*/} 
        {/*DIAPOSITIVA 10*/}
        <div class="page-break" data-html2pdf-pagebreak >
        {/*ULTIMA DIAPOSITIVA */}        
        <div className="final">
       
        <img className="logo-final" src={logo2} alt="logo"/>
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
        {/*FIN DIAPOSITIVA 10*/}

      </div>
        
      </div>

      
    </Fragment>
  );
}
