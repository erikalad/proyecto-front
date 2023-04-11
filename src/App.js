import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

import Dashboard from './Dashboard';

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


  
  
  

function MyDocument() {
  return (
    <Document>
      <Page  style={styles.page}>
        <Dashboard/>
      </Page>
    </Document>
  );
}

export default MyDocument;