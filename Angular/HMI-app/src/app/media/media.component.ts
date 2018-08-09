import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';

import { MediaService } from '../services/media.service';
import { WebsocketWrapperService } from '../services/websocket-wrapper.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  constructor(private mediaService: MediaService, 
  	private cdRef: ChangeDetectorRef,
  	private webSocketService: WebsocketWrapperService,
  	private router: Router) { }
  
  currentSource;
  currentTrack;

  ngOnInit() {
  	this.mediaService.currentSourceChange.subscribe((value) => {
		this.currentSource = value; 
	});

	this.mediaService.currentTrackChange.subscribe((value) => {
		console.warn ('@@@@@!!!!!! currentTrack', value); 
		this.currentTrack = value; 
	});
  	console.warn('Current source: ', this.currentSource);

  	this.currentTrack = this.mediaService.currentTrack || {};
  }

  	ngAfterViewChecked() {
	  	this.cdRef.detectChanges();
	}

	openList () {
		this.router.navigate(['media/list']);
	} 

	playTrack (track) {
	  	console.warn('PLAY TRACK ', track);
	  	this.webSocketService.send(JSON.stringify({ cmd: 'reqPlayTrack', trackID: track.trackID })); 
	} 

	prevTrack () {
		let that = this;
		let track;
		let index;

		index = _.findIndex(this.mediaService.listItems, function (item) {
			return item.trackID === that.currentTrack.trackID;
		});

		if (index === 0) {
			index = this.mediaService.listItems.length;
		} 
		track = this.mediaService.listItems[index - 1]
		this.playTrack(track); 
	} 

	nextTrack () {
		let that = this;
		let track;
		let index;

		index = _.findIndex(this.mediaService.listItems, function (item) {
			return item.trackID === that.currentTrack.trackID;
		});

		if (index === this.mediaService.listItems.length - 1) {
			index = -1;
		} 
		track = this.mediaService.listItems[index + 1]
		this.playTrack(track); 
	} 
}
