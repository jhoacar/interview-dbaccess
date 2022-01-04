import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import Link from "next/link";
import Image from "next/image";

const CustomNav = ({height="150px"}) => {
  return (
    <Navbar style={{height:height}} fixed="top" bg="light" expand="sm">
      <Container className="w-100 p-0">
        <Navbar.Brand as={Link} href="/"><a className="navbar-brand d-flex align-items-center justify-content-center gap-3"><Image src="/icon.png" width="100rem" height="100rem" />Learning Cursos</a></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav " style={{marginRight:"1rem"}}/>
        <Navbar.Collapse id="responsive-navbar-nav" className="w-100">
          <Nav className="p-5 gap-3 w-100" style={{backgroundColor:"rgba(var(--bs-light-rgb), 1)"}}>
            <Nav.Link as={Link}  href="/"><a className="nav-link text-center" data-rr-ui-event-key="/">Inicio</a></Nav.Link>
            <Nav.Link as={Link}  href="/cursos"><a className="nav-link text-center" data-rr-ui-event-key="/">Cursos</a></Nav.Link>
            <Nav.Link as={Link}  href="/instructores"><a className="nav-link text-center" data-rr-ui-event-key="/">Instructores</a></Nav.Link>
            <Nav.Link as={Link}  href="/estudiantes"><a className="nav-link text-center" data-rr-ui-event-key="/">Estudiantes</a></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default CustomNav;
