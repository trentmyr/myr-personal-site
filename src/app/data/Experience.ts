import {formatDate} from "@angular/common";
import {Language} from "./Language";

export class Experience {
  name: string = ''
  position: string = ''
  startDate: Date
  endDate: Date | null
  description: string = ''
  // TODO: languages? could be a list of enum and then load icons?
  languages: Language[]
  skills: string[]
  locale: string
  dateFormat = 'MMM \'\'yy'

  constructor(
    name: string,
    position: string,
    startDate: Date,
    endDate: Date | null = null,
    description: string,
    languages: Language[],
    skills: string[],
    locale: string
  ) {
    this.name = name
    this.position = position
    this.startDate = startDate
    this.endDate = endDate
    this.description = description
    this.languages = languages
    this.skills = skills
    this.locale = locale
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
        `Sole maintainer of mobile apps. Managed project planning, development, testing, and deployment of native iOS and Android applications.

        Utilized Bluetooth to communicate with physical devices.

        Introduced Jira and Confluence to the company to track development and write documentation.`,
        [Language.swift, Language.kotlin, Language.java, Language.csharp],
        ["Bluetooth", "iOS", "SwiftUI", "CoreData", "Android", "Jetpack Compose", "Jetpack Room", "Jira"],
        locale
      ),
      new Experience(
        'London Computer Systems',
        'Software Developer',
        new Date(2020, 5, 1),
        new Date(2023, 1, 1),
        `Contributed primarily to an iOS mobile app and .NET Framework API. Occasionally contributed to an Android mobile app.

        Innovated on existing architectures, bringing SwiftUI and GraphQL into the products.`,
        [Language.swift, Language.kotlin, Language.csharp],
        ["iOS", "UIKit", "SwiftUI", "ReactiveX", ".NET", "Rest API", "GraphQL", "Android", "Jira"],
        locale
      ),
      // TODO: add Precision Strip
    ]
  }
}
