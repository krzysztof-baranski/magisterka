import { Component, OnInit } from '@angular/core';

import { WebsocketWrapperService } from './services/websocket-wrapper.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';
    ws;

    constructor(private webSocketService: WebsocketWrapperService,
) {
        this.ws = new WebSocket('ws://127.0.0.1:5678/');
    }

    ngOnInit() {
        this.webSocketService.init(this.ws);
    }
}
