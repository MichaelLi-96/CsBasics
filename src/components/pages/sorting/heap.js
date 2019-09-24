import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaStar } from "react-icons/fa";
import "../../../assets/css/pages.css";
import "../../../assets/css/dataStructures.css";

const heapSort =
`public static void heapSort(int arr[]) { 
	// Build heap (rearrange array) 
	for (int i = arr.length / 2 - 1; i >= 0; i--) {
		heapify(arr, arr.length, i); 
	}

	// One by one extract an element from heap 
	for (int i= arr.length-1; i>=0; i--) { 
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
} `

class Heap extends Component {
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
					element of the heap is moved to the root node and is then bubbled down (heapified) to the right position to maintain the max heap property.
				</div>
				<div className="subtitle-left">
					Code Implementation:
				</div>
				<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text">
					{heapSort}
				</SyntaxHighlighter>
			</div>
		);
  	}
}

export default Heap;
