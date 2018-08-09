import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

    constructor() { }

    public get COMMANDS() : Object {
        return this._COMMANDS;
    }

    private _COMMANDS = {
        selectSource: 'resSelectSource',
        resPlayTrack: 'resPlayTrack',
        resListItems: 'resListItems',
        resTunerListItems: 'resTunerListItems',
        resPlayStation: 'resPlayStation'
    }
}
