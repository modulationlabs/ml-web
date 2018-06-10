import * as React from 'react';
import { Card } from './../../lib/components/card';
import Contentful from './../../lib/contentful/';

export default class News extends React.Component {

	constructor() {
		super();
		this.contentful = new Contentful();
		this.state = { news: [] };
	}

	componentDidMount() {
		let self = this;
		this.contentful.getAllNews().then(d => {
			let news = d.items.map((row, i) => {
				return Object.assign({}, row.fields, { id: row.sys.id });
			});
			self.setState({ news: news });
		});
	}

	getImage(featuredImage) {
		if (!featuredImage) return '';
		return featuredImage.fields.file.url;
	}

	//uk-child-width-1-2@s uk-grid-small uk-grid-match" uk-grid
	render() {
		if (!this.state.news) return (<div></div>);
		return (
			<div className="uk-container uk-height-viewport uk-animation-slide-right">
				<br/>
				<div className="uk-grid uk-grid-small uk-grid-match" data-uk-grid>
					{ this.state.news.map((data, i) => (
						<Card 
							key={i} 
							cardImage={this.getImage(data.image)} 
							cardId={data.id} 
							cardLabel={['']} 
							cardTitle={data.title} 
							cardPreview={data.title} 
						/>)) }
				</div>
				<br/>
		  </div>
		);
	}w

}
