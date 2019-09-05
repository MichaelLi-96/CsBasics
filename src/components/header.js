import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";
import "../assets/header.css"

class Header extends Component {
  render() {
    return(
		<Navbar id="Navbar" collapseOnSelect expand="lg" variant="dark" activeKey="/home" sticky="top" style={styles.navBar}>
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
		  <Navbar.Collapse id="responsive-navbar-nav" style={{alignItems:"center", justifyContent: "center"}}>
		    <Nav>	
				<ul>
					<li>
						<Link to="/DataTypes">Data Types</Link>
					</li>
					<li>
						<Link to="/ObjectOrientedProgramming">Object Oriented Programming</Link>
					</li>
					<li>
						<Link to="/DataStructures">Data Structures</Link>
					</li>
					<li>
						<Link to="/Algorithms">Algorithms</Link>
					</li>
					<li>
						<Link to="/Sorting">Sorting</Link>
					</li>
					<li>
						<Link to="/Searching">Searching</Link>
					</li>
				</ul>
			</Nav>
		  </Navbar.Collapse>
		</Navbar>
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