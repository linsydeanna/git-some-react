import React, { Component } from 'react';
import ClassList from './ClassList'
import { Link } from 'react-router'
import Repos from './Repos'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
        <li><Link to="/classlist">ClassList</Link></li>
        </ul>
      </div>
    )
  }
}

export default App;
