import './App.css';
import NavBar from './navBar/NavBar';
import Characters from './show/Characters';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="App-main">
        <Characters/>
      </div>
    </div>
  );
}

export default App;
