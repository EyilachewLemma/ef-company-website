import BackgroundImage from "../../components/BackgroundImage";
import styles from "./Profile.module.css";
import CompanyInfo from "../home/CompanyInfo";
import { FaHandPointRight } from "react-icons/fa";
import {HiEye} from 'react-icons/hi'
import {FiTarget} from 'react-icons/fi'
import {RiHandCoinLine} from 'react-icons/ri'
const Profile = () => {
  return (
    <div className={styles.wraperContainer}>
      <BackgroundImage title={"Our Vision"} isDetail={false} longTitle='' />
      <div className="bg-white px-3 px-lg-0 py-5">
        <h1 className="fs-1 fw-bold py-lg-5 text-center d-none d-md-block">
          Our Vision,Mission and Core Values
        </h1>
        <h6 className="fs-1 fw-bold py-lg-5 text-center d-md-none">
          Our Vision,Mission and Core Values
        </h6>

        <div className="mt-5 container">
              <div className="border rounded-3">
                <div className={`card-body p-3 ${styles.cardContainer}`}>
                <div className="d-flex align-items-center">
                <span className="fs-1 text-warning"><HiEye /></span>
                <h4 className="card-title text-center d-none d-md-block ms-3 mt-3">Our Visions</h4>
                <h5 className="card-title text-center d-md-none ms-3 mt-3">Our Visions</h5>
                </div>
                
                  <p className="card-text d-flex">
                    <span className="text-success align-self-start">
                      <FaHandPointRight />{" "}
                    </span>
                    <span className="fs-5 ms-2">
                    Meet global and national standards and provide technological innovation for premium value in engineering service reliable results.
                    </span>
                  </p>
                  <p className="card-text d-flex">
                    <span className="text-success align-self-top">
                      <FaHandPointRight />{" "}
                    </span>
                    <span className="fs-5 ms-2">
                    Aims to become a leading engineering consultant in Ethiopia in 2023 that provides high quality professional service to employers. 
                    </span>
                  </p>
               
                </div>
              </div>
            <div className="border rounded mt-3 mt-lg-4">
              <div className={`card-body p-3 ${styles.cardContainer}`}>
              <div className="d-flex align-items-center">
              <span className="fs-2 text-warning"><FiTarget /></span>
              <h4 className="card-title text-center d-none d-md-block ms-3 mt-3">Our Missions</h4>
              <h5 className="card-title text-center d-md-none ms-3 mt-3">Our Missions</h5>
              </div>
             
                <p className="card-text d-flex">
                  <span className="text-success align-self-start">
                    <FaHandPointRight />{" "}
                  </span>
                  <span className="fs-5 ms-2">
                  As one of the top five leading architects and engineering consultants in Ethiopia and at sub–region level, EF will deliver the best customer experience in markets we serve.
                  </span>
                </p>
                <p className="card-text d-flex">
                  <span className="text-success align-self-top">
                    <FaHandPointRight />{" "}
                  </span>
                  <span className="fs-5 ms-2">
                  EF will meet customer expectations of highest quality with the application of appropriate technologies, methods & processes. 
                  </span>
                </p>
                <p className="card-text d-flex">
                  <span className="text-success align-self-top">
                    <FaHandPointRight />{" "}
                  </span>
                  <span className="fs-5 ms-2">
                  EF will operate at the highest levels of ethics & compliance with a focus on exemplary corporate governance and corporate citizenship.  
                  </span>
                </p>
                <p className="card-text d-flex">
                  <span className="text-success align-self-top">
                    <FaHandPointRight />{" "}
                  </span>
                  <span className="fs-5 ms-2">
                  EF will deliver best service & support with flexible customization capability; and positive operating results and financial stability.  
                  </span>
                </p>
                <p className="card-text d-flex">
                  <span className="text-success align-self-top">
                    <FaHandPointRight />{" "}
                  </span>
                  <span className="fs-5 ms-2">
                  EF will recruit, develop, motivate, reward, and retain personnel of exceptional ability, character, and dedication by providing good working conditions, superior leadership and compensation on the basis of performance.  
                  </span>
                </p>
              </div>
            </div>
          <div className="border rounded-3 mt-3 mt-lg-4">
            <div className={`card-body p-3 ${styles.cardContainer}`}>
            <div className="d-flex">
            <span className="text-warning fs-2"><RiHandCoinLine /> </span>
            <h4 className="card-title text-center d-none d-md-block ms-3 mt-3">Our Core Values</h4>
            <h5 className="card-title text-center d-md-none ms-3 mt-3">Our Core Values</h5>
            </div>
          
              <p className="card-text d-flex">
                <span className="text-success align-self-start">
                  <FaHandPointRight />{" "}
                </span>
                <span className="fs-5 ms-2">
                We are found on a number of core values that have been critical to the organization success and reflect its culture and priorities.
                </span>
              </p>
            </div>
          </div>         
        </div>
      </div>

      <CompanyInfo />
    </div>
  );
};
export default Profile;
