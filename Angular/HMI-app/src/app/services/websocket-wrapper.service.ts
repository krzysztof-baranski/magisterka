import { Injectable, EventEmitter, Output } from '@angular/core';
import { ConstantsService } from '../consts/constants.service';
import { MediaService } from '../services/media.service';
import { TunerService } from '../services/tuner.service';
import { NavigationService } from './navigation.service';

@Injectable({
    providedIn: 'root'
})
export class WebsocketWrapperService {

    constructor(private constantsService: ConstantsService,
        private mediaService: MediaService,
        private tunerService: TunerService,
        private naviService: NavigationService) { }

    webSocket;
    messages;

    init = (ws) => {
        this.webSocket = ws;
        this.webSocket.onmessage = this.receive;

    }

    receive = (event) => {
        this.handleMessage(this.checkJson(event.data));
        console.log('data', event.data);

    }

    checkJson = (json) => {
        let msg = false;
        try {
            msg = JSON.parse(json);
        } catch (err) {
            console.warn('JSON parse error:'/*, err*/);
        }

        return msg;
    }

    handleMessage = (msg) => {
        switch (msg.cmd) {
            case 'resGetSource':
                this.mediaService.selectSource(msg.source);
                break;
            case this.constantsService.COMMANDS['resPlayTrack']:
                this.mediaService.resPlayTrack(msg.track);
                break;
            case 'resMediaListItems':
                this.mediaService.resListItems(msg.items);
                break;
            case 'resTunerListItems':
                this.tunerService.resListItems(msg.items);
                break;
            case this.constantsService.COMMANDS['resPlayStation']:
                this.tunerService.resPlayStation(msg.station);
                break;
            case 'resHomeAddress':
                // this.resSetHomeDestination.emit(msg);
                console.log('resSetHomeDestination', msg);
                this.naviService.homeAddress = msg.address;
                break;
            case 'resSetAddress':
                this.naviService.address = msg.address;
                break;
            case 'resGetRecentDestinations':
                this.naviService.recentDestinations = msg.recents;
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
