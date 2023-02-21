import { useState } from "react";
import ImageCarousel from "../../components/ImgeCarousel";
import HomeCarosel from "../../components/HomeCarousel";
import CompanyInfo from "./CompanyInfo";
import Testimonials from "./Testimonials";
import OurBlogs from "./OurBlogs";
import OurTeams from "./OurTeams";
import { FaBalanceScale, FaQuestionCircle } from "react-icons/fa";
import { AiFillCaretRight } from "react-icons/ai";
import { TbMoodHappy } from "react-icons/tb";
import { AiTwotoneLock } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import aboutImg from "../../assets/about.jpg";
const Home = () => {
  const [openVedio, setOpenVedio] = useState(false);
  return (
    <div className="home-page-container">
    <div className="bg-white">
      <HomeCarosel />

      <section className="container p-3 p-lg-0">
        <div className="d-lg-flex my-lg-5 py-5 position-relative ">
          <div className="py-lg-5">
            <div className="fs-5 fw-bold about-as-title-at-home text-center">ABOUT US</div>
            <div className="fw-bold fs-1 dark-blue-text">
              EF - Stands for Synergy, Innovation & Excellence.
            </div>
            <p className="fs-5 pe-lg-5">
              We Provide High Quality and Cost-Effective Services within
              Specified Time. Continually Strives to Protect the Environment
              Under Its Corporate Social Responsibilities. We Are All
              Interconnected and What You Do to The Environment, Ultimately You
              Do to Yourself.
            </p>
            <div>
              <button className="contactus-btn-at-home px-5 py-2">
                CONTACT US
              </button>
            </div>
          </div>
          <div className="about-home-image py-5 position-relative">
            <img src={aboutImg} alt="about_image" />
            {openVedio && (
              <div className="vedio-ifrem-contaner">
                <div className="d-flex p-4">
                  <button
                    onClick={() => setOpenVedio(!openVedio)}
                    className="rounded-circle border-0 shadow-sm ms-auto p-2 close-video-icon "
                  >
                    <FaTimes />
                  </button>
                </div>
                <iframe
                  width="100%"
                  height="100%"
                  title="video_element"                  
                  src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=0&mute=0"
                ></iframe>
              </div>
            )}
          </div>
          {!openVedio && (
            <button
              onClick={() => setOpenVedio(!openVedio)}
              className="video-iconat-home rounded-circle p-4"
            >
              <AiFillCaretRight className="text-white fs-2" />
            </button>
          )}
        </div>
      </section>
      <section className="featured-carousel container pb-5 bg-white">
        <ImageCarousel />
      </section>

      <section className="why-choose-us py-lg-5">
        <div className="text-center fw-bold fs-1 dark-blue-text py-5">
          {" "}
          Why Choose Us ?
        </div>
        <div className="container">
          <div className="d-md-flex pb-5 mx-2 mx-lg-0">
            <div className="flex-fill bg-white border rounded-3 shadow-lg p-3 me-md-3 mt-2 mt-lg-0">
              <div className="d-flex align-items-center">
                <span className="text-success fs-1">
                  {" "}
                  <FaBalanceScale />
                </span>
                <span className="dark-blue-text fs-3 fw-bold ms-3">
                  Honesty
                </span>
              </div>
              <div className="mt-3 dark-blue-text fs-5">
                Conduct business with our customers and with each in Honestly
              </div>
            </div>
            <div className="flex-fill bg-white border rounded-3 shadow-lg p-3 me-md-3  mt-2 mt-lg-0">
              <div className="d-flex align-items-center">
                <span className="text-success fs-1">
                  {" "}
                  <TbMoodHappy />
                </span>
                <span className="dark-blue-text fs-3 fw-bold ms-3">
                  Quality
                </span>
              </div>
              <div className="mt-3 dark-blue-text fs-5">
                Consistently deliver extremely high-quality tire sales and
                installations.
              </div>
            </div>
            <div className="flex-fill bg-white border rounded-3 shadow-lg p-3 me-md-3  mt-2 mt-lg-0">
              <div className="d-flex align-items-center">
                <span className="text-success fs-1">
                  {" "}
                  <AiTwotoneLock />
                </span>
                <span className="dark-blue-text fs-3 fw-bold ms-3">Safety</span>
              </div>
              <div className="mt-3 dark-blue-text fs-5">
                Maintain a safety-first mindset and overall business operation.
              </div>
            </div>
            <div className="flex-fill bg-white border rounded-3 shadow-lg p-3  mt-2 mt-lg-0">
              <div className="d-flex align-items-center">
                <span className="text-success fs-1">
                  {" "}
                  <FaQuestionCircle />
                </span>
                <span className="dark-blue-text fs-3 fw-bold ms-3">
                  Responsible
                </span>
              </div>
              <div className="mt-3 dark-blue-text fs-5">
                We are responsibile, committed, dependable, accountable, and
                care about others
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      <CompanyInfo />
     <div className="bg-white px-3 px-lg-0">
     <div className="py-5">
     <div className="text-center">OUR PROFESSIONALS</div>
     <h1 className="text-center">Meet Our Teams</h1>
     </div>
     <div className="container">
     <OurTeams />
     </div>
     </div>
      <div className="bg-white">
      <div className="testimonial-container px-3 px-lg-0 py-5">
      <div className="container">
      <div className="testimonial-title text-center pt-2 pt-lg-5 ">TESTIMONIAL</div>
      <div className="fs-1 fw-bold text-center pb-5">People Say About Us</div>
      <Testimonials />
      </div>
      </div>
      <section className="ourblog-conaner-athome py-lg-5 my-lg-5">
      <div className="text-center p-5 red-text">OUR BLOGS</div>
      <h1 className="text-center">Our Latest News</h1>
      <div className="container blog-image px-3 px-lg-0 py-5">
      <OurBlogs />
      </div>
      </section>
      </div>
    </div>
  );
};
export default Home;
