import { Component, OnInit } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';
import { PageService } from '../../services/page.service';
import { Page } from '../../models/page.model';

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: [ 'about.component.css' ]
})

export class AboutComponent implements OnInit { 
    // the query parameters from wp rest api always return an array of objects even if only one result is found
    // so this has to be an array - which means we have to iterate somewhere or just take the first one and hope wp never changes the rest api sorting
    pages: Page[];
    showSpinner: boolean = true;
    
    constructor (private pageService: PageService) { }

    ngOnInit () {
        let slug = 'about';
        
        this.pageService.getPageBySlug(slug)
            .subscribe((data) => { this.pages = data; this.showSpinner = false; }, error => console.log(error));
    }
}