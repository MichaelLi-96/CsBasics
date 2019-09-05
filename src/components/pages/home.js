import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../../assets/pages.css";

class Home extends Component {
  render() {
    return(
    	<div className="flex-container">		
    		<div id="welcome-banner" className="banner">
    			<div id="welcome-banner-title">CsBasics</div>
    			<div id="welcome-banner-text">Your online cs resource.</div>
    		</div>
    		<div>
    			hello
    		</div>
		</div>
    );
  }
}

export default Home;