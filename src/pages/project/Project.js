import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BackgroundImage from "../../components/BackgroundImage";
import styles from "./Project.module.css";
import { NavLink } from "react-router-dom";
import CompanyInfo from "../home/CompanyInfo";
import { actions } from "../../stores/index";
import { spinnerAction } from "../../stores/spinner";
import Form from 'react-bootstrap/Form';
import Seo from "../../Seo";

import apiCall from "../../url/index";
const Project = () => {
  const [isAll, setIsAll] = useState(true);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const allProjects = useSelector((state) => state.project.projects);
  const [notification,setNotification] = useState('No projects found')
  const [isChecked,setIsChecked] = useState(true)
  const categories = useSelector(state=>state.category.categories)
  const dispach = useDispatch();
  const completedProjects = () => {
    if (isAll) {
      setIsAll(false);
    }
    const filteredCompletedProjects = []
     allProjects.forEach((project) =>{
       if(project.is_completed){
        filteredCompletedProjects.push(project)
       }
     });
    setFilteredProjects(filteredCompletedProjects);
    if(filteredCompletedProjects?.length === 0){
      setNotification('No completed Projects found')
    }
  };
  const onProgressBuilding = () => {
    if (isAll) {
      setIsAll(false);
    }
    const filterOnProgressBuilding = []
     allProjects.forEach((project) => {
       if(!project.is_completed){
        filterOnProgressBuilding.push(project)
       }
     });
    setFilteredProjects(filterOnProgressBuilding);
    if(filterOnProgressBuilding?.length === 0){
      setNotification('No onprogress Projects found')
    }
  };
  const allProject = () => {
    if (!isAll) {
      setIsAll(true);
    }
    setFilteredProjects([...allProjects]);
  };

  const categoryChangeHandler = (e) =>{
    const categorizedProject = []
        allProjects.forEach(project=>{
          if(project.category_id === e.target.value*1){
            categorizedProject.push(project)
          }
        })
        setFilteredProjects(categorizedProject);
        if(e.target.value*1 ===categories[0].id){
          setIsChecked(true)
        }
        else{
          setIsChecked(false)
        }
        
  }
  const fetchCategories = async () => {
    try {
      const response = await apiCall.get("categories");
      if (response.status === 200) {
        dispach(actions.categoryAction.setCategories(response.data));
      }
    } catch (err) {}
  };
  const fetchProjects = async () => {
    dispach(spinnerAction.setIsLoading(true));
    try {
      const response = await apiCall.get("projects");
      if (response.status === 200) {
        dispach(actions.projectAction.setProjects(response.data));

        const categorizedProject = []
        response.data.forEach(project=>{
          if(project.category_id*1 === categories[0]?.id*1){
            categorizedProject.push(project)
          }
        })
        setFilteredProjects(categorizedProject);
        setIsChecked(true)
      }
    } catch (err) {
    } finally {
      dispach(spinnerAction.setIsLoading(false));
    }
  };
  useEffect(() => {
    fetchCategories()
    fetchProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
    <Seo 
    title="Projects"
    description="Our projects show what we have built in the past years including construction and ddesign of different projects"
    type="website"
     />
    <div className={styles.projectWraper}>
      <BackgroundImage title={"Projects"} isDetail={false} longTitle="" />
      <div className="bg-white px-3 px-lg-5 pb-lg-5 py-5">
      <div className="fs-1 fw-bold pt-lg-5 text-center">Our Projects</div>
     <div className="d-flex justify-content-end align-items-center my-3 d-lg-none w-100"> 
       <Form.Select onChange={categoryChangeHandler} className="ms-auto">
       {
        categories.length > 0 &&(
        categories.map(category=><option key={category.id} value={category.id}>{category.name}</option>
        
      ))}
       </Form.Select>
     </div>
        <div className="d-lg-flex pt-lg-5">        
          <div className="ms-auto">
            <div className="d-lg-flex justify-content-between align-items-center">
              <button
                onClick={allProject}
                className={
                  isAll
                    ? `${styles.selectionBtn} border-2 border-bottom border-info`
                    : styles.selectionBtn
                }
              >
                All
              </button>
              <button
                onClick={completedProjects}
                className={`${styles.selectionBtn} ms-3`}
              >
                Completed Projects
              </button>
              <button
                onClick={onProgressBuilding}
                className={`${styles.selectionBtn} ms-3 mt-2 mt-lg-0`}
              >
                On progress Projects
              </button>
            </div>
          </div>
        </div>
       
      <div className="d-lg-flex mt-5 mb-lg-5 pb-5">
      <div className={`${styles.categoryContainer} d-none d-lg-block w-25 me-3`}>
      <div className="fs-4 fw-bold">Project Categories</div>
      {
        categories.length > 0 &&(
          <div>
          <Form.Check 
          type="radio"
          name="gategory"
          value={categories[0].id}
          id={`gategory-${categories[0].id}`}
          onChange={categoryChangeHandler}
          checked={isChecked}
          label={categories[0].name}
        />
      {
        categories.slice(1).map(category=>
          <div key={category.id} >
          <Form.Check 
            type="radio"
            name="gategory"
            value={category.id}
            onChange={categoryChangeHandler}
            id={`gategory-${category.id}`}
            label={category.name}
          />
        </div>
        ) 
      } 
        </div>  
       )}
       
      </div>

        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {
              filteredProjects?.length > 0 &&(
              filteredProjects.map((project) => (
                <div className={`col ${styles.cardContainer}`} key={project.id}>
                  <div className="card h-100">
                    <div className={styles.card}>
                      <img
                        src={project?.photos[0]?.path}
                        className="card-img-top"
                        alt="project_image"
                      />
                    </div>
                    <div className="card-body">
                      <NavLink
                        to={`/project/${project.id}`}
                        className={`${styles.navlink}`}
                      >
                        <h5 className={`card-title mt-3 ${styles.cardTitle}`}>
                          {project.title}
                        </h5>
                      </NavLink>
                      <div className="progress" style={{ height: "20px" }}>
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: project.progress+'%' }}
                          aria-valuenow={project.progress}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          {project.progress}% Completed
                        </div>
                      </div>
                      <div className="mt-4">
                        <NavLink
                          to={`/project/${project.id}`}
                          className={`${styles.navlink}`}
                        >
                          View Detail
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              )))
            }
          </div>
          {filteredProjects.length === 0 && (
            <div className="text-center py-5 my-5">{notification}</div>
          )}
        </div>
        </div>
      </div>

      <CompanyInfo />
    </div>
    </>
  );
};
export default Project;
