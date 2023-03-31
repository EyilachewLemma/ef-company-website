import {useState,useEffect} from 'react'
import BackgroundImage from "../../components/BackgroundImage"
import Partnerss from "./ClientPartner"
import CompanyInfom from '../home/CompanyInfo'
import { useDispatch } from 'react-redux'
import { spinnerAction } from '../../stores/spinner'
import apiCall from '../../url'
import Seo from '../../Seo'
import styles from "./Client.module.css"


const Partners =()=>{
const [partners,setPartners] = useState([])
const dispach = useDispatch()
const fetchPartners = async() =>{
    dispach(spinnerAction.setIsLoading(true))
    try{
        const response = await apiCall.get('clients')
        if(response.status === 200){
   const ourPartners = []
   response.data.forEach(client=>{
    if(client.category === 'Partner'){
        ourPartners.push(client)
    }
   })
   setPartners(ourPartners)
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
    title="Our Partners"
    description="	We have brought together all EF Architects and Engineers Consulting plc. individual abilities in to our corporate culture. In working as a team that includes our clients and partners "
    type="website"
     />
        <div className={styles.clientwraper}>
        <BackgroundImage title={'Partners'} isDetail={false} longTitle="" />
       <div className="bg-white">
       <div className="container py-5">
       <h1 className="py-5 text-center">Our Partners</h1>
       {
        partners.length > 0 &&
            <Partnerss datas={partners} />
        
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
export default Partners