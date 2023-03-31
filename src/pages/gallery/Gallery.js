import { useState,useEffect } from "react";
import BackgroundImage from "../../components/BackgroundImage";
import {actions} from '../../stores'
import { spinnerAction } from "../../stores/spinner";
import { useDispatch,useSelector } from "react-redux";
import apiCall from "../../url";
import styles from "./Gallery.module.css";
import CompanyInfo from "../home/CompanyInfo";
import Seo from "../../Seo";
const Project = () => {
  const [filteredGalleries, setFilteredGalleries] = useState([])
    const [isAll,setIsAll] = useState(true)
    const allGallery = useSelector(state=>state.gallery.galleries)
    const [notification,setNotification] = useState("No project galleries found")
    const dispach = useDispatch()
    const getProjectGallery = () =>{
        if(!isAll){
            setIsAll(true)
        }
        const projects = []
         allGallery.forEach(gallery=>{
          if(gallery.category === "Project"){
            projects.push(gallery)
          }
         })
        setFilteredGalleries(projects)
        if(projects?.length === 0){
          setNotification('No project galleries found')
        }
    }
    const getDesigns = () =>{
      if(isAll){
          setIsAll(false)
      }
      const designs = []
      allGallery.forEach(gallery=>{
        if(gallery.category === "Designed"){
          designs.push(gallery)
        }
      })
      setFilteredGalleries(designs)
      if(designs?.length === 0){
        setNotification('No designed galleries found')
      }
  }
  const getCeremonies = () =>{
    if(!isAll){
        setIsAll(false)
    }
    const ceremonies = []
     allGallery.forEach(gallery=>{
     if( gallery.category === "Ceremony"){
      ceremonies.push(gallery)
     }
     })
    setFilteredGalleries(ceremonies)
    if(ceremonies?.length === 0){
      setNotification('No ceremonies galleries found')
    }
}
const getCertificates = () =>{
  if(!isAll){
      setIsAll(false)
  }
  const certificates = []
   allGallery.forEach(gallery=>{
    if(gallery.category === "Certificate"){
      certificates.push(gallery)
    }
   })
  setFilteredGalleries(certificates)
  if(certificates?.length === 0){
    setNotification('No certificate galleries found')
  }
}
  
    const fetchGallery = async() =>{
      dispach(spinnerAction.setIsLoading(true))
      try{
        const response = await apiCall.get('galleries')
        if(response.status === 200){
          const projectGallery = []
           response.data.forEach(gallery=>{
            if(gallery.category === 'Project'){
              projectGallery.push(gallery)
            }
           })
          dispach(actions.galleryAction.setGalleries(response.data))
          setFilteredGalleries(projectGallery)
        }
      }
      catch(err){

      }
      finally {
        dispach(spinnerAction.setIsLoading(false))
      }
    }
    useEffect(()=>{
      fetchGallery()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    console.log('filteredGalleries=',filteredGalleries)
  return (
    <>
    <Seo 
    title="Galleries"
    description="Our galleries show what we have built in the past years including construction and ddesign of different projects "
    type="website"
     />
   
    <div className={styles.gallerWraper}>
      <BackgroundImage title={"Projects"} isDetail={false} longTitle='' />
      <div className="bg-white px-3 px-lg-0 pb-lg-5 py-5">
        <div className="d-lg-flex container py-lg-5">
          <div className="fs-1 fw-bold">Our Gallery</div>
          <div className="ms-auto">
            <div className="d-lg-flex justify-content-between align-items-center">
              <button onClick={getProjectGallery} className={isAll? `${styles.selectionBtn} border-2 border-bottom border-danger`:styles.selectionBtn}>Projects</button>
              <button onClick={getDesigns} className={`${styles.selectionBtn} ms-3`}>
                Designed Projects
              </button>
              <button onClick={getCeremonies} className={`${styles.selectionBtn} ms-3`}>
                Ceremonies
              </button>
              <button onClick={getCertificates} className={`${styles.selectionBtn} ms-3`}>
                Certificates
              </button>
                </div>
          </div>
        </div>
        <div className="mt-5 container">
          <div className="row row-cols-1 row-cols-md-2 g-4">
           {
            filteredGalleries?.length>0 &&(
              filteredGalleries.map(gallery=>(
                <div className="col">
                <div className="card h-100">
                  <div className={styles.card}>
                    <img src={gallery.path} alt="gallery_image" />
                      <div className={`${styles.imageDesctiption} text-center d-flex justify-content-center`}>
                    <div className="align-self-center text-center">
                    <h3 className="text-white">{gallery.title}</h3>
                    {
                      // <span>{gallery.description}</span>
                    }
                    </div>
                    </div>
                  </div>
               </div>
              </div>
              ))
            )
           }

          </div>
          {
            filteredGalleries?.length === 0 &&(
              <div className="text-center my-5 py-5">{notification}</div>
            )
          }
        </div>
      </div>
      
        <CompanyInfo />
      
    </div>
    </>
  );
};
export default Project;
