import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import html2pdf from 'html2pdf.js';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    padding: 50,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    border: '1pt solid #000000',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    fontStyle: 'italic',
  },
  text: {
    fontSize: 12,
  },
});

function descargarPDF() {
    // Obtener el contenedor que queremos descargar como PDF
    const contenedor = document.body;
    
    // Crear una instancia de html2pdf con las opciones deseadas
    const opciones = {
      margin: 0.5,
      filename: 'mi-pagina.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 1 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };
    const convertir = html2pdf().set(opciones);
    
    // Convertir el HTML del contenedor en un archivo PDF y descargarlo
    convertir.from(contenedor).save();
  }
  
  
  

function MyDocument() {
  return (
    <Document>
      <Page  style={styles.page}>
        <View style={styles.container}>
          <Text style={styles.title}>Mi Documento PDF</Text>
          <Text style={styles.subtitle}>Creado con react-pdf</Text>
          <Text style={styles.text}>¡Hola mundo!</Text>
         
        </View>
        <button onClick={descargarPDF}>Descargar como PDF</button>
      </Page>
    </Document>
  );
}

export default MyDocument;