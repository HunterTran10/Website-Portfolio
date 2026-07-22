import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import resume from "../assets/img/resume.pdf";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            <span style={{ color: '#fff', fontWeight: '700', fontSize: '24px' }}>
            HT
             </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              style={{ color: '#fff', fontSize: '16px', opacity: '0.75', marginRight: '20px' }}
            >
              Resume
            </a>
            <a 
              href="https://github.com/HunterTran10" 
              target="_blank" 
              rel="noreferrer"
              style={{ color: '#fff', fontSize: '16px', opacity: '0.75' }}
            >
              GitHub
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};