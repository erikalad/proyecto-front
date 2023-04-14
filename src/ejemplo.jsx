import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function Grafico() {
  const refGrafico = useRef(null);

  const datos = {
    palabra1: 1235,
    palabra2: 561,
    palabra3: 545,
    palabra4: 151,
  };

  const entries = Object.entries(datos);
  const valores = entries.map((entry) => entry[1]);
  const valorMaximo = d3.max(valores);

  useEffect(() => {
    const svg = d3.select(refGrafico.current);

    // Configurar la escala de tamaño de los círculos
    const tamano = d3
      .scaleLinear()
      .domain([0, valorMaximo])
      .range([5, 20]);

    // Configurar la posición x e y de los círculos
    const x = d3.scaleLinear().range([0, 600]);
    const y = d3.scaleLinear().range([0, 400]);

    // Calcular la posición x e y para cada palabra
    entries.forEach((entry, i) => {
      const palabra = entry[0];
      const valor = entry[1];
      const fila = Math.floor(i / 5);
      const columna = i % 5;

      x.range([columna * 100 + 50, columna * 100 + 150]);
      y.range([fila * 100 + 50, fila * 100 + 150]);

      svg
        .append("circle")
        .attr("cx", x(0))
        .attr("cy", y(0))
        .attr("r", tamano(valor))
        .style("fill", "steelblue")
        .transition()
        .delay(i * 100)
        .attr("cx", x(1))
        .attr("cy", y(1));
    });
  }, []);

  return (
    <div>
      <svg ref={refGrafico} width={600} height={400}></svg>
    </div>
  );
}

