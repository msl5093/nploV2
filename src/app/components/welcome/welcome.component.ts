import { Component, OnInit } from '@angular/core';
import { PageService } from '../../services/page.service';

import { Page } from '../../models/page.model';

@Component({
    selector: 'welcome',
    templateUrl: './welcome.component.html',
    styleUrls: [ 'welcome.component.css' ]
})

export class WelcomeComponent implements OnInit { 
    // the query parameters from wp rest api always return an array of objects even if only one result is found
    // so this has to be an array - which means we have to iterate in the template - ugh
    pages: Page[];
    
    constructor (private pageService: PageService) {
        
    }

    ngOnInit () {
        let slug = 'welcome';
        
        this.pageService.getPageBySlug(slug)
            .subscribe(data => this.pages = data, error => console.log(error));
    }
}