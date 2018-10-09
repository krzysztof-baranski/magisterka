import React from 'react';
import './tuner.component.css';
import * as Commands from '../websocket/Commands';
import withWebsocket from '../websocket/websocket.service';
// import { withRouter } from 'react-router-dom';
// import Websocket from '../websocket/websocket.service';

import Controls from '../UI/Controls';
import Title from '../UI/Title';
import ProgressBar from '../UI/ProgressBar';
import Spinner from '../UI/Spinner';

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
			currentStation: null
		}
	}

	activateBand (band) {
		if (band === this.state.currentStation.band) {
			return;
		}

		this.WS.send(JSON.stringify({ cmd: 'reqChangeBand', band: band }));
		this.setState({ currentStation: null });
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

	handleMessage = (msg) => {
		for (let i in msg) {
			let m = msg[i];
			switch (m.cmd) {
				case Commands.RES_GET_STATION:
					console.log('Current station');
					this.setState({ currentStation: m.currentStation });
					break;
				// case Commands.RES_CURRENT_TRACK:
				// console.log('Current track');
				// this.setState({ currentTrack : m.currentTrack});
				default:
					console.warn('Wrong message', m);
			}

			msg.splice(i, 1);
		}
	}
	
	getActiveStation = () => {
		console.log('@@@!! ', this.state.currentStation, this.props);
	}

	componentWillReceiveProps(data) {
		console.log('will update', data);
		if (data.msg) {
			this.handleMessage(data.msg);
		}
	}

	componentDidMount() {
		this.getActiveStation();
		this.WS = this.props.location.WS;
		if (!this.state.currentStation) {
			this.WS.send(JSON.stringify({ cmd: 'reqCurrentStation' }));
		}
	}

	render() {
		let tuner = <Spinner />;

		if (this.state.currentStation) {
			tuner = (
				<div className="tuner-container">
					<Title
						name={this.state.currentStation.name}
						isFavorite={this.state.currentStation.isFavorite} />
					<ProgressBar
						value={this.state.currentStation.fraquence}
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
				</div>);
		}

		return (<div>{tuner}</div>);
	}
}

export default withWebsocket(Tuner);