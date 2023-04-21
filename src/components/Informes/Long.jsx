
import React from 'react'

export default function Long() {

  function cartesianToGeographic(x, y) {
    // Correcciones de origen del sistema de referencia WGS84
    const dx = -0.8657;
    const dy = -96.6516;
    const dz = -36.8699;
  
    // Convertir coordenadas cartesianas a geocéntricas
    const X = x + dx;
    const Y = y + dy;
    const Z = 0 + dz;
  
    // Convertir geocéntricas a geográficas
    const λ = Math.atan(Y / X);
    const φ = Math.atan(Z / Math.sqrt(Math.pow(X, 2) + Math.pow(Y, 2)));
  
    // Convertir grados decimales a grados, minutos y segundos
    const lat = toDMS(φ);
    const lng = toDMS(λ);
  
    return { lng, lat };
  }

  function toDMS(angle) {
    const degrees = parseInt(angle / Math.PI * 180);
    const minutes = parseInt(Math.abs(angle / Math.PI * 180 - degrees) * 60);
    const seconds = Math.abs(angle / Math.PI * 180 - degrees - minutes / 60) * 3600;
    return `${degrees}°${minutes}'${seconds.toFixed(2)}"`;
  }


  const coords = cartesianToGeographic(-139926.9652, 968528.5161);
  console.log(coords);

  const coordss = cartesianToGeographic(-142022,2362,	972832,3172);
  console.log(coordss);


  return (
    <div>
        coordenadas
    </div>
  )
}


  



 