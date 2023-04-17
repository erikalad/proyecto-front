import React, { useEffect } from "react";
import "./Burbujas.css";

export default function Chart() {
  const data = [
    { word: "Alegria", value: 50 },
    { word: "Enojo", value: 30 },
    { word: "Miedo", value: 70 },
    { word: "Desilución", value: 45 },
    { word: "Confianza", value: 40 },
    { word: "Interés", value: 80 },
  ];


  useEffect(() => {
    const chart = document.getElementById("chart");

    function createBubble(x, y, r, color, word, maxSize = Infinity) {
      // Asegurarse de que el tamaño de la burbuja no supere el tamaño máximo
      r = Math.min(r, maxSize);
    
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      bubble.style.width = r * 2 + "px";
      bubble.style.height = r * 2 + "px";
      bubble.style.top = y - r + "px";
      bubble.style.left = x - r + "px";
      bubble.style.backgroundColor = color;
      bubble.innerHTML = `<div class="word">${word}</div>`;
      return bubble;
    }

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
    const biggestBubble = createBubble(center.x, center.y, biggestDatum.value, `hsl(200, ${Math.floor(100 - biggestDatum.value)}%, ${Math.floor(50 - biggestDatum.value / 2)}%)`, biggestDatum.word);
    chart.appendChild(biggestBubble);

    // Iterar sobre el resto de los datos para crear las burbujas más pequeñas
    const smallerData = data.slice(1);
    const angleStep = (2 * Math.PI) / smallerData.length; // ángulo entre cada burbuja

    smallerData.forEach((datum, index) => {
      const angle = index * angleStep; // ángulo de la burbuja
      const x = center.x + radius * Math.cos(angle); // posición x de la burbuja
      const y = center.y + radius * Math.sin(angle); // posición y de la burbuja
      const color = `hsl(200, ${Math.floor(100 - datum.value)}%, ${Math.floor(50 - datum.value / 2)}%)`;

      const bubble = createBubble(x, y, datum.value, color, datum.word);
      chart.appendChild(bubble);
    });
  }

 
    
  

    // llamar la función para dibujar las burbujas
    drawBubbles();
  }, []);

  return <div id="chart"></div>;
}