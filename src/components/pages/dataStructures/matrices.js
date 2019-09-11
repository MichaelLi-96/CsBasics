import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Table from "react-bootstrap/Table";
import { FaStar } from "react-icons/fa";
import "../../../assets/css/pages.css";
import "../../../assets/css/dataStructures.css";

const initalizeMatrix =
`int[][] myMatrix = new int[4][6];
// or manually with predetermined values
int[][] myMatrix = {
{0, 1, 2, 3, 4, 5, 6},
{0, 1, 2, 3, 4, 5, 6},
{0, 1, 2, 3, 4, 5, 6},
{0, 1, 2, 3, 4, 5, 6}
};
`
class Matrices extends Component {
  	render() {
		return(
			<div className="content">
				<div className="subtitle-center">
					Matrices
				</div>
				<div className="text-left"> 
					<FaStar className="starIcon"/>
					Matrices or multidimensional arrays can be defined as an <mark>array of arrays</mark>. The most commonly used matrix is a 2-dimensional array that is used to 
					represent a table with rows and columns. Each cell in a 2-dimensional array or &quot;table&quot; must have the same data type.
					<br />
					<br />
					When you construct a matrix, you have to specify that the array has more than one dimension by adding more than one size parameter in brackets.
					To initialize a 2-dimensional array with 4 rows and 6 columns, you would write:
					<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text">
						{initalizeMatrix}
					</SyntaxHighlighter>
					<br />
					Similarly to arrays, indexes are required to access a specific element from a 2-dimensional array. To retrieve the element in the row 2 
					and column 4, you would write:
					<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text">
						int number = myTwoDimArray[2][4];
					</SyntaxHighlighter>
					<br />
					The table below shows how you would retrieve elements from a 4 rows x 5 columns 2-dimensional array named nums:
					<div className="table-center"> 
						<Table striped bordered variant="dark" >
							<tbody>
								<tr>
									<td />
									<td id="table-title">Col 1</td>
									<td id="table-title">Col 2</td>
									<td id="table-title">Col 3</td>
									<td id="table-title">Col 4</td>
									<td id="table-title">Col 5</td>
								</tr>
								<tr>
									<td id="table-title">Row 1</td>
									<td>nums[0][0]</td>
									<td>nums[0][1]</td>
									<td>nums[0][2]</td>
									<td>nums[0][3]</td>
									<td>nums[0][4]</td>
								</tr>
								<tr>
									<td id="table-title">Row 2</td>
									<td>nums[1][0]</td>
									<td>nums[1][1]</td>
									<td>nums[1][2]</td>
									<td>nums[1][3]7</td>
									<td>nums[1][4]</td>
								</tr>
								<tr>
									<td id="table-title">Row 3</td>
									<td>nums[2][0]</td>
									<td>nums[2][1]</td>
									<td>nums[2][2]</td>
									<td>nums[2][3]</td>
									<td>nums[2][4]</td>
								</tr>
								<tr>
									<td id="table-title">Row 4</td>
									<td>nums[3][0]</td>
									<td>nums[3][1]</td>
									<td>nums[3][2]</td>
									<td>nums[3][3]</td>
									<td>nums[3][4]</td>
								</tr>
							</tbody>
						</Table>
					</div>

					
				</div>
			</div>
		);
  	}
}

export default Matrices;
