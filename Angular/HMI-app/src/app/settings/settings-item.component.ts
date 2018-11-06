import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ConstantsService } from '../consts/constants.service';

@Component({
    selector: 'app-settings-item',
    templateUrl: './settings-item.component.html',
    styleUrls: ['./settings-item.component.css']
})
export class SettingsItemComponent implements OnInit {
    @Input() label;
    @Input() key;
    @Input() min = 0;
    @Input() max = 100;
    @Input() value;
    @Input() disabled = false;

    @Output() valueChanged: EventEmitter<any> = new EventEmitter<any>();

    constructor(private constantsService: ConstantsService) { }

    ngOnInit() {
    }

    changeValue(event, key, value) {
        this.valueChanged.emit({ event: event, key: key, value: value });
    }

}
