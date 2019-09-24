import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "../../../assets/css/pages.css";
import "../../../assets/css/dataStructures.css";

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

class Selection extends Component {
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
				<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text">
					{selectionSort}
				</SyntaxHighlighter>
			</div>
		);
  	}
}

export default Selection;
