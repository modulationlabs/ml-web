import React from 'react';
import GITHUB_ICON from './../assets/social/github.svg';
import TWITTER_ICON from './../assets/social/twitter.svg';
import FB_ICON from './../assets/social/facebook.svg';

const Footer = () => {

	const GITHUB_LINK = 'https://www.github.com/modulationlabs';
	const TWITTER_LINK = 'https://www.twitter.com/modulationlabs';
	const FB_LINK = 'https://www.facebook.com/modulationlabs';

	const CONTACT_NUMBER = '480.630.9861';
	const CONTACT_LOCATION = 'Scottsdale, Arizona';

	const iconStyles = { height: '30px' };

	return (
		<footer className="footer ml-footer bg-dark text-light pt-5">
			<div className="container">

				<div className="row shrink">
					<div className="col-md">
						<h5 className="text-center">About Us</h5>
						<p className="text-center">We are a boutique digital firm that delivers quantifiable results for your business.</p>
					</div>
					<div className="col-md">
						<h5 className="text-center">Services</h5>
						<ul className="list-unstyled text-center">
							<li>SEO</li>
							<li>Digital Property Management</li>
							<li>Web Development</li>
							<li></li>
						</ul>
					</div>
					<div className="col-md">
						<h5 className="text-center">Connect with Us</h5>
						<ul className="list-unstyled list-inline text-center">
							<li className="list-inline-item">
								<a href={GITHUB_LINK} className="">
									<img style={iconStyles} src={GITHUB_ICON} alt="GitHub"/>
								</a>
							</li>
							<li className="list-inline-item">
								<a href={TWITTER_LINK} className="">
									<img style={iconStyles} src={TWITTER_ICON} alt="Twitter"/>
								</a>
							</li>
							<li className="list-inline-item">
								<a href={FB_LINK} className="">
									<img style={iconStyles} src={FB_ICON} alt="Facebook"/>
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="row">
					<p className="text-center mx-auto">
						Modulation Labs | <a href="mailto:hello@modulation.io">hello@modulation.io</a> | {CONTACT_NUMBER}<br/>{CONTACT_LOCATION}
					</p>
				</div>

			</div>
		</footer>
	);

};

export default Footer;
