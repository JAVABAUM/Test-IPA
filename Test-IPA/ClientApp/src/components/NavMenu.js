import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import firebase from '../Auth'
import { getAuth, onAuthStateChanged } from "firebase/auth";

export class NavMenu extends Component {
  static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
            user: null,
            auth: getAuth()
        };
    }
  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });  
    };


    componentDidMount() {
        onAuthStateChanged(getAuth(), (_user) => {
            this.setState({user: _user})
        });
    }

    render() {
        
    return (
      <header>
            <Navbar className="navbar-dark navbar-expand-sm navbar-toggleable-sm border-bottom border-danger border-4 box-shadow mb-3">
          <Container>
            <NavbarBrand tag={Link} to="/" className="nav-title">Casino</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">                
                <NavItem>
                    {getAuth().currentUser ?
                                    <NavLink tag={Link} className="text-light" to="/profile"><p>Profile</p>
                                    </NavLink> : <NavLink tag={Link} className="text-light" to="/login"><p>Login</p>
                                    </NavLink>}
                </NavItem>
                
              </ul>
            </Collapse>
          </Container>  
        </Navbar>
      </header>
    );
}
}
