import { Component, OnInit, OnDestroy } from '@angular/core';

import { NavigationService } from '../../../services/navigation.service';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { WebsocketWrapperService } from 'src/app/services/websocket-wrapper.service';

@Component({
    selector: 'app-recent-destinations',
    templateUrl: './recent-destinations.component.html',
    styleUrls: ['./recent-destinations.component.css']
})
export class RecentDestinationsComponent implements OnInit, OnDestroy {

    recents: Object[];
    subscriptions: Subscription[] = [];

    constructor(private naviService: NavigationService,
        private location: Location,
        private WS: WebsocketWrapperService) {
        this.subscriptions.push(this.onRecentsChange());
    }

    ngOnInit() {
    }

    onRecentsChange(): Subscription {
        return this.naviService.recentDestinationsChange.subscribe((value) => {
            this.recents = value;
        });
    }

    goToRecent (event) {
        console.log('goto recent', event);
        // this.naviService.address = event;
        this.WS.send(JSON.stringify({ cmd: 'reqSetAddress', address: this.naviService.address }));
        this.location.back();
    }

    ngOnDestroy() {
        for (let i = 0; i < this.subscriptions.length; i++) {
            this.subscriptions[i].unsubscribe();
        }
    }

}
