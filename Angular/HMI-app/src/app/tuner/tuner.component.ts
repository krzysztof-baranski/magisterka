import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TunerService } from '../services/tuner.service';
import { WebsocketWrapperService } from '../services/websocket-wrapper.service';

@Component({
    selector: 'app-tuner',
    templateUrl: './tuner.component.html',
    styleUrls: ['./tuner.component.css']
})
export class TunerComponent implements OnInit {

    constructor(private router: Router,
        private WS: WebsocketWrapperService) { }

    currentStation;
    currentStationAM;
    currentStationFM;
    band = 'fm';

    ngOnInit() {
        this.currentStationFM = {
            fraquence: 101.1, // 87,5–108
            name: 'Open.fm',
            isFavorite: true,
            band: 'fm'
        };

        this.currentStationAM = {
            fraquence: 554, // 300–3000 kHz
            name: 'Radio AMmm',
            isFavorite: true,
            band: 'am'
        };
        this.currentStation = this.currentStationFM;
    }

    activateBand(band) {
        if (band === 'am') {
            this.currentStation = this.currentStationAM;
        } else if (band === 'fm') {
            this.currentStation = this.currentStationFM;
        }
    }

    openList() {
        this.WS.send(JSON.stringify({ cmd: 'reqTunerListItems', band: this.band }));
        this.router.navigate(['tuner', 'list']);
    }

    nextStation(event) {
        console.log('[tuner.component] nextStation', event);
    }

    prevStation() {
        console.log('[tuner.component] prevStation');
    }
}
