import React from 'react';
import './tuner.component.css';
import { withRouter } from 'react-router-dom';
import { Websocket } from '../websocket/websocket.service';

export class Tuner extends React.Component {
	constructor(props) {
		super(props);

		this.band = 'fm';
		this.currentStationFM = {
	  		fraquence: 101.1, // 87,5–108
	  		name: 'Open.fm',
	  		isFavorite: true,
	  		band: 'fm'
	  	}

	  	this.currentStationAM = {
	  		fraquence: 554, // 300–3000 kHz
	  		name: 'Radio AMmm',
	  		isFavorite: true,
	  		band: 'am'
	  	}
	  	this.currentStation = this.currentStationFM;
	}


	activateBand (band) {
		if (band === 'am') {
		  	this.currentStation = this.currentStationAM;
	  	} else if (band === 'fm') {
	  		this.currentStation = this.currentStationFM;
	  	} 
	}

	prevStation () {
		console.warn('@@ prevStation');
	}

	nextStation () {
		console.warn('@@ nextStation');
	}

	openList () {
		this.props.history.push('/tuner/list');
		Websocket.send(JSON.stringify({ cmd: 'reqTunerListItems', band: this.band }));
		console.warn('@@@ openList');
	}

	render() {
		return (
			<div>
				<div className="station-title">
					<span className="fav-ico-container">
						<img className="fav-ico" src="assets/tuner/favorite_icon.png" />
					</span>
					<span>
						{ this.currentStation.name }
					</span>
				</div>
				<div className="station-info">
					<div>
						<progress value="{ currentStation.fraquence }" max="3000" min="300"></progress>
					</div>
					<div className="fraquence-info">
						<span className="station-fraquence">{ this.currentStation.fraquence }kHz</span>
					</div>
				</div>
				<div className="controls">
					<button name="prev" onClick={this.prevStation.bind(this)}></button>
					<button className="list-button" onClick={this.openList.bind(this)}>LIST</button>
					<button name="next"  onClick={this.nextStation.bind(this)} style={ {transform: 'rotateY(180deg)' } }></button>
				</div>
				<div className="band">
					<div onClick={this.activateBand.bind(this, 'fm')}>FM</div>
					<div onClick={this.activateBand.bind(this, 'am')}>AM</div>
				</div>
			</div>
		);
	}
}