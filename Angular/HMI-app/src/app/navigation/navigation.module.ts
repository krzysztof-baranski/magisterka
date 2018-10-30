import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavigationComponent } from './navigation.component';
import { UiModule } from '../shared/ui.module';
import { ListModule } from '../shared/list.module';
import { RecentDestinationsComponent } from './_partials/recent-destinations/recent-destinations.component';
import { EnterAddressComponent } from './_partials/enter-address/enter-address.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        UiModule,
        ListModule,
        RouterModule.forChild([
            {
                path: '',
                component: NavigationComponent
            },
            {
                path: 'recent-destinations',
                component: RecentDestinationsComponent
            }
        ])
    ],
    declarations: [
        NavigationComponent,
        RecentDestinationsComponent,
        EnterAddressComponent
    ]
})
export class NavigationModule { }
