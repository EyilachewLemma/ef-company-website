import {useState,useEffect} from 'react'
import logo from "../../assets/newlogo.png";
import { NavLink } from "react-router-dom";
import {GoLocation} from 'react-icons/go'
import {BsTelephone} from 'react-icons/bs'
import {HiOutlineMail,HiArrowNarrowUp} from 'react-icons/hi'
import {BsFacebook} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsInstagram,BsTelegram,BsArrowRightShort} from 'react-icons/bs'
import {TbCopyright} from 'react-icons/tb'
import { useSelector } from 'react-redux';
import styles from "./TheFooter.module.css";
const TheFooter = () => {
  const [year,setYear] = useState(null)
  const [scrollHeight,setScrollHeight] = useState(0)
 const services = useSelector(state=>state.service.services)
  useEffect(()=>{
    const date = new Date()
    setYear(date.getFullYear())
    window.addEventListener('scroll',()=>{
      setScrollHeight(window.pageYOffset)
    })
    return ()=>window.removeEventListener('scroll',()=>window.pageYOffset)
  },[])
  return (
    <>
    <div
      className={`${styles.footerContainer} px-3 px-lg-5 pt-5 pb-3 text-white`}>
      <div className="row text-white">
      <div className="col-lg-4">
        <div className="d-flex">
          <img src={logo} alt="logo" style={{width:200}} />
        </div>
        <div className={`${styles.textSmall} text-white py-3`}>
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
      {
        services?.length > 0 &&(
          services.map(service=><div key={service.id}>
            <span className='me-2 text-white fw-bold fs-5'><BsArrowRightShort /></span>
            <NavLink to={`/service/${service.id}`} className={styles.navlink}>{service.title}</NavLink>
            </div>)
        )
      }
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
       <span className="text-white fs-5 align-self-start me-2"><HiOutlineMail /></span>
       <a href = "mailto: efheadoffice1@gmail.com" className={styles.navlink}><i>efheadoffice1@gmail.com</i></a>
       </div>
       <div className="d-flex align-items-center mt-2">
       <span className="text-white fs-5 align-self-start me-2"><HiOutlineMail /></span>
       <a href = "mailto: info@efengineering-consultancy.com" className={styles.navlink}><i>info@efengineering-consultancy.com</i></a>
       </div>
       <div className="d-flex mt-2">
       <a href="https://www.facebook.com/profile.php?id=100063901428377" className="text-white fs-5"><BsFacebook /></a>
       <a href="https://www.linkedin.com/in/endale-abdissa-a13564234" className="text-white fs-5 ms-3"><AiFillLinkedin /></a>
       <a href='https://instagram.com/ef_architecture_consultanting?igshid=YmMyMTA2M2Y' className='text-white fs-5 ms-3'><BsInstagram className='me-3' /></a>
       <a href='https://t.me/efengineeringandconsulting' className='text-white fs-5'><BsTelegram className='me-3' /></a>
       </div>
      </div>
      </div>
    </div>    
    </div>
    
    <div className={styles.copyright}>
    <span className="fs-5"><TbCopyright /></span>
    <span className='ms-1'>{year}</span>
    <div className='ms-2'>EF Architect and Engineering Consulting All Rights Reserved.</div>
    </div>
    {scrollHeight > 0 &&
        <button onClick={()=>window.scrollTo(0,0)} className={`${styles.gototopBtn} rounded-circle px-3 py-2 fs-4 fw-bold`}><HiArrowNarrowUp /></button>
      
      
    }
   
    
    </>
  );
};
export default TheFooter;
