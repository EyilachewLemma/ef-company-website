import {useState,useEffect} from 'react'
import logo from "../../assets/edited-logo.png";
import { NavLink } from "react-router-dom";
import {GoLocation} from 'react-icons/go'
import {BsTelephone} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle,AiFillLinkedin} from 'react-icons/ai'
import {TbCopyright} from 'react-icons/tb'
import styles from "./TheFooter.module.css";
const TheFooter = () => {
  const [year,setYear] = useState(null)
  useEffect(()=>{
    const date = new Date()
    setYear(date.getFullYear())
  },[])
  return (
    <>
    <div
      className={`${styles.footerContainer} px-3 px-lg-5 pt-5 pb-3 text-white`}>
      <div className="row text-white">
      <div className="col-lg-4">
        <div className="d-flex">
          <img src={logo} alt="logo" style={{width:50,height:50}} />
        </div>
        <div className="text-white py-3">
          EF Architects and Engineers consulting
           is a professional engineering
          firm staffed and organized to provide 
          Architectural and Engineering
          consulting services.
        </div>
        <div>
        </div>
      </div>
      <div className="col-lg-4">
      <h5 className="text-ceter text-white">Our Services</h5>
      <div className="py-3">
         <div><NavLink className={styles.navlink}>Building Architectural and Structural Design</NavLink></div>
         <div><NavLink className={styles.navlink}>Hydraulic and Structural Engineering Design</NavLink></div>
        <div> <NavLink className={styles.navlink}>Topographic Surveying and Design</NavLink></div>
        <div> <NavLink className={styles.navlink}>Geotechnical Engineering, Material Testing, and Pavement Design</NavLink></div>
        <div> <NavLink className={styles.navlink}>Transportation Planning and Feasibility Study</NavLink></div>
      </div>
      </div>
      <div className="col-lg-4">
      <h5 className="text-ceter text-white">Contacts</h5>
      <div className="py-3">
       <div className="d-flex align-items-center">
       <span className="text-white fs-5"><GoLocation /></span>
       <span className="ms-2">Lamberet Lame Dairy (Shola Milk) Building first floors #108. Yeka, Addis Ababa, Ethiopia</span>
       </div>
       <div className="d-flex align-items-center mt-2">
       <span className="text-white fs-5"><BsTelephone /></span>
       <span className="ms-2">+251 116 677479 / +251 911 240283</span>
       </div>
       <div className="d-flex align-items-center mt-2">
       <span className="text-white fs-5"><HiOutlineMail /></span>
       <span className="ms-2">efheadoffice1@gmail.com</span>
       </div>
       <div className="d-flex">
       <a href="https://www.facebook.com/" className="text-white fs-3"><BsFacebook /></a>
       <a href="https://www.facebook.com/" className="text-white fs-3 ms-3"><AiFillTwitterCircle /></a>
       <a href="https://www.facebook.com/" className="text-white fs-3 ms-3"><AiFillLinkedin /></a>
       </div>
      </div>
      </div>
    </div>    
    </div>
    
    <div className={`${styles.desiner}`}>
    <hr className='m-0'/>
   <div className='d-flex justify-content-center py-3'>
   <span className='text-white text-center'><TbCopyright />
   </span> {year} Design By ef-architects. All Rights Reserved.
   </div>
    </div>
    </>
  );
};
export default TheFooter;
