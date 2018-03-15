import { Component, OnInit } from '@angular/core';

import { PageService } from '../../services/page.service';
import { Page } from '../../models/page.model';

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls: [ 'navigation.component.css' ]
})

export class NavigationComponent implements OnInit { 
    private isMenuExpanded: boolean = false;
    private pages: Page[];
    private pageLinks: string[];

    constructor (private pageService: PageService) { }

    toggle(): void {
        this.isMenuExpanded = this.isMenuExpanded === true ? false : true;
    }

    ngOnInit () {
        this.pageService.get()
            .subscribe((data) => {
                this.pages = data;
                this.pageLinks = this.toLowerCase(this.pages);
            });
    }

    private toLowerCase (pages: Page[]): string[] {
        return pages.map((page) => {
            return page.title.rendered.toLowerCase();
        });
    }
}