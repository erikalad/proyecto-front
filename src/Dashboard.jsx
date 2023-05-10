/** @format */

import React, { useEffect, useState } from "react";
import { Pie } from "@nivo/pie";
import { Button, Col, Row, Statistic } from "antd";
import CountUp from "react-countup";
import ReactApexChart from "react-apexcharts";
import { Select } from "antd";
import { Progress } from "antd";
import "./Dashboard.css";
import html2pdf from "html2pdf.js";
import ReactWordcloud from "react-wordcloud";
import HeatmapChart from "./MapHead";
import Chart from "./Burbujas";
import { RadialTreeGraph } from '@ant-design/graphs';
import DemoColumn from "./components/Graficos/Graph";
import DemoRose from "./components/Graficos/Rose";
import DemoHeatmap from "./components/Graficos/Polar";
import DemoRadar from "./components/Graficos/Radar";
import DemoTreemap from "./components/Graficos/Treemap";
import DemoWordCloud from "./components/Graficos/NubePalabras";
import DemoBidirectionalBar from "./components/Graficos/Polaridad";
import DemoMix from "./components/Graficos/Mix";
import Graph from "./components/Graficos/GrafoPy";
import Graph2 from "./components/Graficos/Grafo";



const data = {
  id: 'Modeling Methods',
  children: [
    {
      id: 'Classification',
      children: [
        { id: 'Logistic regression', value: 'Logistic regression' },
        {
          id: 'Linear discriminant analysis',
          value: 'Linear discriminant analysis',
        },
        { id: 'Rules', value: 'Rules' },
        { id: 'Decision trees', value: 'Decision trees' },
        { id: 'Naive Bayes', value: 'Naive Bayes' },
        { id: 'K nearest neighbor', value: 'K nearest neighbor' },
        {
          id: 'Probabilistic neural network',
          value: 'Probabilistic neural network',
        },
        { id: 'Support vector machine', value: 'Support vector machine' },
      ],
      value: 'Classification',
    },
    {
      id: 'Consensus',
      children: [
        {
          id: 'Models diversity',
          children: [
            {
              id: 'Different initializations',
              value: 'Different initializations',
            },
            {
              id: 'Different parameter choices',
              value: 'Different parameter choices',
            },
            {
              id: 'Different architectures',
              value: 'Different architectures',
            },
            {
              id: 'Different modeling methods',
              value: 'Different modeling methods',
            },
            {
              id: 'Different training sets',
              value: 'Different training sets',
            },
            { id: 'Different feature sets', value: 'Different feature sets' },
          ],
          value: 'Models diversity',
        },
        {
          id: 'Methods',
          children: [
            { id: 'Classifier selection', value: 'Classifier selection' },
            { id: 'Classifier fusion', value: 'Classifier fusion' },
          ],
          value: 'Methods',
        },
        {
          id: 'Common',
          children: [
            { id: 'Bagging', value: 'Bagging' },
            { id: 'Boosting', value: 'Boosting' },
            { id: 'AdaBoost', value: 'AdaBoost' },
          ],
          value: 'Common',
        },
      ],
      value: 'Consensus',
    },
    {
      id: 'Regression',
      children: [
        {
          id: 'Multiple linear regression',
          value: 'Multiple linear regression',
        },
        { id: 'Partial least squares', value: 'Partial least squares' },
        {
          id: 'Multi-layer feedforward neural network',
          value: 'Multi-layer feedforward neural network',
        },
        {
          id: 'General regression neural network',
          value: 'General regression neural network',
        },
        {
          id: 'Support vector regression',
          value: 'Support vector regression',
        },
      ],
      value: 'Regression',
    },
  ],
  value: 'Modeling Methods',
};
const themeColor = '#73B3D1';
const config = {
  data,
  nodeCfg: {
    size: 30,
    type: 'circle',
    label: {
      style: {
        fill: '#fff',
      },
    },
    style: {
      fill: themeColor,
      stroke: '#0E1155',
      lineWidth: 2,
      strokeOpacity: 0.45,
      shadowColor: themeColor,
      shadowBlur: 25,
    },
    nodeStateStyles: {
      hover: {
        stroke: themeColor,
        lineWidth: 2,
        strokeOpacity: 1,
      },
    },
  },
  edgeCfg: {
    style: {
      stroke: themeColor,
      shadowColor: themeColor,
      shadowBlur: 20,
    },
    endArrow: {
      type: 'triangle',
      fill: themeColor,
      d: 15,
      size: 8,
    },
    edgeStateStyles: {
      hover: {
        stroke: themeColor,
        lineWidth: 2,
      },
    },
  },
  behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
};


