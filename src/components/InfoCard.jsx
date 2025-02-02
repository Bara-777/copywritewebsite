import "./InfoCard.css"

export default function InfoCard({title , icon , text,scrollToASection}){
    return <div className="cardCont">
        <div className="iconCont">{icon}</div>
        <div className="textCont">
            <span className="cardTitle">{title}</span>
            <p className="cardText">{text}</p>
            <div className="learnMore" onClick={scrollToASection}>Learn more</div>
        </div>
    </div>
}