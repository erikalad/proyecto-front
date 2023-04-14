/* import React, { useEffect } from "react";
import "./Burbujas.css";

export default function Chart() {
  const data = [
    { word: "manzana", value: 50 },
    { word: "naranja", value: 30 },
    { word: "uva", value: 70 },
    { word: "pera", value: 20 },
    { word: "plátano", value: 40 },
    { word: "sandía", value: 80 },
  ];

  useEffect(() => {
    const chart = document.getElementById("chart");

    // función para crear una burbuja
    function createBubble(x, y, r) {
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      bubble.style.width = r * 2 + "px";
      bubble.style.height = r * 2 + "px";
      bubble.style.top = y - r + "px";
      bubble.style.left = x - r + "px";
      return bubble;
    }

    // función para agregar las burbujas al gráfico
    function drawBubbles() {
      data.forEach((datum) => {
        const bubble = createBubble(
          Math.random() * (chart.clientWidth - datum.value),
          Math.random() * (chart.clientHeight - datum.value),
          datum.value
        );
        chart.appendChild(bubble);
      });
    }

    // llamar la función para dibujar las burbujas
    drawBubbles();

    // mover las burbujas
 /*    function moveBubbles() {
      const bubbles = document.querySelectorAll(".bubble");
      bubbles.forEach((bubble) => {
        bubble.style.top =
          parseFloat(bubble.style.top) - Math.random() + "px";
        bubble.style.left =
          parseFloat(bubble.style.left) - Math.random() + "px";
      });
    } 

    // llamar la función para mover las burbujas cada 100ms
   /*  setInterval(moveBubbles, 100); 
  }, []);

  return <div id="chart"></div>;
} */


/* 
import React, { useEffect } from "react";
import "./Burbujas.css";

export default function Chart() {
  const data = [
    { word: "manzana", value: 50 },
    { word: "naranja", value: 30 },
    { word: "uva", value: 70 },
    { word: "pera", value: 20 },
    { word: "plátano", value: 40 },
    { word: "sandía", value: 80 },
  ];

  useEffect(() => {
    const chart = document.getElementById("chart");

    // función para crear una burbuja
    function createBubble(x, y, r, word) {
      const bubbleContainer = document.createElement("div");
      bubbleContainer.className = "bubble-container";
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      bubble.style.width = r * 2 + "px";
      bubble.style.height = r * 2 + "px";
      bubble.style.top = y - r + "px";
      bubble.style.left = x - r + "px";
      const bubbleText = document.createElement("div");
      bubbleText.className = "bubble-text";
      bubbleText.innerHTML = word;
      bubbleContainer.appendChild(bubble);
      bubbleContainer.appendChild(bubbleText);
      return bubbleContainer;
    }

    // función para agregar las burbujas al gráfico
    function drawBubbles() {
      data.forEach((datum) => {
        const bubble = createBubble(
          Math.random() * (chart.clientWidth - datum.value),
          Math.random() * (chart.clientHeight - datum.value),
          datum.value,
          datum.word
        );
        chart.appendChild(bubble);
      });
    }

    // llamar la función para dibujar las burbujas
    drawBubbles();
  }, []);

  return <div id="chart"></div>;
} */

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

  const bubbleSize = 50; // tamaño fijo de cada burbuja
  const bubblePadding = 10; // separación entre burbujas

  useEffect(() => {
    const chart = document.getElementById("chart");

    // función para crear una burbuja
    function createBubble(x, y, r, color, word) {
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

    // función para agregar las burbujas al gráfico
    function drawBubbles() {
      const chartWidth = chart.clientWidth;
      const chartHeight = chart.clientHeight;
      const radius = 200; // radio del círculo que se formará
      const center = {
        x: chartWidth / 2,
        y: chartHeight / 2,
      }; // centro del círculo
    
      const angleStep = (2 * Math.PI) / data.length; // ángulo entre cada burbuja
    
      data.forEach((datum, index) => {
        const angle = index * angleStep; // ángulo de la burbuja
        const x = center.x + radius * Math.cos(angle); // posición x de la burbuja
        const y = center.y + radius * Math.sin(angle); // posición y de la burbuja
        const color = `hsl(200, ${Math.floor(100 - datum.value)}%, ${Math.floor(
          50 - datum.value / 2
        )}%)`;
    
        const bubble = createBubble(x, y, datum.value, color, datum.word);
        chart.appendChild(bubble);
      });
    }

    // llamar la función para dibujar las burbujas
    drawBubbles();
  }, []);

  return <div id="chart"></div>;
}