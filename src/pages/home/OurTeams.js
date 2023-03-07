import gmanager from '../../assets/team/gmanager.jpg'
import dmanager from '../../assets/team/dmanager.jpg'
import {RiDoubleQuotesL,RiDoubleQuotesR} from 'react-icons/ri'
import tleader from '../../assets/team/tleader.jpg'
const OurTeams = ()=>{
 return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
      <div className="card h-100">
        <img src={gmanager} className="card-img-top" alt="geral_manager" />
        <div className="card-body">
          <h5 className="card-title">General Manager</h5>
          <p className="card-text">
          <RiDoubleQuotesL /> 
    <span className="fs-5">We pride ourselves on our expertise and pragmatic solutions to engineering problems in the commertial and resideential sectors.</span>
     <RiDoubleQuotesR />
          </p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100">
        <img src={dmanager} className="card-img-top" alt="vice_manager" />
        <div className="card-body">
          <h5 className="card-title">Vice Manager</h5>
          <p className="card-text">
          <RiDoubleQuotesL /> 
    <span className="fs-5">We Constantly Excel by Thinking Contextually and Innovating Synergetically with all</span>
     <RiDoubleQuotesR />
          </p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100">
        <img src={tleader} className="card-img-top" alt="team_leader" />
        <div className="card-body">
          <h5 className="card-title">Team Leader</h5>
          <p className="card-text">
          <RiDoubleQuotesL /> 
    <span className="fs-5">We Continually Strives to Protect the Environment Under Its Corporate Social Responsibilities.</span>
     <RiDoubleQuotesR />
          </p>
        </div>
      </div>
    </div>
  </div>
 )
}
export default OurTeams