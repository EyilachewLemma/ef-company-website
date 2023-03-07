import image from '../assets/404.webp'
import { NavLink } from 'react-router-dom'
const ErrorPage = () =>{
    return <div className="note-found-page d-flex flex-column justify-content-lg-center">
       <div className="align-self-center">
       <div>
       <img src={image} alt="404_not_found" className='img-fluid' />
       </div>
       <h2 className='text-center'>Page not found</h2>
       <div className='text-center fs-5'>Go back to 
       <NavLink to='/' className="ms-2">Home</NavLink>
       </div>
       </div>
    </div>
}
export default ErrorPage