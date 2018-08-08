import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor() { }

  currentSource;
  currentSourceChange: Subject<boolean> = new Subject<boolean>();

  listItems;
  listItemsChange: Subject<boolean> = new Subject<boolean>();

  	selectSource (source) {

  		this.currentSource = source;
  		this.currentSourceChange.next(this.currentSource);
      	console.warn ('media.service selectSource', this.currentSource); 
  	} 

  resPlayTrack () {
      console.warn ('media.service resPlayTrack'); 
  } 

  resListItems (items) {
    console.warn ('media.service resListItems');
    this.listItems = items; 
    this.listItemsChange.next(this.listItems);
  } 
}
