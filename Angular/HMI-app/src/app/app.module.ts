import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { UiModule } from './shared/ui.module';
import { ListModule } from './shared/list.module';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        UiModule,
        // NIE WOLNO IMPORTOWAĆ MODUŁÓW, KTÓRE MAJĄ BYĆ CHUNKOWANE!!!
        ListModule,
        routing,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
