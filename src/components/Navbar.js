import Nav from 'react-bootstrap/Nav'
import React from 'react'

export default function Navbar() {
    return (
        <div>
            <Nav className="justify-content-center" defaultActiveKey="/home" as="ul">
                    <Nav.Item as="li">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="/triplog">Triplog</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav.Item>
                </Nav>
        </div>
    )
}
