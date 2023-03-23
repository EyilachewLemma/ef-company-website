import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GiStarFormation } from "react-icons/gi";
import { FaRegThumbsUp,FaRegHandshake,FaUserTie } from "react-icons/fa";
import { CiBadgeDollar } from "react-icons/ci";
import {BiHappy} from "react-icons/bi"
import styles from "./About.module.css";
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
const OurAttributs = () => {
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
      transitionDuration={3000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
    <div className={`d-flex ${styles.sliderContainer}`}>
    <span className={`${styles.iconColor} fs-1`}>
      <GiStarFormation />
    </span>
    <div className="ms-3">
      <h2 className="mt-2">Top Rated</h2>
      <div className="pe-lg-5">
        It has made us top rated for doing work that meets the needs
        of our clients.
      </div>
    </div>
  </div>
  <div className={`d-flex ${styles.sliderContainer}`}>
                <span className={`${styles.iconColor} fs-1`}>
                  <FaRegThumbsUp />
                </span>
                <div className="ms-3">
                  <h2 className="mt-2">Best Quality</h2>
                  <div className="pe-lg-5">
                  We pride ourselves on the quality and accuracy of work we produce and this continues to be one of the fundamental principles behind our success as leading Engineering consultant.
                  </div>
                </div>
              </div>
              <div className={`d-flex ${styles.sliderContainer}`}>
                <span className={`${styles.iconColor} fs-1`}>
                  <CiBadgeDollar />
                </span>
                <div className="ms-3">
                  <h2 className="mt-2">Low Cost</h2>
                  <div className="pe-lg-5">Affordable and negotiable price for mutual benefit.</div>
                </div>
              </div>
              <div className={`d-flex ${styles.sliderContainer}`}>
              <span className={`${styles.iconColor} fs-1`}>
                <FaRegHandshake />
              </span>
              <div className="ms-3">
                <h2 className="mt-2">Integrity </h2>
                <div className="pe-lg-5">We behave ethically and respect open and honest in our business and personal lives.</div>
              </div>
            </div>
            <div className={`d-flex ${styles.sliderContainer}`}>
            <span className={`${styles.iconColor} fs-1`}>
              <FaUserTie />
            </span>
            <div className="ms-3">
              <h2 className="mt-2">Employee Locality  </h2>
              <div className="pe-lg-5">We make every effort to attract and retain excellent ,motivated Employee who  are the source of our Success.</div>
            </div>
          </div>
          <div className={`d-flex ${styles.sliderContainer}`}>
          <span className={`${styles.iconColor} fs-1`}>
            <BiHappy />
          </span>
          <div className="ms-3">
            <h2 className="mt-2">Client Satisfaction   </h2>
            <div className="pe-lg-5">We engage our clients and the communities we serve so that they knows us, trust and value our service .</div>
          </div>
        </div>
    </Carousel>
  );
};

export default OurAttributs;
