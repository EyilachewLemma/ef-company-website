import { Outlet } from "react-router-dom";
import TheHeader from "../components/TheHeader";
import TheFooter from "../components/footer/TheFooter";
import spinner from "../assets/spinner.gif";
import {useSelector } from "react-redux";
const PageContainer = () => {
  const isLoading = useSelector(state=>state.spinner.isLoading)  
 
  return (
    <div className="page-container">
      
          <>
          <TheHeader />
          <Outlet />
          <TheFooter />
        </>
        {
          isLoading && (
        <div className="spinner ">
        <img src={spinner} alt="loader" />
      </div>
      )
       
      }
    </div>
  );
};
export default PageContainer;
