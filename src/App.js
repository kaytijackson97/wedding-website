import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';

import Home from './pages/Home.js';
import Venue from './pages/Venue.js';

function App() {

  return (
    <div className="App">
      <Router>
        <Nav/>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/venue' component={Venue} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
