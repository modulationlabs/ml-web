import * as React from 'react'

import ANGULAR from '../assets/tech/angular.svg';
import JAVASCRIPT from '../assets/tech/javascript.svg';
import REACT from '../assets/tech/react.svg';
import WEBPACK from '../assets/tech/webpack.svg';
import TYPESCRIPT from '../assets/tech/typescript.svg';
import GITHUB from '../assets/tech/github.svg';
import DOCKER from '../assets/tech/docker.svg';
import NODE from '../assets/tech/nodejs.svg';
import CONTENTFUL from '../assets/tech/contentful.svg';
import SASS from '../assets/tech/sass.svg';
import NGINX from '../assets/tech/nginx.svg';

const ARR = [
	{ img: NODE, alt: 'NodeJS', link: 'https://nodejs.org' },
	{ img: JAVASCRIPT, alt: 'Javascript', link: 'https://www.javascript.com' },
	{ img: TYPESCRIPT, alt: 'Typescript', link: 'https://www.typescriptlang.org' },
	{ img: REACT, alt: 'ReactJS', link: 'https://facebook.github.io/react/' },
	{ img: ANGULAR, alt: 'Angular', link: 'https://www.angular.io' },
	{ img: WEBPACK, alt: 'Webpack', link: 'https://webpack.js.org' },
	{ img: DOCKER, alt: 'Docker', link: 'https://www.docker.com' },
	{ img: GITHUB, alt: 'GitHub', link: 'https://www.github.com/modulationlabs' },
	{ img: CONTENTFUL, alt: 'Contentful', link: 'https://www.contentful.com' },
	{ img: SASS, alt: 'SASS', link: 'https://www.sass-lang.com' },
	{ img: NGINX, alt: 'Nginx', link: 'https://www.nginx.org' }
];

const iconStyle = {
	width: '40px',
	margin: '0 5px'
}

const EngineeringIcons = () => {

	return (
		<div className="uk-text-center uk-padding">
			<br/>
			<p className="">We specialize in modern tools that deliver proven results.</p>
			<div className="">
				{ ARR.map((entry, i) => (<a key={i} href={entry.link}><img style={iconStyle} src={entry.img} alt={entry.alt} /></a>))}
			</div>
			<br/><br/>
		</div>
	);

}

export default EngineeringIcons;
