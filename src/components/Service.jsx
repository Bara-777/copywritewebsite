import './Service.css'

export default function Service({title, description}){
    return <div className='serviceCont'>
        <span className='serviceTitle'>{title} :</span>
        <span className='serviceDescription'>{description}</span>
    </div>
}