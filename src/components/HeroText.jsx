import { FaInstagram, FaLinkedinIn  } from 'react-icons/fa'
import './HeroText.css'

export default function HeroText(){

    return <div className='heroTxtNdLinks'>
        <div className="heroTextCont">
            <div className='storiesThat'>Stories</div>
            <div className='word1Cont'>
                <div className='word1'>build</div>
                <div className='word1'>develop</div>
                <div className='word1'>create</div>
                <div className='word1'>make</div>
            </div>
            <div className='word2Cont'>
                <div className='word2'>brands</div>
                <div className='word2'>meaning</div>
                <div className='word2'>opportunities</div>
            </div>
        </div>
        <div className='links'>
            <div className='linkedIn'><FaLinkedinIn  size={'2rem'}/></div>
            <div className='instagram'><FaInstagram size={'2rem'}/></div>
        </div>
    </div>
}