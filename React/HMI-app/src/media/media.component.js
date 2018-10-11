import React from 'react';
// import _ from 'lodash'
import './media.component.css';
import { connect } from 'react-redux';

import * as Commands from '../websocket/Commands';
import * as Actions from '../actions/actions';

import Controls from '../UI/Controls';
import ProgressBar from '../UI/ProgressBar';
import Title from '../UI/Title';
import Spinner from '../UI/Spinner';
import SourceSelector from '../UI/SourceSelector';
import CoverArt from '../UI/CoverArt';

class Media extends React.Component {

	selectSource = (ev, data) => {
		console.log('GET SOURCE', data, this);
		this.props.WS.send(JSON.stringify({ cmd: 'reqSelectSource', source: data }));
	}

	openList = () => {
		this.props.history.push('/media/list');
		this.props.WS.send(JSON.stringify({ cmd: 'reqMediaListItems' }));
		console.warn('@@@ openList');
	}

	playTrack = () => {
		console.warn('PLAY TRACK ');
	}

	prevTrack = () => {
		console.warn('PLAY PREV TRACK ');

	}

	nextTrack = () => {
		console.warn('PLAY NEXT TRACK ');
	}

	changeSecondsToTime = (time) => {
		switch (true) {
			case time < 10:
				time = '00:0' + time;
				break;
			case time >= 10 && time < 60:
				time = '00:' + time;
				break;
			default:
				let mins = Math.floor(time / 60);
				let secs = time % 60;
				if (mins < 10) {
					mins = '0' + mins;
				}
				if (secs < 10) {
					secs = '0' + secs;
				}
				time = mins + ':' + secs;
				break;
		}

		return time;
	}

	getProgressLabel = () => {
		let label = '';
		if (this.props.currentTrack.trackID) {
			label = 'Track ' + this.props.currentTrack.trackID + '/' + this.props.currentTrack.totalTracks;
		}

		return label;
	}

	componentWillReceiveProps(data) {
		console.log('[componentWillReceiveProps]', data);
	}
	
	componentWillUpdate(props, a) {
		console.log('[componentWillUpdate]', props, a);

	}

	componentDidMount() {
		console.log('!QAA', this.props, this.state);
		this.props.WS.send(JSON.stringify({ cmd: 'reqGetSource' }));
		this.props.WS.send(JSON.stringify({ cmd: 'reqCurrentTrack' }));

		// this.setState({ currentTrack : { trackID: 0, name: 'T', isFavorite: true, currentTime: 100, totalTime: 120, totalTracks: 4 }});
	}

	render() {
		console.log('RENDER', this.state);
		let media = <Spinner />;

		if (this.props.currentTrack) {
			media = (<div className="media-container">
				<SourceSelector currentSource={this.props.currentSource} selectSource={this.selectSource.bind(this)} match={this.props.match}/>
				<Title
					name={this.props.currentTrack.title || this.props.currentTrack.name}
					isFavorite={this.props.currentTrack.isFavorite} />
				<ProgressBar
					value={this.props.currentTrack.currentTime}
					max={this.props.currentTrack.totalTime}
					currentTime={this.changeSecondsToTime(this.props.currentTrack.currentTime)}
					totalTime={this.changeSecondsToTime(this.props.currentTrack.totalTime)}
					progressLabel={this.getProgressLabel()} />
				<Controls prev={this.prevTrack} next={this.nextTrack} openList={this.openList} />
				<CoverArt />
			</div>);
		}
		return (<div>{media}</div>);
	}
}

const mapStateToProps = state => {
    return {
		WS: state.webSocket,
		currentSource: state.currentSource,
		currentTrack: state.currentTrack
    };
}

const mapDispatchToState = dispatch => {
	return {
		setCurrentSource	: source => dispatch(Actions.setCurrentSource(source)),
		setCurrentTrack		: track => dispatch(Actions.setCurrentTrack(track))
	}
}

export default connect(mapStateToProps, mapDispatchToState)(Media);