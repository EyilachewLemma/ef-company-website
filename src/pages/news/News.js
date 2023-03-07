// import { useState } from "react";
import BackgroundImage from "../../components/BackgroundImage";
import styles from "./News.module.css";
import { NavLink } from "react-router-dom";
import CompanyInfo from "../home/CompanyInfo";
import { useSelector } from "react-redux";
const News = () => {
  const news = useSelector(state=>state.news.news)
  console.log(news)
  return (
    <div className={styles.newsWraper}>
      <BackgroundImage title={"News"} isDetail={false} longTitle='' />
      <div className="bg-white px-3 px-lg-0 pb-lg-5 py-5">
          <h1 className="text-center py-lg-5">Latest News</h1>
        <div className="mt-5 container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
           
          {
            news?.length > 0 &&(
              news.map(singleNews=>(
          <div key={singleNews.id} className={`col ${styles.cardHeight}`}>
              <div className="card h-100">
                <div className={styles.card}>
                  <img src={singleNews?.photos[0]?.path} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <NavLink to={`/news/${singleNews.id}`} className={`${styles.navlink}`}>
                    <h5 className={`card-title ${styles.cardTitle}`}>
                    {singleNews.title}
                    </h5>
                  </NavLink>

                  <p className="card-text">
                  {singleNews.short_desc}...
                  </p>
                  <div className="mt-3 mt-lg-5">
                  <NavLink to={`/news/${singleNews.id}`} className={`${styles.navlink}`}>
                    Read More
                  </NavLink>
                  </div>
                </div>
              </div>
            </div>           
            )))}
                
          </div>
        </div>
      </div>
      
        <CompanyInfo />
      
    </div>
  );
};
export default News;
