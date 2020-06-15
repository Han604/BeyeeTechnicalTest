import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//components
import Organizer from './components/Organizer';

function App() {  
  return (
    <Router>
      <Switch>
        <Route path ='/'>
          <Organizer/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
