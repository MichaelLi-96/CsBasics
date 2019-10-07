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
	const tags = row.algorithm_tags.sort().map((tag, index) =>
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

const defaultSorted = [{
  dataField: '_id.$oid',
  order: 'asc'
}];

class Algorithms extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showAlgorithm: false,
			algorithms: []
		}
	}

	componentDidMount() {
	  window.scrollTo(0, 0);
	  axios.get('https://csbasics-server.herokuapp.com/algorithms')
	  	.then((response) => {
	  		this.setState({ algorithms: response.data });
	  	})
	  	.catch(function (error) {
	  		console.log(error);
	  	});
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
		  						defaultSorted={ defaultSorted } 
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
