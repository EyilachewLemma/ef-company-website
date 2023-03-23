import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './Home.module.css'
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

const OurBlogs = ({blogs}) =>{
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
{blogs.map(blog=>(
  <div key={blog.id} className={styles.imageContainer}>
  <NavLink to={`/news/${1}`} className={`${styles.navlink}`}>
  <div className={styles.innerContainer}>
  <img src={blog?.photos[0]?.path} alt="carousel_image"  className="img-fluid"/>
  </div>
  </NavLink>
   <div className="pt-2">posted on {blog.created_at.slice(0,10)}</div>
   <NavLink to={`/news/${blog.id}`} className={`${styles.navlink} fs-4 fw-bold`}>
   {blog.title}
   </NavLink>
   <div>{blog.short_desc}...</div>
     <div>
     <NavLink to={`/news/${blog.id}`} className={`${styles.navlink} `}><u>SEE MORE</u></NavLink>
     </div>
 </div>
))
}
</Carousel>
    )
}

export default OurBlogs