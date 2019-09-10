import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import "../assets/css/header.css"

class Header extends Component {
	  constructor(props) {
		super(props);
		this.state = {
			isNavExpanded: false
		};

		this.setIsNavExpanded = (isNavExpanded) => {
	      this.setState({ isNavExpanded: isNavExpanded });
	    }
	  
		this.handleClick = (e) => {
			if (this.node.contains(e.target)) {
				// if clicked inside menu do something
			} 
			else {
				// If clicked outside menu, close the navbar.
				this.setState({ isNavExpanded: false });
			}
		}
	}
  

    componentDidMount() {
		document.addEventListener('click', this.handleClick, false);      
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleClick, false);
	}


  	render() {
	    return(
	    	<header id="header" ref={node => this.node = node}>
				<Navbar collapseOnSelect id="navbar" expand="xl" variant="dark" onToggle={this.setIsNavExpanded} expanded={this.state.isNavExpanded}>
					<Link to="/">
					 	<Navbar.Brand style={styles.logo}>
							<img
								alt="csBasics"
								src={logo}
								className="d-inline-block align-top"
							/>
						</Navbar.Brand>
					</Link>
				  <Navbar.Toggle />
				  <Navbar.Collapse>
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