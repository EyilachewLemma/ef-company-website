import { useState,useEffect } from "react"
import BackgroundImage from "../../components/BackgroundImage"
import Clients from "./ClientPartner"
import CompanyInfom from '../home/CompanyInfo'
import { useDispatch } from "react-redux"
import { spinnerAction } from "../../stores/spinner"
import apiCall from "../../url"
import Seo from "../../Seo"
import styles from "./Client.module.css"
const Client =()=>{
    const [clients,setClients] = useState([])
    const dispach = useDispatch()
const fetchPartners = async() =>{
    dispach(spinnerAction.setIsLoading(true))
    try{
        const response = await apiCall.get('clients')
        if(response.status === 200){
   const ourClients = [] 
   response.data.forEach(client=>{
    if(client.category === 'Client'){
        ourClients.push(client)
    }
   })
   setClients(ourClients)
        }
    }
    catch(err){

    }
    finally{
        dispach(spinnerAction.setIsLoading(false))
    }
}
useEffect(()=>{
    fetchPartners()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])
    return (
        <>
        <Seo 
    title="Our Clients"
    description="We are proud of always thinking in terms of what is best for our clients offering solutions that are not only theoretical but workable "
    type="website"
     />
    
        <div className={styles.clientwraper}>
        <BackgroundImage title={'Clients'} isDetail={false} longTitle='' />
       <div className="bg-white py-lg-5">
       <div className="container py-5">
       <h1 className="py-5 text-center">Our Clients</h1>
      {
        clients.length > 0 &&
        <Clients  datas={clients} />
        
      }
       </div> 
       </div>
        <div>
        <CompanyInfom />
        </div>
        </div>
        </>
    )
}
export default Client