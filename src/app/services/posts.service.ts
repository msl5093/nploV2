import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Post } from '../models/post.model'
import { Category } from '../models/category.model';
import { environment } from '../../environments/environment';

@Injectable()
export class PostsService extends DataService<Post> {
    constructor (protected http: Http) {
        super(http);
        this.apiUrl = `${ environment.wpApiBaseUrl }posts`;
    }

    getPostBySlug (slug: string): Observable<Array<Post>> {
        let params: URLSearchParams = new URLSearchParams();
        params.set('slug', slug);

        let requestOpts = new RequestOptions();
        requestOpts.params = params;

        return this.http.get(this.apiUrl, requestOpts)
            .map(response => response.json())
            .catch(this.handleError);
    }
}