function descargarPDF() {
  // Obtener el contenedor que queremos descargar como PDF
  const contenedor = document.body;

  // Crear una instancia de html2pdf con las opciones deseadas
  const opciones = {
    margin: 0,
    filename: "mi-pagina.pdf",
    image: { type: "jpeg", quality: 1.0 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "px", format: [1500, 1500], orientation: "portrait" },
  };
  const convertir = html2pdf().set(opciones);

  // Convertir el HTML del contenedor en un archivo PDF y descargarlo
  convertir.from(contenedor).save();
}

const Dashboard = () => {
  const [selectedSeries, setSelectedSeries] = useState("Serie 1");
  const [actores, setActores] = useState(350);
  const [eventos, setEventos] = useState(32753);
  const [chartData, setChartData] = useState([]);
  const [data, setData] = useState([
    { label: "Progreso 1", percent: 75 },
    { label: "Progreso 2", percent: 23 },
    { label: "Progreso 3", percent: 47 },
  ]);
  const [datosBurbuja, setDatosBurbuja] = useState([
    { word: "Autoridad", value: 32, porcentaje: 719 },
    { word: "Eficiencia", value: 64, porcentaje: 481 },
    { word: "Responsabilidad", value: 8, porcentaje: 274 },
    { word: "Experiencia", value: 31, porcentaje: 195 },
    { word: "Popularidad", value: 86, porcentaje: 165 },
    { word: "Coherencia", value: 46, porcentaje: 160 },
    { word: "Comunicativo", value: 98, porcentaje: 81 },
  ]);

  const database = {
    name: "Parent",
    children: [
      {
        name: "Child 1",
        value: 200,
      },
      {
        name: "Child 2",
        value: 300,
        children: [
          {
            name: "Grandchild 1",
            value: 100,
          },
          {
            name: "Grandchild 2",
            value: 150,
          },
        ],
      },
      {
        name: "Child 3",
        value: 150,
      },
    ],
  };

  const [data2, setData2] = useState({
    series: [
      {
        name: "Area 1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
    options: {
      chart: {
        with: 500,
        height: 350,
        type: "area",
      },
      xaxis: {
        categories: ["Dom", "Lun", "Mar", "Mier", "Jue", "Vie", "Sab"],
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
            name: "Area 1",
            data: [31, 40, 28, 51, 42, 109, 100],
          },
        ],
        options: {
          chart: {
            with: 500,
            height: 350,
            type: "area",
          },
          xaxis: {
            categories: ["Dom", "Lun", "Mar", "Mier", "Jue", "Vie", "Sab"],
          },
          fill: {
            opacity: 0.6,
          },
        },
      });
      setData([
        { label: "Progreso 1", percent: 50 },
        { label: "Progreso 2", percent: 70 },
        { label: "Progreso 3", percent: 90 },
      ]);
      newData = [
        {
          id: "Alegría",
          value: 15,
        },
        {
          id: "Miedo",
          value: 5,
        },
        {
          id: "Ira",
          value: 20,
        },
        {
          id: "Tristeza",
          value: 10,
        },
        {
          id: "Aversión",
          value: 7,
        },
        {
          id: "Confianza",
          value: 8,
        },
        {
          id: "Anticipación",
          value: 3,
        },
      ];
      setChartData(newData);
      setActores(590);
      setEventos(65891);
    } else if (selectedSeries === "Serie 2") {
      setData2({
        series: [
          {
            name: "Area 2",
            data: [10, 20, 30, 40, 50, 60, 70],
          },
        ],
        options: {
          chart: {
            with: 500,
            height: 350,
            type: "area",
          },
          xaxis: {
            categories: ["Dom", "Lun", "Mar", "Mier", "Jue", "Vie", "Sab"],
          },
          fill: {
            opacity: 0.6,
          },
        },
      });
      setData([
        { label: "Progreso 1", percent: 10 },
        { label: "Progreso 2", percent: 30 },
        { label: "Progreso 3", percent: 50 },
      ]);
      newData = [
        {
          id: "Serie 2 - A",
          value: 10,
        },
        {
          id: "Serie 2 - B",
          value: 20,
        },
        {
          id: "Serie 2 - C",
          value: 5,
        },
        {
          id: "Serie 2 - D",
          value: 15,
        },
        {
          id: "Serie 2 - E",
          value: 12,
        },
      ];
      setChartData(newData);
      setActores(368);
      setEventos(4568);
      setDatosBurbuja([
        { word: "Innovación", value: 40, porcentaje: 690 },
        { word: "Compromiso", value: 52, porcentaje: 568 },
        { word: "Liderazgo", value: 21, porcentaje: 346 },
        { word: "Productividad", value: 73, porcentaje: 268 },
        { word: "Colaboración", value: 65, porcentaje: 198 },
        { word: "Creatividad", value: 85, porcentaje: 178 },
        { word: "Eficiencia", value: 44, porcentaje: 154 },
      ]);
      console.log(datosBurbuja);
    } else if (selectedSeries === "Serie 3") {
      setData2({
        series: [
          {
            name: "Area 3",
            data: [90, 80, 70, 60, 50, 40, 30],
          },
        ],
        options: {
          chart: {
            with: 500,
            height: 350,
            type: "area",
          },
          xaxis: {
            categories: ["Dom", "Lun", "Mar", "Mier", "Jue", "Vie", "Sab"],
          },
          fill: {
            opacity: 0.6,
          },
        },
      });
      setData([
        { label: "Progreso 1", percent: 80 },
        { label: "Progreso 2", percent: 20 },
        { label: "Progreso 3", percent: 60 },
      ]);
      const newData = [
        {
          id: "Serie 3 - X",
          value: 25,
        },
        {
          id: "Serie 3 - Y",
          value: 15,
        },
        {
          id: "Serie 3 - Z",
          value: 30,
        },
        {
          id: "Serie 3 - W",
          value: 5,
        },
      ];
      setChartData(newData);
      setActores(270);
      setEventos(2253);
      setDatosBurbuja([
        { word: "Innovación", value: 56, porcentaje: 620 },
        { word: "Sostenibilidad", value: 73, porcentaje: 480 },
        { word: "Calidad", value: 38, porcentaje: 372 },
        { word: "Crecimiento", value: 26, porcentaje: 240 },
        { word: "Rentabilidad", value: 87, porcentaje: 186 },
        { word: "Equipo", value: 51, porcentaje: 170 },
        { word: "Comunidad", value: 68, porcentaje: 134 },
      ]);
    }
  }, [selectedSeries]);

  const formatter = (value) => <CountUp end={value} separator="," />;

  const handleSeriesChange = (value) => {
    setSelectedSeries(value);
  };

  const filteredChartData = chartData.filter(
    (item) => item.series === selectedSeries
  );

  const options = {
    fontFamily: "Helvetica, sans-serif",
    fontSizes: [12, 60],
    colors: ["#000000", "#111111", "#222222", "#333333", "#444444", "#555555"],
    rotations: 0,
    rotate: 90,
  };

  const words = [
    { text: "Alegria", value: 50 },
    { text: "Enojo", value: 30 },
    { text: "Miedo", value: 70 },
    { text: "Desilución", value: 45 },
    { text: "Confianza", value: 40 },
    { text: "Interés", value: 80 },
  ];

  return (
    <div className="stadisticas-dashboard-component">
      <div className="filtro-gral">
        <Select
          placeholder="Serie"
          className="selectores-dash"
          onChange={handleSeriesChange}
          value={selectedSeries}>
          <Select.Option value="Serie 1">Serie 1</Select.Option>
          <Select.Option value="Serie 2">Serie 2</Select.Option>
          <Select.Option value="Serie 3">Serie 3</Select.Option>
        </Select>

        {/* <Button onClick={descargarPDF}>Descargar PDF</Button>
        <Button href="/informe">Generar Informe</Button>
        <Button href="/mail" disabled>
          Enviar por email
        </Button> */}
      </div>
      <div className="estadisticas">
        <Row className="stadisticas" gutter={16}>
          <Col span={12}>
            <Statistic
              title="Total de eventos"
              value={eventos}
              formatter={formatter}
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Total actores"
              value={actores}
              precision={2}
              formatter={formatter}
            />
          </Col>
        </Row>
      </div>

      <div className="conteiner-grafi">
        <div className="grafico">
          <Pie
            data={chartData}
            width={500}
            height={300}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            colors={{ scheme: "blues" }}
            borderWidth={1}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.2]],
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
              from: "color",
              modifiers: [["darker", 2]],
            }}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            fill={[
              {
                match: {
                  id: "ruby",
                },
                id: "dots",
              },
              {
                match: {
                  id: "c",
                },
                id: "dots",
              },
              {
                match: {
                  id: "go",
                },
                id: "dots",
              },
              {
                match: {
                  id: "python",
                },
                id: "dots",
              },
              {
                match: {
                  id: "scala",
                },
                id: "lines",
              },
              {
                match: {
                  id: "lisp",
                },
                id: "lines",
              },
              {
                match: {
                  id: "elixir",
                },
                id: "lines",
              },
              {
                match: {
                  id: "javascript",
                },
                id: "lines",
              },
            ]}
            legends={[
              {
                anchor: "bottom",
                direction: "row",
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: "#999",
                itemDirection: "left-to-right",
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: "circle",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#000",
                    },
                  },
                ],
              },
            ]}
          />
        </div>

        <div className="grafico">
          <ReactApexChart
            options={data2.options}
            series={data2.series}
            type="bar"
            height={350}
            width={500}
          />
        </div>

        {/* <div className="grafico progress">
          {data.map((item, index) => (
            <div className="progress">
              <Progress
                key={index}
                strokeColor="rgba(0, 143, 251, 0.6)"
                strokeLinecap="butt"
                type="circle"
                percent={item.percent}
              />
            </div>
          ))}
        </div> */}

        <div className="grafico">
          <ReactApexChart
            options={data2.options}
            series={data2.series}
            type="area"
            height={300}
            width={500}
          />
        </div>
      </div>

      <div className="conteiner-grafica">
        <div className="grafico">
          <Chart data={datosBurbuja} />
        </div>
        <div className="grafico">
          <ReactWordcloud words={words} options={options} />
        </div>
      </div>

      <div>
        <div className="diccionario">
          <HeatmapChart />
        </div>
      </div>


      <div
      id="dom"
      className="diccionario grapho"
      >
      <RadialTreeGraph {...config}  className="diccionario grapho"/>
    </div>

    <div className="diccionario">
      <DemoColumn className="diccionario"/>
    </div>

    <div>
      <DemoRose/>
    </div>

    <div>
      <DemoHeatmap/>
    </div>

    <div>
      <DemoRadar/>
    </div>

    <div className="diccionario">
      <DemoTreemap />
    </div>

    <div className="diccionario">
      <DemoWordCloud/>
    </div>

    <div className="diccionario">
      <DemoBidirectionalBar/>
    </div>

    <div className="diccionario graficos-varios">
      <DemoMix/>
    </div>

    <div>
      <Graph/>
    </div>

    <div>
      <Graph2/>
    </div>
    </div>
  );
};

export default Dashboard;
