import BackgroundImage from "../../components/BackgroundImage"
import Clients from "./ClientPartner"
import CompanyInfom from '../home/CompanyInfo'
import styles from "./Client.module.css"
const Client =()=>{
    return (
        <div className={styles.clientwraper}>
        <BackgroundImage title={'Clients'} />
       <div className="bg-white">
       <div className="container py-5">
       <h1 className="py-5 text-center">Our Clients</h1>
       <Clients />
       </div> 
       </div>
        <div>
        <CompanyInfom />
        </div>
        </div>
    )
}
export default Client