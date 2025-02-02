import './WorkSection.css'
import SampleCard from '../components/SampleCard'
import samplesTxt from './Samples.js'

export default function WorkSection({WorkSec}){
    const Cards = samplesTxt.map((card) => <SampleCard subjectLine={card.subjectLine} content={card.content} key={card.subjectLine}/>)
    return <div className='workSectionContainer' ref={WorkSec}> 
        <span className='workSecTitle'>My Work</span>
        <span className='info'>Click to expand and collapse the card.</span>
        <div className='cardsCont'>
            {Cards}
        </div>
    </div>
}