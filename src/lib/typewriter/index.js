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
		this.setType = this.setType.bind(this);
		this.getRandomInterval = this.getRandomInterval.bind(this);
	}

	getRandomInterval(min, max) {
		return parseInt(Math.random() * (max - min) + min, 10);
	}

	clearTimeouts() {
		for (let i = 0; i < this.timeouts.length; i++) {
			clearTimeout(this.timeouts[i]);
		}
	}

	setType() {
		let index = this.state.curIndex;
		if (!TEXT_STRINGS[index] && !TEXT_STRINGS[index].length) return;
		let len = TEXT_STRINGS[index].length;

		this.clearTimeouts();
		let intervals = [];

		for (let i = 0; i <= len; i++) {
			let interval = this.getRandomInterval(TYPE_MIN_TIME, TYPE_MAX_TIME);
			intervals.push(interval);
		}

		// [100, 200, 150, etc]

		let totalTime = 0;

		intervals.forEach((interval, i) => { 
			totalTime += interval;
			let timeout = setTimeout(() => {
				this.setState({ textValue: TEXT_STRINGS[index].slice(0, i) });
			}, totalTime);	
			this.timeouts.push(timeout);
		});

	}

	componentDidMount() {
		let self = this;
		this.setType();

		let setString = setInterval(() => { 
			let curIndex = self.state.curIndex += 1;
			this.setState({ curIndex: curIndex || 0 });
			this.setType();
		}, TIME_PER_STRING);
		
		this.intervals.push(setString);
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
