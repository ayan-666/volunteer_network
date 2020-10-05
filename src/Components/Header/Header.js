import React from 'react';
import { Navbar,Nav,Button } from 'react-bootstrap';
import logo from '../../images/logos/Group 1329.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Navbar bg="dark" variant="dark">
                            <Navbar.Brand href="/home">
                                <img src={logo}/>
                            </Navbar.Brand>
                            <Nav className="ml-auto">
                                <Nav.Link href="/home">Home</Nav.Link>
                                <Nav.Link href="#features">Donation</Nav.Link>
                                <Nav.Link href="#pricing">Events</Nav.Link>
                                <Nav.Link href="#pricing" className="mr-5">Blogs</Nav.Link>
                            </Nav>
                            <Button variant="outline-light">Register</Button> 
                            <Button variant="outline-light" className="ml-2">Admin</Button>
                        </Navbar>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;