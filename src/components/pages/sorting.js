import React, { Component } from "react";
import { Row, Col, DropdownButton, Dropdown, Tab } from "react-bootstrap";
import Selection from "./sorting/selection.js";
import Insertion from "./sorting/insertion.js";
import Bubble from "./sorting/bubble.js";
import Heap from "./sorting/heap.js";
import Merge from "./sorting/merge.js";
import Quick from "./sorting/quick.js";
import "../../assets/css/pages.css";
import "../../assets/css/sorting.css";

class Sorting extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sort: "Selection Sort",
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
				<div className="title">Sorting</div>
				<div className="text-center">
					Sorting algorithms are used to rearrange the elements of an unordered array or list into the correct order.
					Each kind of sorting algorithm is differentiated by their time and space complexities.
				</div>
				<Tab.Container defaultActiveKey="SelectionSort">
					<Row>
						<Col sm={2} />
						<Col sm={8}>
							<div id="anchor-name" style={{position: "absolute", top: -135}} />
							<DropdownButton id="dropdown-item-button" className="dropdownButton" title={this.state.sort}>
						        <Dropdown.Item onClick={()=>this.setState({sort: "Selection Sort"})} eventKey="SelectionSort">Selection Sort</Dropdown.Item>
						        <Dropdown.Divider />
						        <Dropdown.Item onClick={()=>this.setState({sort: "Insertion Sort"})} eventKey="InsertionSort">Insertion Sort</Dropdown.Item>
						        <Dropdown.Divider />
						        <Dropdown.Item onClick={()=>this.setState({sort: "Bubble Sort"})} eventKey="BubbleSort">Bubble Sort</Dropdown.Item>
						        <Dropdown.Divider />
						        <Dropdown.Item onClick={()=>this.setState({sort: "Heap Sort"})} eventKey="HeapSort">Heap Sort</Dropdown.Item>
						        <Dropdown.Divider />
						        <Dropdown.Item onClick={()=>this.setState({sort: "Merge Sort"})} eventKey="MergeSort">Merge Sort</Dropdown.Item>
						        <Dropdown.Divider />
						        <Dropdown.Item onClick={()=>this.setState({sort: "Quick Sort"})} eventKey="QuickSort">Quick Sort</Dropdown.Item>
						    </DropdownButton>
						</Col>
						<Col sm={2} />
					</Row>
					<Tab.Content>
				        <Tab.Pane eventKey="SelectionSort">
				        	<Selection />
				        </Tab.Pane>
				        <Tab.Pane eventKey="InsertionSort">
				        	<Insertion />
				        </Tab.Pane>
				        <Tab.Pane eventKey="BubbleSort">
				        	<Bubble />
				        </Tab.Pane>
				        <Tab.Pane eventKey="HeapSort">
				        	<Heap />
				        </Tab.Pane>
				        <Tab.Pane eventKey="MergeSort">
				        	<Merge />
				        </Tab.Pane>
				        <Tab.Pane eventKey="QuickSort">
				        	<Quick />
				        </Tab.Pane>
				    </Tab.Content>
      			</Tab.Container>
			</div>
		);
	}
}

export default Sorting;