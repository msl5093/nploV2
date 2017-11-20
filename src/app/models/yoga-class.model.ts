export interface YogaClass {
    id: string | number,
    title: {
        rendered: string
    },
    content: {
        rendered: string
    },
    slug: string,
    price: number | string
}