
import { NavLink } from 'react-router-dom'
import styles from './BackgroundImage.module.css'
const BackgroundImage = ({title,isDetail,longTitle}) =>{
    return <div className={styles.wraper}>
    <div className='d-flex justify-content-center h-100'>
    <div className='align-self-center'>
    <span className='fs-1 fw-bold text-white'>{!isDetail?title:longTitle}</span>
    <div className='text-center'>  
  <NavLink to='/' className={`${styles.titelHome}`}>Home -</NavLink>
  <span className='text-white fs-5 ms-2'>{title}</span>
  </div>
    </div>
    </div>
  
    </div>
}
export default BackgroundImage