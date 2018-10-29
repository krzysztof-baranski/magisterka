import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { WebsocketWrapperService } from '../../services/websocket-wrapper.service';
import { Router } from '@angular/router';
import { MediaService } from '../../services/media.service';
import { Subscription } from 'rxjs';
import { ListComponent as ListCmp } from '../../list/list.component';

@Component({
    selector: 'app-media-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
    @ViewChild(ListCmp) private list: ListCmp;

    listItems: Object[];
    subscriptions: Subscription[] = [];


    constructor(private mediaService: MediaService,
        private webSocketService: WebsocketWrapperService,
        private router: Router) {

        this.subscriptions.push(this.onTrackListChange());
    }

    ngOnInit() {
    }

    onTrackListChange (): Subscription {
        return this.mediaService.mediaListChange.subscribe((value) => {
            this.listItems = value;
            this.list.loading = false;
        });
    }

    playTrack(track) {
        console.warn('PLAY TRACK', track);
        this.webSocketService.send(JSON.stringify({ cmd: 'reqPlayTrack', trackID: track.trackID }));
        this.router.navigate(['media']);
    }

    ngOnDestroy () {
        for (let i = 0; i < this.subscriptions.length; i++) {
            this.subscriptions[i].unsubscribe();
        }
    }
}
