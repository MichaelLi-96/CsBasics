import React, { Component } from "react";
import { Row } from "react-bootstrap";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaStar } from "react-icons/fa";
import "../../../assets/css/pages.css";
import "../../../assets/css/dataStructures.css";

const initalizeMinHeap = 
`PriorityQueue<Integer> minHeap = new PriorityQueue<>();`

const initalizeMaxHeap = 
`PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
// or use a lamba expression
PriorityQueue<Integer> maxHeap = new PriorityQueue<>((x, y) -> y - x);`

const priorityQueueExample =
`import java.util.*;

public class minHeapExample {
	// The main function where we run our code
    public static void main(String[] args) {
        // Creating min-heap of Integers using a PriorityQueue
         PriorityQueue<Integer> minHeap = new PriorityQueue<>();

        // Adding elements into the min-heap
        minHeap.add(55);
        minHeap.add(30);
        minHeap.add(25);
        minHeap.add(40);

        // Retrieving the root node of the min-heap, the smallest value element
        // minElement will be 25
        int minElement = PriorityQueue.peek();

        // Removing the root node of the min-heap, the smallest value element
        // Removing from a PriorityQueue is also called polling from a PriorityQueue
        minHeap.poll();
        // minElement is now 30
        minElement = minHeap.poll();
    }
}`

class Heaps extends Component {
  	render() {
		return(
			<div className="content">
				<div className="subtitle-center">
					Heaps
				</div>
				<div className="text-left"> 
					<FaStar className="starIcon"/>
					A heap is a data structure that is based upon the structure of a <mark>complete binary tree</mark>. In a complete binary tree, all the levels of the
					tree are filled except for the last level where all the nodes are left aligned. Heaps can generally be split into two categories, min-heap and max-heap.
					In Java, heaps are implemented using the PriorityQueue class.<br />
					<br />
					<div className="subsubtitle-left">Min-Heap</div>
					In a min-heap, a nodes value is less than or equal to all the values of its children nodes. This means that the root node contains the smallest value
					of the entire tree. By default, a min-heap is implemented by a PriorityQueue. To initialize a min-heap of Integers, you would write: 
					<Row>
						<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text-lg">
							{initalizeMinHeap}
						</SyntaxHighlighter>
					</Row>
					<br />
					<div className="subsubtitle-left">Max-Heap</div>
					In a max-heap, a nodes value is greater than or equal to all the values of its children nodes. This means that the root node contains the largest value
					of the entire tree. Since a PriorityQueue implements a min-heap by default, we need to reverse the order of the heap to transform it to a max-heap.
					To initialize a max-heap of Integers, you would write: 
					<Row>
						<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text-lg">
							{initalizeMaxHeap}
						</SyntaxHighlighter>
					</Row>
					<br />
					PriorityQueues already have built in methods to do common functions which can be 
					found <a href="https://docs.oracle.com/javase/8/docs/api/java/util/PriorityQueue.html" target="_blank" rel='noreferrer noopener'>here</a>.
					Below is a basic example on how to add, retrieve, remove elements in a min-heap using a PriorityQueue:<br />
					<Row>
						<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text-lg">
							{priorityQueueExample}
						</SyntaxHighlighter>
					</Row>
					<br />
					<div className="subsubtitle-left">Mapping Heap Elements to an Array</div>
					Even though a heap is represented as a complete binary tree, it can be implemented using an array. In this case, each node of a heap tree can be
					mapped to an array element. For an array element with index i,
					<br />
					<ul>
						<li>its parent is at index <b>( i - 1 ) / 2</b></li> 
						<li>its left child is at index <b>( 2 * i ) + 1</b></li> 
						<li>its right child is at index <b>( 2 * i ) + 2</b></li> 
					</ul>
				</div>
			</div>
		);
  	}
}

export default Heaps;
