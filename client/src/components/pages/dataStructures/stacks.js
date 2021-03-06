import React, { Component } from "react";
import { Row } from "react-bootstrap";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaStar } from "react-icons/fa";
import "../../../assets/css/pages.css";
import "../../../assets/css/dataStructures.css";

const initalizeStack =
`Stack<Integer> myStack = new Stack<>();`

const stackExample =
`import java.util.*;

public class StackExample {
	// The main function where we run our code
    public static void main(String[] args) {
        // Creating an Stack of Integers named myStack
        Stack<Integer> myStack = new Stack<>();

        // Adding new elements to the top of the stack
        // Adding to a stack is also called pushing to a stack
        myStack.push(56);
        myStack.push(75);
        myStack.push(21);
        myStack.push(40);

        // Removing the top most or most recent element of the stack
        // Removing from a stack is also called popping from a stack
        // myStack is now [56, 75, 21]
        myStack.pop();

        // myStack is now [56, 75]
        myStack.pop();
    }
}`

class Stacks extends Component {
  	render() {
		return(
			<div className="content">
				<div className="subtitle-center">
					Stacks
				</div>
				<div className="text-left"> 
					<FaStar className="starIcon"/>
					A stack is a data structure that follows the <mark>Last In First Out(LIFO) order</mark>. This means that the most recent element that was added into the stack
					will be the first one to be retrieved out. Insertion and deletion of an element happens on the same end. A real world example of a stack would 
					be a stack of plates. When you add a plate, you would stack it on the top most plate. When you remove a plate, you would take the top most 
					plate off the stack.<br />
					<br />
					To initialize a stack of Integers, you would write:
					<Row>
						<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text-lg">
							{initalizeStack}
						</SyntaxHighlighter>
					</Row>
					<br />
					Stacks already have built in methods to do common functions which can be 
					found <a href="https://docs.oracle.com/javase/8/docs/api/java/util/Stack.html" target="_blank" rel='noreferrer noopener'>here</a>.
					Below is a basic example on how to add and remove stack elements:  
					<Row>
						<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text-lg">
							{stackExample}
						</SyntaxHighlighter>
					</Row>
				</div>
			</div>
		);
  	}
}

export default Stacks;
