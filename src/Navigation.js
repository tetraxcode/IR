import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import About from './About';
import Map from './map'
import App from './App';
import Search from './search';

const Navigation = () => {
    return (
        <Router>
            <div>
                <Navbar expand="lg" variant="light" bg="" fixed='top'>
                    <Container>
                        <Navbar.Brand as={Link}
                            to='/'>TweetSearch</Navbar.Brand>
                        <Nav>
                            <Nav.Link as={Link}
                                to='/maps'>maps</Nav.Link>
                            <Nav.Link as={Link}
                                to='/about'>about</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
            <div>
                <Routes>
                    <Route path='/about'
                        element={<About/>}/>
                    <Route path='/maps'
                        element={<Map/>}/>
                    <Route exact path='/'
                        element={<Search/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default Navigation;
