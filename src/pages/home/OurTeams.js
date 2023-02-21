import gmanager from '../../assets/team/gmanager.jpg'
import dmanager from '../../assets/team/dmanager.jpg'
import {RiDoubleQuotesL,RiDoubleQuotesR} from 'react-icons/ri'
import ef from '../../assets/team/ef.jpg'
const OurTeams = ()=>{
 return (
    <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
      <div class="card h-100">
        <img src={gmanager} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">General Manager</h5>
          <p class="card-text">
          <RiDoubleQuotesL /> 
    <span className="fs-5">We pride ourselves on our expertise and pragmatic solutions to engineering problems in the commertial and resideential sectors.</span>
     <RiDoubleQuotesR />
          </p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100">
        <img src={dmanager} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Deputy Manager</h5>
          <p class="card-text">
          <RiDoubleQuotesL /> 
    <span className="fs-5">We Constantly Excel by Thinking Contextually and Innovating Synergetically with all</span>
     <RiDoubleQuotesR />
          </p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100">
        <img src={ef} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Unknown position</h5>
          <p class="card-text">
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