import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-source-selector',
  templateUrl: './source-selector.component.html',
  styleUrls: ['./source-selector.component.css']
})
export class SourceSelectorComponent implements OnInit, OnChanges {

  @Output() selectOption: EventEmitter<any> = new EventEmitter<any>();
  @Input() component: string;
  @Input() currentSource: Object;

  constructor() { }

  ngOnInit() {
    console.log('@SS', this.component);
  }

  ngOnChanges() {
    console.log('[SourceSelectorComponent OnChanges]', this.currentSource);
  }

  selectSource(source) {
    this.selectOption.emit(source);
  }

}
