import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { NavigationService } from '../../../services/navigation.service';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { WebsocketWrapperService } from 'src/app/services/websocket-wrapper.service';
import { ListComponent } from 'src/app/list/list.component';

@Component({
    selector: 'app-recent-destinations',
    templateUrl: './recent-destinations.component.html',
    styleUrls: ['./recent-destinations.component.css']
})
export class RecentDestinationsComponent implements OnInit, OnDestroy {
    @ViewChild(ListComponent) private list: ListComponent;

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
            this.list.loading = false;
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
