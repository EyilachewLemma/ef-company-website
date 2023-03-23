import axios from 'axios'
const apiCall = axios.create({
    baseURL:'https://efapi.merahitechnologies.com/api/',
    // baseURL:'http://192.168.0.10:8001/api/',
    headers: { "Content-Type": "multipart/form-data" }

})
export default apiCall