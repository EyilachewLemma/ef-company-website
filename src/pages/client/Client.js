import { useState,useEffect } from "react"
import BackgroundImage from "../../components/BackgroundImage"
import Clients from "./ClientPartner"
import CompanyInfom from '../home/CompanyInfo'
import { useDispatch } from "react-redux"
import{actions} from '../../stores'
import apiCall from "../../url"
import styles from "./Client.module.css"
const Client =()=>{
    const [clients,setClients] = useState([])
    const dispach = useDispatch()
const fetchPartners = async() =>{
    dispach(actions.spinnerAction.setSpinner(true))
    try{
        const response = await apiCall.get('clients')
        if(response.status === 200){
   const ourClients = response.data.map(client=>client.type === 'client')
   setClients(ourClients)
        }
    }
    catch(err){

    }
    finally{
        dispach(actions.spinnerAction.setSpinner(false))
    }
}
useEffect(()=>{
    fetchPartners()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])
console.log('clients',clients)
    return (
        <div className={styles.clientwraper}>
        <BackgroundImage title={'Clients'} isDetail={false} longTitle='' />
       <div className="bg-white py-lg-5">
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