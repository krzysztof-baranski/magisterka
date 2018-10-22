import { Component, OnInit, Input } from '@angular/core';

import { ConstantsService } from '../../consts/constants.service';

@Component({
    selector: 'app-audio-settings',
    templateUrl: './audio-settings.component.html',
    styleUrls: ['./audio-settings.component.css']
})
export class AudioSettingsComponent implements OnInit {
    // @Input() item; do przekazania wartości z setting.component
    VOLUMES;

    constructor(private constantsService: ConstantsService) {
    }

    ngOnInit() {
        this.VOLUMES = this.constantsService.VOLUMES;
    }

    changeValue(event, key, value) {
        if (event.target.closest('app-audio-settings') !== null) {
            event.preventDefault();
            event.stopPropagation();
        }

        switch (key) {
            case 'general':
                // send for feneral
                console.warn(key.toUpperCase() + ' volume changed: ' + this.VOLUMES[key]);
                break;
            case 'navi':
                // send for feneral
                console.warn(key.toUpperCase() + ' volume changed ' + this.VOLUMES[key]);
                break;
            case 'speech':
                // send for feneral
                console.warn(key.toUpperCase() + ' volume changed ' + this.VOLUMES[key]);
                break;
            case 'balance':
                // send for feneral
                console.warn(key.toUpperCase() + ' value changed ' + this.VOLUMES[key]);
                break;
            case 'fader':
                // send for feneral
                console.warn(key.toUpperCase() + ' value changed ' + this.VOLUMES[key]);
                break;
            default:
                console.warn('Unknown key ', key);
                return;
        }

        this.VOLUMES[key] += value;
    }
}
