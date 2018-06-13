import * as React from 'react';
import Http from './../lib/api';

const endpoint = 'api/mailchimp';
const apiUrl = `/${endpoint}`;
export default class Email extends React.Component {

	constructor() {
		super();
		this.state = { isVisible: true, email: '' };
		this.handleClose = this.handleClose.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.http = new Http();
	}

	handleSubmit(e) {
		e.preventDefault();
		let payload = { 
			email: this.state.email
		};
		this.http.post(apiUrl, payload)
			.then(data => { 
				console.log(`Data: ${data}`);
			})
			.catch(err => {
				console.log(`Error: ${err}`);
			})
	}

	handleChange(event) {
		this.setState({ email: event.target.value });
	}

	handleClose(e) {
		this.setState({ isVisible: false });
	}

	render() {
		return (
			<form className="form col-md-4 offset-md-4 text-center">
				<div className="row">
					<div className="col-md-9">
						<input onChange={this.handleChange} className="form-control mb-3" type="text" placeholder="Email Address" />
					</div>
					<div className="col-md-3">
						<button onClick={this.handleSubmit} className="btn btn-md btn-primary mb-3 ml-2">Submit</button>
					</div>
				</div>
				<br />
			</form>
		);
	}

}
