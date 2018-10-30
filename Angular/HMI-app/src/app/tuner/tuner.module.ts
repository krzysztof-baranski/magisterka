import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TunerComponent } from './tuner.component';
import { ListComponent as TunerListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { UiModule } from '../shared/ui.module';
import { ListModule } from '../shared/list.module';

@NgModule({
    imports: [
        CommonModule,
        UiModule,
        ListModule,
        RouterModule.forChild([
            {
                path: '',
                component: TunerComponent
            },
            {
                path: 'list',
                component: TunerListComponent
            }
        ])
    ],
    declarations: [
        TunerComponent,
        TunerListComponent
    ]
})
export class TunerModule { }
