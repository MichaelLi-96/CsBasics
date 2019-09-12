import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaStar } from "react-icons/fa";
import "../../../assets/css/pages.css";
import "../../../assets/css/dataStructures.css";

const initalizeHashSet =
`Set<String> myHashSet = new HashSet<>();`

const HashSetExample =
`import java.util.*;

public class HashSetExample {
	// The main function where we run our code
    public static void main(String[] args) {
        // Creating an HashSet of Strings named myHashSet
        HashSet<String> myHashSet = new HashSet<String>(); 

        // Adding elements to the HashSet
        myHashSet.add("A");
        myHashSet.add("B");
        myHashSet.add("C");
        myHashSet.add("D");
        myHashSet.add("E");

        // myHashSet is now: ["A", "B", "C", "D", "E"]

        // Adding duplicate elements will be ignored
        myHashSet.add("C");
        
        // myHashSet is still: ["A", "B", "C", "D", "E"]

        // Removing elements to the HashSet
        myHashSet.remove("D");
        myHashSet.remove("A");

        // myHashSet is still: [B", "C", "E"]
    }
}`

class Hashmaps extends Component {
  	render() {
		return(
			<div className="content">
				<div className="subtitle-center">
					HashSets
				</div>
				<div className="text-left"> 
					<FaStar className="starIcon"/>
					A HashSet implements the Set interface and uses a HashMap to store <mark>a collection of unique elements</mark>. The main key characteristics of 
					a HashSet is that it cannot contain duplicate values, is unordered meaning it does not keep track of insertion order, and allows null values. <br />
					<br />
					To initialize a HashSet of strings, you would write:
					<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text">
						{initalizeHashSet}
					</SyntaxHighlighter>
					<br />
					In Java, HashSets already have built in methods to do common functions which can be 
					found <a href="https://docs.oracle.com/javase/7/docs/api/java/util/HashSet.html" target="_blank" rel='noreferrer noopener'>here</a>.
					Below is a basic example on how to add and remove HashSet elements:<br />
					<br />
					<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text">
						{HashSetExample}
					</SyntaxHighlighter>
				</div>
			</div>
		);
  	}
}

export default Hashmaps;
