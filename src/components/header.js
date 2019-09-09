import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import "../assets/css/header.css"

class Header extends Component {
  	render() {
	    return(
	    	<header id="header">
				<Navbar collapseOnSelect id="navbar" expand="lg" variant="dark">
					<Link to="/">
					 	<Navbar.Brand style={styles.logo}>
							<img
								alt="csBasics"
								src={logo}
								className="d-inline-block align-top"
							/>
						</Navbar.Brand>
					</Link>
				  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
				  <Navbar.Collapse id="responsive-navbar-nav">
				    <Nav>	
						<Nav.Link eventKey="oop"><Link to="/ObjectOrientedProgramming">Object-Oriented Programming</Link></Nav.Link>
						<Nav.Link eventKey="dataTypes"><Link to="/DataTypes">Data Types</Link></Nav.Link>
						<Nav.Link eventKey="dataStructures"><Link to="/DataStructures">Data Structures</Link></Nav.Link>
						<Nav.Link eventKey="algorithms"><Link to="/Algorithms">Algorithms</Link></Nav.Link>
						<Nav.Link eventKey="sorting"><Link to="/Sorting">Sorting</Link></Nav.Link>
						<Nav.Link eventKey="searching"><Link to="/Searching">Searching</Link></Nav.Link>
					</Nav>
				  </Navbar.Collapse>
				</Navbar>
			</header>
	    );
  	}
}

let styles = {
	logo: {
		left: 0,
		marginTop: 15,
		marginBottom: 15,
		marginLeft: 30
	},
}

export default Header;