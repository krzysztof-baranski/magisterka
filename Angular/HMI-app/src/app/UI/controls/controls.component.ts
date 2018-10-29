import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-controls',
    templateUrl: './controls.component.html',
    styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

    @Output() previous: EventEmitter<any> = new EventEmitter<any>();
    @Output() next: EventEmitter<any> = new EventEmitter<any>();
    @Output() openList: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    ngOnInit() {
    }

    onPrev() {
        this.previous.emit();
    }

    onNext() {
        this.next.emit();
    }

    onOpenList() {
        this.openList.emit();
    }
}
