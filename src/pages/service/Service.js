import BackgroundImage from "../../components/BackgroundImage";
import {GiSpookyHouse} from 'react-icons/gi'
import { NavLink } from "react-router-dom";
import CompanyInfo from "../home/CompanyInfo";
import styles from './Service.module.css'
const Services = () => {
  return (
    <div className={styles.servicepage}>
     <div className="bg-white pb-lg-5">
     <BackgroundImage title={"Services"} isDetail={false} longTitle='' />
     <div className="text-center py-5">
       <div className="py-lg-5">
       <h6>OUR CAPABILITIES</h6>
       <h1>What We Do</h1>
       </div>
     </div>

     <div className="container px-3 px-lg-0">
       <div class="row pb-5 mb-lg-5">
         <div class="col-sm-4">
           <div class="card h-100">
             <div class="card-body">                
               <div className="d-flex">
               <span className="fs-1 align-self-start"><GiSpookyHouse /></span>
               <h5 class="card-title ms-3 mt-3">
               Building Architectural and Structural Design
             </h5>
               </div>
           
               
               <p class={`${styles.cardText} mt-2`}>
                 The art and science of creating a structural system in nature
                 or in the artificial world. The term “architecture” relates
                 mainly to the design of the built environment, but it can also
                 relate to industrial design
               </p>
               <NavLink to='/service-detail' className={`${styles.seeMore} py-2 px-2`}>See More</NavLink>
             </div>
           </div>
         </div>
         <div class="col-sm-4">
         <div class="card h-100">
           <div class="card-body">
             <div></div>
             <h5 class="card-title">
               Building Architectural and Structural Design
             </h5>
             <p class={`${styles.cardText}`}>
               The art and science of creating a structural system in nature
               or in the artificial world. The term “architecture” relates
               mainly to the design of the built environment, but it can also
               relate to industrial design
             </p>
           </div>
         </div>
       </div>
       <div class="col-sm-4">
       <div class="card h-100">
         <div class="card-body">
           <div></div>
           <h5 class="card-title">
             Building Architectural and Structural Design
           </h5>
           <p class={`${styles.cardText}`}>
             The art and science of creating a structural system in nature
             or in the artificial world. The term “architecture” relates
             mainly to the design of the built environment, but it can also
             relate to industrial design
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
export default Services;
