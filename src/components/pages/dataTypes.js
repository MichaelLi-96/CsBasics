import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import "../../assets/pages.css";
import "../../assets/dataTypes.css"

class DataTypes extends Component {
  	render() {
	    return(
		    <div className="flex-container">
				<div className="title">Data Types</div>
				<div className="text-center">
					Any variable you create must be assigned to a data type. Data types can be divided into two groups, primitive and non-primitive.
				</div>
				<div className="content">
					<div className="subtitle">Primitive Data Types</div>
					<div className="text-left">
						Primitive data types are predefined by Java and there are eight different primitive data types. They consist of <code>byte</code>, 
						&nbsp;<code>short</code>, <code>int</code>, <code>long</code>, <code>float</code>, <code>double</code>, <code>boolean</code>, 
						and <code>char</code>. Six of the primitive data types are number types, four integer types and 2 floating point types. The integer types 
						&nbsp;<code>byte</code>, <code>short</code>, <code>int</code>, and <code>long</code> store whole numbers not containing decimals 
						whereas the floating point types <code>float</code> and <code>double</code> store numbers with a fractional part containing decimals. 
						<mark>The main difference between these number types is the range of numbers they can represent.</mark>
						The <code>boolean</code> data type can only take in the values <code>true</code> and <code>false</code>. The <code>char</code> data 
						type is used to store a single character, surrounded by single quotes.
					</div>
					<div className="table-center"> 
						<Table striped bordered hover>
							<thead>
								<tr>
									<th>Primitive Data Type</th>
									<th>Size</th>
									<th>Range</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>byte</td>
									<td>1 byte</td>
									<td>-128 to 127</td>
								</tr>
								<tr>
									<td>short</td>
									<td>2 bytes</td>
									<td>-32,768 to 32,767</td>
								</tr>
								<tr>
									<td>int</td>
									<td>4 bytes</td>
									<td>-2,147,483,648 to 2,147,483,647</td>
								</tr>
								<tr>
									<td>long</td>
									<td>8 bytes</td>
									<td>-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807</td>
								</tr>
								<tr>
									<td>float</td>
									<td>4 bytes</td>
									<td>−3.40282347e38 to 3.40282347e38, up to 6-7 decimal digits</td>
								</tr>
								<tr>
									<td>double</td>
									<td>8 bytes</td>
									<td>4.94065645841246544e-324 to 1.79769313486231570e+308, up to 15-16 decimal digits</td>
								</tr>
								<tr>
									<td>boolean</td>
									<td>1 bit</td>
									<td>true or false values</td>
								</tr>
								<tr>
									<td>char</td>
									<td>2 bytes</td>
									<td>single character/letter or ASCII values</td>
								</tr>
							</tbody>
						</Table>
					</div>
					<div className="subtitle">Non-Primitive Data Types</div>
					<div className="text-left">
						Non-primitive data types refer to objects that the programmer creates and are not predefined by Java. They are used to call 
						methods from the class the object is derived from. Non-primitive data types can be null. Some examples of non-primitive data
						types are strings, arrays, and classes.
					</div>
					<div className="text-left">
						Examples:<br/>
						<code>String mystring = new String("Learning cs is fun!");</code><br/>
						<code>int[] numberArray = new int[10];</code><br/>
						<code>MyClass myObject = new MyClass();</code>
					</div>
					<div className="text-left">
						In this case, the objects named myString, numberArrray, and myObject are non-primitive types.
					</div>
				</div>
			</div>
		);
  	}
}

export default DataTypes;