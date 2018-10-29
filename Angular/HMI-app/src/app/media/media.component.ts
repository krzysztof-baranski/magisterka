import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MediaService } from '../services/media.service';
import { WebsocketWrapperService } from '../services/websocket-wrapper.service';
import { Subscription } from 'rxjs';
import { SourceSelectorComponent } from '../UI/source-selector/source-selector.component';

@Component({
    selector: 'app-media',
    templateUrl: './media.component.html',
    styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit, OnDestroy {

    currentSource;
    currentTrack;
    subscriptions: Subscription[] = [];

    @ViewChild(SourceSelectorComponent) private ssc: SourceSelectorComponent;

    constructor(private mediaService: MediaService,
        private WS: WebsocketWrapperService,
        private router: Router) {

        this.subscriptions.push(this.onTrackChange());
        this.subscriptions.push(this.onSourceChange());
    }

    ngOnInit() {
        this.currentTrack = this.mediaService.currentTrack || {};
    }

    onTrackChange() {
        return this.mediaService.currentTrackChange.subscribe((value) => {
            this.currentTrack = value;
        });
    }

    onSourceChange() {
        return this.mediaService.currentSourceChange.subscribe(value => {
            this.currentSource = value;
            this.ssc.currentSource = value;
        });
    }

    openList() {
        this.WS.send(JSON.stringify({ cmd: 'reqMediaListItems' }));
        this.router.navigate(['media', 'list']);
    }

    playTrack(track) {
        console.warn('PLAY TRACK ', track);
        this.WS.send(JSON.stringify({ cmd: 'reqPlayTrack', trackID: track.trackID }));
    }

    selectSource(source) {
        this.WS.send(JSON.stringify({ cmd: 'reqGetSource' }));
    }

    prevTrack() {
        console.log('[media.component] prevTrack');
    }

    nextTrack() {
        console.log('[media.component] nextTrack');
    }

    ngOnDestroy(): void {
        for (const subscription of this.subscriptions) {
            subscription.unsubscribe();
        }
    }

}
