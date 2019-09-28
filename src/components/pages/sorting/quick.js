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

const quickSort =
`// Quick sort with rightmost element as the pivot
public static void quickSort(int[] arr, int start, int end) {
	// Find the partition index
	int partition = partition(arr, start, end);

	// Sort the lesser/left partition
	if(partition - 1 > start) {
		quickSort(arr, start, partition - 1);
	}
	// Sort the greater/right partition
	if(partition + 1 <end) {
		quickSort(arr, partition + 1, end);
	}
}

// Partition the input array and return the resulting pivot index
public static int partition(int[] arr, int start, int end) {
	int pivot = arr[end];

	// Move all elements smaller than the pivot before the pivot and all elements larger than the pivot after the pivot
	for(int i = start; i < end; i++){
		if(arr[i] < pivot){
			int temp = arr[start];
			arr[start] = arr[i];
			arr[i] = temp;
			start++;
		}
	}

	// Final switch to move pivot element to the the correct partition index
	// Switches the last element (partition element) with the first element of the larger partition subarray
	int temp = arr[start];
	arr[start] = pivot;
	arr[end] = temp;

	return start;
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


class Quick extends Component {
	componentWillReceiveProps(newProps) {
    	this.setState({sortType: newProps.sortType});
	}

	constructor(props) {
		super(props);
		this.state = {
			sortType: "SelectionSort",
			arraySize: 10,
			delay: 100,
			startSort: false,
			constructNewArray: false
		}
	}


  	render() {
		return(
			<div className="content">
				<div className="subtitle-left">
					Visualizer:
				</div>
				{ this.state.sortType === "QuickSort" ?
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
									<Slider min={10} max={50} defaultValue={10} handle={handle} onChange={value=>this.setState({arraySize: value, constructNewArray: true, startSort: false})} />
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
						<li>Worst Case: O(n^2)</li>
						<li>Average Case: O(nlog(n))</li>
						<li>Best Case: O(nlog(n))</li>
					</ul>
				</div>
				<div className="subtitle-left">
					Space Complexity: O(log(n))
				</div>
				<div className="subtitle-left">
					Description:
				</div>
				<div className="text-left">
					The quick sort algorithm is a divide and conquer algorithm that sorts arrays and lists. Quick sort first picks an element as a pivot. 
					The pivot can be chosen multiple ways such as always picking the first or last element, picking the middle element, or picking a random element.
					Then, quick sort partitions the given array around the pivot by moving all elements smaller than the pivot before the pivot and all elements larger 
					than the pivot after the pivot. Finally, quick sort will recursively call itself on the smaller partition subarray and larger partition subarray.
				</div>
				<div className="subtitle-left">
					Code Implementation:
				</div>
				<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text-lg">
					{quickSort}
				</SyntaxHighlighter>
			</div>
		);
  	}
}

export default Quick;
