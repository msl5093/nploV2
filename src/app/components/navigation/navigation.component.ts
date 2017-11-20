import { Component, OnInit } from '@angular/core';

import { PageService } from '../../services/page.service';
import { Page } from '../../models/page.model';

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls: [ 'navigation.component.css' ]
})

export class NavigationComponent implements OnInit { 
    pages: Page[];

    constructor (private pageService: PageService) { }

    ngOnInit () {
        this.pageService.get()
            .subscribe(data => this.pages = data, error => console.log(error));
    }
}