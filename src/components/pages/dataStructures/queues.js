import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaStar } from "react-icons/fa";
import "../../../assets/css/pages.css";
import "../../../assets/css/dataStructures.css";

const initalizeQueue =
`Queue<Integer> myQueue = new LinkedList<>();
`

const queueExample =
`import java.util.*;

public class QueueExample {
	// The main function where we run our code
    public static void main(String[] args) {
        // Creating an Queue of Integers using a LinkedList named myQueue
        Queue<Integer> myQueue = new LinkedList<>();

        // Adding new elements into the queue
        myQueue.add(76);
        myQueue.add(48);
        myQueue.add(10);
        myQueue.add(32);

        // Removing the front most or least recent element of the queue
        // Removing from a queue is also called polling from a queue
        // myQueue is now [48, 10, 32]
        myQueue.poll();

        // myQueue is now [10, 32]
        myQueue.poll();
    }
}`

class Queues extends Component {
  	render() {
		return(
			<div className="content">
				<div className="subtitle-center">
					Queues
				</div>
				<div className="text-left"> 
					<FaStar className="starIcon"/>
					A queue is a data structure that follows the <mark>First In First Out(FIFO) order</mark>. This means that the least recent element that was added into 
					the queue will be the first one to be retrieved out. Insertion of an element happens on one end and deletion of an element happens on the other end. 
					A real world example of a queue would be a line of people waiting to purchase items. The person at the front of the line would be served and removed
					first while a new person who arrived to pay would be added to the back of the line. 
					<br />
					<br />				
					Being an interface, a queue is abstract and does not have its own concrete class for declaration. The most commonly used is the LinkedList 
					implementation of a queue. To initialize a queue of Integers, you would write:
					<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text">
						{initalizeQueue}
					</SyntaxHighlighter>
					<br />
					Queues already have built in methods to do common functions which can be 
					found <a href="https://docs.oracle.com/javase/7/docs/api/java/util/Queue.html" target="_blank" rel='noreferrer noopener'>here</a>.
					Below is a basic example on how to add and remove queue elements:  
					<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text">
						{queueExample}
					</SyntaxHighlighter>
				</div>
			</div>
		);
  	}
}

export default Queues;
