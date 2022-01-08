/**  
 @author AMIR
 LICENCE
 Premier composant react
*/
import React from "react";

class SearchCompo extends React.Component {
 
/* constructor(props){
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
} */

    handleFilterTextChange = (e) => {
        this.props.handleFilterTextChange(e.target.value)
    }
    handleInStockChange = (e) => {
        this.props.handleInStockChange(e.target.checked)
    }

    render() {
        return (
            <div>
                <input type='text' 
                placeholder="search"
                text={this.props.filterText}
                onChange = {this.handleFilterTextChange} />

                <input type="checkbox" 
                onChange={this.handleInStockChange} 
                checked={this.props.inStockOnly} />

                {' '}Produit en stock seulement
            </div>
        )
    }
}

export default SearchCompo;