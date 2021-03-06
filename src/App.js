import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Triplog from './containers/Triplog';
import Navibar from  './components/Navibar'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <Router>
        <Navibar />
        <Switch>
          <Route exact path ='/triplog' component={Triplog} />
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
