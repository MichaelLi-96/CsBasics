import React, { Component } from "react";
import { Row } from "react-bootstrap";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Table from "react-bootstrap/Table";
import { FaStar } from "react-icons/fa";
import "../../../assets/css/pages.css";
import "../../../assets/css/dataStructures.css";

const initalizeArray =
`int[] intArray = new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9};
// or
int[] intArray = {1, 2, 3, 4, 5, 6, 7, 8, 9};
// or manually at each index
intArray[0] = 1;
intArray[1] = 2;
intArray[2] = 3;
// ...
`
class Arrays extends Component {
  	render() {
		return(
			<div className="content">
				<div className="subtitle-center">
					Arrays
				</div>
				<div className="text-left"> 
					<FaStar className="starIcon"/>
					An array is a data structure that can store a <mark>fixed-size</mark> collection of elements with the same data type.
					An array is used to store a collection of data, but it is often more useful to think of an array as a collection of 
					variables of the same type. Below is an int Array of size of 9.
					<div className="table-center-margin"> 
						<Table striped bordered variant="dark" >
							<tbody>
								<tr>
									<td colSpan="2" id="table-title">Values:</td>
									<td>66</td>
									<td>71</td>
									<td>13</td>
									<td>87</td>
									<td>35</td>
									<td>22</td>
									<td>92</td>
									<td>28</td>
									<td>54</td>
								</tr>
								<tr>
									<td colSpan="2"  id="table-title">Indexes:</td>
									<td>0</td>
									<td>1</td>
									<td>2</td>
									<td>3</td>
									<td>4</td>
									<td>5</td>
									<td>6</td>
									<td>7</td>
									<td>8</td>
								</tr>
							</tbody>
						</Table>
					</div>
					To initialize an int Array of size 10, you write:
					<Row>
						<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text-lg">
							int[] newArray = new int[10];
						</SyntaxHighlighter>
					</Row>
					<br />
					Arrays like many other data structures can store any data type you want it to. For example, if you created an Apple class and wanted an array of 10 apple
					objects you could write:
					<Row>
						<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text-lg">
							Apple[] appleArray = new Apple[10];
						</SyntaxHighlighter>
					</Row>
					<br />
					<mark>Remember, the starting index of all data structures is 0, not 1!</mark> To access or retrieve the 5th element of an int Array,
					you would write int[4] and not int[5]. Arrays are initialized empty. To initialize an int Array with values, you could write: 
					<Row>
						<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text-lg">
							{initalizeArray}
						</SyntaxHighlighter>
					</Row>
				</div>
			</div>
		);
  	}
}

export default Arrays;
