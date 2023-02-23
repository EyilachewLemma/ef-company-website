import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./ImageCarousel.module.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
// import img8 from '../assets/img8.jpg'
// import img9 from '../assets/img9.jpg'
// import img10 from '../assets/img10.jpg'
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const imageItem = (img) => {
  return (
    <div className={styles.imageContainer}>
      <img src={img} alt="carousel_image" className={styles.image} />
      <div
        className={`${styles.projectDescription} d-flex align-items-center justify-content-center`}
      >
        <div className="align-self-center text-center px-3">
          <h4 className="text-white">Mettu University</h4>
          <p className="fw-bold">
            Projects Detail Engineering Design, Document Preparation &
            Engineering Cost Estimation of Mettu High school (SB+G+4 Classroom
            Building, SB+G+1 Administration & Conference Hall, SB+G+2 l Library
            & ICT Bldg.
          </p>
        </div>
      </div>
    </div>
  );
};
const ImageCarousel = () => {
  return (
    <Carousel
      swipeable={true}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      keyBoardControl={true}
      customTransition="all 2000"
      transitionDuration={100}
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
  );
};

export default ImageCarousel;
