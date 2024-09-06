import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutes, routes} from './app.routes';
import {AppComponent} from './app.component';
import {ExperienceComponent} from './experience/experience.component';
import {NgOptimizedImage} from "@angular/common";
import {provideRouter} from "@angular/router";

@NgModule({
    declarations: [
        AppComponent,
        ExperienceComponent
    ],
    imports: [
        BrowserModule,
        AppRoutes,
        NgOptimizedImage
    ],
    providers: [
        provideRouter(routes)
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
