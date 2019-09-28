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

const bubbleSort = 
`public static void bubbleSort(int[] arr) { 
	for (int i = 0; i < arr.length-1; i++) {
		// Iterating through the array
		for (int j = 0; j < arr.length-i-1; j++) 
			// If the adjacent elements are not in order, swap them
			if (arr[j] > arr[j+1]) { 
				int temp = arr[j]; 
				arr[j] = arr[j+1]; 
				arr[j+1] = temp; 
		}
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


class Bubble extends Component {
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
				{ this.state.sortType === "BubbleSort" ?
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
						<li>Average Case: O(n^2)</li>
						<li>Best Case: O(n)</li>
					</ul>
				</div>
				<div className="subtitle-left">
					Space Complexity: O(1)
				</div>
				<div className="subtitle-left">
					Description:
				</div>
				<div className="text-left">
					The bubble sort algorithm sorts an array or list by repeatedly swapping adjacent elements if the two elements are in the wrong order. We will iterate
					through the whole array n times where n will be the length of the array. After each iteration, we can see that the element in the 
					(length of the array - current number of iterations)th index will be in sorted order.  
				</div>
				<div className="subtitle-left">
					Code Implementation:
				</div>
				<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text-lg">
					{bubbleSort}
				</SyntaxHighlighter>
			</div>
		);
  	}
}

export default Bubble;
