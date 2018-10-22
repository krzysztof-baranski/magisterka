import React from 'react';

import * as Actions from '../../actions/actions';
import { connect } from 'react-redux';

import ListElements from '../../UI/ListElements';
import Spinner from '../../UI/Spinner';

class RecentDestinations extends React.Component {
	// constructor (props) {
	// 	super(props);
    // }
    items = [];

	goToDestination = (e, address) => {
		console.warn('@@@ address', address);
		this.props.WS.send(JSON.stringify({ cmd: 'reqSetAddress', address: address }));
		this.props.history.goBack();
	}

	componentWillMount () {
		this.items = [{
            id: 0,
			country: 'Poland',
			zipCode: 111,
            city: 'Łódź',
            street: 'Al. Politechniki'
		},
		{
            id: 1,
			country: 'Germany',
			zipCode: 333,
            city: 'Berlin',
            street: 'Hitler Strasse'
		}];

		// this.setState({ stationList: items });
	}

	// componentWillReceiveProps (props) {
	// 	console.warn('@@@@ navi', props);
	// 	if (props.address && props.address.country) {
	// 		this.setState({ loading: false, showDestInput: false });
	// 	}

	// 	if (props.homeAddress && props.homeAddress.country) {
	// 		this.setState({ loading: false, showHomeDestInput: false });
	// 	}
	// }

	// receive (msg) {
	// 	if (msg.data.cmd === 'resTunerListItems') {
	// 		console.log(msg.data.cmd);
			
	// 	}
	// }

	render() {
		let list = <ul style={{ 'width': '900px' }}><Spinner /></ul>;
		if (this.props.recentDestinations || true) {
			list = <ListElements items={this.items} clicked={this.goToDestination.bind(this)}/>
		}

		return (
			<div className="list-container">
				{list}
			</div>
		);
	}
}

export const mapStateToProps = state => {
	console.log('ÍTEMSSSSSSS', state);
	return {
		WS: state.webSocket
	}
}

export const mapDispatchToProps = dispatch => {
	return {
		// setCurrentStation: station => dispatch(Actions.setCurrentStation(station))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RecentDestinations);