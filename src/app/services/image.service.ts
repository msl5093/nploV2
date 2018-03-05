import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {    
    protected imageUrls: string[];

    constructor () {
        this.imageUrls = [
            'nplo1.jpg',
            'training.jpg',
            'cropped-sun2.jpg'
        ];
    }

    public getRandomImg (): string {
        return './assets/' + this.imageUrls[Math.floor(Math.random() * this.imageUrls.length)];
    }

    public getPostImg (): string {
        return '';
    }
}