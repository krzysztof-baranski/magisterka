import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import { MediaService } from '../services/media.service';
import { WebsocketWrapperService } from '../services/websocket-wrapper.service';

@Component({
    selector: 'app-media',
    templateUrl: './media.component.html',
    styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

    constructor(private mediaService: MediaService,
        private cdRef: ChangeDetectorRef,
        private webSocketService: WebsocketWrapperService,
        private router: Router) { }

    currentSource;
    currentTrack;

    ngOnInit() {
        console.warn('Current source: ', this.currentSource);

        this.currentTrack = this.mediaService.currentTrack || {};
    }

    openList() {
        this.router.navigate(['media/list']);
    }

    playTrack(track) {
        console.warn('PLAY TRACK ', track);
        this.webSocketService.send(JSON.stringify({ cmd: 'reqPlayTrack', trackID: track.trackID }));
    }

    prevTrack() {

    }

    nextTrack() {

    }
}
