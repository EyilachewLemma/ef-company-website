import CountUp from 'react-countup';
import styles from './Home.module.css'
const CompanyInfo = () =>{
    return(
        <div className={`${styles.companyInfo} py-5`}>
        <div className="container d-lg-flex py-lg-5">
        <div className="d-flex me-lg-3 flex-fill">
        <div className="flex-fill text-white">
        <div className="text-center big-text fw-bold">
        <CountUp end={10} enableScrollSpy className='big-text' /> 
        </div>
        <div className="text-center fw-bold fs-5">Years Of Experience</div>
        </div>
        <div className="flex-fill text-white"> 
        <div className="text-center big-text fw-bold">
        <CountUp end={39} enableScrollSpy className='big-text' /> 
        </div>
        <div className="text-center fw-bold fs-5">Expert Specialist</div>
        </div>
        </div>
        <div className="d-flex flex-fill text-white">
        <div className="flex-fill">
        <div className="text-center big-text fw-bold">
        <CountUp end={27} enableScrollSpy className='big-text' /> 
        +</div>
        <div className="text-center fw-bold fs-5">Successful Project</div>
        </div>
        <div className="flex-fill"> 
        <div className="text-center big-text fw-bold">
        <CountUp end={210} enableScrollSpy className='big-text' /> 
        +</div>
        <div className="text-center fw-bold fs-5">Happy Customers</div>
        </div>
        </div>
        </div>
        </div>
    )
}
export default CompanyInfo