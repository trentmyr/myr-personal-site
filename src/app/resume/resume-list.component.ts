import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {Experience} from '../data/Experience';
import {Language, imageSource} from "../data/Language";

@Component({
  selector: 'resume-list',
  templateUrl: './resume-list.component.html',
  styleUrls: ['./resume-list.component.css'],
})
export class ResumeList implements OnInit {
  experiences: Experience[] = [];

  constructor(@Inject(LOCALE_ID) private readonly locale: string) { }

  ngOnInit(): void {
    this.experiences = Experience.getAll(this.locale)
  }

  protected readonly imageSource = imageSource;
  protected readonly Language = Language;
}
