import React from 'react';
import { connect } from 'react-redux';

import './Tuner.css';

import * as Actions from '../actions/actions';
import Controls from '../UI/Controls';
import Title from '../UI/Title';
import ProgressBar from '../UI/ProgressBar';
import Spinner from '../UI/Spinner';
import SourceSelector from '../UI/SourceSelector';
import CoverArt from '../UI/CoverArt';

class Tuner extends React.Component {
	constructor(props) {
		super(props);

		this.band = 'fm';
		// this.currentStationFM = {
		// 	fraquence: 88, // 87,5–108
		// 	name: 'Open.fm',
		// 	isFavorite: true,
		// 	band: 'fm'
		// }

		// this.currentStationAM = {
		// 	fraquence: 301, // 300–3000 kHz
		// 	name: 'Radio AMmm',
		// 	isFavorite: true,
		// 	band: 'am'
		// }
	
		this.state = {
			...this.state
		}
	}

	activateBand (ev, band) {
		if (band === this.props.currentStation.band) {
			return;
		}

		this.props.WS.send(JSON.stringify({ cmd: 'reqChangeBand', band: band }));
		// this.setState({ currentStation: null });
		this.props.setCurrentStation(null);
	}

	prevStation() {
		console.warn('@@ prevStation');
	}

	nextStation() {
		console.warn('@@ nextStation');
	}

	openList = () => {
		this.props.history.push('/tuner/list');
		this.props.WS.send(JSON.stringify({ cmd: 'reqTunerListItems', band: this.band }));
		console.warn('@@@ openList');
	}

	getProgressLabel = () => {
		let label = '';

		if (this.props.currentStation.band === 'am') {
			label = this.props.currentStation.fraquence + 'MHz';
		} else {
			label = this.props.currentStation.fraquence + 'kHz';
		}

		return label;
	}
	
	getActiveStation = () => {
		console.log('@@@!! ', this.props);
	}

	componentWillReceiveProps(data) {
	}

	componentDidMount() {
		this.getActiveStation();
		if (!this.props.currentStation) {
			this.props.WS.send(JSON.stringify({ cmd: 'reqCurrentStation' }));
		}
	}

	render() {
		let tuner = <Spinner />;

		if (this.props.currentStation) {
			tuner = (
				<div className="tuner-container">
					<SourceSelector activateBand={this.activateBand.bind(this)} currentStation={this.props.currentStation} match={this.props.match} />
					<Title
						name={this.props.currentStation.name}
						isFavorite={this.props.currentStation.isFavorite} />
					<ProgressBar
						value={this.props.currentStation.fraquence}
						max={this.props.currentStation.band === 'fm' ? 108 : 3000}
						min={this.props.currentStation.band === 'fm' ? 87.5 : 300}
						progressLabel={this.getProgressLabel()} />
					<Controls prev={this.prevStation} next={this.nextStation} openList={this.openList} />
					<CoverArt image={require('../assets/media/coverart.png')}/>
				</div>);
		}

		return (<div>{tuner}</div>);
	}
}


const mapStateToProps = state => {
    return {
		WS: state.webSocket,
		currentStation: state.currentStation
    };
}

const mapDispatchToState = dispatch => {
	return {
		setCurrentStation	: station => dispatch(Actions.setCurrentStation(station))
	}
}

export default connect(mapStateToProps, mapDispatchToState)(Tuner);