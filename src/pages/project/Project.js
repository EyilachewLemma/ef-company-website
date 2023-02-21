import { useState } from "react";
import BackgroundImage from "../../components/BackgroundImage";
import Image from "../../assets/blog/img-2.jpg";
import img1 from '../../assets/img6.jpg'
import img2 from '../../assets/img7.jpg'
import styles from "./Project.module.css";
import { NavLink } from "react-router-dom";
import CompanyInfo from "../home/CompanyInfo";
const Project = () => {
    const [isAll,setIsAll] = useState(true)
    const filterProject = () =>{
        if(isAll){
            setIsAll(false)
        }
    }
    const allProject = () =>{
        if(!isAll){
            setIsAll(true)
        }
    }
  return (
    <div className={styles.projectWraper}>
      <BackgroundImage title={"Projects"} />
      <div className="bg-white px-3 px-lg-0 pb-lg-5 py-5">
        <div className="d-lg-flex container py-lg-5">
          <div className="fs-1 fw-bold">Our Projects</div>
          <div className="ms-auto">
            <div className="d-lg-flex justify-content-between align-items-center">
              <button onClick={allProject} className={isAll? `${styles.selectionBtn} border-2 border-bottom border-danger`:styles.selectionBtn}>All</button>
              <button onClick={filterProject} className={`${styles.selectionBtn} ms-3`}>
                Completed Road
              </button>
              <button onClick={filterProject} className={`${styles.selectionBtn} ms-3`}>
                Completed Building
              </button>
              <button onClick={filterProject} className={`${styles.selectionBtn} ms-lg-3 mt-2 mt-lg-0`}>
                On progress Road
              </button>
              <button onClick={filterProject} className={`${styles.selectionBtn} ms-3 mt-2 mt-lg-0`}>
                On progress Building
              </button>
            </div>
          </div>
        </div>
        <div className="mt-5 container">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100">
                <div className={styles.card}>
                  <img src={Image} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <NavLink className={`${styles.navlink}`}>
                    <h5 className={`card-title ${styles.cardTitle}`}>
                      Projects under Oromia Industrial Parks Development
                      Corporation
                    </h5>
                  </NavLink>

                  <p className="card-text">
                    Design, Construction Supervision and Contract Administration
                    of the Five RTC Constriction works, (Meki RTC Project).
                  </p>
                   <div className="progress" style={{height:"20px"}}>
                   <div className="progress-bar bg-success" role="progressbar" style={{width:"100%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">100%  Completed</div>
                 </div>
                  <div className="mt-3 mt-lg-5">
                  <NavLink className={`${styles.navlink}`}>
                    See More
                  </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className={styles.card}>
                  <img src={img1} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <NavLink className={`${styles.navlink}`}>
                    <h5 className={`card-title ${styles.cardTitle}`}>
                      Projects under FDRE, Minister of Science Higher Education
                    </h5>
                  </NavLink>
                  <p className="card-text">
                    G+4 (8 Dormitory, 2 Seminar, 2Laboratory ,2 Class room, 1
                    Decentralize Administration building, 1 Department
                    building).
                  </p>
                  <p className="card-text">
                    Design, Design Review, Site adaptation Contract
                    Administration and Construction Supervision
                  </p>
                  <div className="progress" style={{height:"20px"}}>
                   <div className="progress-bar bg-success" role="progressbar" style={{width:"50%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%  Completed</div>
                 </div>
                  <div className="mt-3 mt-lg-5">
                  <NavLink className={`${styles.navlink}`}>
                    See More
                  </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className={styles.card}>
                  <img src={img2} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <NavLink className={`${styles.navlink}`}>
                    <h5 className={`card-title ${styles.cardTitle}`}>
                      Projects under, FE Construction plc
                    </h5>
                  </NavLink>
                  <p className="card-text">
                    FE G+10 Mixed Use Building Design review, Contract
                    Administration and Construction Supervision .
                  </p>
                  <div className="progress" style={{height:"20px"}}>
                  <div className="progress-bar bg-success" role="progressbar" style={{width:"20%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="20">25%  Completed</div>
                </div>
                 <div className="mt-3 mt-lg-5">
                 <NavLink className={`${styles.navlink}`}>
                   See More
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
export default Project;
