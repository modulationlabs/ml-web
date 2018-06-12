import React from 'react';

const TEXT_STRINGS = [
	'How does your digital presence stand out from the crowd?',
	'Are you ready to face cybersecurity threats?',
	'What\'s holding you back from creating the product of your dreams?',
	'We are leaders that can help you strategize for a rich future.',
	'Improve your SEO and get your page ranked.',
	'Speed is everything. Turbocharge your web presence.',
	'Searching for talent? We can help you find the right fit.',
	'In a pinch? Let us help you deliver.'
]

const TIME_PER_STRING = 10000;
const TYPE_MIN_TIME = 50;
const TYPE_MAX_TIME = 100;

export default class Typewriter extends React.Component {

	constructor() {
		super();
		this.state = { curIndex: 0, textValue: '' };
		this.intervals = [];
		this.timeouts = [];
		this.writeText = this.writeText.bind(this);
		this.getRandom = this.getRandom.bind(this);
	}

	getRandom(min, max) {
		return parseInt(Math.random() * (max - min) + min, 10);
	}

	clearTimeouts() {
		for (let i = 0; i < this.timeouts.length; i++) {
			clearTimeout(this.timeouts[i]);
		}
	}

	writeText(index) {
		let textStr = TEXT_STRINGS[index];
		let len = textStr.length;
		this.clearTimeouts();
		let timeoutArr = [];

		for (let i = 0; i <= len; i++) {
			let timeout = this.getRandom(TYPE_MIN_TIME, TYPE_MAX_TIME);
			timeoutArr.push(timeout);
		}

		let totalTimeoutLength = 0;

		timeoutArr.forEach((timeoutLength, i) => {
			totalTimeoutLength += timeoutLength;
			const textValue = textStr.slice(0, i);
			let timeout = setTimeout(() => {
				this.setState({ textValue });
			}, totalTimeoutLength);	
			this.timeouts.push(timeout);
		});
	}

	componentDidMount() {
		const totalStrings = TEXT_STRINGS.length;
		this.writeText(this.state.curIndex);
		let intervals = setInterval(() => {
			let { curIndex } = this.state;
			curIndex = (curIndex += 1) % totalStrings;
			this.setState({ curIndex }, () => {
				this.writeText(this.state.curIndex);
			});
		}, TIME_PER_STRING);
		this.intervals.push(intervals);
	}

	componentWillUnmount() {
		this.intervals.forEach((interval) => clearInterval(interval));
	}

	render() {
		return (
				<span>{this.state.textValue}</span>
		);
	}

}
