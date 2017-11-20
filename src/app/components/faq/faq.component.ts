import { Component, OnInit } from '@angular/core';
import { PageService } from '../../services/page.service';
import { SpinnerComponent } from '../spinner/spinner.component';
import { Page } from '../../models/page.model';

@Component({
    selector: 'faq',
    templateUrl: './faq.component.html',
    styleUrls: [ 'faq.component.css' ]
})

export class FaqComponent implements OnInit { 
    // the query parameters from wp rest api always return an array of objects even if only one result is found
    // so this has to be an array - which means we have to iterate in the template - ugh
    pages: Page[];
    showSpinner: boolean = true;
    
    constructor (private pageService: PageService) { }

    ngOnInit () {
        let slug = 'faq';
        
        this.pageService.getPageBySlug(slug)
            .subscribe((data) => { this.pages = data; this.showSpinner = false; }, error => console.log(error));
    }
}