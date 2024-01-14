import {formatDate} from "@angular/common";

export class Experience {
  name: string = '';
  position: string = '';
  startDate: Date;
  endDate: Date | null;
  skills: string[];
  locale: string;
  dateFormat = 'MMMM yyyy';

  constructor(
    name: string,
    position: string,
    startDate: Date,
    endDate: Date | null = null,
    skills: string[],
    locale: string
  ) {
    this.name = name;
    this.position = position;
    this.startDate = startDate;
    this.endDate = endDate;
    this.skills = skills;
    this.locale = locale;
  }

  dateRangeString(): String {
    let startString = formatDate(this.startDate, this.dateFormat, this.locale)
    let endString = this.endDate != null
      ? formatDate(this.endDate, this.dateFormat, this.locale)
      : 'Current'
    return `${startString} - ${endString}`
  }

  static getAll(locale: string): Experience[] {
    return [
      new Experience(
        'Transducers Direct',
        'Software Engineer',
        new Date(2023, 1, 1),
        null,
        ["Bluetooth"],
        locale
      ),
      new Experience(
        'London Computer Systems',
        'Software Developer',
        new Date(2020, 5, 1),
        new Date(2023, 1, 1),
        ["iOS", "Swift", "UIKit", "SwiftUI", "Android", "Kotlin", "C#", "Rest API", "GraphQL"],
        locale
      ),
    ];
  }
}
