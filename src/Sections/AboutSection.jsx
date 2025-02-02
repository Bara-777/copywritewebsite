import "./AboutSection.css"

export default function AboutSection({AboutSec}){
    return <div className='aboutSection' ref={AboutSec}>
        <span className='aboutSectionTitle'>About</span>
        <span className='superHeroOrigintxt'>Superhero Orgins</span>
        <span className='titles'>writer, storyteller</span> 
        <div className='aboutContent'>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        </div>
    </div>
}