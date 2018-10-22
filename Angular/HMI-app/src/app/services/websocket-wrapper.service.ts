import { Injectable } from '@angular/core';
import { ConstantsService } from '../consts/constants.service';
import { MediaService } from '../services/media.service';
import { TunerService } from '../services/tuner.service';

@Injectable({
    providedIn: 'root'
})
export class WebsocketWrapperService {

    constructor(private constantsService: ConstantsService,
        private mediaService: MediaService,
        private tunerService: TunerService) { }

    webSocket;
    messages;

    // this.send('hello')/*, callback*/);
    // this.send('hello')/*, callback*/);
    // this.send('hello')/*, callback*/);

    init = (ws) => {
        this.webSocket = ws;
        this.send(JSON.stringify({ cmd: 'reqSelectSource', source: 'usb' })/*, callback*/);
        this.send('hello'/*, callback*/);
        this.send(JSON.stringify({ cmd: 'reqPlayTrack', trackID: '0' })/*, callback*/);

        this.webSocket.onmessage = this.receive;

    }

    receive(event) {
        console.warn('@@@@@ ', event);
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

    checkJson(json) {
        let msg = false;
        try {
            msg = JSON.parse(json);
        } catch (err) {
            console.warn('JSON parse error:'/*, err*/);
        }

        return msg;
    }

    handleMessage(msg) {
        switch (msg.cmd) {
            case this.constantsService.COMMANDS['selectSource']:
                this.mediaService.selectSource(msg.source);
                break;
            case this.constantsService.COMMANDS['resPlayTrack']:
                this.mediaService.resPlayTrack(msg.track);
                break;
            case this.constantsService.COMMANDS['resListItems']:
                this.mediaService.resListItems(msg.items);
                break;
            case this.constantsService.COMMANDS['resTunerListItems']:
                this.tunerService.resListItems(msg.items);
                break;
            case this.constantsService.COMMANDS['resPlayStation']:
                this.tunerService.resPlayStation(msg.station);
                break;
            default:
                console.warn('handleMessage. Default', msg);
                break;
        }
    }

    send = function (message/*, callback*/) {
        const that = this;
        this.waitForConnection(function () {
            that.webSocket.send(message);
            //          if (typeof callback !== 'undefined') {
            //        callback();
            // }
        }, 1000);
    };

    waitForConnection = function (callback, interval) {
        if (this.webSocket.readyState === 1) {
            callback();
        } else {
            const that = this;
            // optional: implement backoff for interval here
            setTimeout(function () {
                that.waitForConnection(callback, interval);
            }, interval);
        }
    };
}
