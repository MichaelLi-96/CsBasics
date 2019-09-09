import React, { Component } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Arrays from "./dataStructures/arrays.js";
import Arraylists from "./dataStructures/arraylists.js";
import Matrixes from "./dataStructures/matrixes.js";
import Stacks from "./dataStructures/stacks.js";
import Queues from "./dataStructures/queues.js";
import LinkedLists from "./dataStructures/linkedlists.js";
import HashMaps from "./dataStructures/hashmaps.js";
import Trees from "./dataStructures/trees.js";
import Heaps from "./dataStructures/heaps.js";
import Graphs from "./dataStructures/graphs.js";
import "../../assets/css/pages.css";
import "../../assets/css/dataStructures.css";


class DataStructures extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataStructure: "arrays",
			width: window.innerWidth,
		}
	}

	componentDidMount() {
		window.scrollTo(0, 0);
	}

	componentDidUpdate() {
		if(this.state.width > 500) {
			window.scrollTo(0, 265);
		}
		else {
			window.scrollTo(0, 1715);
		}
	}

  	render() {
		return(
		    <div className="flex-container">
				<div className="title">Data Structures</div>
				<div className="text-center">
					A data structure is a way of collecting and organising data in such a way that we can perform operations on these data in an effective way. <br />
					Using the right data structure in different situations and constraints can save a computer time and space!
				</div>
				<div id="start" />
				<div id="tab-container">
					<Tab.Container defaultActiveKey="arrays">
						<Row>
							<Col sm={2}>
						    	<Nav id="nav" className="flex-column" variant="pills">
						     		<Nav.Item>
						        		<Nav.Link onClick={()=>this.setState({dataStructure: "arrays"})} eventKey="arrays">Arrays</Nav.Link>
						       		</Nav.Item>
						       		<Nav.Item>
						        		<Nav.Link onClick={()=>this.setState({dataStructure: "arraylists"})} eventKey="arraylists">ArrayLists</Nav.Link>
						       		</Nav.Item>
						       		<Nav.Item>
						        		<Nav.Link onClick={()=>this.setState({dataStructure: "matrixes"})} eventKey="matrixes">Matrixes</Nav.Link>
						       		</Nav.Item>
							        <Nav.Item>
							        	<Nav.Link onClick={()=>this.setState({dataStructure: "stacks"})} eventKey="stacks">Stacks</Nav.Link>
							        </Nav.Item>
							        <Nav.Item>
						        		<Nav.Link onClick={()=>this.setState({dataStructure: "queues"})} eventKey="queues">Queues</Nav.Link>
						       		</Nav.Item>
							        <Nav.Item>
							        	<Nav.Link onClick={()=>this.setState({dataStructure: "linkedlists"})} eventKey="linkedlists">LinkedLists</Nav.Link>
							        </Nav.Item>
							        <Nav.Item>
						        		<Nav.Link onClick={()=>this.setState({dataStructure: "hash"})} eventKey="hash">HashMaps and HashSets</Nav.Link>
						       		</Nav.Item>
						       		<Nav.Item>
							        	<Nav.Link onClick={()=>this.setState({dataStructure: "trees"})} eventKey="trees">Trees</Nav.Link>
							        </Nav.Item>
							        <Nav.Item>
						        		<Nav.Link onClick={()=>this.setState({dataStructure: "heaps"})} eventKey="heaps">Heaps</Nav.Link>
						       		</Nav.Item>
							        <Nav.Item>
							        	<Nav.Link onClick={()=>this.setState({dataStructure: "graphs"})} eventKey="graphs">Graphs</Nav.Link>
							        </Nav.Item>
						      	</Nav>
						    </Col>
						    <Col sm={1} />
					    	<Col sm={8}>
					      		<Tab.Content>
					        		<Tab.Pane eventKey="arrays">
					        			<Arrays />
					        		</Tab.Pane>
					        		<Tab.Pane eventKey="arraylists">
					        			<Arraylists />
					      			</Tab.Pane>
					      			<Tab.Pane eventKey="matrixes">
					        			<Matrixes />
					      			</Tab.Pane>
					        		<Tab.Pane eventKey="stacks">
					        			<Stacks />
					      			</Tab.Pane>
					      			<Tab.Pane eventKey="queues">
					        			<Queues />
					        		</Tab.Pane>
					        		<Tab.Pane eventKey="linkedlists">
					        			<LinkedLists />
					      			</Tab.Pane>
									<Tab.Pane eventKey="hash">
					        			<Trees />
					      			</Tab.Pane>
					      			<Tab.Pane eventKey="trees">
					        			<HashMaps />
					        		</Tab.Pane>
					      			<Tab.Pane eventKey="heaps">
					        			<Heaps />
					        		</Tab.Pane>
					        		<Tab.Pane eventKey="graphs">
					        			<Graphs />
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
