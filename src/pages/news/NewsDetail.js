import {useState,useEffect} from 'react'
import BackgroundImage from "../../components/BackgroundImage";
import { NavLink } from "react-router-dom";
import ContactForm from "../contact/ContactForm";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import Seo from '../../Seo';
import styles from "./News.module.css";

const NewsDetail = () => {
  const news = useSelector(state=>state.news.news)
  const [newsDetail,setNewsDetail] = useState({})
  const {id} =useParams()
  useEffect(()=>{
    const newsSingle = news.find(blog=>blog.id*1 === id*1)
    setNewsDetail(newsSingle)
  },[news,id])
  return (
    <>
    <Seo 
    title="Nwes detail"
    description="News and advertisements the describe about engineering and design tips and practices related to architectural design"
    type="article"
     />
      <BackgroundImage
        title="Service"
        isDetail={true}
        longTitle="Building Architectural and Structural Design"
      />
      <div className="my-lg-5 px-3 px-lg-0 py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
             {
              newsDetail?.photos?.length > 0 &&(
                <img src={newsDetail?.photos[0]?.path} alt='blog_image' className="img-fluid" style={{width:"100%",maxHeight:"400px"}} />
              )
             }
            </div>
            <div className="col-lg-4 ps-lg-5 d-none d-lg-block">
              <div className="fs-4 fw-bold mb-3 border-3 border-bottom">
                Related newss
              </div>

              {
                news?.length >0 &&(
                  news.map((blog,index) => (
                    <div className="d-flex justify-content-between align-items-center mt-1">
                      <NavLink to={`/news/${blog.id}`} className={styles.navLink}>
                        {blog.title}
                      </NavLink>
                      <NavLink to={`/news/${blog.id}`}
                        className={`${styles.navLink} border rounded-circle px-2  bg-light`}
                      >
                        {index+1}
                      </NavLink>
                    </div>
                  )
                )
                )}
            </div>
          </div>
          <h4 className="mt-5">{newsDetail?.title}</h4>
          <div dangerouslySetInnerHTML={{__html:newsDetail?.description}}></div>
          
          <div className="px-3 pt-3 text-center fs-3 fw-bold">Feel free to contact Us</div>
          <div>
          <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};
export default NewsDetail;
