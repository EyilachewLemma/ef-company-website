import axios from 'axios'
const apiCall = axios.create({
    baseURL:'https://efapi.merahitechnologies.com/api/',
    headers:{
        "Content-Type":"application/json"
    }

})
export default apiCall