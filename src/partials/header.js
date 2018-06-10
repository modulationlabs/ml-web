import React from 'react';
import logo from './../assets/ml.svg';

const Header = () => {
	return (
		<div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom box-shadow">
			<h5 className="my-0 mr-md-auto font-weight-normal">
				<img height={60} src={logo} alt="Modulation Labs" />
			</h5>
			<nav className="my-2 my-md-0 mr-md-3">
				<a className="p-2 text-dark" href="/">Home</a>
				{/* <a className="p-2 text-dark" href="/enterprise">Services</a> */}
				<a className="p-2 text-dark" href="/contact">Contact</a>
			</nav>
			<a className="btn btn-outline-primary" href>Customer Login</a>
		</div>
	)
};

export default Header;
