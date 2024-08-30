import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'myr-site'
    darkMode = false;

    ngOnInit() {
        let darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)")
        // set initial value
        this.darkMode = darkModeQuery.matches
        // listen for changes
        darkModeQuery
            .addEventListener("change", (e) => {
                if (e.matches) {
                    this.darkMode = true
                } else {
                    this.darkMode = false
                }
            })
    }
}
