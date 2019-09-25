import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "../../../assets/css/pages.css";
import "../../../assets/css/dataStructures.css";

const mergeSort =
`public static void mergeSort(int arr[], int left, int right) { 
	if (left < right) { 
		// Find the middle point 
		int mid = (left + right) / 2; 

		// Sort left and right halves 
		mergeSort(arr, left, mid); 
		mergeSort(arr , mid + 1, right); 

		// Merge the sorted halves 
		merge(arr, left, mid, right); 
	} 
}

// Merge the left and right subarrays of arr[]
// Left subarray is arr[left...mid] 
// Right subarray is arr[mid + 1...right] 
public static void merge(int arr[], int left, int mid, int right) { 
	// Find sizes of two subarrays to be merged 
	int leftSubarrayLength = mid - left + 1; 
	int rightSubarrayLength = right - mid; 

	// Create temp arrays
	int leftSubarray[] = new int[leftSubarrayLength]; 
	int rightSubarray[] = new int[rightSubarrayLength]; 

	// Copy data into temp arrays
	for (int i = 0; i < leftSubarrayLength; i++) {
		leftSubarray[i] = arr[left + i]; 
	}
	for (int i = 0; i < rightSubarrayLength; i++) {
		rightSubarray[i] = arr[mid + 1 + i]; 
	}

	// Initial indexes of left and right subarrays 
	int leftPointer = 0; 
	int rightPointer = 0; 

	// Initial index of merged subarray in the input array arr
	int arrIndex = left; 

	// Merge the temp arrays
	while (leftPointer < leftSubarrayLength && rightPointer < rightSubarrayLength) { 
		if (leftSubarray[leftPointer] <= rightSubarray[rightPointer]) { 
			arr[arrIndex] = leftSubarray[leftPointer]; 
			leftPointer++; 
		} 
		else { 
			arr[arrIndex] = rightSubarray[rightPointer]; 
			rightPointer++; 
		} 
		arrIndex++; 
	} 

	// Copy remaining elements of leftSubarray[] if any
	while (leftPointer < leftSubarrayLength) { 
		arr[arrIndex] = leftSubarray[leftPointer]; 
		leftPointer++; 
		arrIndex++; 
	} 

	// Copy remaining elements of rightSubarray[] if any
	while (rightPointer < rightSubarrayLength) { 
		arr[arrIndex] = rightSubarray[rightPointer]; 
		rightPointer++; 
		arrIndex++; 
	} 
}`

class Merge extends Component {
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
					Space Complexity: O(n)
				</div>
				<div className="subtitle-left">
					Description:
				</div>
				<div className="text-left">
					The merge sort algorithm is a divide and conquer algorithm that sorts arrays and lists. Esssentially, merge sort divides input array in two halves, 
					calls itself for the two halves, and then merges the two sorted halves. Merge sort first recursively divides the input array in half into left and right 
					subsections. This will continue until there is only one element per subsection. After reaching one element per subsection, the algorithm starts traveling back 
					up the recursion, merging the left and right subsections. To merge left and right subsections, merge sort will start at the beginning of each subsection. 
					The smaller value element is chosen and inserted into a new array of size n where n is the length of the left subsection + length of the right subsection.
					This process continues until all the elements of the left and right subsections have been traversed through and the new array is full.
				</div>
				<div className="subtitle-left">
					Code Implementation:
				</div>
				<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text">
					{mergeSort}
				</SyntaxHighlighter>
			</div>
		);
  	}
}

export default Merge;
