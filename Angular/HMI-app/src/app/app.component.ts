import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';

	ngOnInit() {
		this.ws = new WebSocket('ws://127.0.0.1:5678/');
		this.messages = document.createElement('ul');
		this.ws.onmessage = function (event) {
			console.warn ('@@@@@ ', event);		 
	        var messages2 = document.getElementsByTagName('ul')[0],
	            message = document.createElement('li'),
	            content = document.createTextNode(event.data);
	        message.appendChild(content);
	        messages2.appendChild(message);
	    };
	    document.body.appendChild(this.messages);

	    this.send(JSON.stringify({ cmd: 'reqSelectSource', source: 'usb' })/*, callback*/);
	    this.send('hello')/*, callback*/);
	    this.send('hello')/*, callback*/);
	    this.send(JSON.stringify({ cmd: 'reqPlayTrack', trackID: '0' })/*, callback*/);
	    this.send('hello')/*, callback*/);
	    this.send('hello')/*, callback*/);
	}

	send = function (message, callback) {
		var that = this;
		this.waitForConnection(function () {
	        that.ws.send(message);
                if (typeof callback !== 'undefined') {
		            callback();
			    }
			}, 1000);
		};

	waitForConnection = function (callback, interval) {
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
