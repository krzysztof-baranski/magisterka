import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { WebsocketWrapperService } from '../../services/websocket-wrapper.service';
import { TunerService } from '../../services/tuner.service';

@Component({
    selector: 'app-tuner-list',
    templateUrl: './tuner-list.component.html',
    styleUrls: ['./tuner-list.component.css']
})
export class TunerListComponent implements OnInit {

    constructor(private route: ActivatedRoute,
        private router: Router,
        private webSocketService: WebsocketWrapperService,
        private tunerService: TunerService) { }

    band;
    sub;

    ngOnInit() {
        this.getListItems();
    }

    getListItems() {
        console.warn('GET TUNER LIST ITEMS');
        this.webSocketService.send(JSON.stringify({ cmd: 'reqTunerListItems', band: this.band }));
    }

    playStation(station) {
        console.warn('PLAY STATION', station);
        this.webSocketService.send(JSON.stringify({ cmd: 'reqPlayStation', fraquence: station.fraquence }));
        this.router.navigate(['tuner']);
    }

}
