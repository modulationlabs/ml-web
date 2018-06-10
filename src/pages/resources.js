import * as React from 'react';
import Contentful from './../lib/contentful/';

export default class Resources extends React.Component {

	colorMap = ['#add8e6','#b7dde9','#c2e2ec','#cce6ef','#d7ecf3','#e1f0f6','#ecf5f9','#f5fafc','#ffffff'];

	arr = [
		{ title: 'Test 1', preview: 'Lorem ipsum...', color: '#add8e6' },
		{ title: 'Test 31', preview: 'Lorem ipsum...', color: '#b7dde9' },
		{ title: 'Test 21', preview: 'Lorem ipsum...', color: '#c2e2ec' },
		{ title: 'Test 11', preview: 'Lorem ipsum...', color: '#cce6ef' },
		{ title: 'Test 14', preview: 'Lorem ipsum...', color: '#d7ecf3' },
		{ title: 'Test 13', preview: 'Lorem ipsum...', color: '#e1f0f6' },
		{ title: 'Test 12', preview: 'Lorem ipsum...', color: '#ecf5f9' }
	]

	constructor() {
		super();
		this.contentful = new Contentful();
		this.state = { resources: [] };
		this.getImage = this.getImage.bind(this);
	}

	componentDidMount() {
		let self = this;
		this.contentful.getAllResources().then(d => {
			let resources = d.items.map((row, i) => {
				return Object.assign({}, row.fields, { id: row.sys.id, color: self.colorMap[i] });
			});
			console.log('RESOURCE: ', resources);
			self.setState({ resources: resources });
		});
	}

	getImage(featuredImage) {
		if (!featuredImage) return '';
		return featuredImage.fields.file.url;
	}

	//uk-child-width-1-2@s uk-grid-small uk-grid-match" uk-grid
	render() {
		if (this.state.resources.length < 1) return (<div></div>);
		return (
			<div className="uk-container uk-height-viewport uk-animation-slide-right">
			<br/>
			<div className="uk-grid uk-grid-small uk-grid-match" data-uk-grid>
				{ this.state.resources.map((data, i) => (
					<div 
						key={i} 
						cardImage={this.getImage(data.featuredImage)} 
						cardId={data.id} 
						cardLabel={data.category} 
						cardTitle={data.title} 
						cardPreview={data.title} 
						cardColor={data.color} />)) }
			</div>
			<br/>
		  </div>
		);
	}

}
