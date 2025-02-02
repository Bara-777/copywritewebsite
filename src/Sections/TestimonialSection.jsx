import './TestimonialSection.css'

export default function TestimonialSection(){
    return <div className="testimonialsSection">
        <span className='testimonialTitle'>Testimonials</span>
        <div className='testimonialCont'>
            <p className='testimonialContent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <span>- idk who</span>
        <div className='index'>
            <div className="testIndex activeTI"></div>
            <div className="testIndex"></div>
            <div className="testIndex"></div>
            <div className="testIndex"></div>
        </div>
    </div>
}