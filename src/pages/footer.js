import * as React from 'react';

export default class Footer extends React.Component {

	GITHUB_ICON = require('./../../../assets/GitHub-Mark.svg'); //http://www.iconsdb.com/icons/preview/dark-gray/github-11-xxl.png';
	GITHUB_LINK = 'https://www.github.com/modulationlabs';
	TWITTER_ICON = require('./../../../assets/Twitter_Social_Icon_White.svg');
	TWITTER_LINK = 'https://www.twitter.com/modulationlabs';
	FB_ICON = require('./../../../assets/FB-fLogo_2016.svg');
	FB_LINK = 'https://www.facebook.com/modulationlabs';

	CONTACT_NAME = 'Christopher Hill, Founder';
	CONTACT_NUMBER = '949.829.2622';
	CONTACT_LOCATION = 'Scottsdale, Arizona';

	iconStyles = { height: '60px' };
	textStyles = { color: '#efefef' };

	render() {
		return (
			<div className="ml-footer uk-position-bottom uk-position-relative">
				<br/>
				<div className="uk-container uk-container-center uk-text-center">
					<ul className="uk-subnav uk-subnav-line uk-flex-center">
						<li>
							<a href={this.GITHUB_LINK} className="uk-subnav uk-subnav-line uk-flex-center">
								<img style={this.iconStyles} src={this.GITHUB_ICON} alt="GitHub"/>
							</a>
						</li>
						<li>
							<a href={this.TWITTER_LINK} className="uk-subnav uk-subnav-line uk-flex-center">
								<img style={this.iconStyles} src={this.TWITTER_ICON} alt="Twitter"/>
							</a>
						</li>
						<li>
							<a href={this.FB_LINK} className="uk-subnav uk-subnav-line uk-flex-center">
								<img style={this.iconStyles} src={this.FB_ICON} alt="Facebook"/>
							</a>
						</li>
					</ul>
					<div className="uk-panel">
						<h6 style={this.textStyles}>Modulation Labs | <a href="mailto:hello@modulation.io">hello@modulation.io</a> | {this.CONTACT_NUMBER}<br/>{this.CONTACT_LOCATION}</h6>
					</div>
					<br/>
				</div>
			</div>
		);
	}

}
