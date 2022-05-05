import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from '../../../../src/images/logo.png';


const Header = () => {
    return (
      <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/">
      <img src={logo} height="30" alt="" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link as={Link} to="manage inventory">Manage Inventory</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="blog">Blog</Nav.Link>
      <Nav.Link  to="login">
        Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;