import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TunerService {
    private _listItems: Object[] = [];
    tunerListChange: Subject<Object[]> = new Subject<Object[]>();

    constructor() { }

    currentStation;

    public get listItems(): Object[] {
        return this._listItems;
    }

    public set listItems(v: Object[]) {
        this._listItems = v;
        this.tunerListChange.next(this._listItems);
    }

    resListItems(items) {
        console.warn('tuner.service resListItems');
        this.listItems = items;
    }

    resPlayStation(station) {
        console.warn('playStation', station);
        this.currentStation = station;
    }

}
