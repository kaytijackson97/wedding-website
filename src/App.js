import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
      </Router>
    </div>
  );
}

export default App;
