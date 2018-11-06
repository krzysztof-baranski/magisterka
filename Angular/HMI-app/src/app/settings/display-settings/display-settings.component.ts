import { Component, OnInit } from '@angular/core';

import { ConstantsService } from '../../consts/constants.service';
import { WebsocketWrapperService } from 'src/app/services/websocket-wrapper.service';

@Component({
    selector: 'app-display-settings',
    templateUrl: './display-settings.component.html'
})
export class DisplaySettingsComponent implements OnInit {
    DISP;
    constructor(private constantsService: ConstantsService,
        private WS: WebsocketWrapperService) {

        this.DISP = this.constantsService.DISP;
    }

    ngOnInit() {
    }

    onValueChanged(ev) {
        // const event = ev.event;
        const key = ev.key;
        const value = ev.value;

        console.log('SETTINGS changeValue', key, value);
        let cmd;
        const color = {
            red: this.DISP['red'],
            green: this.DISP['green'],
            blue: this.DISP['blue']
        };

        switch (key) {
            case 'brighntness':
                // send for feneral
                console.warn(key.toUpperCase() + ' volume changed: ' + key, this.DISP[key]);
                cmd = 'reqSetBrightness';
                break;
            case 'red':
                // send for feneral
                console.warn(key.toUpperCase() + ' volume changed ' + key);
                cmd = 'reqSetColor';
                break;
            case 'green':
                // send for feneral
                console.warn(key.toUpperCase() + ' volume changed ' + key);
                cmd = 'reqSetColor';
                break;
            case 'blue':
                // send for feneral
                console.warn(key.toUpperCase() + ' value changed ' + key);
                cmd = 'reqSetColor';
                break;
            case 'contrast':
                // send for feneral
                console.warn(key.toUpperCase() + ' value changed ' + key);
                cmd = 'reqSetContrast';
                break;
            default:
                console.warn('Unknown key ', key);
                return;
        }

        this.DISP[key] = this.DISP[key] + value;

        if (key === 'red' || key === 'blue' || key === 'green') {
            color[key] = this.DISP[key];
            this.WS.send(JSON.stringify({ cmd: cmd, value: color }));
        } else {
            this.WS.send(JSON.stringify({ cmd: cmd, value: this.DISP[key] }));
        }
    }
}
