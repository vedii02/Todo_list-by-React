import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/todo">TODO</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="todo">Create Todo</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header