
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Naturopathe from './components/Naturopathe';
import Bioresonance from './components/Bioresonance';
import Physionutrition from './components/Physionutrition';
import Massage from './components/Massage';
import Prices from './components/Prices';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"


function App() {

  useEffect(()=>{
    Aos.init();
  }, [])

  return (
    <>
      <Header/>
      <main>
        <Home/>
        <About/>
        <Naturopathe/>
        <Bioresonance/>
        <Physionutrition/>
        <Massage/>
        <Prices/>
        <Contact/>
        <Testimonials/>
      </main>
      <Footer/>
    </>
  )
}

export default App;
