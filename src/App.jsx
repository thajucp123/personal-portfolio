import { useState, useEffect } from'react';
import './App.css'
import Banner from './components/Banner'
import NavBar from './components/NavBar'
import Preloader from './components/Preloader/Preloader'
import { CursorSpotLight } from './components/CursorSpotLight/CursorSpotLight';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import WhatsappButton from './components/WhatsappButton';
import JobExperience from './components/JobExperience';
import Contact from './components/Contact';
import FluidSimulation from './components/FluidSimulation';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4600); // timeout for loading animation

    return () => clearTimeout(timer); // cleanup timer
  }, []);


  return (
    <div>
      {isLoading ?
       (<Preloader/>): (
        <>
         <CursorSpotLight/>
         <NavBar/>
         <Banner/>
         <Skills/>
         <About/>
         <Projects/>
         <JobExperience/>
         <Contact/>
         <FluidSimulation/>
         <Footer/>
         <WhatsappButton/>
        </>
       )}
      
    </div>
  )
}

export default App;