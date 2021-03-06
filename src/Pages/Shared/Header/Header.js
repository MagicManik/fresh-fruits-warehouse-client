import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    return (
        <Navbar sticky='top' className='navbar-style' collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand className='title-logo fs-5 fw-bold' as={Link} to="/">Fresh Fruits Warehouse</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header className='border-bottom offcanvas-title' closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">
                                Fruits Warehouse
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className='p-0 ps-2 off-canvas-body'>
                            <Nav className="justify-content-end flex-grow-1">

                                <Nav className='nav-item-style'>
                                    <CustomLink to={'/home'}>Home</CustomLink>
                                </Nav >

                                {
                                    user &&
                                    <div className='nav-item'>


                                        <Nav className='nav-item-style'>
                                            <CustomLink to={'/manage'}>Manage Inventory</CustomLink>
                                        </Nav >


                                        <Nav className='nav-item-style'>
                                            <CustomLink to={'/mystocks'}>My Stocks</CustomLink>
                                        </Nav >


                                        <Nav className='nav-item-style'>
                                            <CustomLink to={'/add'}>Add Item</CustomLink>
                                        </Nav >
                                    </div>
                                }

                                <Nav className='nav-item-style'>
                                    <CustomLink to={'/blogs'}>Blogs</CustomLink>
                                </Nav >
                                <Nav className='nav-item-style'>
                                    <CustomLink to={'/about'}>About</CustomLink>
                                </Nav >

                                {
                                    user ?
                                        <Nav className='nav-item-style'>
                                            <button className='log-out-btn text-center' onClick={logout}>Log Out</button>
                                        </Nav>
                                        :
                                        <Nav className='nav-item-style'>
                                            <CustomLink to={'/login'}>Login</CustomLink>
                                        </Nav>
                                }


                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;