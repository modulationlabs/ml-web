import * as React from 'react';

export default class Http {
	
	constructor() {
		this.headers = new Headers({ 'Content-Type': 'application/json' });
		this.defaultOptions = {
			headers: this.headers,
			mode: 'cors',
			cache: 'default'
		}
	}

	options(additionalObject) {
		return Object.assign({}, this.defaultOptions, additionalObject);
	}

	get(url, options) {
		return fetch(url, options);
	}

	post(url, body, options) {
		return fetch(url, this.options({ method: 'POST', body: JSON.stringify(body) }));
	}

	patch(url, body, options) {
		return fetch(url, this.options({ method: 'PATCH', body: JSON.stringify(body) }));
	}

	put(url, body, options) {
		return fetch(url, this.options({ method: 'PUT', body: JSON.stringify(body) }));
	}

	del(url, options) {
		return fetch(url, this.options({ method: 'DELETE' }));
	}

}