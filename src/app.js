import React from 'react';
import './app.css';

import { Router, Route, Switch } from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory'

import Header from './partials/header';
import Footer from './partials/footer';
import NotFound from './pages/not-found';
import Home from './pages/home';

// import About from './about';
import Contact from './pages/contact';
// import Resources from './resources';
// import Post from './post';
// import News from './news';
const history = createBrowserHistory()

const App = () => [
  <Header />,
  <main role="main">
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Router>
  </main>,
  <Footer />
];


export default App;
