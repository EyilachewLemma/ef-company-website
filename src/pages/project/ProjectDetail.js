import {useEffect,useState} from 'react'
import BackgroundImage from "../../components/BackgroundImage";
import { NavLink } from "react-router-dom";
import SingleImageCarousel from "../../components/SingleImageCarousel";
import { spinnerAction } from "../../stores/spinner";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import apiCall from '../../url';
import styles from "./Project.module.css";

const ProjectDetail = () => {
  const [projectDetail,setProjectDetail] = useState({})
  const services = useSelector(state =>state.service.services)
  const dispach = useDispatch()
  const {id} = useParams()
  const fetchProjects = async () => {
    dispach(spinnerAction.setIsLoading(true));
    try {
      const response = await apiCall.get("projects");
      if (response.status === 200) {
        const detail = response.data.find(project=>project.id*1===id*1)
        setProjectDetail(detail)
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
  console.log("services=",services)
  return (
    <>
      <BackgroundImage
        title="Project"
        isDetail={true}
        longTitle="Project Detail"
      />
      <div className="my-lg-5 px-3 px-lg-0 py-5">
        <div className="container">
        <div className="row">
            <div className="col-lg-8">
              {
                projectDetail?.photos?.length > 0 &&(
                  <SingleImageCarousel photos={projectDetail?.photos} />
                )
              }
            </div>
            <div className="col-lg-4 ps-lg-5 d-none d-lg-block">
              <div className="fs-4 fw-bold mb-3 border-3 border-bottom">
                Services
              </div>

              {
                services?.length > 0 &&(
                  services.map((service,index) => (
                    <div key={service.id} className="d-flex justify-content-between align-items-center mt-1">
                      <NavLink to={`/service/${service.id}`} className={styles.navLink}>{service.title}</NavLink>
                      <NavLink to={`/service/${service.id}`}
                        className={`${styles.navLink} border rounded-circle px-2  bg-light`}
                      >
                        {index+1}
                      </NavLink>
                    </div>
                  ))
                )
              }
            </div>
          </div>
          <h4 className="mt-5">{projectDetail.title}</h4>
          <div className="fs-5" dangerouslySetInnerHTML={{__html:projectDetail.description}}>
          </div>
          <div className="col-lg-4 ps-lg-5 d-lg-none mt-5">
          <div className="fs-4 fw-bold mb-3 border-3 border-bottom">
            Services
          </div>

          {
            services?.length > 0 && (
              services.map((service,index) => (
                <div key={service.id} className="d-flex justify-content-between align-items-center mt-1">
                  <NavLink to={`/service/${service.id}`} className={styles.navLink}>{projectDetail.title}</NavLink>
                  <NavLink to={`/service/${service.id}`}
                    className={`${styles.navLink} border rounded-circle px-2  bg-light`}
                  >
                    {index+1}
                  </NavLink>
                </div>
              ))
            )
          }
        </div>
        </div>
      </div>
    </>
  );
};
export default ProjectDetail;
