import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './HomeCarosel.module.css'
import home1 from '../assets/home/home1.jpg'
import home2 from '../assets/home/home2.jpg'
import home3 from '../assets/home/home3.jpg'
import home4 from '../assets/home/home4.jpg'
import home6 from '../assets/home/home6.jpg'
import home7 from '../assets/home/home7.jpg'
import home8 from '../assets/home/home8.jpg'
import home9 from '../assets/home/home9.jpg'
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const imageItem = (img)=>{ 
    
  return (
    <div className={styles.imageContainer}>
    <img src={img} alt="carousel_image" />
    <div className={styles.animationWroaper}></div>
    <div className={styles.animatedTitle}>
    EF Architect and Engineering Consulting      
    </div>
    <div className={`${styles.animatedDescription}`}>
    We deliver unique expertise for engineering solutions to satisfy our clients’ challenges.
    </div>
    <div className={styles.homeBtnContainer}>
<a href="/contact" className={`${styles.homeBtn} px-5 py-2`}>GET START</a>
    </div>
  </div>
  )
}
const HomeCarosel = () =>{
    return (
        <Carousel
  swipeable={true}
  draggable={false}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={3000}
  keyBoardControl={true}
  customTransition="all 300ms"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  {imageItem(home1)}
  {imageItem(home2)}
  {imageItem(home3)}
  {imageItem(home4)}
  {imageItem(home6)}
  {imageItem(home7)}
  {imageItem(home8)}
  {imageItem(home9)}
  
  
</Carousel>
    )
}

export default HomeCarosel