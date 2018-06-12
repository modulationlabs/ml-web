import React from 'react';
import Email from './email';
import EngineeringIcons from './../partials/engineering-icons';
import Video from './../partials/video';

const Home = () => [
	<Video key={1} />,
	<div key={2}>
		<div className="container">
			<div className="text-center">
				<EngineeringIcons></EngineeringIcons>
			</div>
			<div className="">
				<Email></Email>
			</div>
		</div>
	</div>
];

export default Home;
