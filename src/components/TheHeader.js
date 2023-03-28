import { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import {RiArrowDropDownLine} from 'react-icons/ri'
import {ImFacebook} from 'react-icons/im'
import {AiFillLinkedin} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'
import {BsInstagram,BsTelegram} from 'react-icons/bs'
import { actions } from '../stores';
import { useDispatch } from 'react-redux';
import apiCall from '../url';
// import logo from '../assets/edited-logo.png'
import logo from '../assets/newlogo.png'
const TheHeader =()=>{
  const dispach = useDispatch()
  const fetchServices = async () => {
    try {
      const response = await apiCall.get("services");
      if (response.status === 200) {
        dispach(actions.serviceAction.setServices(response.data));
      }
    } catch (err) {}
  };
  useEffect(()=>{
    fetchServices()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
    return (
      <>
      <div className='contact-at-header d-none d-lg-block'>
      <div className='container d-flex justify-content-between p-0'>
      <div className='fs-5 p-2'>
     <a href='https://www.facebook.com/profile.php?id=100063901428377' className='text-white'> <ImFacebook className='me-3' /></a>
      <a href='https://www.linkedin.com/in/endale-abdissa-a13564234' className='text-white'><AiFillLinkedin className='me-3' /></a>
      <a href='https://instagram.com/ef_architecture_consultanting?igshid=YmMyMTA2M2Y' className='text-white'><BsInstagram className='me-3' /></a>
      <a href='https://t.me/efengineeringandconsulting' className='text-white'><BsTelegram className='me-3' /></a>
      </div>
      <div className='ms-auto d-flex align-items-center text-white'>
       <span className='fs-5 me-2'><HiOutlineMail /></span>
       <a href = "mailto: efheadoffice1@gmail.com" className='email-contact'><i>efheadoffice1@gmail.com / info@efengineering-consultancy.com</i></a>
      </div>
      </div>
      </div>
     
        <Navbar collapseOnSelect expand="lg" sticky='top' id='headerId' className='red-background py-2'>
      <Container>
      <NavLink to="/" className="text-decoration-none pb-1">
      <img src={logo} alt='logo' style={{width:150}} />
      </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav text-white" />
        <Navbar.Collapse id="responsive-navbar-nav text-white">
        
          <Nav className='ms-auto'>
            <NavLink to="/" className={({ isActive }) =>
            isActive ? "active-menu-item" :"menu-item"}>Home</NavLink>
            <NavLink to="about"  className={({ isActive }) =>
            isActive ? "active-menu-item" :"menu-item"}>About</NavLink>
            <NavLink to="service" className={({ isActive }) =>
            isActive ? "active-menu-item" :"menu-item"}>Services</NavLink>
            <NavLink to="project"  className={({ isActive }) =>
            isActive ? "active-menu-item" :"menu-item"}>Projects</NavLink>
            
            <div className='dropdown-menue'>
             Collaboraters <RiArrowDropDownLine size={30} />
             <div className='dropdown-item-container py-3 border shadow-sm'>
             <div className='mb-2'>
             <NavLink to="client" className={({ isActive }) =>
            isActive ? "active-menu-item" :"sub-menu"}>Clients</NavLink>
            </div>
            <div>
            <NavLink to="partner" className={({ isActive }) =>
            isActive ? "active-menu-item" :"sub-menu"}>Partners</NavLink>
            </div>
             </div>
             </div>
              <div>
             <NavLink to="gallery"  className={({ isActive }) =>
             isActive ? "active-menu-item" :"menu-item"}>Gallery </NavLink> 
             </div>   
            
            <NavLink to="profile" className={({ isActive }) =>
            isActive ? "active-menu-item" :"menu-item"}>Profile</NavLink>
            <NavLink to="news"  className={({ isActive }) =>
            isActive ? "active-menu-item" :"menu-item"}>News</NavLink>
            <NavLink to="vacancy"  className={({ isActive }) =>
            isActive ? "active-menu-item" :"menu-item"}>Vacancy</NavLink>
            <NavLink to="contact"  className={({ isActive }) =>
            isActive ? "active-menu-item" :"menu-item"}>Contact</NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    )
}
export default TheHeader