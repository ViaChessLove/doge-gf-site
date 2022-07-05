import React from 'react';
import { GlobalStyle } from './globalStyles';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Navbar />
      <Footer/>
    </>
  );
}

export default App;
