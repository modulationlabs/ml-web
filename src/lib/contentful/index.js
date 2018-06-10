import React from 'react';
import * as contentful from 'contentful';

const SPACE_ID = '5lxuqcpxk266'
const ACCESS_TOKEN = 'd941bb9c333cfcb6a09547b97260182cfd7c80653fa7fc9bf7c15ce7fa0b1703'

export default class Contentful {

	constructor() {
		super();
		this.client = contentful.createClient({
			space: SPACE_ID,
			accessToken: ACCESS_TOKEN
		});
		this.getAllResources = this.getAllResources.bind(this);
		this.getAllNews = this.getAllNews.bind(this);
	}

	getAllResources() {
		return this.client.getEntries({
			'content_type': '2wKn6yEnZewu2SCCkus4as'
		});
		//return this.client.getContentType('2wKn6yEnZewu2SCCkus4as');
	}

	getAllNews() {
		return this.client.getEntries({
			'content_type': 'news'
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