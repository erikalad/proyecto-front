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
      const nodes = new DataSet([
              {
          color: '#97c2fc',
          font: { color: 'black' },
          id: 'Marcelo Ebrard',
          label: 'Marcelo Ebrard',
          shape: 'dot',
          size: 20
        },
        {
          color: '#97c2fc',
          font: { color: 'black' },
          id: 'm_ebrard',
          label: 'm_ebrard',
          shape: 'dot',
          size: 2
        },
        {
          color: '#97c2fc',
          font: { color: 'black' },
          id: 'marcelo',
          label: 'marcelo',
          shape: 'dot',
          size: 2
        },
        {
          color: '#97c2fc',
          font: { color: 'black' },
          id: 'ebrard',
          label: 'ebrard',
          shape: 'dot',
          size: 2
        },
        {
          color: '#97c2fc',
          font: { color: 'black' },
          id: 'claudiashein',
          label: 'claudiashein',
          shape: 'dot',
          size: 2
        },
        // ...
      ]);

      // create an array with edges
      const edges = new DataSet([
        { from: 'Marcelo Ebrard', to: 'm_ebrard' },
        { from: 'Marcelo Ebrard', to: 'marcelo' },
        { from: 'Marcelo Ebrard', to: 'ebrard' },
        { from: 'Marcelo Ebrard', to: 'claudiashein' },
        // ...
      ]);

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