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
import "../../../assets/css/sorting.css";

const selectionSort =
`public static void selectionSort(int[] arr){  
	// Iterating through the array
	for (int i = 0; i < arr.length - 1; i++) {  
		// Finding the minimum value element
		int minValueIndex = i;  
		for (int j = i + 1; j < arr.length; j++) {  
			if (arr[j] < arr[minValueIndex]){  
				minValueIndex = j;
			}  
		}  

		// Swap the minimum value element with the first unsorted element
		int temp = arr[minValueIndex];   
		arr[minValueIndex] = arr[i];  
		arr[i] = temp;  
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

class Selection extends Component {

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
				{ this.state.sortType === "SelectionSort" ?
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
						<li>Best Case: O(n^2)</li>
					</ul>
				</div>
				<div className="subtitle-left">
					Space Complexity: O(1)
				</div>
				<div className="subtitle-left">
					Description:
				</div>
				<div className="text-left">
					The selection sort algorithm sorts an array or list by repeatedly finding the minimum value element and swapping it with the 
					first unsorted element. This algorithm maintains sorted and unsorted subsection. In each iteration of the selection sort, the minimum
					value element from the unsorted subsection is moved the the end of the sorted subsection.
				</div>
				<div className="subtitle-left">
					Code Implementation:
				</div>
				<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text-lg">
					{selectionSort}
				</SyntaxHighlighter>
			</div>
		);
  	}
}

export default Selection;
