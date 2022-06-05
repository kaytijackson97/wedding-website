import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './Header';

import Nav from './Nav';
import Home from './pages/Home.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
