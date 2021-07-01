import Navbar from 'react-bootstrap/Navbar'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHiking } from '@fortawesome/free-solid-svg-icons'



export default function Navibar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <FontAwesomeIcon icon={faHiking} className="mr-1"/>
                        Park Browser
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/triplog">Triplog</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}




