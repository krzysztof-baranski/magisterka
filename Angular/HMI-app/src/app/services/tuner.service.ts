import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TunerService {
    private _listItems = [];

    constructor() { }

    currentStation;

    public get listItems(): Object[] {
        return this._listItems;
    }

    public set listItems(v: Object[]) {
        this._listItems = v;
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
