import { useState } from "react";
import BackgroundImage from "../../components/BackgroundImage";
import Image from "../../assets/blog/img-2.jpg";
import img1 from '../../assets/img6.jpg'
import img2 from '../../assets/img7.jpg'
import img3 from '../../assets/gallery/1.jpg'
import img4 from '../../assets/gallery/2.jpg'
import img5 from '../../assets/gallery/3.jpg'
import img6 from '../../assets/gallery/4.jpg'
import img7 from '../../assets/gallery/5.jpg'
import img8 from '../../assets/gallery/6.jpg'
import img9 from '../../assets/gallery/certificate1.jpg'
import styles from "./Gallery.module.css";
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
    <div className={styles.gallerWraper}>
      <BackgroundImage title={"Projects"} isDetail={false} longTitle='' />
      <div className="bg-white px-3 px-lg-0 pb-lg-5 py-5">
        <div className="d-lg-flex container py-lg-5">
          <div className="fs-1 fw-bold">Our Gallery</div>
          <div className="ms-auto">
            <div className="d-lg-flex justify-content-between align-items-center">
              <button onClick={allProject} className={isAll? `${styles.selectionBtn} border-2 border-bottom border-danger`:styles.selectionBtn}>Projects</button>
              <button onClick={filterProject} className={`${styles.selectionBtn} ms-3`}>
                Staffs and Managements
              </button>
              <button onClick={filterProject} className={`${styles.selectionBtn} ms-3`}>
                Ceremonies
              </button>
                </div>
          </div>
        </div>
        <div className="mt-5 container">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card h-100">
                <div className={styles.card}>
                  <img src={Image} alt="..." />
                    <div className={`${styles.imageDesctiption} text-center d-flex justify-content-center`}>
                  <div className="align-self-center text-center">
                  <h3 className="text-white">Bonga University</h3>
                  <span>G+4 (8 Dormitory, 2 Seminar, 2Laboratory ,2 Class room, 1 Decentralize Administration building, 1 Department building</span>
                  </div>
                  </div>
                </div>
             </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className={styles.card}>
                  <img src={img1} className="card-img-top" alt="..." />
                  <div className={`${styles.imageDesctiption} text-center d-flex justify-content-center`}>
                  <div className="align-self-center text-center">
                  <h3 className="text-white">Bonga University</h3>
                  <span>G+4 (8 Dormitory, 2 Seminar, 2Laboratory ,2 Class room, 1 Decentralize Administration building, 1 Department building</span>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className={styles.card}>
                  <img src={img2} className="card-img-top" alt="..." />
                  <div className={`${styles.imageDesctiption} text-center d-flex justify-content-center`}>
                  <div className="align-self-center text-center">
                  <h3 className="text-white">Bonga University</h3>
                  <span>G+4 (8 Dormitory, 2 Seminar, 2Laboratory ,2 Class room, 1 Decentralize Administration building, 1 Department building</span>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className={styles.card}>
                  <img src={img3} className="card-img-top" alt="..." />
                  <div className={`${styles.imageDesctiption} text-center d-flex justify-content-center`}>
                  <div className="align-self-center text-center">
                  <h3 className="text-white">Bonga University</h3>
                  <span>G+4 (8 Dormitory, 2 Seminar, 2Laboratory ,2 Class room, 1 Decentralize Administration building, 1 Department building</span>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className={styles.card}>
                  <img src={img4} className="card-img-top" alt="..." />
                  <div className={`${styles.imageDesctiption} text-center d-flex justify-content-center`}>
                  <div className="align-self-center text-center">
                  <h3 className="text-white">Bonga University</h3>
                  <span>G+4 (8 Dormitory, 2 Seminar, 2Laboratory ,2 Class room, 1 Decentralize Administration building, 1 Department building</span>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className={styles.card}>
                  <img src={img5} className="card-img-top" alt="..." />
                  <div className={`${styles.imageDesctiption} text-center d-flex justify-content-center`}>
                  <div className="align-self-center text-center">
                  <h3 className="text-white">Bonga University</h3>
                  <span>G+4 (8 Dormitory, 2 Seminar, 2Laboratory ,2 Class room, 1 Decentralize Administration building, 1 Department building</span>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className={styles.card}>
                  <img src={img6} className="card-img-top" alt="..." />
                  <div className={`${styles.imageDesctiption} text-center d-flex justify-content-center`}>
                  <div className="align-self-center text-center">
                  <h3 className="text-white">Bonga University</h3>
                  <span>G+4 (8 Dormitory, 2 Seminar, 2Laboratory ,2 Class room, 1 Decentralize Administration building, 1 Department building</span>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className={styles.card}>
                  <img src={img7} className="card-img-top" alt="..." />
                  <div className={`${styles.imageDesctiption} text-center d-flex justify-content-center`}>
                  <div className="align-self-center text-center">
                  <h3 className="text-white">Bonga University</h3>
                  <span>G+4 (8 Dormitory, 2 Seminar, 2Laboratory ,2 Class room, 1 Decentralize Administration building, 1 Department building</span>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className={styles.card}>
                  <img src={img8} className="card-img-top" alt="..." />
                  <div className={`${styles.imageDesctiption} text-center d-flex justify-content-center`}>
                  <div className="align-self-center text-center">
                  <h3 className="text-white">Bonga University</h3>
                  <span>G+4 (8 Dormitory, 2 Seminar, 2Laboratory ,2 Class room, 1 Decentralize Administration building, 1 Department building</span>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
            <div className="card h-100">
              <div className={styles.card}>
                <img src={img9} className="card-img-top" alt="..." />
                <div className={`${styles.imageDesctiption} text-center d-flex justify-content-center`}>
                <div className="align-self-center text-center">
                <h3 className="text-white">Bonga University</h3>
                <span>G+4 (8 Dormitory, 2 Seminar, 2Laboratory ,2 Class room, 1 Decentralize Administration building, 1 Department building</span>
                </div>
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
