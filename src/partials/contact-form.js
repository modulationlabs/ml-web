import * as React from 'react';

export default class ContactForm extends React.Component {

	constructor() {
		super();
		this.state = { resources: [] };
	}

	componentWillMount() {
		let self = this;
	}

	render() {
		return (
			<form>
				<fieldset className="uk-fieldset">

					<legend className="uk-legend">How Can We Help You?</legend>

					<div className="uk-margin">
						<input className="uk-input" type="text" placeholder="Email Address"/>
					</div>

					<div className="uk-margin">
						<select className="uk-select">
							<option>Digital Strategy</option>
							<option>Development</option>
							<option>Training</option>
							<option>Marketing</option>
						</select>
					</div>

					<div className="uk-margin">
						<textarea className="uk-textarea" placeholder="Give us as much detail as you can so that we can best help you."></textarea>
					</div>

					<div className="uk-margin uk-grid-small uk-child-width-auto" uk-grid>
						<label><input className="uk-checkbox" type="checkbox" name="addToEmail" checked/> Add me to your email list</label>
					</div>

					<button className="uk-button">Submit</button>
					
				</fieldset>
			</form>
		);
	}

}


