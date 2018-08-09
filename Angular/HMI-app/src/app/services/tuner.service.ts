import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TunerService {

  constructor() { }

  currentStation;
  currentStationChange: Subject<boolean> = new Subject<boolean>();

  listItems = [];
  listItemsChange: Subject<boolean> = new Subject<boolean>();

  public get listItems() : Object[] {
    return this._listItems;
  }

  public set listItems(v : Object[]) {
    this._listItems = v;
  }

    resListItems (items) {
        console.warn ('tuner.service resListItems');
        this.listItems = items; 
        this.listItemsChange.next(this.listItems);
    } 

    resPlayStation (station) {
    	console.warn ('playStation', station);
    	this.currentStation = station;
        this.currentStationChange.next(this.currentStation);
    } 

}
