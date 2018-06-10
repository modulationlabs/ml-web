import * as React from 'react';
import { ConnectedRouter } from 'react-router-redux';

import Root from './root';

export default class App extends React.Component {

	render() {
		const {
			routerId,
			history
		} = this.props;

		return (
			<ConnectedRouter key={routerId} history={history}>
				<Root />
			</ConnectedRouter>
		);
	}

}
