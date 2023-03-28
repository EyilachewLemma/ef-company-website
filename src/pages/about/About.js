import BackgroundImage from "../../components/BackgroundImage";
import img1 from "../../assets/projects/project-3.jpg";
import img2 from "../../assets/projects/project-3.png";
import img3 from "../../assets/collaborate.jpg"
import CompanyInfo from "../home/CompanyInfo";
import OurTeams from "../home/OurTeams";
import OurAttributs from "./OurAttributes"
import { useNavigate } from "react-router-dom";
import styles from "./About.module.css";
const About = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.aboutWraper}>
      <div className="bg-white pb-lg-3">
        <BackgroundImage title={"About Us"} isDetail={false} longTitle="" />
        <section className="px-3">
          <div className="container">
            <div className="row my-lg-5 py-5">
              <div className={`${styles.iframe} col-lg-6`}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/2WLd1zCVX9g"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              {}
              <div className="col-lg-6 mt-2 mt-lg-0 pb-lg-3">
                <h6>Welcome to EF</h6>
                <h3>Architectural and Engineering consulting services</h3>
                <p>
                  We are a professional engineering firm staffed and organized
                  to provide Architectural and Engineering consulting services.
                  Established in 2015 by a group of young ambitious and
                  competent Architects, Engineers and other expertise which have
                  great experience in their respective.
                </p>
                <p>
                  We have been involved in the design of various projects in the
                  past year on Five Rural Transformation Center , Five
                  Warehouse, University Projects designs and Construction Works,
                  Addis Ababa Housing Project, and Mixed Use Buildings.
                </p>
                <p>
                  It is a firm of consulting Architects and Engineers Head
                  Office in Addis Ababa. Kifle Ketema-Yeka in the road from
                  Megenagna to Lamberet Lame Dairy (Shola Milk) Building first
                  floors Room No 108
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
          <div className="container py-5">
           <OurAttributs />
          </div>
        </section>
        <section className="mt-5 px-3 px-lg-0">
          <div className="container">
            <div className="row py-lg-5">
              <div className="col-lg-6 px-0">
                <div className="d-flex align-items-center">
                  <h1 className="fs-1 fw-bold">10</h1>
                  <h3 className="ms-2">Years of Experience</h3>
                </div>
                <p className={`pe-lg-5`}>
                  EF Architects and Engineers consulting plc. has been involved
                  in the design of various projects in the past year since its
                  foundation. Some of the major projects are Rural
                  Transformation Center projects, Warehouse projects, different
                  University Projects, Addis Ababa Housing Projects, and
                  Mixed-Use Buildings. It is gradually evolving as a recognized
                  consulting firm, proving in the services of planning,
                  architecture, engineering design, construction management, and
                  supervision.
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
                  <p>
                    Invests in the training and development of its staff to have
                    the best-equipped people working and develop the skills and
                    professionalism of its project teams and support staff.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="px-3 px-lg-0 pb-5 bg-white">
      <div className="container">
      <h3 className="text-center pb-lg-5">Collaboration and team work</h3>
      <div className="row">
      <div className="col-md-6 pe-lg-3">
      <p>
      We recognize that we are strong and more effective as a team than as an individual.
      We support an open communication culture in which individual are encouraged to offer suggestion for improvement.
      </p>
      <p>
      We recognize  that diversity is the foundation of our organization and we recognize that different viewpoints can help us anticipate and solve problems . We strongly believe that team work increase our chance of success.
      </p>
      </div>

      <div className="col-md-6">
      <img src={img3} alt="collabotate" className="img-fluid" />
      </div>
      </div>
      </div>
      </div>

      <div className="bg-white py-5">
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
