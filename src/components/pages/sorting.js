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
			sort: "SelectionSort",
		}
	}

	componentDidMount() {
	  window.scrollTo(0, 0);
	}

	componentDidUpdate() {
		document.getElementById("anchor-name").scrollIntoView();
	}
	
	 render() {
	 	//console.log(this.state.sort);
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
						        <Dropdown.Item onClick={()=>this.setState({sort: "SelectionSort"})} eventKey="SelectionSort">Selection Sort</Dropdown.Item>
						        <Dropdown.Divider />
						        <Dropdown.Item onClick={()=>this.setState({sort: "InsertionSort"})} eventKey="InsertionSort">Insertion Sort</Dropdown.Item>
						        <Dropdown.Divider />
						        <Dropdown.Item onClick={()=>this.setState({sort: "BubbleSort"})} eventKey="BubbleSort">Bubble Sort</Dropdown.Item>
						        <Dropdown.Divider />
						        <Dropdown.Item onClick={()=>this.setState({sort: "HeapSort"})} eventKey="HeapSort">Heap Sort</Dropdown.Item>
						        <Dropdown.Divider />
						        <Dropdown.Item onClick={()=>this.setState({sort: "MergeSort"})} eventKey="MergeSort">Merge Sort</Dropdown.Item>
						        <Dropdown.Divider />
						        <Dropdown.Item onClick={()=>this.setState({sort: "QuickSort"})} eventKey="QuickSort">Quick Sort</Dropdown.Item>
						    </DropdownButton>
						</Col>
						<Col sm={2} />
					</Row>
					<Tab.Content>
				        <Tab.Pane eventKey="SelectionSort">
				        	<Selection sortType={this.state.sort} />
				        </Tab.Pane>
				        <Tab.Pane eventKey="InsertionSort">
				        	<Insertion sortType={this.state.sort} />
				        </Tab.Pane>
				        <Tab.Pane eventKey="BubbleSort">
				        	<Bubble sortType={this.state.sort} />
				        </Tab.Pane>
				        <Tab.Pane eventKey="HeapSort">
				        	<Heap sortType={this.state.sort} />
				        </Tab.Pane>
				        <Tab.Pane eventKey="MergeSort">
				        	<Merge sortType={this.state.sort} />
				        </Tab.Pane>
				        <Tab.Pane eventKey="QuickSort">
				        	<Quick sortType={this.state.sort} />
				        </Tab.Pane>
				    </Tab.Content>
      			</Tab.Container>
			</div>
		);
	}
}

export default Sorting;