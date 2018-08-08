import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import { MediaService } from '../services/media.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  constructor(private mediaService: MediaService, 
  	private cdRef: ChangeDetectorRef,
  	private router: Router) { }
  
  currentSource;

  ngOnInit() {
  	this.mediaService.currentSourceChange.subscribe((value) => {
		this.currentSource = value; 
	});
  	console.warn('Current source: ', this.currentSource);
  }

  	ngAfterViewChecked() {
	  	this.cdRef.detectChanges();
	}

	openList () {
		this.router.navigate(['media/list']);
	} 
}
