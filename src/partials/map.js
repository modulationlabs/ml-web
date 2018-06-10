import * as React from 'react';

const style = {
	position: 'absolute',
	width: '100%',
	height: '600px',
	background: '#0052FF', //orange', //#00B5F4',
	opacity: '.3'
};

const Map = () => [
		<div style={style}></div>,
		<iframe
			title="contact"
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53146.08665004513!2d-111.96774933364176!3d33.64082363704616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b76e60d3ac509%3A0x89bb0a3c07a448af!2s20701+N+Scottsdale+Rd+%23107%2C+Scottsdale%2C+AZ+85255!5e0!3m2!1sen!2sus!4v1528663402463"
			width="100%" height="600" frameBorder="0" />
];

export default Map