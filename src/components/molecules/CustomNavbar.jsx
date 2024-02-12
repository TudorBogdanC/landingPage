import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const CustomNavbar = () => {
  const [scrollPos, setScrollPos] = useState(0);
  useEffect(() => {
    window.addEventListener('scroll', navScroll)
  }, [])

  const navScroll = () => {
    setScrollPos(window.scrollY)

  }
  const bgColor = scrollPos >= 100 ? "bg-light" : "";
  const textColor = scrollPos >= 100 ? "text-dark" : "text-light";
  
  return (
    <Navbar sticky="top" className={bgColor} style={{backgroundColor:"#0a0a0a"}}>
      <Container>
        <Navbar.Brand href="#home" className={textColor} style={{color:"#f7f8fa"}}>Tudor</Navbar.Brand>
        <Nav>
          <Nav.Link className={textColor} href="#about">Su di me</Nav.Link>
          <Nav.Link className={textColor} href="#projects">Progetti</Nav.Link>
          <Nav.Link className={textColor} href="#contacts">Contatti</Nav.Link>
        </Nav> 
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
