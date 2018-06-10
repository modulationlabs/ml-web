import * as React from 'react';
import ContactForm from './../partials/contact-form';

const style = {
	position: 'absolute',
	width: '100%',
	height: '600px',
	background: '#0052FF', //orange', //#00B5F4',
	opacity: '.3'
};

const Contact = () => (
	<div className="uk-animation-scale-up">
		<div style={style}>
			<div>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.0604918404!2d-111.93031898432211!3d33.655594445880254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b76bbd4d17051%3A0x82c02f72aa979f4!2s6800+E+Mayo+Blvd+%237411%2C+Phoenix%2C+AZ+85054!5e0!3m2!1sen!2sus!4v1528608749880" width="100%" height="600px">
				</iframe>
			</div>
		</div>
		<div className="uk-grid">
			<div className="uk-width-1-2">
				<div className="uk-container">
					<br/>
					<h4 className="uk-heading-secondary uk-heading-divider uk-text-uppercase">Scottsdale, AZ</h4>
					<address>
						<ul className="uk-list">
							<li>6800 E Mayo Blvd</li>
							<li>Phoenix, AZ 85054</li>	
							<li>949.829.2622</li>
							<li><a href="mailto:hello@modulation.io">hello@modulation.io</a></li>
						</ul>
					</address>
					<br/>
				</div>
			</div>
			<div className="uk-width-1-2">
				<div className="uk-container">
					<br/>
					<h4 className="uk-heading-secondary uk-text-uppercase uk-heading-divider">Contact Us</h4>
					<ContactForm></ContactForm>
					<br/>
				</div>
			</div>
		</div>
	</div>
);

export default Contact;
