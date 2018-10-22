import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

import { WebsocketWrapperService } from '../../services/websocket-wrapper.service';
import { Router } from '@angular/router';
import { MediaService } from '../../services/media.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, AfterViewChecked {

    constructor(private mediaService: MediaService,
        private webSocketService: WebsocketWrapperService,
        private cdRef: ChangeDetectorRef,
        private router: Router) {

    }

    ngOnInit() {
        this.getListItems();
    }

    ngAfterViewChecked() {
        this.cdRef.detectChanges();
    }


    getListItems() {
        console.warn('GET LIST ITEMS');
        this.webSocketService.send(JSON.stringify({ cmd: 'reqListItems' }));
    }

    playTrack(track) {
        console.warn('PLAY TRACK', track);
        this.webSocketService.send(JSON.stringify({ cmd: 'reqPlayTrack', trackID: track.trackID }));
        this.router.navigate(['media']);
    }
}
