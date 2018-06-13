import React from 'react';
import './app.css';

import { Router, Route, Switch } from 'react-router-dom';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';

import createBrowserHistory from 'history/createBrowserHistory'

import Header from './partials/header';
import Footer from './partials/footer';
import NotFound from './pages/not-found';
import Home from './pages/home';
import Blog from './pages/blog';
import BlogDetail from './pages/blog-detail';
// import About from './about';
import Contact from './pages/contact';
// import Resources from './resources';
// import Post from './post';
// import News from './news';
const history = createBrowserHistory()

const App = () => [
  <Header key={1} />,
  <main key={2} role="main">
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/contact" component={Contact}></Route>
				<Route exact path="/blog" component={Blog}></Route>
				<Route path="/blog/:id" component={BlogDetail}></Route>
				<Route path="/404" component={NotFound}></Route>
      </Switch>
    </Router>
  </main>,
  <Footer key={3} />
];


export default App;
