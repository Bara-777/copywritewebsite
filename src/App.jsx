import './App.css'
import {useRef, useState} from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroText from './components/HeroText'
import AboutSection from './Sections/AboutSection'
import CardsSection from './Sections/CardsSection'
import MissionSection from './Sections/MissionSection'
import ServicesSection from './Sections/ServicesSection'
import TestimonialSection from './Sections/TestimonialSection'
import MobileNavMenu from './components/MobileNavMenu'
import WorkSection from './Sections/WorkSection'


function App() {
  const [isMobile, setIsMobile] = useState(false)

  const AboutSec = useRef(null)
  const ServicesSec = useRef(null)
  const WorkSec = useRef(null)
  
  function scrollToAboutSection(){
    if(AboutSec.current)
      AboutSec.current.scrollIntoView({behavior : 'smooth'})
  }
  function scrollToServicesSection(){
    if(ServicesSec.current)
      ServicesSec.current.scrollIntoView({behavior : 'smooth'})

  }

  function scrollToWorkSection(){
    if(WorkSec.current)
      WorkSec.current.scrollIntoView({behavior: 'smooth', block: "start"})
  }

  function toggleDropMenu(){
    setIsMobile(!isMobile)
  }

  return (
    <>
      <Header toggleDropMenu={toggleDropMenu} scrollToAboutSection = {scrollToAboutSection} scrollToServicesSection= {scrollToServicesSection} scrollToWorkSection={scrollToWorkSection}/>
      <main className='content'>
        {isMobile && <MobileNavMenu toggleDropMenu={toggleDropMenu} scrollToAboutSection = {scrollToAboutSection} scrollToServicesSection = {scrollToServicesSection} scrollToWorkSection={scrollToWorkSection}/>}
        <div className='heroSection'>
          <HeroText />
        </div>
        <CardsSection scrollToAboutSection = {scrollToAboutSection} scrollToServicesSection = {scrollToServicesSection} scrollToWorkSection={scrollToWorkSection}/>
        <AboutSection AboutSec = {AboutSec} />
        <MissionSection />
        <ServicesSection ServicesSec = {ServicesSec}/>
        <WorkSection WorkSec={WorkSec}/>
        <div className="letsTalkAboutUrProject">Let's talk about your project</div>
        <Footer />
      </main>
    </>
  )
}

export default App
