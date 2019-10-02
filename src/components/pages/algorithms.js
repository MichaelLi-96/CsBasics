import React, { Component } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import "../../assets/css/pages.css";
import "../../assets/css/algorithms.css"

const { SearchBar } = Search;

const products = [{
		id: "1",
		title: "Traverse a matrix",
		tags: "arrays"
	},{
		id:"2",
		title: "Traverse a matrix",
		tags: "arrays"
	},{
		id:"3",
		title: "Traverse a matrix",
		tags: "arrays"
	},{
		id:"4",
		title: "Traverse a matrix",
		tags: "arrays"
	},{
		id:"5",
		title: "Traverse a matrix",
		tags: "arrays"
	},{
		id:"6",
		title: "Traverse a tree",
		tags: "tree"
	},{
		id:"7",
		title: "Traverse a matrix",
		tags: "arrays"
}];

function linkFormatter(cell, row) {
    return (
      <span>
        <a href="https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html" target="_blank" rel='noreferrer noopener'>{ cell }</a>
      </span>
    );
}

const columns = [{
	dataField: 'title',
	text: 'Title',
	sort: true,
	formatter: linkFormatter,
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
}, {
	dataField: 'tags',
	text: 'Tags',
	sort: true,
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
			
		}
	}
	componentDidMount() {
	  window.scrollTo(0, 0);
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
				<div className="content">
					<ToolkitProvider
					  keyField="id"
					  data={ products }
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
						        keyField='id' 
							 	data={ products } 
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
