import * as React from 'react';
import BlogCard from '../partials/blog-card';
import Contentful from './../lib/contentful/';
import Spinner from './../partials/spinner';

export default class News extends React.Component {

	constructor() {
		super();
		this.contentful = new Contentful();
		this.state = { posts: [] };
	}

	componentDidMount() {
		this.contentful.getAllByType('2wKn6yEnZewu2SCCkus4as').then(d => {
			let posts = d.items.map((row, i) => {
				return Object.assign({}, row.fields, { id: row.sys.id });
			});
			this.setState({ posts }, () => { console.log('post: ', this.state.posts) });
		});
	}

	getImage(featuredImage) {
		if (!featuredImage) return '';
		return featuredImage.fields.file.url;
	}

	render() {
		if (!this.state.posts) return (<Spinner />);
		return (
			<div className="container">
				<br />
				<div className="row justify-content-center">
					{this.state.posts.map((data, i) => (
						<BlogCard
							key={i}
							date={data.date}
							tags={data.category}
							slug={data.slug}
							image={this.getImage(data.image)}
							label={['']}
							title={data.title}
						/>))}
				</div>
				<br />
			</div>
		);
	}

}
