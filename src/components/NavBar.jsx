import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import logo from '../assets/img/Logo.svg';
import navIcon1 from '../assets/img/linkedin.svg';
import navIcon2 from '../assets/img/github-mark-white.svg';
import navIcon3 from '../assets/img/insta.svg';
import { motion } from 'framer-motion';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faFaceGrinWink } from '@fortawesome/free-regular-svg-icons';
function NavBar() {

  const [activeLink, setActiveLink] = useState('home');
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
        <Navbar.Brand href="#home" className='logo-section'>
          {//<FontAwesomeIcon icon={ faFaceGrinWink } style={{ color: '#FFFFFF' }} />
          }
          <img src= {logo} alt='logo' className='logo-img' />
          &nbsp;&nbsp;
          <span className='logo-text'>Thajucp.in</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        
          <Nav className="me-auto">
          
            <Nav.Link href="#home" className={activeLink == 'home'? "active navbar-link" :  "navbar-link"} onClick={()=>updateActiveLink('home')}>
            <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'backInOut', type: 'tween' }}
            >
              Home
              </motion.span>
              </Nav.Link>
            <Nav.Link href="#skills" className={activeLink == 'skills'? "active navbar-link" : "navbar-link"} onClick={()=>updateActiveLink('skills')}>
            <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: 'backInOut', type: 'tween' }}
            > 
              Skills
              </motion.span>
              </Nav.Link>
            <Nav.Link href="#projects" className={activeLink == 'projects'? "active navbar-link" : "navbar-link"} onClick={()=>updateActiveLink('projects')}>
            <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.6, ease: 'backInOut', type: 'tween' }}
            > 
              Projects
              </motion.span>
              </Nav.Link>
            <Nav.Link href="#experience" className={activeLink == 'experience'? "active navbar-link" : "navbar-link"} onClick={()=>updateActiveLink('experience')}>
            <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, ease: 'backInOut', type: 'tween' }}
            > 
              Experience
              </motion.span>
              </Nav.Link>
            
          </Nav>
        
          <motion.span className="navbar-text"
          initial={{ x: '100%', opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeIn', type: 'tween' }}
          >
            <div className="social-icon">
                <a href='https://www.linkedin.com/in/thaju-fakrudheen/' target='_blank' rel='noreferrer'>
                <img src={navIcon1} alt='LinkedIN'/>
                </a>
                <a href='https://github.com/thajucp123' target='_blank' rel='noreferrer'>
                  <img src={navIcon2} alt='Github'/>
                  </a>
                <a href='https://www.instagram.com/chaaju__/' target='_blank' rel='noreferrer'>
                  <img src={navIcon3} alt='Instagram'/>
                  </a>
            </div>
            <a className='no-style-a' href="#connect">
            <button className="vvd"><span>Let&apos;s Connect</span></button> 
            </a>
          </motion.span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     );
}

export default NavBar;