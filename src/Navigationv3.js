import React from 'react';
import {Card, Container, Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Navigationv3() {
    return (
        <Navbar expand="lg" variant="dark" bg="dark" fixed='top'>
            <Container>
                <Navbar.Brand>Tweet Information</Navbar.Brand>
            </Container>
        </Navbar>
    );
}
