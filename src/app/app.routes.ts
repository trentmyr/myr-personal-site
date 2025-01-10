import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ExperienceComponent} from "./experience/experience.component";
import {BlogpostComponent} from "./blogpost/blogpost.component";

export const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "experience", component: ExperienceComponent},
    {path: "posts/:filename", component: BlogpostComponent},
    // TODO: all posts (/posts) component
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "**", redirectTo: "/home", pathMatch: "full"},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        scrollPositionRestoration: "enabled"
    })],
    exports: [RouterModule]
})
export class AppRoutes {
}
