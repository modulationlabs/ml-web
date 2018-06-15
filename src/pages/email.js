import * as React from 'react';
import Http from './../lib/api';

const endpoint = 'api/mailchimp';
const apiUrl = `/${endpoint}`;
export default class Email extends React.Component {

	constructor() {
		super();
		this.state = { isVisible: true, email: '', submitSuccess: false, submitted: false };
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
				this.setState({ submitSuccess : data.success, submitted: true });
			})
			.catch(err => {
				this.setState({ submitSuccess: false, submitted: true });
			})
	}

	handleChange(event) {
		this.setState({ email: event.target.value });
	}

	handleClose(e) {
		this.setState({ isVisible: false });
	}

	render() {
		const { submitSuccess, submitted } = this.state;
		return (
			<form className="form col-md-4 offset-md-4 text-center">
				{ submitSuccess ? 
					<div className="row">
						<div className="col-md-12">
							<p>You have subscribed successfully.</p>
						</div>
					</div>
				: 
					<div className="row">
						<div className="col-md-9">
							<input
								noValidate
								onChange={this.handleChange}
								className={`form-control mb-1 ${submitted ? 'is-invalid' : ''}`}
								type="text" placeholder="Email Address" />
							<div className="invalid-feedback mt-0">
								That email is already subscribed or invalid.
							</div>
						</div>
						<div className="col-md-3">
							<button onClick={this.handleSubmit} className="btn btn-md btn-primary mb-1 ml-2">Submit</button>
						</div>
					</div>
				}
				<br />
			</form>
		);
	}

}
