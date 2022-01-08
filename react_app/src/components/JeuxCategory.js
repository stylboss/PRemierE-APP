/**  
 @author AMIR
 LICENCE
 Premier composant react
*/
import React from "react";

class JeuxCategory extends React.Component {

    render(){
        return (
            <tr>
                <th colSpan={2}> 
                {this.props.category} 
                </th>
            </tr>
        )
    }

}

export default JeuxCategory;