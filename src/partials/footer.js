import React from 'react';
import GITHUB_ICON from './../assets/social/github.svg';
import TWITTER_ICON from './../assets/social/twitter.svg';
import FB_ICON from './../assets/social/facebook.svg';

const Footer = () => {

	const GITHUB_LINK = 'https://www.github.com/modulationlabs';
	const TWITTER_LINK = 'https://www.twitter.com/modulationlabs';
	const FB_LINK = 'https://www.facebook.com/modulationlabs';

	const CONTACT_NAME = 'Christopher Hill, Founder';
	const CONTACT_NUMBER = '949.829.2622';
	const CONTACT_LOCATION = 'Scottsdale, Arizona';

	const iconStyles = { height: '60px' };
	const textStyles = { color: '#efefef' };

	return (
		<div className="ml-footer uk-position-bottom uk-position-relative">
			<br/>
			<div className="uk-container uk-container-center uk-text-center">
				<ul className="uk-subnav uk-subnav-line uk-flex-center">
					<li>
						<a href={GITHUB_LINK} className="uk-subnav uk-subnav-line uk-flex-center">
							<img style={iconStyles} src={GITHUB_ICON} alt="GitHub"/>
						</a>
					</li>
					<li>
						<a href={TWITTER_LINK} className="uk-subnav uk-subnav-line uk-flex-center">
							<img style={iconStyles} src={TWITTER_ICON} alt="Twitter"/>
						</a>
					</li>
					<li>
						<a href={FB_LINK} className="uk-subnav uk-subnav-line uk-flex-center">
							<img style={iconStyles} src={FB_ICON} alt="Facebook"/>
						</a>
					</li>
				</ul>
				<div className="uk-panel">
					<h6 style={textStyles}>Modulation Labs | <a href="mailto:hello@modulation.io">hello@modulation.io</a> | {CONTACT_NUMBER}<br/>{CONTACT_LOCATION}</h6>
				</div>
				<br/>
			</div>
		</div>
	);

};

export default Footer;
