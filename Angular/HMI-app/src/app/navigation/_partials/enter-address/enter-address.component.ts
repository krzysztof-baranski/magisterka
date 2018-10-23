import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-enter-address',
    templateUrl: './enter-address.component.html',
    styleUrls: ['./enter-address.component.css']
})
export class EnterAddressComponent implements OnInit {

    @Input() address: Object;
    @Output() public buttonClick: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
        this.address = {
        };
    }

    onChange = (ev, data) => {
        // ev.preventDefault();
        this.address = {
            ...this.address,
            [data]: ev
        };

        console.log('Enter address', this.address);
    }

    onSubmit = (ev, data) => {
        ev.preventDefault();

        console.log('on onAddressSubmit', data);
        this.buttonClick.emit({ event: ev, type: 'submit', address: this.address });
    }

    onCancel = (ev, data) => {
        ev.preventDefault();

        console.log('onCancel', data);
        this.buttonClick.emit({ event: ev, type: 'cancel' });
    }

    ngOnInit() {
    }

}
