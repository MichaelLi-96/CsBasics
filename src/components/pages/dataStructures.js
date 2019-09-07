import React, { Component } from "react";
import "../../assets/pages.css";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { androidstudio } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';


class DataStructures extends Component {
  	render() {
  			const code = `class OtherClass {
  public static void main(String[] args) {
    MyClass myObj = new MyClass();
    System.out.println(myObj.x);
  }
}`;
	    return(
	    	<div className="container-fluid">
				<h1 className="title">Data Structures</h1>
				<br/>
				<h1>
				<SyntaxHighlighter language="java" showLineNumbers style={androidstudio}>
				      {code}  
				</SyntaxHighlighter>				
				</h1>
			</div>
	    );
  	}
}

export default DataStructures;