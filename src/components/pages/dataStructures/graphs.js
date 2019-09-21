import React, { Component } from "react";
import { FaStar } from "react-icons/fa";
import "../../../assets/css/pages.css";
import "../../../assets/css/dataStructures.css";

class Graphs extends Component {
  	render() {
		return(
			<div className="content">
				<div className="subtitle-center">
					Graphs
				</div>
				<div className="text-left"> 
					<FaStar className="starIcon"/>
					A graph is a non-structured <mark>collection of vertices connected by edges</mark>. A vertex can also be called a node and an edge can also be called a line or arc.
					A vertex in a graph stores element data as well as references to other vertices. A graph is typically used for representing a network.
					A vertex would represent some sort of entity and an edge would represent the relationship between two entities. A real world application of graphs would 
					be a social media site. A vertex would represent a person and contain their personal information while an edge would represent the relationship between two 
					people. <br />
					<br />
					<div className="subsubtitle-left">Types of Graphs</div>
					<ul>
						<li><b>Undirected Graph</b>: The order of vertices pairs and direction of the edge between two vertices do not matter. 
						This means that the vertices pair (u, v) can also be represented as (v, u). Edges are usually represented as straight lines.</li>
						<li><b>Directed Graph</b>: The order of vertices pairs and direction of the edge between two vertices do matter. 
						This means that the vertices pair (u, v) cannot be represented as (v, u). Edges are usually represented as straight lines with arrows.</li>
						<li><b>Cyclic Graph</b>: A directed graph that has at least one cycle, a path along the directed edges from a vertex to itself.</li>
						<li><b>Weighted Graph</b>: The edges of a graph carry a relative weight. The idea is that some edges or paths can be more expensive to take than others 
						and the cost is represented by the edge weight.</li>
					</ul>
					<br />
					<div className="subsubtitle-left">Graph Representations</div>
					Graphs are most commonly represented by an adjacency matrix and adjacency list.<br />
					<ul>
						<li><b>Adjacency Matrix</b>: An adjacency matrix is a square N x N matrix with dimensions equal to the number of vertices in the graph. The value of 
						each element in the adjacency matrix is either 0 or 1. A value of 0 means that the two vertices in the row and column are not connected to each 
						other by an edge. A value of 1 means that the two vertices in the row and column are connected together by an edge.</li>
						<li><b>Adjacency List</b>: An adjacency list is essentially an array of lists. The length of the array is equal to the number of vertices in the 
						graph because each array element represents one vertex in the graph. At array[i], there contains a list that has all adjacent vertices 
						of the ith vertex.</li>
					</ul>
				</div>
			</div>
		);
  	}
}

export default Graphs;
