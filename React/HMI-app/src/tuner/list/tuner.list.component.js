import React from 'react';
import './tuner.list.component.css';
// import { Websocket } from '../../websocket/websocket.service';
import ListElements from '../../UI/ListElements'

export class TunerList extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			stationList: [],
			currentStation: {}
		};

	  	// this.ws = Websocket.getWS()
	  	// this.ws.onmessage = this.receive.bind(this); 
	}

	playStation () {
		console.warn('@@@ playStation');
	}

	componentDidMount () {
		const items = [{
			isFavorite: true,
			stationID: 1,
			name: 'Super stacja'
		},
		{
			isFavorite: true,
			stationID: 2,
			name: 'no stacja'
		}];

		this.setState({ stationList: items });
	}

	// receive (msg) {
	// 	if (msg.data.cmd === 'resTunerListItems') {
	// 		console.log(msg.data.cmd);
			
	// 	}
	// }

	render() {
		return (
			// <div className="list-container">
			// 	<ul>
			// 		<li className="list-item" onClick={this.playStation.bind(this.item)}>
			// 			<span className="fav-ico-container">
			// 				<span>LIST TUNER</span>
			// 				<img src={ require('../../assets/media/favorite_icon.png') } alt='' />
			// 			</span>
			// 			<span>{ this.item.name }</span>
			// 		</li>
			// 	</ul>
			// </div>
			<div className="list-container">
				<ListElements items={this.state.stationList} clicked={this.playStation}/>
			</div>
		);
	}
}