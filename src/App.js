import React, { Component } from 'react';
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

export default class App extends React.Component {

	render() {
		return (
			<div>
				<Header />
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            {/* <Route path="/news" component={News}></Route>
            <Route path="/resources" component={Resources}></Route>
            <Route path="/resource/:id" component={Post}></Route>
    <Route path="/about" component={About}></Route> */}
            <Route path="/contact" component={Contact}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </Router>
				<Footer />
			</div>
		);
	}

}
