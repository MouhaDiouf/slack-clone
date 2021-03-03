import React from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counterSlice';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Header';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Chat from './Chat';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <AppBody>
          <Sidebar />
          <Switch>
            <Route exact path="/">
              {/* Chat */}
              <Chat />
            </Route>
          </Switch>
        </AppBody>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
