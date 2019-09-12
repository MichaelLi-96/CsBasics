import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaStar } from "react-icons/fa";
import "../../../assets/css/pages.css";
import "../../../assets/css/dataStructures.css";

const initalizeLinkedList =
`LinkedList<Integer> myLinkedList = new LinkedList<>();`

const LinkedlistExample =
`import java.util.*;

public class LinkedListExample {
	// The main function where we run our code
    public static void main(String[] args) {
        // Creating an LinkedList of Strings named LinkedList
        LinkedList<String> myLinkedList = new LinkedList<String>(); 

        // Adding elements after the tail node 
        myLinkedList.add("D"); // ["D"]
        myLinkedList.add("G"); // ["D", "G"]
        myLinkedList.add("M");  // ["D", "G", "M"]
        myLinkedList.addLast("Z"); // ["D", "G", "M", "Z"]
        // Adding elements before the head node
        myLinkedList.addFirst("A"); // ["A", "D", "G", "M", "Z"]
        // Adding elements at index 2
        myLinkedList.add(2, "E"); // ["A", "D", "E", "G", "M", "Z"]

        // myLinkedList is now: ["A", "D", "E", "G", "M", "Z"]  

        // Removing the element with value "G"
        myLinkedList.remove("G"); // ["A", "D", "E", "M", "Z"]
        // Removing the element at index 2
        myLinkedList.remove(2); // ["A", "D", "M", "Z"]
        // Removing the head node
        myLinkedList.removeFirst(); // ["D", "M", "Z"]
        // Removing the tail node
        myLinkedList.removeLast();  // ["D", "M"]

        // myLinkedList is now: ["D", "M"]
    }
}`

class Linkedlists extends Component {
  	render() {
		return(
			<div className="content">
				<div className="subtitle-center">
					LinkedLists
				</div>
				<div className="text-left"> 
					<FaStar className="starIcon"/>
					A LinkedList stores elements as a <mark>sequence of nodes</mark>. A node object stores element data as well as a reference to the next and/or 
					previous node. Each node is linked together using pointers and addresses. The strengths of using a LinkedList is that insertion and deletions of
					nodes are easy as we can just keep track of the head(first) and tail(last) nodes. The weaknesses of using a LinkedList is that trying to find a specific 
					node which contains the data you are searching for requires you to start from the head node and iterate through the link until you find it.<br />
					<br />
					To initialize a LinkedList of Integers, you write:
					<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text">
						{initalizeLinkedList}
					</SyntaxHighlighter>
					<br />
					A LinkedList can be a <mark>singly</mark> LinkedList or a <mark>doubly</mark> LinkedList. In a singly LinkedList, a node only has one pointer to the next node. In
					a doubly LinkedList, a node has both a pointer to the next node and its previous node. <br />

					<br />
					LinkedLists already have built in methods to do common functions which can be 
					found <a href="https://docs.oracle.com/javase/8/docs/api/java/util/LinkedList.html" target="_blank" rel='noreferrer noopener'>here</a>.
					Below is a basic example on how to add and remove LinkedList elements:  
					<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text">
						{LinkedlistExample}
					</SyntaxHighlighter>
				</div>
			</div>
		);
  	}
}

export default Linkedlists;
