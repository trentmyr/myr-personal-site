export enum Language {
  swift, kotlin, csharp, java
}
export function imageSource(language: Language): String {
  switch (language) {
    case Language.kotlin:
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg'
    case Language.swift:
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg'
    case Language.csharp:
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg'
    case Language.java:
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
  }
}
