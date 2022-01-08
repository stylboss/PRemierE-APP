//import logo from './logo.svg';
import './App.css';
import FilterableJeuxTable from './components/FilterableJeuxTable';

function App() {
  const JEUX = []
  JEUX.push( {category: 'FPS', price: '10€', stocked:true, name: 'Counter Strike'} );
  JEUX.push( {category: 'FPS', price: '40€', stocked:false, name: 'BattleField'} );
  JEUX.push( {category: 'FPS', price: '20€', stocked:true, name: 'PUBG'} );
  JEUX.push( {category: 'Aventure', price: '10€', stocked:true, name: 'Tomb raider'} );
  JEUX.push( {category: 'Aventure', price: '30€', stocked:false, name: 'Uncharted'} );
  JEUX.push( {category: 'Aventure', price: '50€', stocked:true, name: 'Zelda'} );
  JEUX.push( {category: 'RPG', price: '10€', stocked:true, name: 'WOW'} );
  JEUX.push( {category: 'RPG', price: '30€', stocked:false, name: 'sims'} );
  JEUX.push( {category: 'RPG', price: '50€', stocked:false, name: 'final'} );
  
  return (
    <div className="App">
      <header className="App-header">
        <FilterableJeuxTable jeux={JEUX}/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;