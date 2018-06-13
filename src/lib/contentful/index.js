import * as contentful from 'contentful';

const SPACE_ID = '5lxuqcpxk266'
const ACCESS_TOKEN = 'd941bb9c333cfcb6a09547b97260182cfd7c80653fa7fc9bf7c15ce7fa0b1703'
export default class Contentful {

	constructor() {
		this.client = contentful.createClient({
			space: SPACE_ID,
			accessToken: ACCESS_TOKEN
		});
		this.getBlogPostBySlug = this.getBlogPostBySlug.bind(this);
		this.getAllResources = this.getAllResources.bind(this);
		this.getAllByType = this.getAllByType.bind(this);
	}

	getAllResources() {
		return this.client.getEntries({
			'content_type': '2wKn6yEnZewu2SCCkus4as'
		});
		//return this.client.getContentType('2wKn6yEnZewu2SCCkus4as');
	}

	getAllByType(type) {
		return this.client.getEntries({
			'content_type': type
		});
	}

	getBlogPostBySlug(slug) {
		return this.client.getEntries({
			'content_type': '2wKn6yEnZewu2SCCkus4as',
			'fields.slug': slug
		});
	}

	getAllAuthors() {
		return this.client.getEntries({
			'content_type': '1kUEViTN4EmGiEaaeC6ouY'
		});
	}

	getResourceById(id) {
		return this.client.getEntries({ 'sys.id': id }); 
	}
	
}