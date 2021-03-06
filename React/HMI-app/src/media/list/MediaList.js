import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../actions/actions';

import './MediaList.css';
import ListElements from '../../UI/ListElements';
import Spinner from '../../UI/Spinner';

class MediaList extends React.Component {
	playTrack (event, id) {
		console.warn('@@@ playTrack');
		this.props.WS.send(JSON.stringify({ cmd: 'reqPlayTrack', id: id }));
		this.props.setCurrentTrack(null);
		this.props.history.goBack();
	}

	// componentWillMount () {
	// 	console.log('!!!!!!!!!!!aa', this.props);
	// }

	render() {
		let mediaList = <ul style={{'width': '900px'}}><Spinner /></ul>;
		if (this.props.trackList) {
			mediaList = <ListElements items={this.props.trackList} clicked={this.playTrack.bind(this)}/>
		}

		return (
			<div className="list-container">
				{mediaList}
			</div>
		);
	}
}

export const mapStateToProps = state => {
	console.log('ÍTEMSSSSSSS', state);
	return {
		trackList: state.mediaItems,
		WS: state.webSocket
	}
}

export const mapDispatchToProps = dispatch => {
	return {
		setCurrentTrack: track => dispatch(Actions.setCurrentTrack(track))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaList);