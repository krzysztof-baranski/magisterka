import React from 'react';
import { MediaService } from './media.service';
import _ from 'lodash'
import './media.component.css';

export class Media extends React.Component {

	constructor(props) {
		super(props);

		if (this.props.location.props && this.props.location.props.mediaservice) {
			this.mediaService = this.props.location.props.mediaservice;
		} else {
			console.warn('!!! MediaService created in media.component!');
			this.mediaService = new MediaService();
		}
		this.currentTrack = this.mediaService.currentTrack;
	}

	openList () {
		this.props.history.push('/media/list');
	} 

	playTrack (track) {
	  	console.warn('PLAY TRACK ', track);
	  	// this.webSocketService.send(JSON.stringify({ cmd: 'reqPlayTrack', trackID: track.trackID })); 
	} 

	prevTrack () {
		let that = this;
		let track;
		let index;

		index = _.findIndex(this.mediaService.listItems, function (item) {
			return item.trackID === that.currentTrack.trackID;
		});

		if (index === 0) {
			index = this.mediaService.listItems.length;
		} 
		track = this.mediaService.listItems[index - 1]
		this.playTrack(track); 
	} 

	nextTrack () {
		let that = this;
		let track;
		let index;

		index = _.findIndex(this.mediaService.listItems, function (item) {
			return item.trackID === that.currentTrack.trackID;
		});

		if (index === this.mediaService.listItems.length - 1) {
			index = -1;
		} 
		track = this.mediaService.listItems[index + 1]
		this.playTrack(track); 
	} 

	render() {
		return (
			<div className="media-container">
				<div className="track-title">
					<span className="fav-ico-container">
						{ this.currentTrack.isFavorite && <img className="fav-ico" src={require('../assets/media/favorite_icon.png')} /> }
					</span>
					<span>
						{ this.currentTrack.name }
					</span>
				</div>
				<div className="track-info">
					<div>
						<progress value="34" max="100"></progress>
					</div>
					<div className="time-info">
						<span className="current-time">1:00</span>
						{ (this.currentTrack.trackID >= 0 && this.mediaService.listItems.length) && 
							<span className="track-number">Track { this.currentTrack.trackID + 1 } / {this.mediaService.listItems.length }</span> }
						
						{ ((!this.currentTrack.trackID && this.currentTrack.trackID != 0) || !this.mediaService.listItems.length) && 
							<span className="track-number" >Track --/--</span> }
						<span className="total-time">3:02</span>
					</div>
				</div>
				<div className="controls">
					<button name="prev" onClick={this.prevTrack.bind(this)}></button>
					<button className="list-button" onClick={this.openList.bind(this)}>LIST</button>
					<button name="next" onClick={this.nextTrack.bind(this)} style= { {transform: 'rotateY(180deg)' } }></button>
				</div>
				<div className="cover-art">
					<div className="cover-art-image"></div>
				</div>
			</div>
		);
	}
}