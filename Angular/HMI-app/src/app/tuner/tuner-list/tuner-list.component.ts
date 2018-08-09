import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

import { WebsocketWrapperService } from '../../services/websocket-wrapper.service';
import { TunerService } from '../../services/tuner.service';

@Component({
  selector: 'app-tuner-list',
  templateUrl: './tuner-list.component.html',
  styleUrls: ['./tuner-list.component.css']
})
export class TunerListComponent implements OnInit {

  constructor(private route: ActivatedRoute,
  		private router: Router,
      	private webSocketService: WebsocketWrapperService,
      	private cdRef: ChangeDetectorRef,
      	private tunerService: TunerService) { }
  	
  	band;
  	sub;
	
	ngOnInit() {
	  	this.sub = this.route.params.subscribe(params => {
	       this.band = params.band; // (+) converts string 'id' to a number
	       console.warn ('############', params); 
	       // In a real app: dispatch action to load the details here.
	    });

	    this.tunerService.listItemsChange.subscribe((value) => {
			this.listItems = value; 
		});

		this.getListItems(); 
	}


  	ngAfterViewChecked() {
		this.cdRef.detectChanges();
	}


  	getListItems () {
	  	console.warn('GET TUNER LIST ITEMS'); 
	  	this.webSocketService.send(JSON.stringify({ cmd: 'reqTunerListItems', band: this.band }));
    }

    playStation (station) {
	  	console.warn('PLAY STATION', station);
	  	this.webSocketService.send(JSON.stringify({ cmd: 'reqPlayStation', fraquence: station.fraquence })); 
		this.router.navigate(['tuner']);
 	} 

}
