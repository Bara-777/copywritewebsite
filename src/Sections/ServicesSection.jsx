import Service from '../components/Service'
import './ServicesSection.css'

export default function ServicesSection({ServicesSec}){
    const serviceContent = [{
        service:'VLS Copywriting',
        description:'Craft killer scripts that grab attention, keep viewers hooked, and make buying the only option.'
    },
    {
        service:'Email Marketing Copywriting',
        description:'Turn words into money with emails so persuasive, your audience can\'t help but click "buy".'
    },
    {
        service:'Email Automation',
        description:'Set up high-converting email sequences that sell for you 24/7 even while you sleep.'
    }
    ]

    return <div className="servicesSection" ref={ServicesSec}>
        <span className='servicesectionTitle'>Services</span>
        <div className='servicesCards'>
            {serviceContent.map((service) => <Service title={service.service} description={service.description}/> )}
        </div>
    </div>
}