import { Injectable } from '@angular/core';
import { DataService } from './data.service';

import { Http, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { YogaClass } from '../models/yoga-class.model'
import { environment } from '../../environments/environment';

@Injectable()
export class ClassesService extends DataService<YogaClass> {
    constructor (protected http: Http) {
        super(http);
        this.apiUrl = `${ environment.wpApiBaseUrl }classes`;
    }
}