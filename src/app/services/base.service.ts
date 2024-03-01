import { HttpClient } from '@angular/common/http';
import { BaseHeaderService } from './base.header.service';
import { Observable, catchError, map } from 'rxjs';

export abstract class BaseService<T> extends BaseHeaderService {
  private _route: string;
  private _gateway: string;
  private _http: HttpClient;

  constructor(http: HttpClient, route: string, gateway: string) {
    super();
    this._http = http;
    this._route = route;
    this._gateway = gateway;
  }

  get(hasAuth: boolean): Observable<T[]> {
    return this._http
      .get<T[]>(this._gateway + this._route, this.resolveHeader(hasAuth))
      .pipe(catchError(this.serviceError));
  }

  getById(id: string, hasAuth: boolean): Observable<T> {
    return this._http
      .get<T>(
        this._gateway + this._route + '/' + id,
        this.resolveHeader(hasAuth)
      )
      .pipe(catchError(this.serviceError));
  }

  post(entity: T, hasAuth: boolean): Observable<T> {
    var object = JSON.stringify(entity);

    return this._http
      .post(this._gateway + this._route, entity, this.resolveHeader(hasAuth))
      .pipe(map(this.extractBase), catchError(this.serviceError));
  }

  put(id: string, entity: T, hasAuth: boolean): Observable<T> {
    return this._http
      .put(
        this._gateway + this._route + '/' + id,
        entity,
        this.resolveHeader(hasAuth)
      )
      .pipe(map(this.extractBase), catchError(this.serviceError));
  }

  delete(id: any, hasAuth: boolean): Observable<string> {
    return this._http
      .delete(
        this._gateway + this._route + '/' + id,
        this.resolveHeader(hasAuth)
      )
      .pipe(map(this.extractBase), catchError(this.serviceError));
  }
}
