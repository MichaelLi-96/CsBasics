import React, { Component } from "react";
import "../../assets/pages.css";

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
						and <code>char</code>. Six of the primitive data types are number types, four integer types and 2 floating point types. Integer types 
						&nbsp;<code>byte</code>, <code>short</code>, <code>int</code>, and <code>long</code> store whole numbers not containing decimals 
						whereas floating point types <code>float</code> and <code>double</code> store numbers with a fractional part containing decimals. 
						<mark>The main difference between these number types is the range of numbers they can represent.</mark>
						The <code>boolean</code> data type can only take in the values <code>true</code> and <code>false</code>. The <code>char</code> data 
						type is used to store a single character, surrounded by single quotes.
					</div>

					<div className="subtitle">Non-Primitive Data Types</div>
					<div className="text-left">
						Non-primitive data types refer to objects that the programmer creates and are not predefined by Java. They are used to call 
						methods from the class the object is derived from. Non-primitive data types can be null. Some examples of non-primitive data
						types are strings, arrays, and classes.
					</div>
				</div>
			</div>
		);
  	}
}

export default DataTypes;