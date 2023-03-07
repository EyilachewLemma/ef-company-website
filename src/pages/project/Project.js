import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BackgroundImage from "../../components/BackgroundImage";
import styles from "./Project.module.css";
import { NavLink } from "react-router-dom";
import CompanyInfo from "../home/CompanyInfo";
import { actions } from "../../stores/index";
import { spinnerAction } from "../../stores/spinner";
import apiCall from "../../url/index";
const Project = () => {
  const [isAll, setIsAll] = useState(true);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const allProjects = useSelector((state) => state.project.projects);
  const [notification,setNotification] = useState('No projects found')
  const dispach = useDispatch();
  const completedBuilding = () => {
    if (isAll) {
      setIsAll(false);
    }
    let filteredCompletedBuilding =[]
     allProjects.forEach((project) =>{
       if(project.type === 'Building' && project.progress===100){
        filteredCompletedBuilding.push(project)
       }
      });
    setFilteredProjects(filteredCompletedBuilding);
    if(filteredCompletedBuilding?.length === 0){
      setNotification('No completed buildings found')
    }
  };
  const completedRoad = () => {
    if (isAll) {
      setIsAll(false);
    }
    const filteredCompletedRoad = []
     allProjects.forEach((project) =>{
       if(project.type === 'Road' && project.progress === 100){
        filteredCompletedRoad.push(project)
       }
     });
    setFilteredProjects(filteredCompletedRoad);
    if(filteredCompletedRoad?.length === 0){
      setNotification('No completed roads found')
    }
  };
  const onProgressRoad = () => {
    if (isAll) {
      setIsAll(false);
    }
    const filteronProgressRoad = []
     allProjects.forEach((project) => {
       if(project.type === 'Road' && project.progress < 100){
        filteronProgressRoad.push(project)
       }
     });
    setFilteredProjects(filteronProgressRoad);
    if(filteronProgressRoad?.length === 0){
      setNotification('No onprogress roads found')
    }
  };
  const onProgressBuilding = () => {
    if (isAll) {
      setIsAll(false);
    }
    const filterOnProgressBuilding = []
     allProjects.forEach((project) => {
       if(project.type === 'Building' && project.progress < 100){
        filterOnProgressBuilding.push(project)
       }
     });
    setFilteredProjects(filterOnProgressBuilding);
    if(filterOnProgressBuilding?.length === 0){
      setNotification('No onprogress buildings found')
    }
  };
  const allProject = () => {
    if (!isAll) {
      setIsAll(true);
    }
    setFilteredProjects([...allProjects]);
  };
  const fetchProjects = async () => {
    dispach(spinnerAction.setIsLoading(true));
    try {
      const response = await apiCall.get("projects");
      if (response.status === 200) {
        dispach(actions.projectAction.setProjects(response.data));
        setFilteredProjects(response.data);
      }
    } catch (err) {
    } finally {
      dispach(spinnerAction.setIsLoading(false));
    }
  };
  useEffect(() => {
    fetchProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={styles.projectWraper}>
      <BackgroundImage title={"Projects"} isDetail={false} longTitle="" />
      <div className="bg-white px-3 px-lg-0 pb-lg-5 py-5">
        <div className="d-lg-flex container py-lg-5">
          <div className="fs-1 fw-bold">Our Projects</div>
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
                onClick={completedRoad}
                className={`${styles.selectionBtn} ms-3`}
              >
                Completed Road
              </button>
              <button
                onClick={completedBuilding}
                className={`${styles.selectionBtn} ms-3`}
              >
                Completed Building
              </button>
              <button
                onClick={onProgressRoad}
                className={`${styles.selectionBtn} ms-lg-3 mt-2 mt-lg-0`}
              >
                On progress Road
              </button>
              <button
                onClick={onProgressBuilding}
                className={`${styles.selectionBtn} ms-3 mt-2 mt-lg-0`}
              >
                On progress Building
              </button>
            </div>
          </div>
        </div>
        <div className="mt-5 container">
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

      <CompanyInfo />
    </div>
  );
};
export default Project;
