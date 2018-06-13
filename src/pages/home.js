import React from 'react';
import Email from './email';
import EngineeringIcons from './../partials/engineering-icons';
import Video from './../partials/video';

const Home = () => [
	<Video key={1} />,
	<div key={2}>
		<div className="container-fluid">
			<div className="text-center p-5">
				<h1 className="text-muted">Modulation Labs</h1>
				<h4 className="text-muted">We are a boutique digital firm with Silicon Valley roots.</h4>
				<p className="">We offer services in Search Engine Optimization (SEO) and Web Application Development.<br />We specialize in modern tools that deliver proven results for your business.</p>
				<EngineeringIcons></EngineeringIcons>
			</div>
			<div className="bg-light text-center color-light p-5">
				<h2 className="text-muted">Subscribe to our Newsletter</h2>
				<h5 className="text-muted">Free tips direct to your inbox.</h5>
				<p className="col-md-6 offset-md-3">Just getting started? We'll send you tips for SEO and web development direct to your inbox every week! We promise not to spam you.</p>
				<Email></Email>
			</div>
		</div>
	</div>
];

export default Home;
