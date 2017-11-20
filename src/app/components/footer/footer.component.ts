import { Component, OnInit } from '@angular/core';
import { PageService } from '../../services/page.service';
import { Page } from '../../models/page.model';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: [ 'footer.component.css' ]
})

export class FooterComponent implements OnInit { 
    pages: Page[];

    year: number = new Date().getFullYear();

    constructor (private pageService: PageService) { }

    ngOnInit () {
        this.pageService.get()
            .subscribe(data => this.pages = data, error => console.log(error));
    }
}