import { Component, OnInit } from '@angular/core';

import { ConstantsService } from '../../consts/constants.service';

@Component({
    selector: 'app-display-settings',
    templateUrl: './display-settings.component.html',
    styleUrls: ['./display-settings.component.css']
})
export class DisplaySettingsComponent implements OnInit {
    DISP;
    constructor(private constantsService: ConstantsService) {
        this.DISP = this.constantsService.DISP;
    }

    ngOnInit() {
    }

}
