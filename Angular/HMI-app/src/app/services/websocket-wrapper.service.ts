import { Injectable } from '@angular/core';
import { ConstantsService } from '../consts/constants.service';
import { MediaService } from '../services/media.service';

@Injectable({
  providedIn: 'root'
})
export class WebsocketWrapperService {

  	constructor(private constantsService: ConstantsService,
          private mediaService: MediaService) { }

    webSocket;
    messages;
    
    // this.send('hello')/*, callback*/);
    // this.send('hello')/*, callback*/);
    // this.send('hello')/*, callback*/);

    init (ws) {
        var that = this;
        this.webSocket = ws;
        this.send(JSON.stringify({ cmd: 'reqSelectSource', source: 'usb' })/*, callback*/);
        this.send('hello'/*, callback*/);
        this.send(JSON.stringify({ cmd: 'reqPlayTrack', trackID: '0' })/*, callback*/);
        
        this.webSocket.onmessage = this.receive.bind(that); 

    } 

    receive (event) {
        console.warn ('@@@@@ ', event);         
        this.handleMessage(this.checkJson(event.data)); 
        console.log('data', event.data);  
        // var messages = document.createElement('ul');
        // messages = document.getElementsByTagName('ul')[0];
        // var message = document.createElement('li'),
        //     content = document.createTextNode(event.data);
        // message.appendChild(content);
        // messages.appendChild(message);

        // document.body.appendChild(messages);
    } 

    checkJson (json) {
        var msg = false;
        try {
            msg = JSON.parse(event.data)
        } catch (err) {
            console.warn('JSON parse error:'/*, err*/); 
        } 

        return msg;
    } 

    handleMessage (msg) {
        switch (msg.cmd) {
            case this.constantsService.COMMANDS.selectSource:
                this.mediaService.selectSource(msg.source); 
                break;
            case this.constantsService.COMMANDS.resPlayTrack:
                this.mediaService.resPlayTrack(msg.track); 
                break;
            case this.constantsService.COMMANDS.resListItems:
                this.mediaService.resListItems(msg.items); 
                break;
            default:
                console.warn('handleMessage. Default', msg); 
                break;
        }        
    } 

	send = function (message, callback) {
		var that = this;
		this.waitForConnection(function () {
	        that.webSocket.send(message);
                if (typeof callback !== 'undefined') {
		            callback();
			    }
			}, 1000);
		};

	waitForConnection = function (callback, interval) {
	    if (this.webSocket.readyState === 1) {
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
