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
    imageUrl: string,
    categories: number[],
    categoryNames: Category[],
    postNum: number;
}