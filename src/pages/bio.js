import * as React from 'react';
import Contentful from './../lib/contentful';
import * as ReactMarkdown from 'react-markdown';

export class BioCard extends React.Component {

	constructor() {
		super();
		this.contentful = new Contentful();
	}

	componentWillMount() {
		const id = this.props.cardId || _.uniqueId();
		this.setState({ id });
		let self = this;
		this.contentful.getAllAuthors().then(d => {
			let bios = d.items.map((row, i) => {
				return Object.assign({}, row.fields, { id: row.sys.id });
			});
			self.setState({ bios: bios });
		});
	}


	render() {
		if (!this.state.bios) return (<div></div>);
		const author = this.state.bios.find(entry => entry.name === 'Christopher Hill');
		return (
			<div className="uk-card uk-card-default uk-width-1-2@m uk-background-muted">
				<div className="uk-card-header">
						<div className="uk-flex-middle" data-uk-grid>
							<div className="uk-width-auto">
								<img className="uk-border-circle" width="120" height="120" src="/static/chris.png"/>
							</div>
							<div className="uk-width-expand">
								<h3 className="uk-card-title uk-margin-remove-bottom">{author.name}</h3>
								<p className="uk-text-meta uk-margin-remove-top">{author.position}</p>
							</div>
						</div>
					</div>
					<div className="uk-card-body">
						<ReactMarkdown source={author.biography}></ReactMarkdown>
					</div>
					<div className="uk-card-footer">
						<a href="http://www.christopherhill.com" className="uk-button uk-button-text">Read more</a>
					</div>
			</div>
		);
	}
}

