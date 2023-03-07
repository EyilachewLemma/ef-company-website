import { useEffect, useState } from "react";
import BackgroundImage from "../../components/BackgroundImage";
// import {GiSpookyHouse} from 'react-icons/gi'
import { NavLink } from "react-router-dom";
import CompanyInfo from "../home/CompanyInfo";
import {spinnerAction} from '../../stores/spinner'
import { useDispatch } from "react-redux";
import apiCall from "../../url";
import styles from './Service.module.css'
const Services = () => {
  const [services,setServices] = useState([])
  const dispatch = useDispatch()

  const fetchServices = async() =>{
    dispatch(spinnerAction.setIsLoading(true))
    try{
     const response = await apiCall.get('services')
     if(response.status === 200){
      setServices(response.data)
     }
    }
    catch(err){

    }
    finally {
     dispatch(spinnerAction.setIsLoading(false))
    }
 }
  
  useEffect(()=>{    
   fetchServices()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  console.log('services = ',services)
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
       <div className="row pb-5 mb-lg-5">

       {
        services?.length >0 &&(
          services.map(service=>(
         <div className="col-md-6 col-lg-4 mt-4" key={service.id}>
           <div className="card h-100">
             <div className="card-body">                
               <div className="d-flex">
              {
                // <span className="fs-1 align-self-start"><GiSpookyHouse /></span>
              }
               <h5 className="card-title ms-3 mt-3">
               {service.title}
             </h5>
               </div>
           
               
               <div className={`${styles.cardText} mt-2`}>
                 {service?.short_desc}
               </div>
               <div className="mt-4">
               <NavLink to={`/service/${service.id}`} className={`${styles.seeMore} py-2 px-2`}>See More</NavLink>
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
export default Services;
