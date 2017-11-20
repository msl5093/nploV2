import { Component } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
    selector: 'schedule',
    templateUrl: './schedule.component.html',
    styleUrls: [ 'schedule.component.css' ]
})

export class ScheduleComponent { 
    showSpinner: boolean = true;

    constructor () { }

    onIframeLoad (scheduleIframe: any) {
        if (scheduleIframe != null) {
            this.showSpinner = false;
        }
    }
}