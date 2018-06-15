import React from 'react';
import { RotateLoader } from 'react-spinners';

const Spinner = (props) =>

	<div className="ml-spinner">
		<RotateLoader color={`RGBA(102, 178, 234, 1.00)`} />
	</div>

export default Spinner;