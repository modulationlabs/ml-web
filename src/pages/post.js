import * as React from 'react';
import Contentful from './../../lib/contentful/';
import * as ReactMarkdown from 'react-markdown';

export default class Post extends React.Component {

	constructor() {
		super();
		this.contentful = new Contentful();
		this.state = { post: {} };
	}

	componentDidMount() {
		let self = this;
		let id = this.props.match.params.id
		console.log('getting id: ', id)
		this.contentful.getResourceById(id).then(d => {
			self.setState({ post: d.items[0] });
			console.log(d.items[0]);
		});
	}

	render() {
		if (!this.state.post || !this.state.post.fields) return (<div></div>);
		let title = this.state.post.fields.title || 'No Title';
		let body = this.state.post.fields.body || 'Lorem Ipsum';
		let author = this.state.post.fields.author && this.state.post.fields.author[0].fields.name || '';
		return (
			<div className="uk-container uk-height-viewport uk-animation-slide-down">
				<br/>
				<h1 className="uk-heading-primary uk-heading-divider">{title}</h1>
				<h2 className="uk-heading-secondary">{author}</h2>
				<ReactMarkdown source={body} className="uk-text-large" />				
				<br/>
			</div>
		);
	}

}
