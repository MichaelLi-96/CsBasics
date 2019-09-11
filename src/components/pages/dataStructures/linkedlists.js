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
//or manually
intArray[0] = 1;
intArray[1] = 2;
intArray[2] = 3;
...
`
class Linkedlists extends Component {
  	render() {
		return(
			<div className="content">
				<div className="subtitle-center">
					LinkedLists
				</div>
				<div className="text-left"> 
					<FaStar className="starIcon"/>
					An LinkedList 

					To initialize an int array of size 10, you write:
					<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text">
						int[] newArray = new int[10];
					</SyntaxHighlighter>
					<br />
					Arrays like many other data structures can store any data type you want it to. For example, if you created an Apple class and wanted an array of 10 apple
					objects you could write:
					<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text">
						Apple[] appleArray = new Apple[10];
					</SyntaxHighlighter>
					<br />
					<mark>Remember, the starting index of all data structures is 0, not 1!</mark> To access or retrieve the 5th element of an int array,
					you would write int[4] and not int[5]. Arrays are initialized empty. To initialize an int array with values, you could write: 
					<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text">
						{initalizeArray}
					</SyntaxHighlighter>
					<br />
				</div>
			</div>
		);
  	}
}

export default Linkedlists;
