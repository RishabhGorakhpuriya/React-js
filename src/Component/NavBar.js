
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import './NavBar.css'

export default function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" >
      <Navbar.Brand className='category' href="" style={{ marginLeft: '30px' }}>Picture</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ marginRight: '15px' }} />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto" id="MyLink">
          <Nav.Link className="category"  href="/all">Home</Nav.Link>
          <Nav.Link className="category"  href="/nature">Nature</Nav.Link>
          <Nav.Link className="category"   href="/religion">Religion</Nav.Link>
          <Nav.Link className="category"  href="/science">Science</Nav.Link>
          <Nav.Link className="category" href="/sports">Sports</Nav.Link>
          <Nav.Link className="category"   href="/health"> Health</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  
  );
}

