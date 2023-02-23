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
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100">
                <div className={`card-body ${styles.cardContainer}`}>
                <div className="d-flex align-items-center">
                <span className="fs-1 text-warning"><HiEye /></span>
                <h4 class="card-title text-center d-none d-md-block ms-3 mt-3">Our Visions</h4>
                <h5 class="card-title text-center d-md-none ms-3 mt-3">Our Visions</h5>
                </div>
                
                  <p class="card-text d-flex">
                    <span className="text-success align-self-start">
                      <FaHandPointRight />{" "}
                    </span>
                    <span className="fs-5 ms-2">
                      Meet global and national standards & provide technological
                      innovations for premium value in engineering service
                      reliable results.
                    </span>
                  </p>
                  <p class="card-text d-flex">
                    <span className="text-success align-self-top">
                      <FaHandPointRight />{" "}
                    </span>
                    <span className="fs-5 ms-2">
                      Aims to become a leading engineering consultant in
                      Ethiopia in 2023 that provides high quality professional
                      service to employers.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
            <div className="card h-100">
              <div class={`card-body ${styles.cardContainer}`}>
              <div className="d-flex align-items-center">
              <span className="fs-2 text-warning"><FiTarget /></span>
              <h4 class="card-title text-center d-none d-md-block ms-3 mt-3">Our Missions</h4>
              <h5 class="card-title text-center d-md-none ms-3 mt-3">Our Missions</h5>
              </div>
             
                <p class="card-text d-flex">
                  <span className="text-success align-self-start">
                    <FaHandPointRight />{" "}
                  </span>
                  <span className="fs-5 ms-2">
                  Provide high quality, knowledgeable and efficient service to clients to allow them achieves their goals.
                  </span>
                </p>
                <p class="card-text d-flex">
                  <span className="text-success align-self-top">
                    <FaHandPointRight />{" "}
                  </span>
                  <span className="fs-5 ms-2">
                  Strives to effectively utilize company resources to exceed client’s expectations in assisting them to achieve their goals.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
          <div className="card h-100">
            <div class={`card-body ${styles.cardContainer}`}>
            <div className="d-flex">
            <span className="text-warning fs-2"><RiHandCoinLine /> </span>
            <h4 class="card-title text-center d-none d-md-block ms-3 mt-3">Our Core Values</h4>
            <h5 class="card-title text-center d-md-none ms-3 mt-3">Our Core Values</h5>
            </div>
          
              <p class="card-text d-flex">
                <span className="text-success align-self-start">
                  <FaHandPointRight />{" "}
                </span>
                <span className="fs-5 ms-2">
                With our eye in a common future and sharing the pleasure of success together with as a real design and consulting.
                </span>
              </p>
              <p class="card-text d-flex">
                <span className="text-success align-self-top">
                  <FaHandPointRight />{" "}
                </span>
                <span className="fs-5 ms-2">
                We are honest and passionate in our consulting work as we seek our client’s real needs for change.
                </span>
              </p>
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
export default Profile;
