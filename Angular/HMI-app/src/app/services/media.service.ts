import { Injectable } from '@angular/core';

// import { WebsocketWrapperService } from '../services/websocket-wrapper.service';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(/* private webSocketService: WebsocketWrapperService */) { }

  currentSource;
  _listItems = [];
  currentTrack;

  public get listItems(): Object[] {
    return this._listItems;
  }

  public set listItems(v: Object[]) {
    this._listItems = v;
  }

    selectSource (source) {

      this.currentSource = source;
    }

    playTrack (track) {
        // this.webSocketService.send(JSON.stringify({ cmd: 'reqPlayTrack', trackID: track.trackID }));
    }

    resPlayTrack (track) {
        console.warn ('media.service resPlayTrack');
        this.currentTrack = track;
    }

    resListItems (items) {
        console.warn ('media.service resListItems');
        this.listItems = items;
    }

}
