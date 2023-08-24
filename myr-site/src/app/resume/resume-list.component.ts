import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'resume-list',
  templateUrl: './resume-list.component.html',
  styleUrls: ['../app.component.css'],
})
export class ResumeList implements OnInit {
  // Seems almost silly to store and load experiences like this
  // could just be static content right on the HTML at this point
  //
  // doing it this way to make the UI reusable, and to allow for a DB backend at some point
  // if this content was pulled from a SQL DB then I could "update the site" without updating the sate

  experiences: Experience[] = [];

  ngOnInit(): void {
    // TODO: load resume list items?
    this.experiences = [
      new Experience('Tranducers Direct', new Date(2023, 1, 16)),
      // TODO: add LCS
      new Experience('London Computer Systems', new Date(), new Date()),
    ];
  }
}

class Experience {
  name: String = '';
  startDate: Date;
  endDate: Date | null;

  constructor(name: String, startDate: Date, endDate: Date | null = null) {
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
