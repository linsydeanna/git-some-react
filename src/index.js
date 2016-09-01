import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import App from './App';
import './index.css';
import Repos from './Repos';
import ClassList from './ClassList'
import UserInfo from './UserInfo'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    {/* add the routes here */}
    <Route path="/classlist" component={ClassList}>
      <Route path="/classlist/:userName" component={UserInfo}/>
      </Route>
  </Router>
), document.getElementById('root'));

//the router looks at the url and decides what should show up on the page
//the router changes the url
//hashHistory keeps track of the url changing
