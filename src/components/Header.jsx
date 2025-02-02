import './Header.css'
import { AiOutlineMenu } from 'react-icons/ai'

export default function Header({scrollToAboutSection, scrollToServicesSection,scrollToWorkSection ,toggleDropMenu}){
    
    return <header>
        <span className='name'>Bara BelGacem</span>
        <nav className="navBar">
            <ul className='navUl'>
                <li className='about' onClick={scrollToAboutSection}>About</li>
                <li className='services' onClick={scrollToServicesSection}>Services</li>
                <li className='work' onClick={scrollToWorkSection}>Work</li>
                <li className='letsChat'>Let's Chat</li>
            </ul> 
        </nav>
        <AiOutlineMenu onClick={toggleDropMenu}  size={'2.5rem'} className='menuIcon'/>
    </header>
}