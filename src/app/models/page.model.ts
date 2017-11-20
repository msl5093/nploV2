export interface Page {
    id: string | number,
    title: {
        rendered: string
    },
    content: {
        rendered: string
    },
    slug: string
}