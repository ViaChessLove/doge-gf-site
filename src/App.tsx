import React, { useEffect, useState } from 'react';
import { GlobalStyle } from './globalStyles';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Start from './components/Start/Start';
import Faq from './components/Faq/Faq';
import Vaults from './components/Vaults/Vaults';
import About from './components/About/About';
import HowToBuy from './components/How to buy/HowToBuy';
import Roadmap from './components/Roadmap/Roadmap';
import Tokenomics from './components/Tokenomics/Tokenomics';
import Blog from './components/Blog/Blog';
import Art from './components/Art/Art';
import { useInView } from 'react-intersection-observer';
import { BsArrowUpCircle } from 'react-icons/bs';

const App = () => {
  const {ref, inView} = useInView({threshold: 0,});
  const [show, setShow] = useState<boolean>(true);
  useEffect(() => {
    switch(inView){
      case true: {
        setShow(false);
        break;
      }
      case false: {
        setShow(true);
        break;
      }
    }
  }, [inView, ref])
  return (
    <>
      <GlobalStyle/>
      <Navbar />
      {show? <BsArrowUpCircle style={{position:'fixed', bottom:'0px', left:'0px', fontSize:'40px', zIndex: '40'}}/>:undefined}
      <Start/>
      <About/>
      <HowToBuy/>
      <Roadmap/>
      <Tokenomics/>

      {/*<Blog/>*/}
      <Art/>
      <Vaults/>
      <Faq/>
      <Footer/>
    </>
  );
}

export default App;