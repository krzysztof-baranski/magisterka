import React from 'react';
import ol from 'openlayers';
import { connect } from 'react-redux';

import * as Actions from '../actions/actions';

import '../navigation/navigation.component.css';

class Navigation extends React.Component {
	map = null;

	setHomeAddress = () => {
		this.props.WS.send(JSON.stringify({ cmd: 'reqSetHomeAddress', address: { 
			country: 'Poland',
			city: 'Warszawa',
			street: 'Jerozolimskie',
			number: 1,
			zipCode: '22-222'
		} }))
	}

	componentDidMount() {
		this.map = new ol.Map({
			target: 'map',
			layers: [
				new ol.layer.Tile({
					source: new ol.source.OSM()
				})
			],
			view: new ol.View({
				center: ol.proj.fromLonLat([19.457216, 51.759445]), // Łódź
				zoom: 7
			})
		})
	}

	componentWillReceiveProps (props) {
		console.warn('@@@@ navi', props);
		this.map.getView().setCenter(ol.proj.fromLonLat([21.0042, 52.1347]));
	}

	render() {
		return (
			<div>
				<div onClick={this.setHomeAddress} 
					className="home-button active">Set HOME address</div>
				<div id='map' className='map'></div>
			</div>
		);
	}
}

const mapStateToProps = state => {
    return {
		WS: state.webSocket,
		homeAddress: state.homeAddress
    };
}

const mapDispatchToState = dispatch => {
	return {
		setHomeAddress	: address => dispatch(Actions.setHomeAddress(address))
	}
}

export default connect(mapStateToProps, mapDispatchToState)(Navigation);