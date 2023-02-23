import styles from './Home.module.css'
const CompanyInfo = () =>{
    return(
        <div className={`${styles.companyInfo} py-5`}>
        <div className="container d-lg-flex py-lg-5">
        <div className="d-flex me-lg-3 flex-fill">
        <div className="flex-fill text-white">
        <p className="text-center big-text fw-bold">10</p>
        <p className="text-center fs-5">Years Of Experience</p>
        </div>
        <div className="flex-fill text-white"> 
        <p className="text-center big-text fw-bold">39</p>
        <p className="text-center fs-5">Expert Specialist</p>
        </div>
        </div>
        <div className="d-flex flex-fill text-white">
        <div className="flex-fill">
        <p className="text-center big-text fw-bold">27+</p>
        <p className="text-center fs-5">Successful Project</p>
        </div>
        <div className="flex-fill"> 
        <p className="text-center big-text fw-bold">210+</p>
        <p className="text-center fs-5">Happy Customers</p>
        </div>
        </div>
        </div>
        </div>
    )
}
export default CompanyInfo