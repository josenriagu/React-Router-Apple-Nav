import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavWrapper from './components/NavWrapper';
import Nav from './components/Nav';
import { navData } from './navData';

export default class App extends Component {
  render() {
    return (
      <div className="App" >
        <Route
          path="/"
          render={props => <NavWrapper {...props} navData={navData} />}
        />
        <Route
          path="/:name"
          render={props => <Nav {...props} navData={navData} />}
        />
      </div>
    );
  }
}
