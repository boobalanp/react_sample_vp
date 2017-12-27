import React from 'react';

class TableHeader extends React.Component {
	render(){
		return (
		    <thead>
			    <tr>
			        <th>S.No</th>
				    <th>Id</th>
					<th>Language</th>
				    <th>Name</th>
				    <th>Price</th>
				    <th>Quantity</th>
				</tr>
			</thead>
		);
	}
}

export default TableHeader;