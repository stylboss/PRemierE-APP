/**  
 @author AMIR
 LICENCE
 Premier composant react
*/
import React from 'react';
import JeuxCategory from './JeuxCategory';
import JeuRow from './JeuRow';

class JeuxTable extends React.Component {
  render() {
    const FILTERTEXT = this.props.filterText;
    const INSTOCKONLY = this.props.inStockOnly;
    let lastCat;

    const ROWS = [];
    this.props.jeux.forEach((jeu) => {
      if (jeu.name.toLowerCase().indexOf(FILTERTEXT) === -1) {
        return;
      }

      /* coché produit en stock seulement et jeu stocké=false
            si on a ces 2 conditions reunis on ajoute pas et pour le 
            reste on ajoute au tableau */
      if (INSTOCKONLY && !jeu.stocked) {
        return;
      }
      //premiere fois est ce que FPS different de rien, OUI
      if (jeu.category !== lastCat) {
        ROWS.push(<JeuxCategory key={jeu.category} category={jeu.category} />);
      }
      ROWS.push(<JeuRow key={jeu.name} jeu={jeu} />);
      lastCat = jeu.category;
    });

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{ROWS}</tbody>
        </table>
      </div>
    );
  }
}

export default JeuxTable;
