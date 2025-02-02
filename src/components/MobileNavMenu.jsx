import './MobileNavMenu.css'

export default function MobileNavMenu({scrollToAboutSection, scrollToServicesSection, scrollToWorkSection}){
    return <nav className="mobileNavBar">
            <ul className='mobileNavUl'>
                <li className='mobileOption mobileAbout' onClick={scrollToAboutSection}>About</li>
                <li className='mobileOption mobileServices' onClick={scrollToServicesSection}>Services</li>
                <li className='mobileOption mobileWork' onClick={scrollToWorkSection}>Work</li>
                <li className='mobileOption mobileLetsChat'>Let's Chat</li>
            </ul> 
    </nav>
}