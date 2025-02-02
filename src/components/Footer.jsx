import './Footer.css'

export default function Footer(){
    return <footer>
        <div className='callToActionFtr'>
            <span className='letsWorkTogether'>Let's work together</span>
            <span className='letsChatFTR'>Send me a message {'>'}</span>
        </div>
        <div className='contactInfo'>
            <div className='menu'>
                <span className='menuTitle'>Menu</span>
                <span className='menuOption menuAbout'>About Me</span>
                <span className='menuOption menuServices'>Services</span>
                <span className='menuOption menuWork'>My Work</span>
                <span className='menuOption menuContact'>Contact Me</span>
            </div>
            <div className='contact'>
                <span className='contactTitle'>Contact</span>
                <span>example@email.com</span>
            </div>
        </div>
    </footer>
}