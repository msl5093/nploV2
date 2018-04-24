import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [ 'header.component.css' ]
})

export class HeaderComponent implements OnInit{ 
    private photoUrls: string[];
    private url: string;

    ngOnInit () {
        this.url = './assets/nplo2.jpg';
        //this.url = 'https://www.noplacelikeom-pa.com/wp-content/uploads/2018/03/nplo2.jpg';
    }
}