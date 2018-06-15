import * as React from 'react';
import Map from './../partials/map';
import Address from './../partials/address';

const Contact = () => [
		<Map />,
		<Address />,
		<div className="col-md-6 offset-md-3 pb-3">
			<p className="text-center">For all new clients, we offer a free consultation.
				 During this time, we can discuss your specific needs and goals. We'll use
				 that information to put together a detailed strategy for 
				 how we can help you and your business reach them.</p>
		</div>
];

export default Contact;
