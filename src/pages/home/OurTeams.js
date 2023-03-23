import {useState,useEffect} from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {RiDoubleQuotesL,RiDoubleQuotesR} from 'react-icons/ri'
import apiCall from '../../url';
import styles from './Home.module.css'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const OurTeams = () =>{
  const [teams,setTeams] = useState([])
  const fechTeams = async() =>{
    try{
      const response = await apiCall.get('teams')
      if(response.status === 200){
        setTeams(response.data)
      }
    }
    catch(err){}
  }
  useEffect(()=>{
    fechTeams()
  },[])
  console.log("teams=",teams)
    return (
        <Carousel
  swipeable={true}
  draggable={false}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={2000}
  keyBoardControl={true}
  customTransition="all 300ms"
  transitionDuration={300}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
{
  teams.length > 0 &&
  teams.map(team=>(
    <div key={team.id} className={`card h-100 ${styles.teamCard}`}>
    <img src={team.photo} className="card-img-top" alt={team.f_name} />
    <div className="card-body">
    <h6 className="card-title">{team.f_name+" "+team.m_name}</h6>
      <h5 className="card-title">{team.profession}</h5>
      <p className="card-text">
      <RiDoubleQuotesL /> 
<span className="fs-5">{team.quote}</span>
 <RiDoubleQuotesR />
      </p>
    </div>
  </div>
  ))
}

</Carousel>
    )
}

export default OurTeams