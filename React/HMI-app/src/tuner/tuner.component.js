import React from 'react';
import './tuner.component.css';
// import { withRouter } from 'react-router-dom';
// import Websocket from '../websocket/websocket.service';

import Controls from '../UI/Controls';
import Title from '../UI/Title';
import ProgressBar from '../UI/ProgressBar';

class Tuner extends React.Component {
	constructor(props) {
		super(props);
		console.log('Tuner props', this.props);

		this.band = 'fm';
		this.currentStationFM = {
			fraquence: 88, // 87,5–108
			name: 'Open.fm',
			isFavorite: true,
			band: 'fm'
		}

		this.currentStationAM = {
			fraquence: 301, // 300–3000 kHz
			name: 'Radio AMmm',
			isFavorite: true,
			band: 'am'
		}
		this.state = {
			...this.state,
			currentStation: this.currentStationFM,
			WS: this.props.location.WS
		}
	}

	getActiveStation = () => {
		console.log('@@@!! ', this.state.currentStation, this.props);
	}

	componentDidMount() {
		this.getActiveStation();
	}

	activateBand(band) {
		let newBand = this.currentStationAM;

		if (band === 'fm') {
			newBand = this.currentStationFM;
		}

		this.setState({ currentStation: newBand });
	}

	prevStation() {
		console.warn('@@ prevStation');
	}

	nextStation() {
		console.warn('@@ nextStation');
	}

	openList = () => {
		this.props.history.push('/tuner/list');
		// Websocket.send(JSON.stringify({ cmd: 'reqTunerListItems', band: this.band }));
		console.warn('@@@ openList');
	}

	getProgressLabel = () => {
		let label = '';

		if (this.state.currentStation.band === 'am') {
			label = this.state.currentStation.fraquence + 'MHz';
		} else {
			label = this.state.currentStation.fraquence + 'kHz';
		}

		return label;
	}

	render() {
		return (
			<div className="tuner-container">
				<Title
					name={this.state.currentStation.name}
					isFavorite={this.state.currentStation.isFavorite} />
				<ProgressBar
					value={this.state.currentStation.fraquence }
					max={this.state.currentStation.band === 'fm' ? 108 : 3000}
					min={this.state.currentStation.band === 'fm' ? 87.5 : 300}
					progressLabel={this.getProgressLabel()} />
				<Controls prev={this.prevStation} next={this.nextStation} openList={this.openList} />
				<div className="band">
					<div className={this.state.currentStation.band === 'fm' ? 'active' : ''}
						onClick={this.activateBand.bind(this, 'fm')}>FM</div>
					<div className={this.state.currentStation.band === 'am' ? 'active' : ''}
						onClick={this.activateBand.bind(this, 'am')}>AM</div>
				</div>
			</div>
		);
	}
}

export default Tuner;