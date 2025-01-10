import {Component} from "@angular/core";
import {RouterLink} from "@angular/router";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {Post} from "../data/Post";

@Component({
    selector: 'home',
    standalone: true,
    templateUrl: './home.component.html',
    imports: [
        RouterLink,
        NgOptimizedImage,
        NgForOf
    ],
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    pinnedPosts: Post[] = [];

    ngOnInit(): void {
        this.pinnedPosts = Post.getPinned()
    }
}
