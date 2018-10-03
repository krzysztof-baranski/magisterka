import React from 'react';
import './media.list.component.css';
import { Websocket } from '../../websocket/websocket.service';

export class MediaList extends React.Component {
	constructor (props) {
		super(props);
		this.items = [];
		this.item = {
			name: 'T1000',
			isFavorite: true
		};
	}

	playTrack () {
		console.warn('@@@ playTrack');
	}


	// receive (msg) {
	// 	if (msg.data.cmd === 'resTunerListItems') {
	// 		console.log(msg.data.cmd);
			
	// 	}
	// }

	render() {
		return (
			<div className="list-container">
				<ul>
					<li className="list-item" onClick={this.playTrack.bind(this)}>
						<span className="fav-ico-container">
							<img className="fav-ico" src={ require('../../assets/media/favorite_icon.png') } alt='' />
						</span>
						<span>{ this.item.name }</span>
					</li>
				</ul>
			</div>

		);
	}
}