import React from 'react';
// import _ from 'lodash'
import './media.component.css';

import Controls from '../UI/Controls';
import ProgressBar from '../UI/ProgressBar';
import Title from '../UI/Title';

class Media extends React.Component {

	state = {
		currentTrack: {}
	};

	openList = () => {
		this.props.history.push({
			pathname: this.props.match.url + '/list',
			state: {...this.state}
		});
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
		if (this.state.currentTrack.trackID) {
			label = 'Track ' + this.state.currentTrack.trackID + '/' + this.state.currentTrack.totalTracks;
		}

		return label;
	}

	componentWillMount () {
		console.log('!QAA', this.props, this.state);
		this.WS = this.props.location.WS;
		const track = {
			currentTime: 30,
			totalTime: 302,
			trackID: 1,
			totalTracks: 101,
			isPlaying: true,
			isFavorite: true,
			name: 'Ultra Track 1'
		};

		this.setState({ currentTrack: track });
	}

	componentDidMount () {

	}

	render() {

		return (
			<div className="media-container">
				<Title
					name={this.state.currentTrack.name}
					isFavorite={this.state.currentTrack.isFavorite} />
				<ProgressBar
					value={this.state.currentTrack.currentTime}
					max={this.state.currentTrack.totalTime}
					currentTime={this.changeSecondsToTime(this.state.currentTrack.currentTime)}
					totalTime={this.changeSecondsToTime(this.state.currentTrack.totalTime)}
					progressLabel={this.getProgressLabel()} />
				<Controls prevTrack={this.prevTrack} nextTrack={this.nextTrack} openList={this.openList} />
				<div className="cover-art">
					<div className="cover-art-image"></div>
				</div>
			</div>
		);
	}
}

export default Media;