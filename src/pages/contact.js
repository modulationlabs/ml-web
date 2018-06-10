import * as React from 'react';
import ContactForm from './contact-form';

const style = {
	position: 'absolute',
	width: '100%',
	height: '600px',
	background: '#0052FF', //orange', //#00B5F4',
	opacity: '.3'
};

const Contact = () => (
	<div className="uk-animation-scale-up">
		<div>
			<div style={style}>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.11713465434!2d-117.75918878464084!3d33.65412668071605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdd5f6d662e49%3A0x523c19c5cd0d839!2s25319+Spectrum%2C+Irvine%2C+CA+92618!5e0!3m2!1sen!2sus!4v1508032340390" width="100%" height="600px">
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
