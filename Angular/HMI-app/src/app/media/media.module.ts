import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaComponent } from './media.component';
import { ListComponent as MediaListComponent } from './list/list.component';
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
                component: MediaComponent
            },
            {
                path: 'list',
                component: MediaListComponent
            }
        ])
    ],
    declarations: [
        MediaComponent,
        MediaListComponent
    ]
})
export class MediaModule { }
