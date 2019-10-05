import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import axios from "axios";
import Modal from "./algorithms/modal";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";
import "../../assets/css/pages.css";
import "../../assets/css/algorithms.css"

const { SearchBar } = Search;

function titleFormatter(cell, row) {
    return (
        <Modal 
        	name={row.algorithm_title} 
        	description={row.algorithm_description} 
        	tags={row.algorithm_tags} 
        	code={row.algorithm_code} 
        />
    );
}

function tagFormatter(cell, row) {
	const tags = row.algorithm_tags.map((tag, index) =>
		<Button key={index} className="tagButton">{tag}</Button>
	);
    return (
    	<div className="tagsContainer">
    		{tags}
    	</div>
    );
}

const columns = [{
	dataField: '_id.$oid',
	text: 'Id',
	hidden: true
}, {
	dataField: 'algorithm_title',
	text: 'Title',
	sort: true,
	formatter: titleFormatter,
	headerStyle: {
		backgroundColor: '#343A40',
		color: 'white'
	},
	style: (cell, row, rowIndex, colIndex) => {
	    if (rowIndex % 2 === 0) {
			return {
				color: 'white',
				backgroundColor: '#3E444A'
			};
	    }
		return {
			color: 'white',
			backgroundColor: '#343A40'
		};
	}
},  {
	dataField: 'algorithm_description',
	text: 'Description',
	hidden: true
}, {
	dataField: 'algorithm_tags',
	text: 'Tags',
	sort: true,
	formatter: tagFormatter,
	headerStyle: {
		backgroundColor: '#343A40',
		color: 'white'
	},
	style: (cell, row, rowIndex, colIndex) => {
	    if (rowIndex % 2 === 0) {
			return {
				color: 'white',
				backgroundColor: '#3E444A'
			};
	    }
		return {
			color: 'white',
			backgroundColor: '#343A40'
		};
	}
}];

const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total">
    Showing { from } to { to } of { size } Results
  </span>
);

const paginationOptions = {
	paginationSize: 4,
	pageStartIndex: 1,
	firstPageText: 'First',
	prePageText: 'Back',
	nextPageText: 'Next',
	lastPageText: 'Last',
	nextPageTitle: 'First page',
	prePageTitle: 'Pre page',
	firstPageTitle: 'Next page',
	lastPageTitle: 'Last page',
	showTotal: true,
	paginationTotalRenderer: customTotal,
	sizePerPageList: [{
		text: '10', value: 10
	}]
};

class Algorithms extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showAlgorithm: false,
			algorithms: [

		{
	"_id": {
		"$oid": "5d95578df988bf464c13b34b"
	},
	"algorithm_tags": [
		"Array",
		"ArrayList",
		"Traversal"
	],
	"algorithm_title": "Traverse Through an Array or Arraylist",
	"algorithm_description": "To traverse through an array or arraylist, we can use a for loop or while loop. If the index of the element is not important to you, you can use an enhanced for loop.",
	"algorithm_code": "public void traverseArray(int[] arr) {\r\n    // for loop, use .length for arrays\r\n    for(int i = 0; i < arr.length; i++) {\r\n        System.out.println(arr[i]);\r\n    }\r\n    \r\n    //while loop\r\n    int count = 0;\r\n    while(count < arr.length) {\r\n        System.out.println(arr[count]);\r\n        count++;\r\n    }\r\n    \r\n    // enhanced for loop\r\n    for(int num : arr) {\r\n        System.out.println(num);\r\n    }\r\n}\r\n\r\npublic void traverseArrayList(ArrayList<Integer> list) {\r\n    // for loop, use .size() for arraylists\r\n    for(int i = 0; i < list.size(); i++) {\r\n        System.out.println(list.get(i));\r\n    }\r\n}",
	"__v": 0
},
{
	"_id": {
		"$oid": "5d9693561b2e081330f7d59e"
	},
	"algorithm_tags": [
		"Matrix",
		"Traversal"
	],
	"algorithm_title": "Traverse Through a Matrix",
	"algorithm_description": "To traverse through a matrix, you would need to use a nested for loop. The outer loop goes through the rows and the inner loop goes through the columns of each row.",
	"algorithm_code": "public void traverseMatrix(int[][] matrix) {\r\n    // Iterate through all rows\r\n    // matrix.length means the length of the matrix or the number of rows\r\n    for(int i = 0; i < matrix.length; i++) {\r\n        // Iterate through all columns of every row\r\n        // matrix[0].length means the length of each row or the number of columns in each row\r\n        for(int j = 0; j < matrix[0].length; j++) {\r\n            System.out.println(matrix[i][j]);\r\n        }\r\n    }\r\n}",
	"__v": 0
}



	],
		}
	}

	componentDidMount() {
	  window.scrollTo(0, 0);
	  axios.get('https://csbasics-server.herokuapp.com/algorithms')
	  	.then(response => {
	  		this.setState({ algorithms: response.data });
	  	})
	  	.catch(function (error) {
	  		console.log(error);
	  	})
	}

	componentDidUpdate() {
	  	window.scrollTo(0, 0);
	}

  	render() {
    	return(
			 <div className="flex-container">
				<div className="title">Algorithms</div>
				<div className="text-center">
					An algorithm is a set of instructions executed in sequence to solve a particular problem. As there are many ways to
					solve a problem, there are also many different algorithms that can be used to solve the same problem. 
				</div>
				<div id="tableContainer" className="content">
					<ToolkitProvider
						keyField="_id.$oid" 
						data={ this.state.algorithms }
						columns={ columns }
						search
					>
					  {
					    props => (
					      <div>
					      	<form autoComplete="off" >
						        <SearchBar 
						        	className="searchBar"
							  		placeholder="Search algorithm title or tag"
							  		delay={0}
						        	{ ...props.searchProps } 
						        />
					        </form>
					        <br />
					        <BootstrapTable
						        keyField="_id.$oid"
							 	data={ this.state.algorithms } 
							 	columns={ columns } 
							 	bordered={ false } 
		  						pagination={ paginationFactory(paginationOptions) }
		  						bootstrap4
						        { ...props.baseProps }
					        />
					      </div>
					    )
					  }
					</ToolkitProvider>
					
				</div>
			</div>
	    );
  	}
}

export default Algorithms;
