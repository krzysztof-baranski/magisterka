import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class MediaService {

    constructor(/* private webSocketService: WebsocketWrapperService */) { }

    currentSource;
    _listItems = [];
    currentTrack;
    mediaListChange: Subject<Object[]> = new Subject<Object[]>();
    currentTrackChange: Subject<Object> = new Subject<Object>();
    currentSourceChange: Subject<Object> = new Subject<Object>();

    public get listItems(): Object[] {
        return this._listItems;
    }

    public set listItems(v: Object[]) {
        this._listItems = v;
        this.mediaListChange.next(this._listItems);
    }

    selectSource(source) {
        this.currentSource = source;
        this.currentSourceChange.next(this.currentSource);
    }

    resPlayTrack(track) {
        console.warn('media.service resPlayTrack');
        this.currentTrack = track;
        this.currentTrackChange.next(this.currentTrack);
    }

    resListItems(items) {
        console.warn('media.service resListItems');
        this.listItems = items;
    }

}
