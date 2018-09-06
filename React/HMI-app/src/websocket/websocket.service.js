import React from 'react';

export class Websocket/* extends React.Component*/ {
	constructor (props) {
		// super(props);
		
		this.initWS();// = this.initWS.bind(this);
	}

	initWS () {
		if (!this.ws) {
			this.ws = new WebSocket('ws://127.0.0.1:5678/');
		} 
		console.warn('@@@!!!!!! initWS');
		this.ws.onmessage = this.receive.bind(this); 
		this.send(JSON.stringify({ cmd: 'reqPlayTrack', trackID: '0' })/*, callback*/);
	}
	
	receive (event) {
		console.warn("!!!!! ", event);
	}

	send (message) {
		var that = this;
		this.waitForConnection(function () {
	        that.ws.send(message);
		}, 1000);
	}

	waitForConnection (callback, interval) {
	    if (this.ws.readyState === 1) {
	        callback();
	    } else {
	        var that = this;
	        // optional: implement backoff for interval here
	        setTimeout(function () {
	            that.waitForConnection(callback, interval);
	        }, interval);
	    }
	};
}