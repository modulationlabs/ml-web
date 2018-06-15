import * as React from 'react';
import Contentful from './../lib/contentful/';
import * as ReactMarkdown from 'react-markdown';
import { Redirect } from 'react-router-dom';
import Spinner from './../partials/spinner';

export default class BlogDetail extends React.Component {

	constructor() {
		super();
		this.contentful = new Contentful();
		this.state = { post: {}, loaded: false };
	}

	componentWillMount() {
		let { id } = this.props.match.params;
		this.contentful.getBlogPostBySlug(id).then(d => {
			this.setState({ post: d.items[0], loaded: true });
		});
	}

	render() {
		if (!this.state.loaded) return (<Spinner />);
		if (!this.state.post || !this.state.post.fields) return (<Redirect to={'/blog'}/>);
		let title = this.state.post.fields.title || 'No Title';
		let body = this.state.post.fields.body || 'Lorem Ipsum';
		// let author = this.state.post.fields.author[0].fields && this.state.post.fields.author[0].fields.name || '';
		return (
			<div className="container">
				<br/>
				<h1 className="text-center text-muted mt-4">{title}</h1>
				<h4 className="text-center text-muted">{`Modulation Labs`}</h4>
				<ReactMarkdown source={body} className="bg-light p-5 mb-5 mt-5" />
				<br/>
			</div>
		);
	}

}
