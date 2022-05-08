import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import {Link} from 'react-router-dom';
import logo from '../../../../src/images/logo.png';
import auth from '../../../firebase.init';


const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  }
    return (
      <Navbar sticky='top' collapseOnSelect expand="lg" bg="success" className='bg-opacity-75' variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/">
      <img src={logo} height="30" alt="" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="blog">Blog</Nav.Link>
      <Nav.Link as={Link} to="aboutus">About Us</Nav.Link>
      <Nav.Link as={Link} to="manageinventory">Manage Inventory</Nav.Link>
    </Nav>
    <Nav>
      {
        user && <>
        <Nav.Link as={Link} to="additem">Add Item</Nav.Link>
        <Nav.Link as={Link} to="myitem">My Item</Nav.Link>
        </>
      }
      {
        user ?
        <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign Out</button>
        :
        <Nav.Link as={Link}  to="login">
        Login
      </Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;