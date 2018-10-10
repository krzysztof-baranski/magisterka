import React from 'react';
import './tuner.list.component.css';

import { connect } from 'react-redux';

// import { Websocket } from '../../websocket/websocket.service';
import ListElements from '../../UI/ListElements'

class TunerList extends React.Component {
	// constructor (props) {
	// 	super(props);
	// }

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

	componentWillReceiveProps (props) {
		console.log('[componentWillReceiveProps]', props);
	}

	// receive (msg) {
	// 	if (msg.data.cmd === 'resTunerListItems') {
	// 		console.log(msg.data.cmd);
			
	// 	}
	// }

	render() {
		let tunerList = 'dupa';
		if (this.props.stationList) {
			tunerList = <ListElements items={this.props.stationList} clicked={this.playStation}/>
		}

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
				{tunerList}
			</div>
		);
	}
}

export const mapStateToProps = state => {
	console.log('ÍTEMSSSSSSS', state);
	return {
		stationList: state.items
	}
}

export default connect(mapStateToProps)(TunerList);