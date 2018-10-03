import React from 'react';
import './media.list.component.css';
// import { Websocket } from '../../websocket/websocket.service';
import MediaListElements from '../UI/MediaListElements';

export class MediaList extends React.Component {
	constructor (props) {
		super(props);
		this.items = [{			
			currentTime:30,
			isFavorite:true,
			isPlaying:true,
			name:"Ultra Track 1",
			totalTime:302,
			totalTracks:101,
			trackID:1
		},
		{			
			currentTime:30,
			isFavorite:true,
			isPlaying:true,
			name:"Ultra Track 2",
			totalTime:302,
			totalTracks:101,
			trackID:2
		},
		{			
			currentTime:30,
			isFavorite:true,
			isPlaying:true,
			name:"Ultra Track 3",
			totalTime:302,
			totalTracks:101,
			trackID:3
		}];
		this.currentTrack = this.props.location.state.currentTrack;
	}

	playTrack (event, data) {
		console.warn('@@@ playTrack');
	}

	componentWillMount () {
		console.log('!!!!!!!!!!!aa', this.props);
	}

	// receive (msg) {
	// 	if (msg.data.cmd === 'resTunerListItems') {
	// 		console.log(msg.data.cmd);
			
	// 	}
	// }

	render() {
		return (
			<div className="list-container">
				<MediaListElements items={this.items} clicked={this.playTrack}/>
			</div>

		);
	}
}