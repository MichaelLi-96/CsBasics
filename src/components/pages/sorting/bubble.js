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
	for (int i = 0; i < arr.length - 1; i++) {
		// Iterating through the array
		for (int j = 0; j < arr.length - i - 1; j++) {
			// If the adjacent elements are not in order, swap them
			if (arr[j] > arr[j + 1]) { 
				int temp = arr[j]; 
				arr[j] = arr[j + 1]; 
				arr[j + 1] = temp; 
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
				{ this.state.sortType === "Bubble Sort" ?
					<Row>
						<Col sm={8} className="colContainer">
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
							<Row className="rowContainer-left, subsubtitle-left">Array Size</Row>
							<Row className="rowContainer-center">
								<Col sm={10} xs={10} className="colContainer">
									<Slider min={10} max={100} defaultValue={20} handle={handle} onChange={value=>this.setState({arraySize: value, constructNewArray: true, startSort: false})} />
								</Col>
								<Col sm={2} xs={2} className="colContainer, valueText">
									{this.state.arraySize}
								</Col>
							</Row>
							<Row className="rowContainer-left, subsubtitle-left">Delay in Milliseconds</Row>
							<Row className="rowContainer-center">
								<Col sm={10} xs={10} className="colContainer">
									<Slider min={0} max={1000} defaultValue={100} handle={handle} onChange={value=>this.setState({delay: value, constructNewArray: false})}   />
								</Col>
								<Col sm={2} xs={2} className="colContainer, valueText">
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
					(length of the array - current number of iterations)th index will be placed in sorted order.  
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
