import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { WebsocketWrapperService } from './services/websocket-wrapper.service';
import { Router, NavigationEnd } from '@angular/router';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';
    ws;
    clock;
    clicked = true;

    constructor(private webSocketService: WebsocketWrapperService,
        private router: Router) {
        this.ws = new WebSocket('ws://127.0.0.1:5678/');
    }

    ngOnInit() {
        this.webSocketService.init(this.ws);
        this.router.events.subscribe((event) => {
            console.log(event);
            if (event instanceof NavigationEnd && event.url) {
                event.url === '/' ? this.clicked = true : this.clicked = false;
            }
        });
    }


    updateWatch() {
        const date = new Date();
        const hour = date.getHours();
        const min = date.getMinutes();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return this.addZeros([hour, min, day, month, year]);
    }

    goBackPath = () => {
        const splittedPath = this.router.url.split('/');
        if (splittedPath.length <= 2) {
            console.log('@@path', this.router.url.length);
            return '/';
        } else {
            splittedPath.length--;
            const path = splittedPath.join('/');
            console.log('@@', path);
            return path;
        }
    }

    addZeros(date) {
        for (let i = 0; i < date.length; i++) {
            if (date[i] < 10) {
                date[i] = '0' + date[i];
            }
        }

        date = date[0] + ':' + date[1] + ' ' + date[2] + '/' + date[3] + '/' + date[4];
        return date;
    }
}
