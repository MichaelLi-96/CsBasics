import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "../../../assets/css/pages.css";
import "../../../assets/css/algorithms.css"

class AlgorithmModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
		}
	}

	setShow() {
    	this.setState({show: !this.state.show});
	}

  	render() {
    	return(
			<div>
				<Button onClick={() => this.setShow()} className="titleButton">
					{this.props.name}
				</Button>

				<Modal
					show={this.state.show}
					onHide={() => this.setShow()}
					centered
					dialogClassName="centerModal"
				>
					<Modal.Header closeButton>
						<Modal.Title className="modalTitle">
							{this.props.name}
						</Modal.Title>
					</Modal.Header>
					<Modal.Body className="modalBody">
						{this.props.description}
					</Modal.Body>
					<Modal.Footer>
						<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text-sm">
							{this.props.code}
						</SyntaxHighlighter>
					</Modal.Footer>
				</Modal>
		    </div>		 
	    );
  	}
}

export default AlgorithmModal;
