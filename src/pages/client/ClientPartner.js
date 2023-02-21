import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './Client.module.css'
import aau from '../../assets/partners/aau.png'
import astu from '../../assets/partners/astu.png'
import fdre from '../../assets/partners/fdre.png'
import uog from '../../assets/partners/uog.png'
import logo1 from '../../assets/partners/1.jpg'
import logo2 from '../../assets/partners/2.png'
import logo3 from '../../assets/partners/3.jpg'
import logo4 from '../../assets/partners/4.jpg'
import logo5 from '../../assets/partners/5.jpg'
import logo6 from '../../assets/partners/6.jpg'
import logo7 from '../../assets/partners/7.jpg'
import logo8 from '../../assets/partners/8.jpg'
import logo9 from '../../assets/partners/9.jpg'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const imageItem = (img,title)=>{
  return (
    <div className={styles.clientPartner}>
   <img src={img} alt="carousel_image" className="border-5 rounded-circle border-white img-fluid" height={300} width={300}  />
   <div className="fs-5 text-center">{title}</div>
   </div>
   
  )
}
const Clients = () =>{
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
  customTransition="all 0.3"
  transitionDuration={300}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  {imageItem(astu,"Adama Science and Technology Institute")}
  {imageItem(aau,"Addis Ababa University")}
  {imageItem(fdre,"FDRE")}
  {imageItem(uog,"Uiversity of Gondar")}
  {imageItem(logo1,"OIPDC")}
  {imageItem(logo2,"Bonga Uiversity")}
  {imageItem(logo3,"Borena Uiversity")}
  {imageItem(logo4,"ECX")}
  {imageItem(logo5,"Customs Commission")}
  {imageItem(logo6,"National Lottery")}
  {imageItem(logo7,"Addis Ababa City Constraction Bureau")}
  {imageItem(logo8,"Ministry of Health")}
  {imageItem(logo9,"Amhara Credit and Saving Institution")}
  
</Carousel>
    )
}

export default Clients