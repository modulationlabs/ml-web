import * as React from 'react';

const NotFound = () => (
	<div className="uk-container uk-height-viewport uk-text-center">
		<br/>
		<div className="uk-alert-danger" data-uk-alert>
			<a className="uk-alert-close" data-uk-close></a>
			<p className="uk-text-center">404. Sorry, but we couldn't find the page you requested.</p>
		</div>
		<br/>
	</div>
);

export default NotFound;
