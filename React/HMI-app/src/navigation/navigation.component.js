import React from 'react';
import ol from 'openlayers';
import { connect } from 'react-redux';

import * as Actions from '../actions/actions';
import EnterAddress from './EnterAddress';

import '../navigation/navigation.component.css';

class Navigation extends React.Component {
	map = null;
	address = {};
	state = {
		showDestInput: false,
		address: {},
		loading: false
	}

	setHomeAddress = () => {
		this.props.WS.send(JSON.stringify({
			cmd: 'reqSetHomeAddress', address: {
				country: 'Poland',
				city: 'Warszawa',
				street: 'Jerozolimskie',
				number: 1,
				zipCode: '22-222'
			}
		}))
	}

	// setAddress = (aa) => {
	// 	console.warn('@@ NAVI ', aa);
	// }

	enterAddress = () => {
		this.setState({ showDestInput: true });
	}


	onChange = (event, data) => {
		this.address = {
			...this.address,
			[data]: event.target.value
		}

		this.setState(prevState => ({ ...prevState, address: this.address }))
		console.log('Enter address', this.address);
	}

	onAddressSubmit = (event) => {
		// event.nativeEvent.preventDefault();
		event.preventDefault();
		this.props.WS.send(JSON.stringify({ cmd: 'reqSetAddress', address: this.state.address }));
		this.setState({ loading: true });
	}
	
	onAddressCancel = (event) => {
		event.preventDefault();
		this.setState({ showDestInput: false });
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

	componentWillReceiveProps(props) {
		console.warn('@@@@ navi', props);
		this.map.getView().setCenter(ol.proj.fromLonLat([21.0042, 52.1347])); // Wa-wa
		if (props.address && props.address.country) {
			this.setState({ loading: false, showDestInput: false });
		}
	}

	render() {
		return (
			<div>
				<div onClick={this.setHomeAddress}
					className="home-button active">Set HOME address
				</div>
				<div onClick={this.enterAddress}
					className="enter-address-button active">Enter address
				</div>
				<div id='map' className='map'></div>
				{this.state.showDestInput ?
					<EnterAddress
						onChange={this.onChange}
						onSubmit={this.onAddressSubmit.bind(this)}
						onCancel={this.onAddressCancel.bind(this)}
						address={this.state.address}
						loading={this.state.loading} /> 
					: null}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		WS: state.webSocket,
		homeAddress: state.homeAddress,
		address: state.address
	};
}

const mapDispatchToState = dispatch => {
	return {
		setHomeAddress: address => dispatch(Actions.setHomeAddress(address)),
		// setAddress: address => dispatch(Actions.setAddress(address))
	}
}

export default connect(mapStateToProps, mapDispatchToState)(Navigation);