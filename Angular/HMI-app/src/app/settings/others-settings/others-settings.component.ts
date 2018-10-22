import { Component, OnInit } from '@angular/core';

import { ConstantsService } from '../../consts/constants.service';

@Component({
    selector: 'app-others-settings',
    templateUrl: './others-settings.component.html',
    styleUrls: ['./others-settings.component.css']
})
export class OthersSettingsComponent implements OnInit {

    OTHERS;
    constructor(private constantsService: ConstantsService) {
        this.OTHERS = this.constantsService.OTHERS_SETTINGS;
    }

    ngOnInit() {
    }

    changeValue(event, key, value) {
        if (event.target.closest('app-others-settings') !== null) {
            event.preventDefault();
            event.stopPropagation();
        }

        switch (key) {
            case 'units':
                // send for feneral
                this.OTHERS[key].selected = value;
                console.warn(key.toUpperCase() + ' units changed: ' + this.OTHERS[key].selected);
                break;
            default:
                console.warn('Unknown key ', key);
                return;
        }
    }
}
