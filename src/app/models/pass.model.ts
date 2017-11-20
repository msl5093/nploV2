export interface Pass {
    id: string | number,
    title: {
        rendered: string
    },
    content: {
        rendered: string
    },
    slug: string,
    price: number | string,
    link: string
}