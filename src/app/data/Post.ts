import {formatDate} from "@angular/common";

/**
 * Represents an individual blog post.
 * Includes static provider functions for getting `Post` instances.
 */
export class Post {
    private static sortByDateDesc = (a: Post, b: Post) => a.lastUpdateDate.getTime() - b.lastUpdateDate.getTime()

    private constructor(
        public title: string,
        public lastUpdateDate: Date,
        public firstPublishedDate: Date,
        public filename: string, // unique ID of a post
        private pinned: boolean,
    ) {
    }

    lastUpdateDateString(): String {
        return formatDate(this.lastUpdateDate, 'MMM dd YYYY', 'en-US')
    }

    firstPublishedDateString(): String {
        return formatDate(this.firstPublishedDate, 'MMM dd YYYY', 'en-US')
    }

    /**
     * Get the assets file path to the Post.
     * Can *probably* trust that the path corresponds to a real file.
     */
    getFilePath(): string {
        return 'assets/blog_posts/' + this.filename + '.md'
    }

    /**
     * Get a post instance from its file name
     * @param filename
     * @returns `Post`, or `null` if filename does not correspond to an instance
     */
    static getByFilename(filename: string | null): Post | null {
        if (filename == null) return null
        let post = this.getAll().find(p => p.filename === filename)
        return post ?? null
    }

    /**
     * Get all posts that should be pinned to the home screen.
     */
    static getPinned(): Post[] {
        return this.getAll()
            .filter(p => p.pinned)
            .sort(this.sortByDateDesc)
    }

    /**
     * Get all posts
     */
    static getAll(): Post[] {
        return [
            new Post('About Me', new Date(2025, 1, 10), new Date(2025, 1, 10), 'introduction', true)
        ]
    }
}
