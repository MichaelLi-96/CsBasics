import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaStar } from "react-icons/fa";
import "../../../assets/css/pages.css";
import "../../../assets/css/dataStructures.css";

const initalizeHashMap =
`// HashMap<Key, Value>
Map<String, Integer> myHashMap = new HashMap<>();`

const HashMapExample =
`import java.util.*;

public class HashMapExample {
	// The main function where we run our code
    public static void main(String[] args) {
        // Creating an HashMap of Strings mapped to Doubles named groceryItems
        Map<String, Double> groceryItems = new HashMap<>(); 

        // Adding elements to the HashMap
        // Adding into a HashMap is also called putting into a HashMap
        groceryItems.put("Milk", 4.50);
        groceryItems.add("Ham", 3.75);
        groceryItems.add("Apple", 1.25);
        groceryItems.add("Carrot", 0.50);
        groceryItems.add("Bread", 5.50);
        groceryItems.add("Eggs", 3.35);

        // Retrieving items from the HashMap
        // Retrieving from a HashMap is also called getting from a HashMap
        double hamPrice = groceryItems.get("Ham"); // hamPrice will be 3.75
        double breadPrice = groceryItems.get("Bread"); //breadPrice will be 5.50

        // Removing elements from the HashMap
        groceryItems.remove("Carrot");
        groceryItems.remove("Eggs");
    }
}`

class Hashmaps extends Component {
  	render() {
		return(
			<div className="content">
				<div className="subtitle-center">
					HashMaps
				</div>
				<div className="text-left"> 
					<FaStar className="starIcon"/>
					A HashMap implements the Map interface and allows the storage of <mark>key and value (key, value) pairs</mark>. Each key is able to map to a 
					corresponding value. A real world example where a HashMap would be useful is mapping the names of grocery items to their prices. 
					Then when you want the price of a certain grocery item, all you have to do it call the name of the grocery item in the HashMap and the HashMap will
					give you back its price. <br />
					<br />
					<div className="subsubtitle-left">Key Characteristics</div>
					<ul>
						<li>HashMaps cannot have duplicate keys but can have duplicate values</li>
					 	<li>HashMaps are unordered, does not guarantee the insertion order of elements</li>
					 	<li>A HashMap can only have one NULL key but can have multiple NULL values</li>
					</ul>
					<br />
					To initialize a HashMap of Strings mapping to Integers, you would write:
					<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text">
						{initalizeHashMap}
					</SyntaxHighlighter>
					<br />
					In Java, HashMaps already have built in methods to do common functions which can be 
					found <a href="https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html" target="_blank" rel='noreferrer noopener'>here</a>.
					Below is a basic example on how to add, retrieve, and remove HashMap elements:<br />
					<br />
					<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text">
						{HashMapExample}
					</SyntaxHighlighter>
				</div>
			</div>
		);
  	}
}

export default Hashmaps;
