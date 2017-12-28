import React from 'react';
import configData from '../config';

class AddBooks extends React.Component {
	  readData(){
		    let obj ={};
		    obj.bId = this.refs.bookcode.value;
		    obj.bName = this.refs.bookname.value;
		    obj.bCost = this.refs.bookprice.value;
	      obj.bQty = this.refs.bookquantity.value;
	    	obj.bLang = this.refs.booklanguage.value;
				this.props.callBack(obj);
		    this.resetData();
	  }

	  resetData(){
		    this.refs.bookcode.value = "";
		    this.refs.bookname.value = "";
		    this.refs.bookprice.value = "";
	      this.refs.bookquantity.value = "";
		    this.refs.booklanguage.value = "";
	  }

	  render(){
				return (
		        <div className="container">
			          <h3>Add books</h3>
				        <form action="">
				            <div className="margin-bottom-10">
					              <label className="label-add-books">Code</label>
						            <input className="input-addbooks-text" required ref="bookcode" type="text" placeholder="Book Code"/>
					          </div>
					          <div className="margin-bottom-10">
					              <label className="label-add-books">Name</label>
						            <input className="input-addbooks-text" required ref="bookname" type="text" placeholder="Book Name"/>
					          </div>
					          <div className="margin-bottom-10">
					              <label className="label-add-books">Language</label>
						            <select ref="booklanguage">
						            {
							              configData.languages.map((value,index) =>  <option key={index} value={value}>{value}</option>)
                        }
                        </select>
 					          </div>
					          <div className="margin-bottom-10">
					              <label className="label-add-books">Price</label>
						            <input className="input-addbooks-text" required ref="bookprice" type="number" placeholder="Book Price"/>
					          </div>
					          <div className="margin-bottom-10">
					              <label className="label-add-books">Quantity</label>
						            <input className="input-addbooks-text" required ref="bookquantity" type="number" placeholder="Book Quantity"/>
					          </div>
					          <div className="margin-bottom-10">
					              <button className="btn btn-primary" type="button" onClick={this.resetData.bind(this)}>Cancel</button>&nbsp;&nbsp;
			                  <button className="btn btn-primary" type="submit" onClick={this.readData.bind(this)}>Add</button>
				            </div>
				        </form>
          	</div>
  		);
	}
}

export default AddBooks;
