import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { MediaComponent } from './media/media.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './media/list/list.component';

@NgModule({
    declarations: [
        AppComponent,
        MediaComponent,
        NavigationComponent,
        HomeComponent,
        ListComponent
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
