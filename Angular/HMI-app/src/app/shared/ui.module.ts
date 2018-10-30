import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlsComponent } from '../UI/controls/controls.component';
import { CoverartComponent } from '../UI/coverart/coverart.component';
import { SourceSelectorComponent } from '../UI/source-selector/source-selector.component';
import { SpinnerComponent } from '../UI/spinner/spinner.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ControlsComponent,
        CoverartComponent,
        SourceSelectorComponent,
        SpinnerComponent
    ],
    exports: [
        ControlsComponent,
        CoverartComponent,
        SourceSelectorComponent,
        SpinnerComponent
    ]
})
export class UiModule { }
