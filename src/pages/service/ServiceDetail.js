import { useState,useEffect } from "react";
import BackgroundImage from "../../components/BackgroundImage";
import { NavLink,useParams } from "react-router-dom";
// import SingleImageCarousel from "../../components/SingleImageCarousel";
import ContactForm from "../contact/ContactForm";
import { useDispatch } from "react-redux";
import { spinnerAction } from "../../stores/spinner";
import apiCall from "../../url";
import styles from "./Service.module.css";
import Seo from "../../Seo";
const ServiceDetail = () => {
  const [services,setServices] = useState([])
  const [service,setService] = useState({})
  const dispatch = useDispatch()
   const {id} =useParams()
  const fetchServices = async() =>{
    dispatch(spinnerAction.setIsLoading(true))
    try{
     const response = await apiCall.get('services')
     if(response.status === 200){
    const serviceDetail = response.data.find(service=>service.id*1 === id*1)
    setService(serviceDetail)
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
  },[id])
  console.log('service detail=',services)
  return (
    <>
    <Seo 
    title="Service details"
    description="Our services show what we are providing to our clients  in the past years including construction and ddesign of different projects"
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
           <div className="col-lg-8">
           <img src={service?.photo} alt="service_image" className="img-fluid" style={{width:"100%",maxHeight:"400px"}} />
         </div>
         <div className="col-lg-4 ps-lg-5 d-none d-lg-block">
           <div className="fs-4 fw-bold mb-3 border-3 border-bottom">
             Services
           </div>

           {
            services?.length > 0 &&(
              services.map((singleService,index) => (
             <div key={singleService.id} className="d-flex justify-content-between align-items-center mt-1">
               <NavLink to={`/service/${singleService.id}`} className={""}>{singleService.title}</NavLink>
               <NavLink to={`/service/${singleService.id}`}
                 className={`${styles.navLink} border rounded-circle px-2  bg-light`}
               >
                 {index+1}
               </NavLink>
             </div>
           )))}
         </div>
           </div>
              
          
          <h4 className="mt-5">{service.title}</h4>
          <div dangerouslySetInnerHTML={{__html:service.description}}>
          </div>
          
        <div className="px-3 pt-3 text-center fs-5 fw-bold">Have you a project in your mind ? lets discus it.</div>
        <div>
        <ContactForm />
        </div>
      </div>
      </div>
    </>
  );
};
export default ServiceDetail;
