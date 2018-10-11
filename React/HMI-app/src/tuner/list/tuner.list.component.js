import React from 'react';
import './tuner.list.component.css';

import * as Actions from '../../actions/actions';
import { connect } from 'react-redux';

// import { Websocket } from '../../websocket/websocket.service';
import ListElements from '../../UI/ListElements'

class TunerList extends React.Component {
	// constructor (props) {
	// 	super(props);
	// }

	playStation = (e, id) => {
		console.warn('@@@ playStation', id);
		this.props.WS.send(JSON.stringify({ cmd: 'reqPlayStation', id: id }));
		this.props.setCurrentStation(null);
		this.props.history.goBack();
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
			tunerList = <ListElements items={this.props.stationList} clicked={this.playStation.bind(this)}/>
		}

		return (
			<div className="list-container">
				{tunerList}
			</div>
		);
	}
}

export const mapStateToProps = state => {
	console.log('ÍTEMSSSSSSS', state);
	return {
		stationList: state.items,
		WS: state.webSocket
	}
}

export const mapDispatchToProps = dispatch => {
	return {
		setCurrentStation: station => dispatch(Actions.setCurrentStation(station))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TunerList);