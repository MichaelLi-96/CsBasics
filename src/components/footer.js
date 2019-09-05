import React, { Component } from "react";
import { FaRegCopyright } from "react-icons/fa";
import '../assets/footer.css';

class Footer extends Component {
  	render() {
	    return(
			<footer>
				<div>
					<div id="FooterText"><FaRegCopyright id="CopyrightIcon" /> Michael Li</div>
				</div>
			</footer>
	    );
  	}
}

export default Footer;