import React from 'react';
import { Websocket } from '../../websocket/websocket.service';

export class TunerList extends React.Component {
	constructor (props) {
		super(props);
		this.stationList = [];
		this.item = {};
		let a = this.state;
		console.warn('@!@@!@@@!!!', a);

	  	// this.ws = Websocket.getWS()
	  	// this.ws.onmessage = this.receive.bind(this); 
	}

	playStation () {
		console.warn('@@@ playStation');
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
					<li className="list-item" onClick={this.playStation.bind(this.item)}>
						<span className="fav-ico-container">
							<span>LIST TUNER</span>
							<img className="fav-ico" src="assets/media/favorite_icon.png"/>
						</span>
						<span>{ this.item.name }</span>
					</li>
				</ul>
			</div>

		);
	}
}