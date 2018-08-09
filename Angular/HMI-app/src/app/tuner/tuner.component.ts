import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TunerService } from '../services/tuner.service';

@Component({
  selector: 'app-tuner',
  templateUrl: './tuner.component.html',
  styleUrls: ['./tuner.component.css']
})
export class TunerComponent implements OnInit {

  constructor(private router: Router,
  		private tunerService: TunerService) { }

  currentStation;
  currentStationAM;
  currentStationFM;

  ngOnInit() {
  	this.tunerService.currentStationChange.subscribe((value) => {
		this.currentStation = value; 
  		console.warn ('!!!!!!!!!!!!!!!! currentStation', value) 
	});


  	this.currentStationFM = {
  		fraquence: 101.1, // 87,5–108
  		name: 'Open.fm',
  		isFavorite: true,
  		band: 'fm'
  	}

  	this.currentStationAM = {
  		fraquence: 554, // 300–3000 kHz
  		name: 'Radio AMmm',
  		isFavorite: true,
  		band: 'am'
  	}
  	this.currentStation = this.currentStationFM;
  }

  activateBand (band) {
  	if (band === 'am') {
	  	this.currentStation = this.currentStationAM;
  	} else if (band === 'fm') {
  		this.currentStation = this.currentStationFM;
  	} 
  } 

  openList () {
  	this.router.navigate(['tuner/list', this.currentStation.band]);
  } 

}
