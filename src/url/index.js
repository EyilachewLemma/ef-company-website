import axios from 'axios'
const apiCall = axios.create({
    baseURL:'https://efapi.merahitechnologies.com/api/',
    // baseURL:'https://efengapi.efengineering-consultancy.com/api/',
    headers:{
        "Content-Type":"application/json"
    }

})
export default apiCall