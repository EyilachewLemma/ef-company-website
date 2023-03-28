import { useState, useEffect } from "react";
import HomeCarosel from "../../components/HomeCarousel";
import CompanyInfo from "./CompanyInfo";
import OurBlogs from "./OurBlogs";
import OurTeams from "./OurTeams";
import { FaBalanceScale, FaQuestionCircle } from "react-icons/fa";
import { AiFillCaretRight } from "react-icons/ai";
import { TbMoodHappy } from "react-icons/tb";
import { AiTwotoneLock } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import aboutImg from "../../assets/about.jpg";
import bgImage from "../../assets/endale.jpg";
import { spinnerAction } from "../../stores/spinner.js";
import { actions } from "../../stores/index";
import { useDispatch, useSelector } from "react-redux";
import apiCall from "../../url";
const Home = () => {
  const news = useSelector((state) => state.news.news);
  const [openVedio, setOpenVedio] = useState(false);
  const dispach = useDispatch();
  const fetchNews = async () => {
    dispach(spinnerAction.setIsLoading(true));
    try {
      const response = await apiCall.get("news");
      if (response.status === 200) {
        dispach(actions.newsAction.setNews(response.data));
      }
    } catch (err) {
    } finally {
      dispach(spinnerAction.setIsLoading(false));
    }
  };
  const fetchServices = async () => {
    try {
      const response = await apiCall.get("services");
      if (response.status === 200) {
        dispach(actions.serviceAction.setServices(response.data));
        console.log("services in home =", response.data);
      }
    } catch (err) {}
  };
  const fetchCategories = async () => {
    try {
      const response = await apiCall.get("categories");
      if (response.status === 200) {
        dispach(actions.categoryAction.setCategories(response.data));
      }
    } catch (err) {}
  };

  useEffect(() => {
    fetchNews();
    fetchServices();
    fetchCategories()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="home-page-container">
      <div className="bg-white">
        <HomeCarosel />

        <section className="container p-3 p-lg-0">
          <div className="d-lg-flex my-lg-5 pt-5 pb-lg-5 position-relative ">
            <div className="py-lg-4">
              <h4 className="text-center">ABOUT US</h4>
              <h1>
                EF - Stands for Synergy, Innovation & Excellence.
              </h1>
              <p className="pe-lg-5">
                We Provide High Quality and Cost-Effective Services within
                Specified Time. Continually Strives to Protect the Environment
                Under Its Corporate Social Responsibilities. We Are All
                Interconnected and What You Do to The Environment, Ultimately
                You Do to Yourself.
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
                    src="https://www.youtube.com/embed/2WLd1zCVX9g"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
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
        <section className="welcome-message">
          <div className="welcome-wraper p-lg-5">
            <div className="container">
              <div className="row p-3">
                <div className="welcome-img rounded-3 bg-white col-lg-5 me-lg-5 p-0">
                  <img
                    src={bgImage}
                    alt="general_manager"
                    className="img-fluid rounded-3"
                  />
                </div>
                <div className="col-lg-6 border rounded-3 shadow-sm bg-white p-3 p-lg-4 mt-3 mt-lg-0">
                  <h2>Well Come Dear Client</h2>
                  <p>
                    <span className="fs-5 fw-bold">EF Architecture and Engineering consulting</span>  has been involved in
                    the design of various projects in the past year on Five
                    Rural Transformation Center , Five Warehouse, University
                    Projects designs and Construction Works, Addis Ababa Housing
                    Project, Mixed Use Buildings . The firm has been the capability
                    of providing multi- disciplinary consulting services to
                    public governmental and private organizations in a wide
                    range of engineering work both on its own and in association
                    with local and international consulting firms given its
                    highly experienced professionals in the field.
                  </p>
                    <h5 className="mt-2">Don't Hesitate to Contact us</h5>
                    <h6 className="mt-3">Endale Abddisa</h6>
                  <h6>CEO and Founder.</h6>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="why-choose-us pt-lg-5 pb-5">
          <h1 className="text-center fw-bold fs-1 pt-5 pb-lg-5 ">
            {" "}
            Why Choose Us ?
          </h1>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3 px-3 mt-2 mt-lg-0">
                <div className="border rounded-3 shadow-lg p-3 h-100 why-choose-us-card">
                  <div className="d-flex justify-content-center align-items-center">
                      <FaBalanceScale className="text-warning fs-2"></FaBalanceScale>
                    
                    <h4 className="ms-2 align-self-center mt-2">Honesty</h4>
                  </div>
                  <p className="mt-2">
                    We strive to be reliable in the construction industry and
                    build trust and confidence in our ability to anticipate and
                    respond to the client needs and to what the contract urges
                    on.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 px-3  mt-2 mt-lg-0">
                <div className="border rounded-3 shadow-lg p-3 h-100 why-choose-us-card">
                  <div className="d-flex justify-content-center">
                   
                      <TbMoodHappy className="text-warning fs-2"></TbMoodHappy>
                    <h4 className="ms-2 mt-1">Quality</h4>
                  </div>
                  <p className="mt-2">
                    Professional excellence: outstanding professionalism We
                    offer service of super quality based on our accumulated,
                    extensive and profound knowledge and experience.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 px-3   mt-2 mt-lg-0">
                <div className="border rounded-3 shadow-lg p-3 h-100 why-choose-us-card">
                  <div className="d-flex justify-content-center">
                      <AiTwotoneLock className="text-warning fs-2" />
                    <h4 className="ms-2 mt-1">Client centric</h4>
                  </div>
                  <p className="mt-2">
                    We are proud of always thinking in terms of what is best for
                    our clients offering solutions that are not only theoretical
                    but workable
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 px-3 mt-2 mt-lg-0">
                <div className="border rounded-3 shadow-lg p-3 h-100 why-choose-us-card">
                  <div className="d-flex justify-content-center">
                      <FaQuestionCircle className="text-warning fs-2"></FaQuestionCircle>
                    <h4 className="ms-2 mt-1">Responsible</h4>
                  </div>
                  <p className="mt-2">
                    We take responsibility for our action and hold our services
                    accountable for the results and outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <CompanyInfo />
      <div className="bg-white px-3 px-lg-0 pb-5">
        <div className="py-5">
          <h6 className="text-center mt-lg-5">OUR PROFESSIONALS</h6>
          <h1 className="text-center">Meet Our Teams</h1>
        </div>
        <div className="container">
          <OurTeams />
        </div>
      </div>
      <div className="bg-white">
        <section className="ourblog-conaner-athome py-5">
          <h6 className="text-center pt-5">OUR BLOGS</h6>
          <h1 className="text-center">Our Latest News</h1>
          <div className="container blog-image px-3 px-lg-0 py-5">
            <OurBlogs blogs={news} />
          </div>
        </section>
      </div>
    </div>
  );
};
export default Home;
