import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../../assets/pages.css";

class Home extends Component {
  render() {
    return(
    	<div className="container-fluid">
			<h1 className="title">Home</h1>
			<br/>
			<h1>
				Hello friends!
			</h1>
		</div>
    );
  }
}

export default Home;