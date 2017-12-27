import React from 'react';

class TableBody extends React.Component {
	render(){
		console.log(this.props.data)
		return (
		    <tbody>
			{
				this.props.data.map((val,index) => {
					return (<tr key={index}>
				    <td>{index + 1}</td>
				    <td>{val.bId}</td>
					<td>{val.bLang}</td>
				    <td>{val.bName}</td>
			        <td>{val.bCost}</td>
				    <td>{val.bQty}</td>
				</tr>)
				})
			}
			</tbody>
		);
	}
}

export default TableBody;