import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../list/list.component';
import { UiModule } from './ui.module';

@NgModule({
  imports: [
    CommonModule,
    UiModule
  ],
  declarations: [
    ListComponent
  ],
  exports: [
    ListComponent
  ]
})
export class ListModule { }
