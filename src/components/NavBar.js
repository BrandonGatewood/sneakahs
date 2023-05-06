import { useState } from "react";
import { Navbar, Form, Button, Container } from 'react-bootstrap';
import '../css/navbar.css';
import { BrowserRouter } from 'react-router-dom';

export const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
  
    const changeBackground = () => {
        if(window.scrollY > 80) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

  return (
    <BrowserRouter>
        <Navbar variant='dark' expand='md' className={scrolled ? 'scrolled': 'notScrolled'}>
            <Container className="container">
                <Navbar.Brand href='#'>
                    Sneakahs 
                </Navbar.Brand>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Container>
        </Navbar>
    </BrowserRouter>
  );
}

export default NavBar;