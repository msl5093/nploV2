import { Component, OnInit } from '@angular/core';
import { PassesService } from '../../services/passes.service';
import { SpinnerComponent } from '../spinner/spinner.component';
import { Pass } from '../../models/pass.model';

@Component({
    selector: 'passes',
    templateUrl: './passes.component.html',
    styleUrls: [ 'passes.component.css' ]
})

export class PassesComponent implements OnInit { 
    passes: Pass[];
    showSpinner: boolean = true;

    constructor (private passesService: PassesService) { }

    itemClick(link: string): void {
        window.open(link, '_blank');
    }

    ngOnInit () {
        this.passesService.get()
            .subscribe((data) => { this.passes = data; this.showSpinner = false; }, error => console.log(error));
    }
}