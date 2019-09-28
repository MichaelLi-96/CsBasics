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

        // Removing elements from the HashSet
        myHashSet.remove("D");
        myHashSet.remove("A");

        // myHashSet is: [B", "C", "E"]
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
					A HashSet implements the Set interface and uses a HashMap to store <mark>a collection of unique elements</mark>. This means
					that an element can only exist once in a set. <br/>
					<br/>
					<div className="subsubtitle-left">Key Characteristics</div>
					<ul>
						<li>HashSets cannot contain duplicate values</li>
						<li>HashSets are unordered, does not guarantee the insertion order of elements</li>
						<li>HashSets allow NULL values</li>
					</ul>
					<br />
					To initialize a HashSet of strings, you would write:
					<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text-lg">
						{initalizeHashSet}
					</SyntaxHighlighter>
					<br />
					In Java, HashSets already have built in methods to do common functions which can be 
					found <a href="https://docs.oracle.com/javase/8/docs/api/java/util/HashSet.html" target="_blank" rel='noreferrer noopener'>here</a>.
					Below is a basic example on how to add and remove HashSet elements:<br />
					<br />
					<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text-lg">
						{HashSetExample}
					</SyntaxHighlighter>
				</div>
			</div>
		);
  	}
}

export default Hashmaps;
