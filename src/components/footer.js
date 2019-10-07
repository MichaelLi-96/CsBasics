import React, { Component } from "react";
import { FaRegCopyright } from "react-icons/fa";
import '../assets/css/footer.css';

class Footer extends Component {
  	render() {
	    return(
			<footer>
				<div id="FooterText"><FaRegCopyright id="CopyrightIcon" /> Michael Li</div>
			</footer>
	    );
  	}
}

export default Footer;