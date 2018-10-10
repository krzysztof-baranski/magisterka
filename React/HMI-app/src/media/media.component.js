import React from 'react';
// import _ from 'lodash'
import './media.component.css';

import withWebsocket from '../websocket/websocket.service';
import * as Commands from '../websocket/Commands';

import Controls from '../UI/Controls';
import ProgressBar from '../UI/ProgressBar';
import Title from '../UI/Title';
import Spinner from '../UI/Spinner';
import SourceSelector from '../UI/SourceSelector';

class Media extends React.Component {

	state = {
		...this.state,
		currentTrack: null,
		currentSource: null,
		command: null
	};

	selectSource = (ev, data) => {
		console.log('GET SOURCE', data, this);
		this.props.WS.send(JSON.stringify({ cmd: 'reqSelectSource', source: data }));
	}

	openList = () => {
		this.props.history.push({
			pathname: this.props.match.url + '/list',
			state: { ...this.state }
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

	handleMessage = (msg) => {
		for (let i in msg) {
			let m = msg[i];
			switch (m.cmd) {
				case Commands.RES_GET_SOURCE:
					console.log('Current source');
					this.setState({ currentSource: m.source });
					break;
					case Commands.RES_CURRENT_TRACK:
					console.log('Current track');
					this.setState({ currentTrack : m.currentTrack});
				default:
					console.warn('Wrong message', m);
			}

			msg.splice(i, 1);
			
		}
	}


	// componentWillReceiveProps (props) {
	// 	console.log('will receive props', props);
	// }

	componentWillReceiveProps(data) {
		console.log('will update', data);
		if (data.msg) {
			this.handleMessage(data.msg);
		}
		
		
	}

	componentDidMount() {
		console.log('!QAA', this.props, this.state);
		this.WS = this.props.location.WS;
		this.WS.send(JSON.stringify({ cmd: 'reqGetSource' }));
		this.WS.send(JSON.stringify({ cmd: 'reqCurrentTrack' }));

		this.setState({ currentTrack : { trackID: 0, name: 'T', isFavorite: true, currentTime: 100, totalTime: 120, totalTracks: 4 }});
	}

	render() {
		console.log('RENDER', this.state);
		let media = <Spinner />;

		if (this.state.currentTrack) {
			media = (<div className="media-container">
				<SourceSelector currentSource={this.state.currentSource} selectSource={this.selectSource}/>
				<Title
					name={this.state.currentTrack.name}
					isFavorite={this.state.currentTrack.isFavorite} />
				<ProgressBar
					value={this.state.currentTrack.currentTime}
					max={this.state.currentTrack.totalTime}
					currentTime={this.changeSecondsToTime(this.state.currentTrack.currentTime)}
					totalTime={this.changeSecondsToTime(this.state.currentTrack.totalTime)}
					progressLabel={this.getProgressLabel()} />
				<Controls prev={this.prevTrack} next={this.nextTrack} openList={this.openList} />
				<div className="cover-art">
					<div className="cover-art-image"></div>
				</div>
			</div>);
		}
		return (<div>{media}</div>);
	}
}

export default Media;