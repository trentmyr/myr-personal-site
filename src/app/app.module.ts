import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutes, routes} from './app.routes';
import {AppComponent} from './app.component';
import {ExperienceComponent} from './experience/experience.component';
import {NgOptimizedImage} from "@angular/common";
import {provideRouter} from "@angular/router";
import {provideMarkdown} from "ngx-markdown";
import {HttpClient, provideHttpClient} from "@angular/common/http";

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
        provideRouter(routes),
        provideHttpClient(),
        provideMarkdown({
            loader: HttpClient,
        })
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
