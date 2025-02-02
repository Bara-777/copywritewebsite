import "./MissionSection.css"
import missionPic from '../assets/missonPic.jpg'

export default function MissionSection(){
    return <div className='missionSection'>
        <img className='missionPic' src={missionPic} alt="mission picture" />
        <div className="missionCont"></div>
        <div className="missionTxt">
          <span className='missionTitle'>Mission</span>
          <p className='mission'>
          No brand thrives unless people want to listen to their story.  A good story is at the heart of a good business.
          </p>
          <div className='letsChatMission'>Let's Chat</div>
        </div> 
  </div>
}