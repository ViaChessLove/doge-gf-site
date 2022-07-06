import React from 'react';
import { GlobalStyle } from './globalStyles';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Start from './components/Start/Start';
import Faq from './components/Faq/Faq';
import Vaults from './components/Vaults/Vaults';
import About from './components/About/About';

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Navbar />
      <Start/>
      <About/>
      <Vaults/>
      <Faq/>
      <Footer/>
    </>
  );
}

export default App;
