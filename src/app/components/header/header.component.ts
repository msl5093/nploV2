import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [ 'header.component.css' ]
})

export class HeaderComponent implements OnInit{ 
    private photoUrls: string[];
    private url: string;

    constructor () {
        this.photoUrls = [
            'nplo2.jpg'
        ];
    }

    ngOnInit () {
        // set random background url
        this.url = './assets/' + this.photoUrls[Math.floor(Math.random() * this.photoUrls.length)];
    }
}