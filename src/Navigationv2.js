import React from 'react';
import {Card, Container, Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import About from './About';
import Map from './map'
import App from './App';
import Search from './search';
import logo from './logo.png';
import {TextField, InputAdornment, Button, Hidden} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Navigationv2 = () => {
    return (
        <Router>
            <div className='results'>
                <Navbar expand="lg" variant="light" bg="" fixed='top' className='navbarv2' style={{background:'#fff'}}>
                    <Container>
                        <Navbar.Brand as={Link}
                            to='/search'><img src={logo}
                                style={
                                    {width: "85px"}
                                }/></Navbar.Brand>
                        <Nav className="justify-content-center">
                            <TextField id="searchbox1" label='Search' placeholder="Enter the search term"
                                InputProps={
                                    {
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <SearchIcon/>
                                            </InputAdornment>
                                        )
                                    }
                                }/>
                        </Nav>
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
                    <Route path='/search'
                        element={<Search/>}/>
                    <Route exact path='/'/>
                </Routes>
            </div>
        </Router>
    );
}

export default Navigationv2;
