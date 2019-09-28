import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaStar } from "react-icons/fa";
import "../../../assets/css/pages.css";
import "../../../assets/css/dataStructures.css";

const initializeArrayList = 
`List<Integer> myArrayList = new ArrayList<>();`

const example =
`import java.util.*;

public class Animals {
	// The main function where we run our code
    public static void main(String[] args) {
        // Creating an ArrayList of Strings named animals
        List<String> animals = new ArrayList<>();

        // Adding new elements to the end of the ArrayList
        animals.add("Elephant");
        animals.add("Lion");
        animals.add("Panda");
        animals.add("Hippo");

        // Retrieving the element at index 2, "Panda"
        String animal = animals.get(2);

        // Removing the element at index 0, "Elephant"
        // The ArrayList is now ["Lion", "Panda", "Hippo"]
        animals.remove(0);
    }
}`

class Arraylists extends Component {
  	render() {
		return(
			<div className="content">
				<div className="subtitle-center">
					ArrayLists
				</div>
				<div className="text-left"> 
					<FaStar className="starIcon"/>
					ArrayLists in Java implement the list interface and are used to store a dynamically sized collection of elements. 
					Contrary to arrays that are fixed in size, an ArrayList <mark>grows its size automatically when new elements are added to it and
					shrinks the size when the elements are removed</mark>. An ArrayList also preserves order, so it maintains the insertion order of elements.
					Note that you cannot create an ArrayList of primitive types like <code>int</code>, <code>char</code>, etc. You need to use boxed 
					types like <code>Integer</code>, <code>Character</code>, <code>Boolean</code>, etc.
					<br/ >
					<br />
					To initialize an ArrayList of Integers, you write:
					<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text-lg">
						{initializeArrayList}
					</SyntaxHighlighter>
					<br />
					ArrayLists already have built in methods to do common functions which can be 
					found <a href="https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html" target="_blank" rel='noreferrer noopener'>here</a>.
					Below is a basic example on how to add, retrieve, and remove ArrayList elements:
					<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text-lg">
						{example}
					</SyntaxHighlighter>
				</div>
			</div>
		);
  	}
}

export default Arraylists;
