import * as React from 'react';
import Email from './email';
import Typewriter from './../lib/typewriter';
import EngineeringIcons from './engineering-icons';

const src = "/static/632332824.mp4";
const style = { 
	objectFit: 'initial', 
	minHeight: '300px', 
	height: '100%', 
	width: '100%', 
	maxHeight: '100%' 
};
const textColor = { color: '#fff' };

const Home = () => (
	<div className="uk-height-viewport uk-inline uk-animation-fade" style={style}>
		<video autoPlay loop style={style}>
			<source type="video/mp4" src={src}/>
		</video>
		
		<div className="ml-home-overlay">
			<div className="uk-container uk-text-center">
				<br/>
				<h1 style={textColor} className="uk-color-primary uk-heading-inverse">
					<Typewriter></Typewriter>
				</h1>
				<hr/>
				<br/>
		  </div>
		</div>
		
		<div>
			<div className="uk-grid-collapse" data-uk-grid>
				<div className="uk-width-1-2@m uk-background-muted">
					<EngineeringIcons></EngineeringIcons>
				</div>
				<div className="uk-width-1-2@m">
					<Email></Email>
				</div>
			</div>
		</div>
  
	</div>
);

export default Home;
