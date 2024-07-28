import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import logo from '../assets/img/Logo.svg';
import navIcon1 from '../assets/img/linkedin.svg';
import navIcon2 from '../assets/img/github-mark-white.svg';
import navIcon3 from '../assets/img/insta.svg';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faFaceGrinWink } from '@fortawesome/free-regular-svg-icons';
function NavBar() {

    const [activeLink, setActiveLink] = useState('home'); //to determine which link is active
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => { //this method is used to determine if user scrolls the page and change the navbar BG accordingly
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const updateActiveLink = (link) => {
        setActiveLink(link);
    }

    return ( 
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          {//<FontAwesomeIcon icon={ faFaceGrinWink } style={{ color: '#FFFFFF' }} />
          }
          <img src= {logo} alt='logo' className='logo-img' />
          &nbsp;&nbsp;
          <span className='logo-text'>Thajucp.in</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink == 'home'? "active navbar-link" : "navbar-link"} onClick={()=>updateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink == 'skills'? "active navbar-link" : "navbar-link"} onClick={()=>updateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink == 'projects'? "active navbar-link" : "navbar-link"} onClick={()=>updateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#experience" className={activeLink == 'experience'? "active navbar-link" : "navbar-link"} onClick={()=>updateActiveLink('experience')}>Experience</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href='#'><img src={navIcon1} alt=''/></a>
                <a href='#'><img src={navIcon2} alt=''/></a>
                <a href='#'><img src={navIcon3} alt=''/></a>
            </div>
            <button className="vvd" onClick={()=>{console.log("connect button click")}}><span>Let&apos;s Connect</span></button> 
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     );
}

export default NavBar;