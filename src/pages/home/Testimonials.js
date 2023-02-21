import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './Home.module.css'
import person1 from '../../assets/testimonial/img-1.jpg'
import person2 from '../../assets/testimonial/img-2.jpg'
import {MdOutlineFormatQuote} from 'react-icons/md'
import {RiDoubleQuotesL,RiDoubleQuotesR} from 'react-icons/ri'
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
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
    <div className={styles.testimonialImgContainer}>
    <div className="p-4 d-flex justify-content-between align-items-center">
   <div className="d-flex align-items-center">
   <div className="border border-5 rounded-circle border-white">
   <img src={img} alt="carousel_image" className="border-5 rounded-circle border-white img-fluid" height={100} width={100}  />
   </div>
   <div className="ms-3">
   <div className="fs-5 fw-bold">Zelalem Lemma</div>
   <div className="fw-bold">Client</div>
   </div>
   </div>
    <span className="align-self-start fs-1"><MdOutlineFormatQuote /></span>
    </div>
    <div className="px-5 pb-5"><RiDoubleQuotesL /> 
    <span className="fs-5">We pride ourselves on our expertise and pragmatic solutions to engineering problems in the commertial and resideential sectors.</span>
     <RiDoubleQuotesR /></div>
  </div>
  )
}
const Testimonials = () =>{
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
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  {imageItem(person1)}
  {imageItem(person2)}
</Carousel>
    )
}

export default Testimonials