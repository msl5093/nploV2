import { Injectable } from '@angular/core';
import { DataService } from './data.service';

import { Http, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Category } from '../models/category.model'
import { environment } from '../../environments/environment';

@Injectable()
export class CategoriesService extends DataService<Category> {
    constructor (protected http: Http) {
        super(http);
        this.apiUrl = `${ environment.wpApiBaseUrl }categories`;
    }

    getCategoryNames (ids: number[]): Category[] {
        let categories = new Array<Category>();
        
        ids.map(id => {
            // find a way to not mutate state??? does that matter???
            this.getById(id)
                .subscribe(data => categories.push(data), error => console.log(error));
        });

        return categories;
    }
}