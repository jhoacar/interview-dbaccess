import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
// import Button from "react-bootstrap/Button";

import Link from "next/link";
import Image from "next/image";

const CustomNav = ({height="150px"}) => {
  return (
    <Navbar style={{height:height}} fixed="top" bg="light" expand="sm">
      <Container className="">
        <Navbar.Brand as={Link} href="/"><a className="navbar-brand d-flex align-items-center justify-content-center gap-3"><Image src="/icon.png" width="100px" height="100px" />Learning Cursos</a></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="p-5 d-flex gap-3 align-items-center justify-content-evenly w-100">
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
