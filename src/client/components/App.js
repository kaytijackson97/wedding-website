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
import RSVP from './pages/rsvp/RSVP.js';

function App() {

  return (
    <div className="App">
      <Router>
        <Nav/>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/venue' component={Venue} />
          <Route exact path='/rsvp' component={RSVP} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
