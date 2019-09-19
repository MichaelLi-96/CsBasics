import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaStar } from "react-icons/fa";
import "../../../assets/css/pages.css";
import "../../../assets/css/dataStructures.css";

const treeNodeClass =
`public class Node {
	// The value of the node
	int value;
	// A list of all the children nodes
	List<Node> children;

	// constructor, setting up values
	public Node(int value) {
		this.value = value;
		children = new ArrayList<>();
	}
}`

const binaryTreeNodeClass =
`public class Node {
	// The value of the node
	int value;
	// Pointer to the left child node
	Node left;
	// Pointer to the right child node
	Node right;

	// constructor, setting up values
	public Node(int value) {
		this.value = value;
		left = null;
		right = null;
	}
}`

class Trees extends Component {
  	render() {
		return(
			<div className="content">
				<div className="subtitle-center">
					Trees
				</div>
				<div className="text-left"> 
					<FaStar className="starIcon"/>
					A tree is a hierarchic data structure that is a collection of nodes, specifically where <mark>each node can have its own children nodes</mark>. A 
					node object in a tree stores element data as well as a reference to its next set of nodes. A node can also be null. Each node is linked together 
					using pointers and addresses. In a tree, only one node is designated to be the root node while all the remaining nodes will be children of the root 
					node.<br />
					<br />
					Here is an example node class for a tree where each node is holding an int value and can have multiple children:
					<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text">
						{treeNodeClass}
					</SyntaxHighlighter>
					<br />
					<div className="subsubtitle-left">Tree Terminology</div>
					<ul>
						<li><b>Root Node</b>: The top most node of the tree. A root node does not have a parent node.</li>
						<li><b>Ancestor Node</b>: Any predecessor node on the path from the root node to that node. </li>
					 	<li><b>Leaf Node</b>: The bottom most nodes of the tree. A leaf node does not have any children node.</li>
					 	<li><b>Edge</b>: The connection between nodes. Edges define parent and child nodes.</li>
					 	<li><b>Path</b>: A sequence of nodes such that the next node in the sequence is a child of the previous.</li>
					 	<li><b>Depth</b>: The length of the path from the root node to the current node.</li>
					 	<li><b>Height</b>: The maximum depth of a tree. Can also be viewed as the number of levels the tree has.</li>
					</ul>
					<br />
					<div className="subsubtitle-left">Binary Trees</div>
					A binary tree is a tree where each node can have <mark>at most two children (0-2)</mark>. We usually name the two children the left and right nodes. Below is 
					an example node class for a binary tree:
					<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text">
						{binaryTreeNodeClass}
					</SyntaxHighlighter>
					<br />
					<div className="subsubtitle-left">Types of Binary Trees</div>
					<ul>
						<li><b>Full Binary Tree</b>: A tree where each node has either 0 or 2 children.</li>
						<li><b>Complete Binary Tree</b>: A tree where all its levels are completely filled except for the last level and the nodes on the last level
						are left aligned. </li>
					 	<li><b>Perfect Binary Tree</b>: A tree where all nodes have 2 children and all leaf nodes are on the same level.</li>
					</ul>
					<br />
					<div className="subsubtitle-left">Binary Search Trees</div>
					A binary search tree is a binary tree (each node can have at most two children) that has the following properties:
					<ul>
						<li>A nodes left subtree must only have values lesser than the nodes value.</li>
						<li>A nodes right subtree must only have values greater than the nodes value.</li>
						<li>A nodes left and right subtree must also be binary search trees.</li>
					</ul>
				</div>
			</div>
		);
  	}
}

export default Trees;