import React from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import '../App.css'

const Header = () => {
  return (
    <Navbar expand="lg" fixed='top'  className="header d-flex justify-content-between">
      <Navbar.Brand href='#/#home' className="d-flex ps-2 align-items-center">
        <img
          src={logo}
          alt="Logo"
          className="d-inline-block align-top"
          width={40}
          height={41}
        />
        <div className='logo-name'>Yogi Youssef</div>
      </Navbar.Brand>
      <Navbar.Toggle className='me-2' aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="d-lg-flex justify-content-between">
        <Nav className="mx-auto d-lg-flex gap-4">
          <Nav.Link className='navLink text-white' href='#/#home'>Home</Nav.Link>
          <Nav.Link className='navLink text-white' href="#/#about">About</Nav.Link>
          <Nav.Link className='navLink text-white' as={Link} to="/services">Classes</Nav.Link>
          
          <Nav.Link className='navLink text-white' as={Link} to="/services">Events</Nav.Link>
          <Nav.Link className='navLink text-white' as={Link} to="/gallery">Personal Training</Nav.Link>
          <Nav.Link className='navLink text-white' href="#/#contact">Contact</Nav.Link>
        </Nav>
        <Form inline className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
