import { Component, OnInit } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';
import { ClassesService } from '../../services/classes.service';
import { YogaClass } from '../../models/yoga-class.model';

@Component({
    selector: 'classes',
    templateUrl: './classes.component.html',
    styleUrls: [ 'classes.component.css' ]
})

export class ClassesComponent implements OnInit { 
    classes: YogaClass[];
    showSpinner: boolean = true;

    constructor (private classesService: ClassesService) {

    }

    ngOnInit () {
        this.classesService.get()
            .subscribe((data) => { this.classes = data; this.showSpinner = false; }, error => console.log(error));
    }
}