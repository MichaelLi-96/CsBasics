import React, { Component } from "react";
import { Row, Col, Table } from "react-bootstrap";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "../../assets/css/pages.css";
import bigO from "../../assets/images/bigO.jpeg";

const timeEx1 =
`// This method takes O(1) time because it takes one step to run regardless of the size of the input array
public int getArrayElement(int[] arr) {
	if(arr.length == 0) {
		return -1;
	}
	return arr[0];
}`

const timeEx2 =
`// This method takes O(log(n)) time because at every step, the input is divided in half
public void printNum(int n) {
	int start = 0;
	int end = n;
	while(start < end) {
		int mid = (start + end) / 2;
		System.out.println(mid);
		end = mid;
	}
}`

const timeEx3 =
`// This method takes O(n) time because it will always take n steps to run
public void printNums(int n) {
	for(int i = 0; i < n; i++) {
		System.out.println(n);
	}
}`

const timeEx4 =
`// This method takes O(n^2) time because we are looping through the array of n length n times
public void printNums(int[] arr) {
	for(int i = 0; i < arr.length; i++) {
		for(int j = 0; j < arr.length; j++) {
			System.out.println(arr[j]);
		}
	}
}`

const spaceEx1 =
`// This method takes O(1) space because no new variables are created regardless of the size of n
public void printNum(int n) {
	System.out.println(n);
}`

const spaceEx2 =
`// This method takes O(n^2) space because we are creating and allocating space for a new n x n matrix 
public int[][] createMatrix(int n) {
	int[][] myMatrix = new int[n][n];
	return myMatrix;
}`

class Searching extends Component {
	componentDidMount() {
	  window.scrollTo(0, 0);
	}

	componentDidUpdate() {
		window.scrollTo(0, 0);
	}
	
  	render() {
    	return(
	    	<div className="flex-container">
				<div className="title">Big-O Notation</div>
				<div className="text-center">
					Big-O notation is used to describe the <mark>worst case time and space complexity</mark> of an algorithm. This means we are viewing the amount of 
					time an algorithm takes to run and how much space an algorithm uses in memory relative to our input. Generally, the trade off for a more time 
					efficient algorithm is more space usage and vice versa, a more space efficient algorithm usually takes more time to run.
				</div>
				<div className="content">
				<div className="subtitle-left">Big-O Complexity Chart</div>
					<Row>
						<Col sm={2} />
						<Col sm={8}>
							<img src={bigO} alt="Big-O Complexity Chart" className="image" />
						</Col>
						<Col sm={2} />
					</Row>
					<div className="subtitle-left">Big-O Complexities</div>
					<div className="text-left">
						Big-O complexities allows us to express an algorithms runtime as a function of n. We usually call our input n. However, n could be the actual 
						input or the size of the input. We measure an algorithms runtime in terms of how quickly the runtime grows relative to n, as n gets infinitely 
						larger. 
					</div>
					<Row>
						<Col sm={2} />
						<Col sm={8} className="table-center-no-margin">
							<Table striped bordered variant="dark">
							<thead>
								<tr>
									<th>Notation</th>
									<th>Name</th>
									<th>Example</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>O(1)</td>
									<td>Constant</td>
									<td>Array element lookup</td>
								</tr>
								<tr>
									<td>O(log(n))</td>
									<td>Logarithmic</td>
									<td>Binary Search</td>
								</tr>
								<tr>
									<td>O(n)</td>
									<td>Linear</td>
									<td>Traversal of an array (for loop)</td>
								</tr>
								<tr>
									<td>O(n*log(n))</td>
									<td>Linearithmic</td>
									<td>MergeSort, QuickSort</td>
								</tr>
								<tr>
									<td>O(N^2)</td>
									<td>Quadratic</td>
									<td>Traversal of the entire array for each array element (nested for loop)</td>
								</tr>
								<tr>
									<td>O(n!)</td>
									<td>Factorial</td>
									<td>Permutations</td>
								</tr>
							</tbody>
						</Table>
						</Col>
						<Col sm={2} />
					</Row>
					<div className="subsubtitle-left">Examples:</div>
					<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text">
						{timeEx1}
					</SyntaxHighlighter>
					<br />
					<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text">
						{timeEx2}
					</SyntaxHighlighter>
					<br />
					<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text">
						{timeEx3}
					</SyntaxHighlighter>
					<br />
					<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text">
						{timeEx4}
					</SyntaxHighlighter>
					<br />
					<div className="subtitle-left">Drop the Constants and Less Significant Terms!</div>
					<div className="text-left">
						As an algorithms input n grows infinitely larger, the impact of constants and less significant terms in an algorithms runtime become less and 
						less meaningful to the overall runtime. Thus, the big-o complexity of an algorithm is displayed as the most significant term without constants.
					</div>
					<div className="subsubtitle-left">Examples:</div>
					<div className="text-left">
						<ul>
							<li>O(50n) =&gt; O(<strike>50</strike>n) =&gt; <b>O(n)</b></li>
							<li>O(30n + 30n + 30n) =&gt; O(<strike>30</strike>n + <strike>30</strike>n + <strike>30</strike>n) =&gt; O(n + n + n) =&gt; O(3n) =&gt; O(<strike>3</strike>n) =&gt; <b>O(n)</b></li>
							<li>O(n/2 + 100) =&gt; O(n<strike>/2</strike> + 100) =&gt; O(n + 100) =&gt; O(n + <strike>100</strike>) =&gt; <b>O(n)</b></li>
							<li>O(20n^3 + 10n^2 + 500n) =&gt; O(<strike>20</strike>n^3 + <strike>10</strike>n^2 + <strike>500</strike>n) =&gt; 
							O(n^3 + n^2 + n) =&gt; O(n^3 + <strike>n^2</strike> + <strike>n</strike>) =&gt; <b>O(n^3)</b></li>
							<li>O((7n/6) * (7n/3)) =&gt; O((<strike>7</strike>n<strike>/6</strike>) * (<strike>7</strike>n/<strike>3</strike>)) =&gt; O(n * n) =&gt; <b>O(n^2)</b></li>
							<li>O(14log(n) + 250) =&gt; O(<strike>14</strike>log(n) + 250)  =&gt; O(log(n) + 250)  =&gt; O(log(n) + <strike>250</strike>) =&gt; <b>O(log(n))</b></li>
						</ul>
					</div>
					<div className="subtitle-left">Space Complexity</div>
					<div className="text-left">
						When we talk about space complexity, we are looking at the total space of newly created variables we are allocating in the algorithm relative to our
						input. The space complexity of an algorithm does not include the space taken by the input, only additional space.
					</div>
					<div className="subsubtitle-left">Examples:</div>
					<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text">
						{spaceEx1}
					</SyntaxHighlighter>
					<br />
					<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text">
						{spaceEx2}
					</SyntaxHighlighter>
					<br />
				</div>
			</div>
	    );
  	}
}

export default Searching;