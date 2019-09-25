import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";
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

class Bubble extends Component {
  	render() {
		return(
<div className="content">
				<div className="subtitle-left">
					Visualizer:
				</div>
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
				<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text">
					{bubbleSort}
				</SyntaxHighlighter>
			</div>
		);
  	}
}

export default Bubble;
