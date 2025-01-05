import {formatDate} from "@angular/common";
import {Language} from "./Language";

export class Experience {
    name: string = ''
    position: string = ''
    startDate: Date
    endDate: Date | null
    descriptions: string[]
    languages: Language[]
    skills: string[]
    locale: string
    dateFormat = 'MMM \'\'yy'

    constructor(
        name: string,
        position: string,
        startDate: Date,
        endDate: Date | null = null,
        description: string[],
        languages: Language[],
        skills: string[],
        locale: string
    ) {
        this.name = name
        this.position = position
        this.startDate = startDate
        this.endDate = endDate
        this.descriptions = description
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
                [
                    'Developed, tested, and deployed changes for iOS and Android applications',
                    'Utilized Kotlin Multiplatform to share logic and UI between iOS and Android',
                    'Communicated with physical devices from mobile apps using Bluetooth LE',
                    'Maintain and improve an ASP.NET website hosted in Azure'
                ],
                [Language.kotlin, Language.swift, Language.csharp],
                ["Bluetooth", "Jetpack Compose", "SwiftUI", "Jetpack Room", "CoreData", "ASP.NET",],
                locale
            ),
            new Experience(
                'London Computer Systems',
                'Software Developer',
                new Date(2020, 5, 1),
                new Date(2023, 1, 1),
                [
                    'Maintained and improved a Swift iOS app, Kotlin Android app, and C# .NET Framework API',
                    'Innovated on existing architectures, bringing SwiftUI and GraphQL into the products'
                ],
                [Language.kotlin, Language.swift, Language.csharp],
                ["UIKit", "SwiftUI", "ReactiveX", ".NET", "Rest API", "GraphQL"],
                locale
            ),
            new Experience(
                'Precision Strip Inc.',
                'Software Developer',
                new Date(2020, 1, 1),
                new Date(2021, 8, 1),
                [
                    'Maintained and improved a NativeScript mobile app written in Typescript with Angular',
                    'Developed front-end programs and back-end queries using Progress OpenEdge'
                ],
                [Language.typescript],
                ["Angular", "Progress OpenEdge"],
                locale
            )
        ]
    }
}
