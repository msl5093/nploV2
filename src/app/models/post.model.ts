import { Category } from "./category.model";

export interface Post {
    id: string | number,
    title: {
        rendered: string
    },
    content: {
        rendered: string
    },
    slug: string,
    categories: number[],
    categoryNames: Category[]
}