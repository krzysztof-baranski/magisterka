import React from 'react';

import * as Commands from './Commands';

const withWebsocket = (WrappedComponent, subscriptions) => {
	return class extends React.Component {
		constructor(props) {
			super(props);
			console.log('INIT WS ', this.props, subscriptions, WrappedComponent);
			this.state = {
				...subscriptions,
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
			this.send.bind(this)(JSON.stringify({ cmd: 'reqPlayTrack', trackID: '0' })/*, callback*/);
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

		updateState = (msg) => {
			let commands = [];
			this.setState(function (state) {
				commands = [
					...state.commands
				];
				commands.push(msg);
				return { commands: commands };
			});
		} 

		handleMessage(msg) {
			this.updateState(msg);
			// let commands = [];
			// switch (msg.cmd) {
				// case Commands.RES_GET_SOURCE:
					// this.updateState(msg)
				// 	break;
				// case Commands.RES_CURRENT_TRACK:
				// 	this.setState(function (state) {
				// 		commands = [
				// 			...state.commands
				// 		];
				// 		commands.push(msg);
				// 		return { commands: commands };
				// 	});
				// 	break;
				// case Commands.RES_GET_STATION:
					// this.updateState(msg);
				// case this.constantsService.COMMANDS.resPlayTrack:
				// 	this.mediaService.resPlayTrack(msg.track); 
				// 	break;
				// case this.constantsService.COMMANDS.resListItems:
				// 	this.mediaService.resListItems(msg.items); 
				// 	break;
				// case this.constantsService.COMMANDS.resTunerListItems:
				// 	this.tunerService.resListItems(msg.items); 
				// 	break;
				// case this.constantsService.COMMANDS.resPlayStation:
				// 	this.tunerService.resPlayStation(msg.station); 
				// 	break;
			// 	default:
			// 		console.warn('handleMessage. Default', msg);
			// 		break;
			// }
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
			return <WrappedComponent WS={this.ws} {...this.props} msg={this.state.commands}></WrappedComponent>;
		}
	};
}

export default withWebsocket;