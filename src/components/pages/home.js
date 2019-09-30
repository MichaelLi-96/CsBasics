import React, { Component } from "react";
import Spinner from 'react-bootstrap/Spinner'
import "../../assets/css/pages.css";
import "../../assets/css/home.css"

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			quote: "",
			author: ""
		}
	}

	//TheySaidSo Famous Quotes API
	async componentDidMount() {
		window.scrollTo(0, 0);
		const url = "https://quotes.rest/qod.json?category=inspire";
		const response = await fetch(url);
		const data = await response.json();
		this.setState({ quote: data.contents.quotes[0].quote, author: data.contents.quotes[0].author, loading: false });
	}

	componentDidUpdate() {
		window.scrollTo(0, 0);
	}
	
  	render() {
	    return(
	    	<div className="flex-container">		
	    		<div id="welcome-banner" className="banner">
	    			<div id="welcome-banner-title">CsBasics</div>
	    			<div id="welcome-banner-text">Your online cs resource. Java edition.</div>
	    		</div>
	    		
    			{this.state.loading || this.state.quote === "" ? (
    				<div id="quote-container">
    						<Spinner animation="border" style={{ color: "#011E13" }} />
    				</div>
    			) : (
    				<div id="quote-container">
	    				<div id="daily-quote-quote"><q>{this.state.quote}.</q></div>
	    				<div id="daily-quote-author">- {this.state.author}</div>
    				</div>
    			)}
			</div>
	    );
  	}
}

export default Home;