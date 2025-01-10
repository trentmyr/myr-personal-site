import {enableProdMode} from '@angular/core';
import {environment} from './environments/environment';
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {provideRouter, withInMemoryScrolling,} from "@angular/router";
import {routes} from "./app/app.routes";
import {HttpClient, provideHttpClient} from "@angular/common/http";
import {provideMarkdown} from "ngx-markdown";

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(routes,
            withInMemoryScrolling({scrollPositionRestoration: 'enabled'})
        ),
        provideHttpClient(),
        provideMarkdown({
            loader: HttpClient,
        })
    ]
}).catch(err => console.error(err));
