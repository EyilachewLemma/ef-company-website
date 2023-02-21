
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './ImageCarousel.module.css'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img6 from '../assets/img6.jpg'
import img7 from '../assets/img7.jpg'
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
    <div className={styles.singlCarousel}>
    <img src={img} alt="carousel_image" className="img-fluid" />
  </div>
  )
}
const SingleImageCarousel = () =>{
    return (
        <Carousel
  swipeable={true}
  draggable={false}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={4000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  {imageItem(img1)}
  {imageItem(img2)}
  {imageItem(img3)}
  {imageItem(img7)}
  {imageItem(img6)}
</Carousel>
    )
}

export default SingleImageCarousel