/**  
 @author AMIR
 LICENCE
 Premier composant react
*/
import React from "react";

class JeuRow extends React.Component {

    render(){
        let name;
        if (this.props.jeu.stocked) {
            name = this.props.jeu.name;
        } else {
            name = <span style={{color:'red'}}> 
            {this.props.jeu.name} </ span>
        }
        
        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.jeu.price}</td>
            </tr>
        )
    }
}

export default JeuRow;