import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/header';
import Footer from './components/footer';
import AddBooks from './components/addbooks';
import Griddle,{RowDefinition,ColumnDefinition} from 'griddle-react';

class App extends React.Component {
	constructor(){
		super();
	    this.state= {
			availableBooks:[
		    {
			    bId:"enBg",
			    bName:"BG",
			    bCost:200,
			    bQty:400,
			    bLang:"english"
		    },
		    {
			    bId:"enSb",
			    bName:"SB",
			    bCost:375,
			    bQty:100,
			    bLang:"english"
		    },
		    {
			    bId:"enCc",
			    bName:"CC",
			    bCost:2000,
			    bQty:150,
			    bLang:"english"
		    },
		    {
			    bId:"enKr",
			    bName:"Krishna",
			    bCost:200,
			    bQty:200,
			    bLang:"english"
		   }
		   ],
		}
	}
	addNewBook(newBook){
		console.log(this,newBook);
		let totalBooks = this.state.availableBooks;
		totalBooks.push(newBook);
		this.setState({availableBooks:totalBooks});
		console.log("book added");
	}
	render(){
		const styleConfig = {
            icons: {
                TableHeadingCell: {
                    sortDescendingIcon: <small>(desc)</small>,
                    sortAscendingIcon: <small>(asc)</small>,
                },
            },
            classNames: {
                Row: 'row-class',
            },
            styles: {
                Filter: { fontSize: 18 },
                Table: { border: "2px solid #555 "},
            }
        }

		return (
		    <div>
			    <Header />
				<Griddle data={this.state.availableBooks} styleConfig={styleConfig}>
				    <RowDefinition>
                        <ColumnDefinition id="bId" title="Book Id" />
                        <ColumnDefinition id="bName" title="Book Name" />
                        <ColumnDefinition id="bCost" title="Price" />
						<ColumnDefinition id="bQty" title="No of Books" />
                        <ColumnDefinition id="bLang" title="Language" />
                    </RowDefinition>
				</Griddle>
				<hr />
				<div className="container">
				    <AddBooks callBack={this.addNewBook.bind(this)}/>
				</div>
					{/*<Footer />*/}
			</div>
		);
	}
}

ReactDom.render(<App />, document.getElementById("root"));