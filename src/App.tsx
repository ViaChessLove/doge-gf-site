import React from 'react';
import { GlobalStyle } from './globalStyles';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Start from './components/Start/Start';
import Faq from './components/Faq/Faq';

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Navbar />
      <Start/>
      <Faq/>
      <Footer/>
    </>
  );
}

export default App;
