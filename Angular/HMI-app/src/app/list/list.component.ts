import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    @Input() items: Object[];
    @Output() open: EventEmitter<any> = new EventEmitter<any>();
    loading;

    constructor() { }

    ngOnInit() {
        this.loading = true;
    }

    onOpen(data) {
        console.log('Open item', data);
        this.open.emit(data);
    }

    hasProp(o, prop) {
        return o.hasOwnProperty(prop);
    }
}
