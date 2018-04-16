import { Component } from '@angular/core';
import { Page } from '../../models/page.model';

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls: [ 'navigation.component.css' ]
})

export class NavigationComponent { 
    private isMenuExpanded: boolean = false;
    private pages: Page[];
    private pageLinks: string[];

    toggle(): void {
        this.isMenuExpanded = this.isMenuExpanded === true ? false : true;
    }
}