import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counterSlice';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <h1>This is the home page</h1>
            </Route>
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
