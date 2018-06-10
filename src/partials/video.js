import React from 'react';
import Typewriter from './../lib/typewriter';
import video from './../assets/video.mp4';

const style = { 
	objectFit: 'initial', 
	minHeight: '300px', 
	height: '100%', 
	width: '100%', 
	maxHeight: '100%' 
};

const Video = () => (
	<div>
		<video autoPlay loop style={style}>
			<source type="video/mp4" src={video}/>
		</video>
		<div className="ml-home-overlay">
			<h1 className="text-white text-center"><Typewriter /></h1>
		</div>
	</div>
);

export default Video;
