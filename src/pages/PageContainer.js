import {Outlet} from 'react-router-dom'
import TheHeader from '../components/TheHeader'
import TheFooter from '../components/footer/TheFooter'
const PageContainer = () =>{
return (
    <>
    <TheHeader />
    <Outlet />
    <TheFooter />
    </>
)
}
export default PageContainer