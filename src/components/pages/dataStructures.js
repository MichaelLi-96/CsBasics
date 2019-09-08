import React, { Component } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Arrays from "./dataStructures/arrays.js";
import "../../assets/css/pages.css";
import "../../assets/css/dataStructures.css";


class DataStructures extends Component {
	componentDidMount() {
	  window.scrollTo(0, 0);
	}

	componentDidUpdate() {
		window.scrollTo(0, 0);
	}
	
  	render() {
		return(
		    <div className="flex-container">
				<div className="title">Data Structures</div>
				<div className="text-center" id="starting-point">
					A data structure is a way of collecting and organising data in such a way that we can perform operations on these data in an effective way.
				</div>
				<div id="start" />
				<div id="tab-container">
					<Tab.Container defaultActiveKey="arrays">
						<Row>
							<Col sm={2}>
						    	<Nav id="nav" className="flex-column" variant="pills">
						     		<Nav.Item>
						        		<Nav.Link href="#starting-point" eventKey="arrays">Arrays and ArrayLists</Nav.Link>
						       		</Nav.Item>
							        <Nav.Item>
							        	<Nav.Link href="#starting-point" eventKey="stacks">Stacks</Nav.Link>
							        </Nav.Item>
							        <Nav.Item>
						        		<Nav.Link href="#starting-point" eventKey="queues">Queues</Nav.Link>
						       		</Nav.Item>
							        <Nav.Item>
							        	<Nav.Link href="#starting-point" eventKey="linkedlists">LinkedLists</Nav.Link>
							        </Nav.Item>
							        <Nav.Item>
							        	<Nav.Link href="#starting-point" eventKey="trees">Trees</Nav.Link>
							        </Nav.Item>
							        <Nav.Item>
						        		<Nav.Link href="#starting-point" eventKey="hash">HashMaps and HashSets</Nav.Link>
						       		</Nav.Item>
							        <Nav.Item>
						        		<Nav.Link href="#starting-point" eventKey="heaps">Heaps</Nav.Link>
						       		</Nav.Item>
							        <Nav.Item>
							        	<Nav.Link href="#starting-point" eventKey="graphs">Graphs</Nav.Link>
							        </Nav.Item>
						      	</Nav>
						    </Col>
						    <Col sm={1} />
					    	<Col sm={8}>
					      		<Tab.Content>
					        		<Tab.Pane eventKey="arrays">
					        			<Arrays />
					        		</Tab.Pane>
					        		<Tab.Pane eventKey="stacks">
					        			<div className="content">
					        				<div className="subtitle-center">
					        					Stacks
					        				</div>
					        			</div>
					      			</Tab.Pane>
					      			<Tab.Pane eventKey="queues">
					        			<div className="content">
					        				<div className="subtitle-center">
					        					Queues
					        				</div>
					        			</div>
					        		</Tab.Pane>
					        		<Tab.Pane eventKey="linkedlists">
					        			<div className="content">
					        				<div className="subtitle-center">
					        					LinkedLists
					        				</div>
					        			</div>
					      			</Tab.Pane>
					      			<Tab.Pane eventKey="trees">
					        			<div className="content">
					        				<div className="subtitle-center">
					        					Trees
					        				</div>
					        			</div>
					        		</Tab.Pane>
					        		<Tab.Pane eventKey="hash">
					        			<div className="content">
					        				<div className="subtitle-center">
					        					HashMaps and HashSets
					        				</div>
					        			</div>
					      			</Tab.Pane>
					      			<Tab.Pane eventKey="heaps">
					        			<div className="content">
					        				<div className="subtitle-center">
					        					Heaps
					        				</div>
					        			</div>
					        		</Tab.Pane>
					        		<Tab.Pane eventKey="graphs">
					        			<div className="content">
					        				<div className="subtitle-center">
					        					Graphs
					        				</div>
					        			</div>
					      			</Tab.Pane>
					      		</Tab.Content>
					    	</Col>
					    	<Col sm={1} />
						</Row>
					</Tab.Container>
				</div>
			</div>
		);
  	}
}

export default DataStructures;
