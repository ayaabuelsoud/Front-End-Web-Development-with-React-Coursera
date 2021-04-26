import React, { Component } from 'react';
import {Jumbotron, Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem ,
        Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { TiHome ,TiInfoLarge } from "react-icons/ti";
import { FaListAlt ,FaRegAddressCard ,FaSignInAlt} from "react-icons/fa";

class Header extends Component {
    constructor (props){
        super(props);
        
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

    }

    toggleNav(){
        this.setState ({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src='assets/images/logo.png' height="30" width="41" 
                                alt='Ristorante Con Fusion'/>
                        </NavbarBrand>

                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span> <TiHome/></span> Home
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <span> <TiInfoLarge/></span> About Us
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                    <span> <FaListAlt/></span> Menu
                                </NavLink>
                            </NavItem>
                            
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <span> <FaRegAddressCard/></span> Contact Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button outline onClick={this.toggleModal}>
                                    <span className="fa-lg"> <FaSignInAlt/></span> login
                                </Button>
                            </NavItem>
                        </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience.
                                    Our lipsmacking creations will tickle your culinary senses!
                                </p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }

}

export default Header;