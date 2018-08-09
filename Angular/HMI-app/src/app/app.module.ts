import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { MediaComponent } from './media/media.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './media/list/list.component';
import { TunerComponent } from './tuner/tuner.component';
import { SettingsComponent } from './settings/settings.component';
import { TunerListComponent } from './tuner/tuner-list/tuner-list.component';

@NgModule({
    declarations: [
        AppComponent,
        MediaComponent,
        NavigationComponent,
        HomeComponent,
        ListComponent,
        TunerComponent,
        SettingsComponent,
        TunerListComponent
    ],
    imports: [
        BrowserModule,
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
            {
                path: '',
                pathMatch: 'full',
                component: AppComponent
            }

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
