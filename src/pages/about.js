import * as React from 'react';
import { BioCard } from './bio';

const About = () => (
	<div className="uk-container uk-animation-slide-top uk-height-viewport">
		<div className="uk-text-center">
			<br/>
			<h1 className="uk-heading-secondary">About Modulation Labs</h1>
			<p className="">Our team has produced big results for big brands.</p>
			<img width="800" src="/static/brands.png" alt="brands" />
			<hr className="uk-divider-icon"/>
			<div className="uk-flex uk-flex-center">
				<BioCard></BioCard>
			</div>
			<br/>
		</div>
	</div>
);

export default About;
