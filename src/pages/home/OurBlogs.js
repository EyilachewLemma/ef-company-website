import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './Home.module.css'
import img1 from '../../assets/blog/img-1.jpg'
import img2 from '../../assets/blog/img-2.jpg'
import img3 from '../../assets/blog/img-3.jpg'
import img4 from '../../assets/blog/img-4.jpg'
import img5 from '../../assets/blog/img-5.jpg'
import { NavLink } from "react-router-dom";
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
const imageItem = (img)=>{
  return (
    <div className={styles.imageContainer}>
   <NavLink to={`/news/${1}`} className={`${styles.navlink}`}>
   <div className={styles.innerContainer}>
   <img src={img} alt="carousel_image"  className="img-fluid"/>
   </div>
   </NavLink>
    <div className="pt-2">25 sep 2023</div>
    <NavLink to={`/news/${1}`} className={`${styles.navlink} fs-4 fw-bold`}>
    Best Architecture Design
    </NavLink>
    <div>Consectetur adipiscing elit. Purusout phasellus malesuada lectus.</div>
      <div>
      <NavLink to={`/news/${1}`} className={`${styles.navlink} `}><u>SEE MORE</u></NavLink>
      </div>
  </div>
  )
}
const OurBlogs = () =>{
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
  {imageItem(img1)}
  {imageItem(img2)}
  {imageItem(img3)}
  {imageItem(img4)}
  {imageItem(img5)}
</Carousel>
    )
}

export default OurBlogs