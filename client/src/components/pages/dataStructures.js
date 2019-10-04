import React, { Component } from "react";
import { Row, Col, Tab, Nav } from "react-bootstrap";
import Arrays from "./dataStructures/arrays.js";
import Arraylists from "./dataStructures/arraylists.js";
import Matrices from "./dataStructures/matrices.js";
import Stacks from "./dataStructures/stacks.js";
import Queues from "./dataStructures/queues.js";
import LinkedLists from "./dataStructures/linkedlists.js";
import HashSets from "./dataStructures/hashsets.js";
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
		}
	}

	componentDidMount() {
		window.scrollTo(0, 0);
	}

	componentDidUpdate() {
		document.getElementById("anchor-name").scrollIntoView();
	}

  	render() {
		return(
		    <div className="flex-container">
				<div className="title">Data Structures</div>
				<div className="text-center">
					A data structure is a way of collecting and organising data in such a way that we can perform operations on these data in an effective way.
					Using the right data structure in different situations and constraints can save a computer time and space!
				</div>
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
						        		<Nav.Link onClick={()=>this.setState({dataStructure: "matrices"})} eventKey="matrixes">Matrices</Nav.Link>
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
						        		<Nav.Link onClick={()=>this.setState({dataStructure: "hashsets"})} eventKey="hashsets">HashSets</Nav.Link>
						       		</Nav.Item>
							        <Nav.Item>
						        		<Nav.Link onClick={()=>this.setState({dataStructure: "hashmaps"})} eventKey="hashmaps">HashMaps</Nav.Link>
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
					      		<Tab.Content id="info"> 
					      			{ window.innerWidth >= 550 ?
										<div id="anchor-name" style={{position: "absolute", top: -150, left: 0}} />
										:
										<div id="anchor-name" style={{position: "absolute", top: -95, left: 0}} />
					      			}
					        		<Tab.Pane eventKey="arrays">
					        			<Arrays />
					        		</Tab.Pane>
					        		<Tab.Pane eventKey="arraylists">
					        			<Arraylists />
					      			</Tab.Pane>
					      			<Tab.Pane eventKey="matrixes">
					        			<Matrices />
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
									<Tab.Pane eventKey="hashsets">
					        			<HashSets />
					      			</Tab.Pane>
									<Tab.Pane eventKey="hashmaps">
					        			<HashMaps />
					      			</Tab.Pane>
					      			<Tab.Pane eventKey="trees">
					        			<Trees />
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
