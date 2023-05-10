import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Network } from 'vis-network';
import { DataSet } from 'vis-data';
import './../../Dashboard.css'

export default function Graph(){
  const [edges, setEdges] = useState();
  const [nodes, setNodes] = useState();
  const [allNodes, setAllNodes] = useState();
  const [allEdges, setAllEdges] = useState();
  const [nodeColors, setNodeColors] = useState();
  const [originalNodes, setOriginalNodes] = useState();
  const [network, setNetwork] = useState();
  const [container, setContainer] = useState();
  const [options, setOptions] = useState();
  const [data, setData] = useState();
  const [filter, setFilter] = useState({
    item: '',
    property: '',
    value: []
  });
  
  useEffect(() => {
    const drawGraph = () => {
      const container = document.getElementById('mynetwork');

      // parsing and collecting nodes and edges from the python
     
      const nodes = new DataSet(
      [{"color": "#97c2fc", "font": {"color": "black"}, "id": "Marcelo Ebrard", "label": "Marcelo Ebrard", "shape": "dot", "size": 20}, {"color": "#97c2fc", "font": {"color": "black"}, "id": "m_ebrard", "label": "m_ebrard", "shape": "dot", "size": 2}, {"color": "#97c2fc", "font": {"color": "black"}, "id": "marcelo", "label": "marcelo", "shape": "dot", "size": 2}, {"color": "#97c2fc", "font": {"color": "black"}, "id": "ebrard", "label": "ebrard", "shape": "dot", "size": 2}, {"color": "#97c2fc", "font": {"color": "black"}, "id": "claudiashein", "label": "claudiashein", "shape": "dot", "size": 2}, {"color": "#97c2fc", "font": {"color": "black"}, "id": "lopezobrador_", "label": "lopezobrador_", "shape": "dot", "size": 2}, {"color": "#97c2fc", "font": {"color": "black"}, "id": "mexico", "label": "mexico", "shape": "dot", "size": 2}, {"color": "#97c2fc", "font": {"color": "black"}, "id": "morena", "label": "morena", "shape": "dot", "size": 2}, {"color": "#97c2fc", "font": {"color": "black"}, "id": "gobierno", "label": "gobierno", "shape": "dot", "size": 2}, {"color": "#97c2fc", "font": {"color": "black"}, "id": "claudia", "label": "claudia", "shape": "dot", "size": 2}, {"color": "#97c2fc", "font": {"color": "black"}, "id": "personas", "label": "personas", "shape": "dot", "size": 2}, {"color": "#97c2fc", "font": {"color": "black"}, "id": "amlo", "label": "amlo", "shape": "dot", "size": 1}, {"color": "#97c2fc", "font": {"color": "black"}, "id": "seguridad", "label": "seguridad", "shape": "dot", "size": 2}, {"color": "#97c2fc", "font": {"color": "black"}, "id": "presidente", "label": "presidente", "shape": "dot", "size": 1}, {"color": "#97c2fc", "font": {"color": "black"}, "id": "migrantes", "label": "migrantes", "shape": "dot", "size": 1}, {"color": "#97c2fc", "font": {"color": "black"}, "id": "lopez", "label": "lopez", "shape": "dot", "size": 1}, {"color": "#97c2fc", "font": {"color": "black"}, "id": "rosaicela_", "label": "rosaicela_", "shape": "dot", "size": 1}, {"color": "#97c2fc", "font": {"color": "black"}, "id": "sheinbaum", "label": "sheinbaum", "shape": "dot", "size": 2}, {"color": "#97c2fc", "font": {"color": "black"}, "id": "adan_augusto", "label": "adan_augusto", "shape": "dot", "size": 1}, {"color": "#97c2fc", "font": {"color": "black"}, "id": "candidato", "label": "candidato", "shape": "dot", "size": 1}, {"color": "#97c2fc", "font": {"color": "black"}, "id": "politica", "label": "politica", "shape": "dot", "size": 1}, {"color": "#97c2fc", "font": {"color": "black"}, "id": "Claudia Sheinbaum", "label": "Claudia Sheinbaum", "shape": "dot", "size": 20}, {"color": "#97c2fc", "font": {"color": "black"}, "id": "rosalia", "label": "rosalia", "shape": "dot", "size": 1}, {"color": "#97c2fc", "font": {"color": "black"}, "id": "ciudad", "label": "ciudad", "shape": "dot", "size": 1}, {"color": "#97c2fc", "font": {"color": "black"}, "id": "metro", "label": "metro", "shape": "dot", "size": 1}, {"color": "#97c2fc", "font": {"color": "black"}, "id": "millones", "label": "millones", "shape": "dot", "size": 1}, {"color": "#97c2fc", "font": {"color": "black"}, "id": "gracias", "label": "gracias", "shape": "dot", "size": 1}, {"color": "#97c2fc", "font": {"color": "black"}, "id": "mujeres", "label": "mujeres", "shape": "dot", "size": 1}, {"color": "#97c2fc", "font": {"color": "black"}, "id": "vida", "label": "vida", "shape": "dot", "size": 1}, {"color": "#97c2fc", "font": {"color": "black"}, "id": "campana", "label": "campana", "shape": "dot", "size": 1}]);

      // create an array with edges
      const edges = new DataSet([{"Ocurrencias": 13497, "from": "Marcelo Ebrard", "to": "m_ebrard", "width": 1}, {"Ocurrencias": 5275, "from": "Marcelo Ebrard", "to": "marcelo", "width": 1}, {"Ocurrencias": 3852, "from": "Marcelo Ebrard", "to": "ebrard", "width": 1}, {"Ocurrencias": 2283, "from": "Marcelo Ebrard", "to": "claudiashein", "width": 1}, {"Ocurrencias": 2228, "from": "Marcelo Ebrard", "to": "lopezobrador_", "width": 1}, {"Ocurrencias": 2085, "from": "Marcelo Ebrard", "to": "mexico", "width": 1}, {"Ocurrencias": 1914, "from": "Marcelo Ebrard", "to": "morena", "width": 1}, {"Ocurrencias": 1515, "from": "Marcelo Ebrard", "to": "gobierno", "width": 1}, {"Ocurrencias": 1078, "from": "Marcelo Ebrard", "to": "claudia", "width": 1}, {"Ocurrencias": 997, "from": "Marcelo Ebrard", "to": "personas", "width": 1}, {"Ocurrencias": 836, "from": "Marcelo Ebrard", "to": "amlo", "width": 1}, {"Ocurrencias": 798, "from": "Marcelo Ebrard", "to": "seguridad", "width": 1}, {"Ocurrencias": 712, "from": "Marcelo Ebrard", "to": "presidente", "width": 1}, {"Ocurrencias": 650, "from": "Marcelo Ebrard", "to": "migrantes", "width": 1}, {"Ocurrencias": 625, "from": "Marcelo Ebrard", "to": "lopez", "width": 1}, {"Ocurrencias": 530, "from": "Marcelo Ebrard", "to": "rosaicela_", "width": 1}, {"Ocurrencias": 520, "from": "Marcelo Ebrard", "to": "sheinbaum", "width": 1}, {"Ocurrencias": 496, "from": "Marcelo Ebrard", "to": "adan_augusto", "width": 1}, {"Ocurrencias": 494, "from": "Marcelo Ebrard", "to": "candidato", "width": 1}, {"Ocurrencias": 367, "from": "Marcelo Ebrard", "to": "politica", "width": 1}, {"Ocurrencias": 2224, "from": "m_ebrard", "to": "Claudia Sheinbaum", "width": 1}, {"Ocurrencias": 637, "from": "marcelo", "to": "Claudia Sheinbaum", "width": 1}, {"Ocurrencias": 519, "from": "ebrard", "to": "Claudia Sheinbaum", "width": 1}, {"Ocurrencias": 18516, "from": "claudiashein", "to": "Claudia Sheinbaum", "width": 1}, {"Ocurrencias": 1713, "from": "lopezobrador_", "to": "Claudia Sheinbaum", "width": 1}, {"Ocurrencias": 1642, "from": "mexico", "to": "Claudia Sheinbaum", "width": 1}, {"Ocurrencias": 614, "from": "morena", "to": "Claudia Sheinbaum", "width": 1}, {"Ocurrencias": 1947, "from": "gobierno", "to": "Claudia Sheinbaum", "width": 1}, {"Ocurrencias": 2575, "from": "claudia", "to": "Claudia Sheinbaum", "width": 1}, {"Ocurrencias": 616, "from": "personas", "to": "Claudia Sheinbaum", "width": 1}, {"Ocurrencias": 775, "from": "seguridad", "to": "Claudia Sheinbaum", "width": 1}, {"Ocurrencias": 1709, "from": "sheinbaum", "to": "Claudia Sheinbaum", "width": 1}, {"Ocurrencias": 1717, "from": "Claudia Sheinbaum", "to": "rosalia", "width": 1}, {"Ocurrencias": 1658, "from": "Claudia Sheinbaum", "to": "ciudad", "width": 1}, {"Ocurrencias": 1119, "from": "Claudia Sheinbaum", "to": "metro", "width": 1}, {"Ocurrencias": 618, "from": "Claudia Sheinbaum", "to": "millones", "width": 1}, {"Ocurrencias": 606, "from": "Claudia Sheinbaum", "to": "gracias", "width": 1}, {"Ocurrencias": 571, "from": "Claudia Sheinbaum", "to": "mujeres", "width": 1}, {"Ocurrencias": 507, "from": "Claudia Sheinbaum", "to": "vida", "width": 1}, {"Ocurrencias": 492, "from": "Claudia Sheinbaum", "to": "campana", "width": 1}]);

      const data = {
        nodes: nodes,
        edges: edges
      };

      const options = {
        height: '700px',
        backgroundColor: '#f5f5f5',
        
        position: 'relative',
        float: 'left'
      };

      // create a network
      const network= new Network(container, data, options);

      // store references to the network and data in the state
      setNetwork(network);
      setData(data);
    };

    drawGraph();
  }, []);


  return (
    <div className="fondo-grafo">
    <div className="card-body">
    {/* <h4 className="card-title">Palabras mas frecuentes</h4>
    <div className="card-text">
    Las palabras mas frecuentes ayudan a identificar los temas principales o terminos mas usados. Si comparamos
    dos grupos de palabras
    </div> */}
    <div id="mynetwork"></div>
    </div>
    </div>
    );
    }