import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

import { WebsocketWrapperService } from '../../services/websocket-wrapper.service';
import { MediaService } from '../../services/media.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	listItems;

  constructor(private mediaService: MediaService,
  	private webSocketService: WebsocketWrapperService, 
  	private cdRef: ChangeDetectorRef) {


	  	this.mediaService.listItemsChange.subscribe((value) => {
			this.listItems = value; 
		});
  	}

  	ngOnInit() {
  		this.getListItems(); 
  	}	

  	ngAfterViewChecked() {
		this.cdRef.detectChanges();
	}


  getListItems () {
  	console.warn('GET LIST ITEMS'); 
  	this.webSocketService.send(JSON.stringify({ cmd: 'reqListItems' });
  } 
}
