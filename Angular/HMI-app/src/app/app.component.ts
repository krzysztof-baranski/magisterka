import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { WebsocketWrapperService } from './services/websocket-wrapper.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
    ws;
    clock;
    
	constructor (private webSocketService: WebsocketWrapperService) {
		this.ws = new WebSocket('ws://127.0.0.1:5678/');
		webSocketService.init(this.ws); 
	} 

	ngOnInit() {
		
    }

    updateWatch () {
    	let date = new Date();
    	let hour = date.getHours();  
    	let min = date.getMinutes();
    	let day = date.getDate();
    	let month = date.getMonth() + 1;
    	let year = date.getFullYear();  

    	return this.addZeros([hour, min, day, month, year]); 
    }  

    addZeros (date) {
    	for (let i = 0; i < date.length; i++) {
    		if  (date[i] < 10) {
    			date[i] = '0' + date[i];
    		} 
    	}

    	date = date[0] + ':' + date[1] + ' ' + date[2] + '/' + date[3] + '/' + date[4];
    	return date;
    } 
}
