// import { useState } from "react";
import BackgroundImage from "../../components/BackgroundImage";
import Image from "../../assets/img10.jpg";
import imge2 from '../../assets/img6.jpg'
import img1 from '../../assets/img14.jpg'
import img2 from '../../assets/img7.jpg'
import styles from "./News.module.css";
import { NavLink } from "react-router-dom";
import CompanyInfo from "../home/CompanyInfo";
const News = () => {
  return (
    <div className={styles.newsWraper}>
      <BackgroundImage title={"News"} isDetail={false} longTitle='' />
      <div className="bg-white px-3 px-lg-0 pb-lg-5 py-5">
          <h1 className="text-center py-lg-5">Latest News</h1>
        <div className="mt-5 container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div className={`col ${styles.cardHeight}`}>
              <div className="card h-100">
                <div className={styles.card}>
                  <img src={Image} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <NavLink to={`/news/${1}`} className={`${styles.navlink}`}>
                    <h5 className={`card-title ${styles.cardTitle}`}>
                    10 Mistakes To Avoid When Investing In Real Estate
                    </h5>
                  </NavLink>

                  <p className="card-text">
                  Architectural is a great career path if you want to build a broad skill set that includes everything from critical thinking and strategic planning to communications. If you love rising to a challenge...
                  </p>
                  <div className="mt-3 mt-lg-5">
                  <NavLink to={`/news/${1}`} className={`${styles.navlink}`}>
                    Read More
                  </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={`col ${styles.cardHeight}`}>
            <div className="card h-100">
              <div className={styles.card}>
                <img src={Image} className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <NavLink to={`/news/${1}`} className={`${styles.navlink}`}>
                  <h5 className={`card-title ${styles.cardTitle}`}>
                  10 Mistakes To Avoid When Investing In Real Estate
                  </h5>
                </NavLink>

                <p className="card-text">
                Architectural is a great career path if you want to build a broad skill set that includes everything from critical thinking and strategic planning to communications. If you love rising to a challenge...
                </p>
                <div className="mt-3 mt-lg-5">
                <NavLink to={`/news/${1}`} className={`${styles.navlink}`}>
                  Read More
                </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className={`col ${styles.cardHeight}`}>
          <div className="card h-100">
            <div className={styles.card}>
              <img src={Image} className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
              <NavLink to={`/news/${1}`} className={`${styles.navlink}`}>
                <h5 className={`card-title ${styles.cardTitle}`}>
                10 Mistakes To Avoid When Investing In Real Estate
                </h5>
              </NavLink>

              <p className="card-text">
              Architectural is a great career path if you want to build a broad skill set that includes everything from critical thinking and strategic planning to communications. If you love rising to a challenge...
              </p>
              <div className="mt-3 mt-lg-5">
              <NavLink to={`/news/${1}`} className={`${styles.navlink}`}>
                Read More
              </NavLink>
              </div>
            </div>
          </div>
        </div>
            <div className={`col ${styles.cardHeight}`}>
            <div className="card h-100">
              <div className={styles.card}>
                <img src={imge2} className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <NavLink to={`/news/${1}`} className={`${styles.navlink}`}>
                  <h5 className={`card-title ${styles.cardTitle}`}>
                  5 Ways to Make Your Home Look Architectural
                  </h5>
                </NavLink>

                <p className="card-text">
                Architectural is a great career path if you want to build a broad skill set that includes everything from critical thinking and strategic planning to communications. If you love rising to a challenge...
                </p>
                <div className="mt-3 mt-lg-5">
                <NavLink to={`/news/${1}`} className={`${styles.navlink}`}>
                  Read More
                </NavLink>
                </div>
              </div>
            </div>
          </div>
            <div className={`col ${styles.cardHeight}`}>
              <div className="card h-100">
                <div className={styles.card}>
                  <img src={img1} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <NavLink to={`/news/${1}`} className={`${styles.navlink}`}>
                    <h5 className={`card-title ${styles.cardTitle}`}>
                    How Architects Design for Less Lonely Living
                    </h5>
                  </NavLink>
                  <p className="card-text">
                  Architectural is a great career path if you want to build a broad skill set that includes everything from critical thinking and strategic planning to communications. If you love rising to a challenge...
                  </p>
                  <div className="mt-3 mt-lg-5">
                  <NavLink to={`/news/${1}`} className={`${styles.navlink}`}>
                    Read More
                  </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={`col ${styles.cardHeight}`}>
              <div className="card h-100">
                <div className={styles.card}>
                  <img src={img2} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <NavLink to={`/news/${1}`} className={`${styles.navlink}`}>
                    <h5 className={`card-title ${styles.cardTitle}`}>
                    7 Ways to Make Your Home Look Architectural
                    </h5>
                  </NavLink>
                  <p className="card-text">
                  Architectural is a great career path if you want to build a broad skill set that includes everything from critical thinking and strategic planning to communications...
                  </p>
                 <div className="mt-3 mt-lg-5">
                 <NavLink to={`/news/${1}`} className={`${styles.navlink}`}>
                   Read More
                 </NavLink>
                 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
        <CompanyInfo />
      
    </div>
  );
};
export default News;
