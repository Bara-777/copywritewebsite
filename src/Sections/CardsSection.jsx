import "./CardsSection.css"
import { IoPersonOutline, IoPieChartOutline } from 'react-icons/io5'
import { TbHeartHandshake } from 'react-icons/tb'
import InfoCard from '../components/InfoCard'


export default function CardsSection({scrollToAboutSection, scrollToServicesSection, scrollToWorkSection}){
    return <div className='cardSection'>
            <InfoCard title={"About Me"} scrollToASection={scrollToAboutSection} text={"Learn more about my philosophy"} icon={<IoPersonOutline size={"3rem"} color='#333333' />}/>
            <InfoCard title={"Services"} scrollToASection={scrollToServicesSection} text={"Discover all the ways I can help your brand"} icon={<TbHeartHandshake size={"3rem"} color='#FFA500'/>}/>
            <InfoCard title={"My Work"} scrollToASection={scrollToWorkSection} text={"Check out some of my clients and work"} icon={<IoPieChartOutline size={"3rem"} color='#168118'/>}/>
    </div>
}  