import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor() { }

  currentSource;
  currentSourceChange: Subject<boolean> = new Subject<boolean>();

  listItems = [];
  listItemsChange: Subject<boolean> = new Subject<boolean>();

  currentTrack;
  currentTrackChange: Subject<boolean> = new Subject<boolean>();

  public get listItems() : Object[] {
    return this._listItems;
  }

  public set listItems(v : Object[]) {
    this._listItems = v;
  }

  	selectSource (source) {

  		this.currentSource = source;
  		this.currentSourceChange.next(this.currentSource);
      	console.warn ('media.service selectSource', this.currentSource); 
  	} 

    playTrack (track) {
        this.webSocketService.send(JSON.stringify({ cmd: 'reqPlayTrack', trackID: track.trackID })); 
    } 

    resPlayTrack (track) {
        console.warn ('media.service resPlayTrack'); 
        this.currentTrack = track;
        this.currentTrackChange.next(this.currentTrack); 
    } 

    resListItems (items) {
        console.warn ('media.service resListItems');
        this.listItems = items; 
        this.listItemsChange.next(this.listItems);
    } 

}
