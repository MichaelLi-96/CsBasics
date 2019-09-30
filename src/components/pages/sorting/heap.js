import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Row, Col, Button } from "react-bootstrap";
import Tooltip from "rc-tooltip";
import Slider from "rc-slider";
import P5Wrapper from "react-p5-wrapper";
import sortingVisualizer from "./sortingVisualizer";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import "../../../assets/css/pages.css";
import "../../../assets/css/dataStructures.css";

const heapSort =
`public static void heapSort(int arr[]) { 
	// Build heap (rearrange array) 
	for (int i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
		heapify(arr, arr.length, i); 
	}

	// One by one extract an element from heap 
	for (int i = arr.length - 1; i >= 0; i--) { 
		// Move current root or maximum value element to end of the array
		// Move the last heap element to the root position index 0
		int temp = arr[0]; 
		arr[0] = arr[i]; 
		arr[i] = temp; 

		// Heapify the reduced heap to maintain max heap property
		heapify(arr, i, 0); 
	} 
} 

// To heapify a subtree rooted with node i which is an index in arr[]. n is size of the heap 
public static void heapify(int arr[], int n, int i) { 
	// Initialize largest as root 
	int largestIndex = i; 
	int leftChildIndex = 2 * i + 1;
	int rightChildIndex = 2 * i + 2;

	// If left child is larger than largest so far 
	if (leftChildIndex < n && arr[leftChildIndex] > arr[largestIndex]) {
		largestIndex = leftChildIndex; 
	}

	// If right child is larger than largest so far 
	if (rightChildIndex < n && arr[rightChildIndex] > arr[largestIndex]) {
		largestIndex = rightChildIndex; 
	}

	// If largest is not the root 
	if (largestIndex != i) { 
		int temp = arr[i]; 
		arr[i] = arr[largestIndex];
		arr[largestIndex] = temp; 

		// Recursively heapify the affected sub-tree 
		heapify(arr, n, largestIndex); 
	} 
}`

const Handle = Slider.Handle;

const handle = (props) => {
	const { value, dragging, index, ...restProps } = props;
	return (
		<Tooltip
			prefixCls="rc-slider-tooltip"
			overlay={value}
			visible={dragging}
			placement="top"
			key={index}
		>
			<Handle value={value} {...restProps} />
		</Tooltip>
	);
};


class Heap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sortType: "Selection Sort",
			arraySize: 20,
			delay: 100,
			startSort: false,
			constructNewArray: false
		}
	}

	componentWillReceiveProps(newProps) {
    	this.setState({sortType: newProps.sortType});
	}

	componentDidUpdate(previousProps, previousState) {
	    if (previousState.sortType !== this.state.sortType) {
	        this.setState({
		        arraySize: 20,
				delay: 100,
				startSort: false,
				constructNewArray: false
			})
	    }
	}

  	render() {
		return(
			<div className="content">
				<div className="subtitle-left">
					Visualizer:
				</div>
				{ this.state.sortType === "Heap Sort" ?
					<Row>
						<Col sm={8} id="visualizer">
							<P5Wrapper 
								sketch={sortingVisualizer}
								arraySize={this.state.arraySize}
								delay={this.state.delay}
								startSort={this.state.startSort}
								constructNewArray={this.state.constructNewArray}
								sortType={this.state.sortType}
							/>
						</Col>
						<Col sm={4} className="optionsContainer">
							<Row className="rowContainer-sides">
								<Button onClick={()=>this.setState({startSort: true, constructNewArray: false})}>Start Sort!</Button>
								<Button onClick={()=>this.setState({constructNewArray: true, startSort: false})}>Reset and Randomize</Button>
							</Row>
							<Row />
							<Row className="rowContainer-left" style={{ fontSize: 30, fontWeight: "bold" }}>Array Size</Row>
							<Row className="rowContainer-center">
								<Col sm={9} xs={9} className="colContainer">
									<Slider min={10} max={100} defaultValue={20} handle={handle} onChange={value=>this.setState({arraySize: value, constructNewArray: true, startSort: false})} />
								</Col>
								<Col sm={3} xs={3} className="colContainer" style={{ fontSize: 30, fontWeight: "bold" }}>
									{this.state.arraySize}
								</Col>
							</Row>
							<Row />
							<Row className="rowContainer-left" style={{ fontSize: 30, fontWeight: "bold"}}>Delay in Milliseconds</Row>
							<Row className="rowContainer-center">
								<Col sm={9} xs={9} className="colContainer">
									<Slider min={0} max={1000} defaultValue={100} handle={handle} onChange={value=>this.setState({delay: value, constructNewArray: false})}   />
								</Col>
								<Col sm={3} xs={3} className="colContainer" style={{ fontSize: 30, fontWeight: "bold" }}>
									{this.state.delay}
								</Col>
							</Row>
						</Col>
					</Row>
				:
					null
				}
				<br />
				<div className="subtitle-left">
					Time Complexity:
				</div>
				<div className="subsubtitle-left">
					<ul>
						<li>Worst Case: O(nlog(n))</li>
						<li>Average Case: O(nlog(n))</li>
						<li>Best Case: O(nlog(n))</li>
					</ul>
				</div>
				<div className="subtitle-left">
					Space Complexity: O(1)
				</div>
				<div className="subtitle-left">
					Description:
				</div>
				<div className="text-left">
					The heap sort algorithm sorts an array or list by using a max or min heap. For example, by using a max heap we always have access to the maximum
					value element. Heapsort removes the maximum value element which is the root node and places it at the end of the array. After the removal, the last 
					element of the heap is moved to the root node position and is then bubbled down (heapified) to the correct position to maintain the max heap property.
					This continues until the size of the heap is only one, which will be the lowest value of the array.
				</div>
				<div className="subtitle-left">
					Code Implementation:
				</div>
				<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text-lg">
					{heapSort}
				</SyntaxHighlighter>
			</div>
		);
  	}
}

export default Heap;
