import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import {RiArrowDropDownLine} from 'react-icons/ri'
import {ImFacebook,ImTwitter} from 'react-icons/im'
import {AiFillLinkedin} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'
import logo from '../assets/edited-logo.png'
const TheHeader =()=>{
  
    return (
      <>
      <div className='contact-at-header d-none d-lg-block'>
      <div className='container d-flex justify-content-between p-0'>
      <div className='fs-5 p-2'>
     <a href='https://www.facebook.com/' className='text-white'> <ImFacebook className='me-3' /></a>
      <a href='https://twitter.com/' className='text-white'><ImTwitter className='me-3' /></a>
      <a href='https://www.linkedin.com/' className='text-white'><AiFillLinkedin className='me-3' /></a>
      </div>
      <div className='ms-auto d-flex align-items-center text-white'>
       <span className='fs-5 me-2'><HiOutlineMail /></span>
       <span>efheadoffice1@gmail.com</span>
      </div>
      </div>
      </div>
     
        <Navbar collapseOnSelect expand="lg" sticky='top' className='blue-background py-2'>
      <Container>
      <NavLink to="/" className="text-decoration-none pb-1">
      <img src={logo} alt='logo' style={{width:60,height:60}} />
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
             <div>
             <NavLink to="client" className={({ isActive }) =>
            isActive ? "active-menu-item" :"sub-menu"}>Clients</NavLink>
            </div>
            <div>
            <NavLink to="partner" className={({ isActive }) =>
            isActive ? "active-menu-item" :"sub-menu"}>Partners</NavLink>
            </div>
             </div>
             </div>
             <div className='dropdown-menue'>
             Gallery <RiArrowDropDownLine size={30} />
             <div className='dropdown-item-container py-3 border shadow-sm'>
             <div>
             <NavLink to="gallery"  className={({ isActive }) =>
            isActive ? "active-menu-item" :"sub-menu"}>Projects</NavLink>
            </div>
            <div>
            <NavLink to="gallery"  className={({ isActive }) =>
            isActive ? "active-menu-item" :"sub-menu"}>Staffs </NavLink>
            </div>
            <div>
            <NavLink to="gallery"  className={({ isActive }) =>
            isActive ? "active-menu-item" :"sub-menu"}>Ceremony </NavLink>
            </div>
             </div>
             </div>
            
            <NavLink to="profile" className={({ isActive }) =>
            isActive ? "active-menu-item" :"menu-item"}>Profile</NavLink>
            <NavLink to="news"  className={({ isActive }) =>
            isActive ? "active-menu-item" :"menu-item"}>News</NavLink>
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