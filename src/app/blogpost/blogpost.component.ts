import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MarkdownComponent} from "ngx-markdown";
import {ActivatedRoute, Router} from "@angular/router";
import {Post} from "../data/Post";

@Component({
    selector: 'app-blogpost',
    standalone: true,
    imports: [CommonModule, MarkdownComponent],
    templateUrl: './blogpost.component.html',
    styleUrl: './blogpost.component.css'
})
export class BlogpostComponent {
    post: Post | null

    constructor(private router: Router, private route: ActivatedRoute) {
        let filename = this.route.snapshot.paramMap.get('filename')
        this.post = Post.getByFilename(filename)
        if (this.post == null) {
            // no instance? go back home
            // TODO: go to all posts instead
            // (once the all posts page exists)
            this.router.navigateByUrl("/home")
        }
    }
}
