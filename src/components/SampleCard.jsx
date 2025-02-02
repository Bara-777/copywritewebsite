import './SampleCard.css'
import { useRef } from 'react'

export default function SampleCard({subjectLine,content}){
    const card = useRef(null)

    function handleClick(){
        if(card.current)
            if(card.current.classList.contains('active'))
                card.current.classList.remove('active')
            else
                card.current.classList.add('active')
    }

    return <div className='sampleContainer' onClick={handleClick} ref={card}>
        <span className='subjectLine'>Subject Line: {subjectLine}</span>
        <div className='content'>{content}</div>
    </div>
}