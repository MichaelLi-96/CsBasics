import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa";
import '../assets/footer.css';

class Footer extends Component {
  render() {
    return(
		<footer>
			<div>
				<text className="FooterText"><FaRegCopyright className="CopyrightIcon" /> Michael Li</text>
			</div>
		</footer>
    );
  }
}

export default Footer;