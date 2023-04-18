/** @format */

import React, { useEffect } from "react";
import "./Burbujas.css";

export default function Chart(datos) {
  const data = datos.data;

  useEffect(() => {
    const chart = document.getElementById("chart");
    function createBubble(
      x,
      y,
      r,
      color,
      word,
      porcentaje,
      maxSize = Infinity
    ) {
      r = Math.min(r, maxSize);

      const bubble = document.createElement("div");
      bubble.className = "bubble";
      bubble.style.width = r * 2 + "px";
      bubble.style.height = r * 2 + "px";
      bubble.style.top = y - r + "px";
      bubble.style.left = x - r + "px";
      bubble.style.backgroundColor = color;
      bubble.title = porcentaje;
      bubble.innerHTML = `<div class="word">${word}</div>`;

      // Añadir evento para mostrar tooltip al pasar el mouse por encima de la burbuja
      bubble.onmouseover = function (e) {
        const tooltip = document.createElement("span");
        tooltip.className = "tooltip";
        tooltip.innerHTML = porcentaje;
        document.body.appendChild(tooltip);
        tooltip.style.top = `${e.clientY + 10}px`;
        tooltip.style.left = `${e.clientX + 10}px`;
      };

      // Añadir evento para ocultar tooltip al salir de la burbuja
      bubble.onmouseout = function (e) {
        const tooltip = document.querySelector(".tooltip");
        document.body.removeChild(tooltip);
      };

      return bubble;
    }
    const getRedColor = (value) => {
      const hue = 0;
      const saturation = "100%";
      const lightness = `${98 - value / 2}%`; // aumentar el valor del divisor de 2 a 3 para hacer los colores más claros
      return `hsl(${hue}, ${saturation}, ${lightness})`;
    };

    // Recorremos el arreglo data y asignamos un color en escala de rojo a cada objeto
    data.forEach((obj) => {
      const color = getRedColor(obj.porcentaje / 10);
      obj.color = color;
    });

    console.log(data);

    function drawBubbles() {
      const chartWidth = chart.clientWidth;
      const chartHeight = chart.clientHeight;
      const radius = 120; // radio del círculo que se formará
      const center = {
        x: chartWidth / 2,
        y: chartHeight / 2,
      }; // centro del círculo

      // Ordenar los datos por valor descendente
      data.sort((a, b) => b.value - a.value);

      // Crear la burbuja más grande en el centro
      const biggestDatum = data[0];

      const biggestBubble = createBubble(
        center.x,
        center.y,
        biggestDatum.value,
        biggestDatum.color,
        biggestDatum.word,
        biggestDatum.porcentaje // Pasar la propiedad porcentaje
      );
      biggestBubble.style.zIndex = "3";
      chart.appendChild(biggestBubble);

      // Iterar sobre el resto de los datos para crear las burbujas más pequeñas
      const smallerData = data.slice(1);
      const angleStep = (2 * Math.PI) / smallerData.length; // ángulo entre cada burbuja

      smallerData.forEach((datum, index) => {
        const angle = index * angleStep; // ángulo de la burbuja
        const x = center.x + radius * Math.cos(angle); // posición x de la burbuja
        const y = center.y + radius * Math.sin(angle); // posición y de la burbuja
        const color = datum.color;
        const bubble = createBubble(
          x,
          y,
          datum.value,
          color,
          datum.word,
          datum.porcentaje
        ); // Pasar la propiedad porcentaje
        for (let i = 0; i < index; i++) {
          const otherBubble = chart.childNodes[i];
          const distance = Math.sqrt(
            (x - otherBubble.offsetLeft) ** 2 + (y - otherBubble.offsetTop) ** 2
          );
          const minDistance =
            datum.value + parseInt(otherBubble.style.width) / 2;
          if (distance < minDistance) {
            // Ajustar la posición de la burbuja para que no se solape con la otra
            const newDistance = minDistance + 5;
            const newX = center.x + newDistance * Math.cos(angle);
            const newY = center.y + newDistance * Math.sin(angle);
            bubble.style.top = newY - datum.value + "px";
            bubble.style.left = newX - datum.value + "px";
          }
        }

        chart.appendChild(bubble);
      });
    }

    // llamar la función para dibujar las burbujas
    drawBubbles();
  }, []);

  return <div id="chart"></div>;
}
