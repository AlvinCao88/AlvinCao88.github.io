import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import logo from '../assets/img/logo.png'
// import { HashLink } from 'react-router-hash-link';
// import {
//   BrowserRouter as Router
// } from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    // <Router>
    <Navbar expand="md" className={`p-4 fixed w-full bg-[#ff0200] top-0 z-[9999] transition-[0.32s] ease-in-out  ${scrolled ? "scrolled" : ""}`}>
        <Container>
        <Navbar.Brand href="#home">
          <img src={logo  } alt="Logo" />
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/ac-alvin-cao/"><img src={navIcon1} alt="" /></a>
                {/* <a href="#"><img src={navIcon2} alt="" /></a> */} 
                <a href="https://www.instagram.com/alvin_sp974/"><img src={navIcon3} alt="" /></a>
              </div>
              {/* <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink> */}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    // </Router>
  )
}


// import Container from "react-bootstrap/Container";
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// // import NavDropdown from 'react-bootstrap/NavDropdown';
// import { userState, useEffect } from 'react';


// export const NavigationBar = () => {
//     const { activeLink, setActiveLink } = userState('home');
//     const { scrolled, setScrolled } = userState(false);

//     useEffect(() => {
//         const onScroll = () => { 
//             if (window.scrollY > 50 ){
//                 setScrolled(true);
//             }else{
//                 setScrolled(false);
//             }
//         }

//         window.addEventListener("scroll", onScroll);

//         return () => window.removeEventListener("scroll", onScroll)
//     },[])

//     const onUpdateActiveLink = (value) => {
//         setActiveLink(value);
//     }

//     return (
//         <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
//         <Container>
//             <Navbar.Brand href="#home">Alvin Cao</Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//                 <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
//                 <Nav.Link href="#skills"className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link> 
//                 <Nav.Link href="#projects"className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>   
//                 {/* add more references or links copy ^^ */}
//                 {/* This is Dropdown componenet
//                 <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">
//                     Another action
//                 </NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action/3.4">
//                     Separated link
//                 </NavDropdown.Item>
//                 </NavDropdown> */}
//             </Nav>
//             </Navbar.Collapse>
//         </Container>
//         </Navbar>
//     );
// }
