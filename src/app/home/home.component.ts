import {Component} from "@angular/core";
import {RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";

@Component({
    selector: 'home',
    standalone: true,
    templateUrl: './home.component.html',
    imports: [
        RouterLink,
        NgOptimizedImage
    ],
    styleUrls: ['./home.component.css']
})
export class HomeComponent {}
