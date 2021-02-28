import logo from './dream-team.png';
import './App.css';

import PlayerMarket from './Components/PlayerMarket/PlayerMarket';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt=""/>
        <h1>Make your own legendary XI with unlimited budget</h1>
        
       
      </header>
      <PlayerMarket></PlayerMarket>
    </div>
  );
}

export default App;
