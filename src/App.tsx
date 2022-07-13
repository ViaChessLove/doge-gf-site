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
import Arrow from './components/Arrow/Arrow';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const App = () => {
  const {ref, inView} = useInView({threshold: 0.9});
  const [show, setShow] = useState<boolean>(false);;
  useEffect(() => {
    if (!inView) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [inView, ref]);
  return (
    <>
      <GlobalStyle/>
      <div ref={ref} id='start'></div>
      <Navbar />
      {show? <Arrow to='start'/>:undefined}
      <Start />
      <About />
      <HowToBuy/>
      <Roadmap/>
      <Tokenomics/>
      {/*<Blog/>*/}
      <Art/>
      <Faq/>
      <Footer/>
      
    </>
  );
}

export default App;