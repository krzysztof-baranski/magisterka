import React from 'react';
import { connect } from 'react-redux';

import * as Commands from './Commands';
import * as Actions from '../actions/actions';

class Websocket extends React.Component {
	constructor(props) {
		super(props);
		console.log('INIT WS ', this.props);
		this.state = {
			WS: null,
			commands: []
		}
		this.initWS();
	}
	initWS() {
		if (!this.ws) {
			this.ws = new WebSocket('ws://127.0.0.1:5678/');
		}
		console.warn('@@@!!!!!! initWS');
		this.ws.onmessage = this.receive.bind(this);
		// this.send.bind(this)(JSON.stringify({ cmd: 'reqPlayTrack', trackID: '0' })/*, callback*/);
		this.props.setWS(this.ws);
	}

	getWS() {
		console.log('You have got WS');
		this.setState({ WS: this.ws });
		return this.ws;
	}

	receive(event) {
		console.warn("!!!!! ", event);
		let data = this.checkJson(event.data);
		this.handleMessage(data);
		console.warn('4', data.cmd);
	}

	handleMessage(msg) {
		switch (msg.cmd) {
			case Commands.RES_GET_STATION:
				this.props.setCurrentStation(msg.currentStation);
				break;
			case Commands.GET_LIST_ITEMS:
				this.props.setListItems(msg.items);
				break;
			case Commands.RES_GET_SOURCE:
				this.props.setCurrentSource(msg.source);
				break;
			case Commands.RES_CURRENT_TRACK:
				this.props.setCurrentTrack(msg.currentTrack);
				break;
			case Commands.GET_MEDIA_LIST_ITEMS:
				this.props.setListItems(msg.items);
				break;
			case Commands.RES_HOME_ADDRESS:
				this.props.setHomeAddress(msg.address);
				break;
			case Commands.RES_SET_ADDRESS:
				this.props.setAddress(msg.address);
				break;
			case Commands.RES_SET_BRIGHTNESS: 
				this.props.setBrightness(msg.value);
				break;
			default:
				console.log('Unknown message', msg);
		}
	}

	checkJson(json) {
		var msg = false;
		try {
			msg = JSON.parse(json)
		} catch (err) {
			console.warn('JSON parse error:'/*, err*/);
		}

		return msg;
	}

	send(message) {
		var that = this;
		this.waitForConnection(function () {
			that.ws.send(message);
		}, 1000);
	}

	waitForConnection(callback, interval) {
		if (this.ws.readyState === 1) {
			callback();
		} else {
			var that = this;
			// optional: implement backoff for interval here
			setTimeout(function () {
				that.waitForConnection(callback, interval);
			}, interval);
		}
	}

	render() {
		console.log('WS RENDER', this.props, this.state);
		return null;
	}
};

const mapDispachToProps = dispatch => ({
	setWS: ws => dispatch(Actions.setWebSocket(ws)),
	setCurrentStation: station => dispatch(Actions.setCurrentStation(station)),
	setCurrentSource: source => dispatch(Actions.setCurrentSource(source)),
	setCurrentTrack: track => dispatch(Actions.setCurrentTrack(track)),
	setListItems: items => dispatch(Actions.setListItems(items)),
	setHomeAddress: address => dispatch(Actions.setHomeAddress(address)),
	setAddress: address => dispatch(Actions.setAddress(address)),
	setBrightness: value => dispatch(Actions.setBrightness(value))
})

export default connect(null, mapDispachToProps)(Websocket);