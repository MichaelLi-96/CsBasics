import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaStar } from "react-icons/fa";
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

class Insertion extends Component {
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
					The insertion sort algorithm sorts an array or list by maintaining a sorted and unsorted subsection. As we iterate through an array or list, 
					the current element is moved from the unsorted subsection into the sorted subsection. We then iterate through the sorted subsection starting from 
					the end until we find the position where the current element will be ordered. We push greater value elements by one index to make room at the same time. 
					Insertion sort is similar to the way where we sort playing cards in our hands.
				</div>
				<div className="subtitle-left">
					Code Implementation:
				</div>
				<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text">
					{insertionSort}
				</SyntaxHighlighter>
			</div>
		);
  	}
}

export default Insertion;
