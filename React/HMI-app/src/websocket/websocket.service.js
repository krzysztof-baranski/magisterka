import React from 'react';

export class Websocket extends React.Component {
	static initWS () {
		if (!this.ws) {
			this.ws = new WebSocket('ws://127.0.0.1:5678/');
		} 
		console.warn('@@@!!!!!! initWS');
		this.ws.onmessage = this.receive.bind(this); 
		this.send.bind(this)(JSON.stringify({ cmd: 'reqPlayTrack', trackID: '0' })/*, callback*/);
	}

	static getWS () {
		return this.ws;
	}
	
	static receive (event) {
		console.warn("!!!!! ", event);
		let data = this.checkJson(event.data);
		console.warn('4', data.cmd);
	}

	static checkJson (json) {
        var msg = false;
        try {
            msg = JSON.parse(json)
        } catch (err) {
            console.warn('JSON parse error:'/*, err*/); 
        } 

        return msg;
    } 

	static send (message) {
		var that = this;
		this.waitForConnection(function () {
	        that.ws.send(message);
		}, 1000);
	}

	static waitForConnection (callback, interval) {
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
}