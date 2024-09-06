import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {Experience} from '../data/Experience';
import {Language, imageSource} from "../data/Language";

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];

  constructor(@Inject(LOCALE_ID) private readonly locale: string) { }

  ngOnInit(): void {
    this.experiences = Experience.getAll(this.locale)
  }

  protected readonly imageSource = imageSource;
  protected readonly Language = Language;
}
