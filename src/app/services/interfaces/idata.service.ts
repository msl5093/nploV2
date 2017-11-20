import { Observable } from 'rxjs/Observable';

export interface IDataService<T> {
    get(): Observable<Array<T>>;
    getById(id: string | number): Observable<T>;
    getByParams(params: any): Observable<Array<T>>;
}