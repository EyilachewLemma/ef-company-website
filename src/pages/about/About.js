import BackgroundImage from "../../components/BackgroundImage";
import { GiStarFormation } from "react-icons/gi";
import { FaRegThumbsUp } from "react-icons/fa";
import { CiBadgeDollar } from "react-icons/ci";
import img1 from "../../assets/projects/project-3.jpg";
import img2 from "../../assets/projects/project-3.png";
import CompanyInfo from "../home/CompanyInfo";
import OurTeams from "../home/OurTeams";
import { useNavigate } from "react-router-dom";
import styles from "./About.module.css";
const About = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.aboutWraper}>
      <div className="bg-white pb-3 pb-lg-5">
      <BackgroundImage title={"About Us"} isDetail={false} longTitle='' />
      <section className="px-3">
        <div className="container">
          <div className="row my-lg-5 py-5">
            <div className={`${styles.iframe} col-lg-6`}>
              <iframe
                width="100%"
                height="100%"
                title="video_element"
                src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=0&mute=0"
              ></iframe>
            </div>
            <div className="col-lg-6 mt-2 mt-lg-0 pb-lg-3">
              <h6>Welcome to EF</h6>
              <h3>
              Architectural and Engineering consulting services
              </h3>
              <p className={styles.psize}>
                We are a professional engineering firm staffed and organized to
                provide Architectural and Engineering consulting services.
                Established in 2015 by a group of young ambitious and competent
                Architects, Engineers and other expertise which have great
                experience in their respective.
              </p>
              <p className={styles.psize}>
                We have been involved in the design of various projects in the
                past year on Five Rural Transformation Center , Five Warehouse,
                University Projects designs and Construction Works, Addis Ababa
                Housing Project, and Mixed Use Buildings.
              </p>
              <p className={styles.psize}>
                It is a firm of consulting Architects and Engineers Head Office
                in Addis Ababa. Kifle Ketema-Yeka in the road from Megenagna to
                Lamberet Lame Dairy (Shola Milk) Building first floors Room No
                108
              </p>
              <button
                onClick={() => navigate("/service")}
                className={`${styles.ourServiceBtn} px-4 py-2`}
              >
                OUR SERVICES
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.identity} px-3 py-lg-3`}>
        <div className="container">
          <div className="row my-lg-5 py-5">
            <div className="col-md-4 d-flex">
              <span className={`${styles.iconColor} fs-1`}>
                <GiStarFormation />
              </span>
              <div className="ms-3">
                <h2 className="mt-2">Top Rated</h2>
                <div>
                  Lorem ipsum dolor sit amet, consec tetur adipisicing elit.
                  Officia odio eum corporis consequatur.
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <span className={`${styles.iconColor} fs-1`}>
                <FaRegThumbsUp />
              </span>
              <div className="ms-3">
                <h2 className="mt-2">Best Quality</h2>
                <div>
                  Lorem ipsum dolor sit amet, consec tetur adipisicing elit.
                  Officia odio eum corporis consequatur.
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <span className={`${styles.iconColor} fs-1`}>
                <CiBadgeDollar />
              </span>
              <div className="ms-3">
                <h2 className="mt-2">Low Cost</h2>
                <div>
                  Lorem ipsum dolor sit amet, consec tetur adipisicing elit.
                  Officia odio eum corporis consequatur.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5 px-3 px-lg-0">
        <div className="container">
          <div className="row py-lg-5">
            <div className="col-lg-6 px-0">
              <div className="d-flex align-items-center">
              <h1 className="fs-1 fw-bold">10</h1>
              <h3 className="ms-2">Years of Experience</h3>
              </div>
              <p className={`pe-lg-5 ${styles.psize}`}>
                EF Architects and Engineers consulting plc. has been involved in
                the design of various projects in the past year since its
                foundation. Some of the major projects are Rural Transformation
                Center projects, Warehouse projects, different University
                Projects, Addis Ababa Housing Projects, and Mixed-Use Buildings.
                It is gradually evolving as a recognized consulting firm,
                proving in the services of planning, architecture, engineering
                design, construction management, and supervision.
              </p>
              <div className={`mt-3 ${styles.imgContainer}`}>
                <img src={img1} alt="road" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 px-0">
              <div className={styles.imgContainer}>
                <img src={img2} alt="road" className="img-fluid" />
              </div>
              <div className="mt-3 ps-lg-5">
              <h3>EF Architects and Engineers consulting</h3>
                <p className={styles.psize}>
                Invests in the training
                and development of its staff to have the best-equipped people
                working and develop the skills and professionalism of its
                project teams and support staff.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
        <div className="bg-white pb-5">
        <h1 className="text-center pb-5">Our Teams</h1>
        <div className="container pb-lg-5">
        <OurTeams />
        </div>
        </div>
      <CompanyInfo />
      
    </div>
  );
};
export default About;
