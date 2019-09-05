import React, { Component } from "react";
import "../../assets/pages.css";
import "../../assets/home.css"

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			quote: "",
			author: ""
		}
	}

	async componentDidMount() {
		const url = "http://quotes.rest/qod.json?category=inspire";
		const response = await fetch(url);
		const data = await response.json();
		this.setState({ quote: data.contents.quotes[0].quote, author: data.contents.quotes[0].author, loading: false });
	}

  	render() {
	    return(
	    	<div className="flex-container">		
	    		<div id="welcome-banner" className="banner">
	    			<div id="welcome-banner-title">CsBasics</div>
	    			<div id="welcome-banner-text">Your online cs resource.</div>
	    		</div>
	    		
    			{this.state.loading || this.state.person == "" ? (
    				<div id="daily-quote">loading...</div>
    			) : (
    				<div className="quote-container">
	    				<div id="daily-quote-quote"><q>{this.state.quote}.</q></div>
	    				<div id="daily-quote-author">- {this.state.author}</div>
    				</div>
    			)}
			</div>
	    );
  	}
}

export default Home;