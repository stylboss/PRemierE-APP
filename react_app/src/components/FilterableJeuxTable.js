/**  
 @author AMIR
 LICENCE
 Premier composant react
*/
import React from "react";
import SearchCompo from "./SearchCompo";
import JeuxTable from "./JeuxTable";

class FilterableJeuxTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        }
      /*  this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this); */
    }
    handleFilterTextChange = (e) => {
        console.log(e);
        this.setState({filterText:e})
    }
    handleInStockChange = (e) => {
        console.log(e);
        this.setState({inStockOnly:e})
    }
    render(){
        return (
            <div>
               <SearchCompo filterText = {this.state.filterText} 
               inStockOnly = {this.state.inStockOnly} 
    handleFilterTextChange = {this.handleFilterTextChange}
    handleInStockChange = {this.handleInStockChange} />

               <JeuxTable jeux={this.props.jeux} 
               filterText={this.state.filterText} 
               inStockOnly={this.state.inStockOnly}/>
            </div>
        )
    }

}

export default FilterableJeuxTable;