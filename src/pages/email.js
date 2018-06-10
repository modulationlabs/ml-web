import * as React from 'react';
import Http from './../../lib/api';

const MAILCHIMP_ENDPOINT = 'http://127.0.0.1:3001/api/mailchimp';

export default class Email extends React.Component {

	constructor() {
		super();
		this.state = { isVisible: true, email: '' };
		this.handleClose = this.handleClose.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		
	}

	handleSubmit(e) {
		let payload = { 
			email: this.state.email
		};
		this.http.post(MAILCHIMP_ENDPOINT, payload)
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
			<div>
				<div className="uk-margin uk-padding uk-text-center">
					<br/> 
					<p>Just getting started? Subscribe for free web and mobile resources in your inbox every week! We promise not to spam you.</p>
					<div className="uk-form-custom uk-first-column">
						<input onChange={this.handleChange} className="uk-input uk-form-width-medium" type="text" placeholder="Email Address" />
					</div>
					<button onClick={this.handleSubmit} className="uk-button uk-button-primary">Submit</button>
				</div>
				<br/>
			</div>
		);
	}

}
