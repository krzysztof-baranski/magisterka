import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [

    {
        path: 'media',
        loadChildren: './media/media.module#MediaModule'
    },
    {
        path: 'navigation',
        loadChildren: './navigation/navigation.module#NavigationModule'
    },
    {
        path: 'tuner',
        loadChildren: './tuner/tuner.module#TunerModule'
    },
    {
        path: 'settings',
        loadChildren: './settings/settings.module#SettingsModule'
    }
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
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules });
