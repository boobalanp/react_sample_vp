import React from 'react';
import TableHeader from './tableheader';
import TableBody from './tablebody';

class StockBooks extends React.Component {
	render(){
		return (
		    <div className="container">
			    <h1>Stock Available</h1>
				<table className="table-container">
				    <TableHeader />
				    <TableBody data={this.props.bookList}/>
				</table>
			</div>
		);
	}
}

export default StockBooks;

