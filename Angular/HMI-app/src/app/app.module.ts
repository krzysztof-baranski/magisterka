import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MediaComponent } from './media/media.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './media/list/list.component';
import { TunerComponent } from './tuner/tuner.component';
import { SettingsComponent } from './settings/settings.component';
import { TunerListComponent } from './tuner/tuner-list/tuner-list.component';
import { AudioSettingsComponent } from './settings/audio-settings/audio-settings.component';
import { DisplaySettingsComponent } from './settings/display-settings/display-settings.component';
import { OthersSettingsComponent } from './settings/others-settings/others-settings.component';
import { EnterAddressComponent } from './navigation/_partials/enter-address/enter-address.component';
import { RecentDestinationsComponent } from './navigation/_partials/recent-destinations/recent-destinations.component';

@NgModule({
    declarations: [
        AppComponent,
        MediaComponent,
        NavigationComponent,
        HomeComponent,
        ListComponent,
        TunerComponent,
        SettingsComponent,
        TunerListComponent,
        AudioSettingsComponent,
        DisplaySettingsComponent,
        OthersSettingsComponent,
        EnterAddressComponent,
        RecentDestinationsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            {
                path: 'home',
                component: AppComponent
            },
            {
                path: 'media',
                component: MediaComponent
            },
            {
                path: 'media/list',
                component: ListComponent
            },
            {
                path: 'navigation',
                component: NavigationComponent
            },
            {
                path: 'navigation/recent-destinations',
                component: RecentDestinationsComponent
            },
            {
                path: 'tuner',
                component: TunerComponent
            },
            {
                path: 'tuner/list/:band',
                component: TunerListComponent
            },
            {
                path: 'settings',
                component: SettingsComponent
            },
            // {
            // 	path: 'settings/display',
            // 	component: DisplaySettingsComponent
            // },
            // {
            // 	path: 'settings/audio',
            // 	component: AudioSettingsComponent
            // },
            // {
            // 	path: 'settings/others',
            // 	component: OthersSettingsComponent
            // },
            // {
            //     path: '',
            //     pathMatch: 'full',
            //     component: AppComponent
            // }

            /*{
                path: '**',
                name: 'home',
                component: AppComponent
            }*/
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
