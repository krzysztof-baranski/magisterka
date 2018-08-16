import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConstantsService {

    constructor() { }

    public get COMMANDS() : Object {
        return this._COMMANDS;
    }

    public get VOLUMES() : Object {
        return this._VOLUMES;
    }

    public get DISP() : Object {
        return this._DISPLAY;
    }

    public get OTHERS_SETTINGS() : Object {
        return this._OTHERS_SETTINGS;
    }

    private _COMMANDS = {
        selectSource: 'resSelectSource',
        resPlayTrack: 'resPlayTrack',
        resListItems: 'resListItems',
        resTunerListItems: 'resTunerListItems',
        resPlayStation: 'resPlayStation'
    }

    private _VOLUMES = {
        general : 70,
        navi    : 80,
        speech  : 65,
        balance : -4,
        fader   : 10
    }

    private _DISPLAY = {
        brighntness: 90,
        red        : 100,
        green      : 99,
        blue       : 89,
        contrast   : 70
    }

    private _OTHERS_SETTINGS = {
        units: {
            0: 'km',
            1: 'mil',
            selected: 0
        },
        memory: 38 
    }
}
