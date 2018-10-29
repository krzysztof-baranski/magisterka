import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

import { TunerService } from 'src/app/services/tuner.service';
import { WebsocketWrapperService } from 'src/app/services/websocket-wrapper.service';
import { ListComponent as ListCmp } from '../../list/list.component';

@Component({
    selector: 'app-tuner-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

    @ViewChild(ListCmp) private list: ListCmp;
    listItems: Object[];
    subscriptions: Subscription[] = [];

    constructor(private tunerService: TunerService,
        private location: Location,
        private WS: WebsocketWrapperService) {
        this.subscriptions.push(this.onListStationChange());
    }

    ngOnInit() {
    }

    onListStationChange (): Subscription {
        return this.tunerService.tunerListChange.subscribe((value) => {
            this.listItems = value;
            this.list.loading = false;
        });
    }

    playStation (item) {
        console.log('goto recent', event);
        // this.tunerService.address = event;
        this.WS.send(JSON.stringify({ cmd: 'reqPlayStation', id: item.id }));
        this.location.back();
    }

    ngOnDestroy() {
        for (let i = 0; i < this.subscriptions.length; i++) {
            this.subscriptions[i].unsubscribe();
        }
    }

}
