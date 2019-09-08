import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaStar } from "react-icons/fa";
import "../../../assets/css/pages.css";
import "../../../assets/css/dataStructures.css";

const initalizeArray =
`int[] intArray = new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9};
	//or
int[] intArray = {1, 2, 3, 4, 5, 6, 7, 8, 9};
`
class Arrays extends Component {
  	render() {
		return(
			<div className="content">
				<div className="subtitle-center">
					Arrays and ArrayLists
				</div>
				<div className="text-left"> 
					<FaStar className="starIcon"/>
					An array is a data structure that can store a <mark>fixed-size</mark> collection of elements with the same data type.
					An array is used to store a collection of data, but it is often more useful to think of an array as a collection of 
					variables of the same type. To initialize an int array of size 10, you write:
					<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text">
						int[] newArray = new int[10];
					</SyntaxHighlighter>
					<br />
					Arrays can store any data you want it to. For example, if you created an Apple class and wanted an array of 10 apple
					objects you can write:
					<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text">
						Apple[] appleArray = new Apple[10];
					</SyntaxHighlighter>
					<br />
					<mark>Remember, the starting index of all data structures is 0, not 1!</mark> To retrieve the 5th element of an int array,
					you would write int[4] and not int[5]. Arrays are initialized empty. To initialize an array with values, you can write: 
					<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text">
						{initalizeArray}
					</SyntaxHighlighter>
				</div>
			</div>
		);
  	}
}

export default Arrays;
