import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IDataService } from './interfaces/idata.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService<T> implements IDataService<T> {
    protected apiUrl: string;

    constructor (protected http: Http) { }

    public get(): Observable<Array<T>> {
        return this.http.get(this.apiUrl)
            .map(this.getData)
            .catch(this.handleError);
    }

    public getById(id: string | number): Observable<T> {
        return this.http.get(`${ this.apiUrl }/${ id }`)
            .map(this.getData)
            .catch(this.handleError)
    }

    public getByParams(params: any): Observable<Array<T>> {
        return this.http.get(`${ this.apiUrl }`, params)
            .map(this.getData)
            .catch(this.handleError)
    }

    protected getData(res: Response) {
        const data = res.json();
        return data || { };
    }

    protected handleError (error: Response | any) {
        return Observable.throw(error);
    }
}