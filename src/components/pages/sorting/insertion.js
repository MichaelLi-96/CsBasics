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

const insertionSort = 
`public static void insertionSort(int[] arr){  
	// Iterating through the array
	for (int i = 1; i < arr.length; i++) { 
        int currentElementVal = arr[i]; 
        int j = i - 1; 

        // Pushing greater value elements than the current element value by one index
        while (j >= 0 && arr[j] > currentElementVal) { 
            arr[j + 1] = arr[j]; 
            j = j - 1; 
        } 
        arr[j + 1] = currentElementVal; 
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

class Insertion extends Component {
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
				{ this.state.sortType === "Insertion Sort" ?
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
					The insertion sort algorithm sorts an array or list by maintaining a sorted and unsorted subsection. As we iterate through an array or list, 
					the current element we are on is moved from the unsorted subsection into the sorted subsection. We then iterate through the sorted subsection starting from 
					the end until we find the position where the current element will be ordered. We also push greater value elements by one index to make room at the same time. 
					Insertion sort is similar to the way where we sort playing cards in our hands.
				</div>
				<div className="subtitle-left">
					Code Implementation:
				</div>
				<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text-lg">
					{insertionSort}
				</SyntaxHighlighter>
			</div>
		);
  	}
}

export default Insertion;
