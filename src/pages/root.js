import * as React from 'react';

import { Route, Switch } from 'react-router-dom';

import Header from './../partials/header';
// import Home from './home';
// import About from './about';
// import Contact from './contact';
import NotFound from './not-found';
import Footer from './footer';
// import Resources from './resources';
// import Post from './post';
// import News from './news';

export default class Root extends React.Component {

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={Home}></Route>
					<Route path="/news" component={News}></Route>
					<Route path="/resources" component={Resources}></Route>
					<Route path="/resource/:id" component={Post}></Route>
					<Route path="/about" component={About}></Route>
					<Route path="/contact" component={Contact}></Route>
					<Route component={NotFound}></Route>
				</Switch>
				<Footer />
			</div>
		);
	}

}
