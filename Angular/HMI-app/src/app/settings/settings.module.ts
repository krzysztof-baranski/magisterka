import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AudioSettingsComponent } from './audio-settings/audio-settings.component';
import { DisplaySettingsComponent } from './display-settings/display-settings.component';
import { OthersSettingsComponent } from './others-settings/others-settings.component';
import { SettingsComponent } from './settings.component';
import { RouterModule } from '@angular/router';
import { SettingsItemComponent } from './settings-item.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: SettingsComponent
            }
        ])
    ],
    declarations: [
        SettingsComponent,
        AudioSettingsComponent,
        DisplaySettingsComponent,
        OthersSettingsComponent,
        SettingsItemComponent
    ]
})
export class SettingsModule { }
