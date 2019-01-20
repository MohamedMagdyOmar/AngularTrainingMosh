import { BadInput } from './../common/bad-input';
import { Http } from '@angular/http';
import {Observable} from 'rxjs'
import { Injectable, OnInit } from '@angular/core';

import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class DatatService{

  constructor(private urlLink:string, private http: Http) { 
    
  }

  ngOnInit(){
  }

  getAll()
  {
    return this.http.get(this.urlLink)
  }

  create(resource)
  {
    return this.http.post(this.urlLink, JSON.stringify(resource))
    .pipe(catchError(this.handleError))
  }

  update(resource)
  {
    return this.http.patch(this.urlLink + '/' + resource.id, JSON.stringify(resource.id))
  }

  delete(id)
  {
    console.log(this.urlLink + '/' + id)
    // this.handleError, this is not calling a function, it is passing reference
    return this.http.delete(this.urlLink + '/' + id).pipe(catchError(this.handleError))    
  }

  private handleError(error: Response)
  {
    if(error.status === 404)
    {
      return Observable.throw(new NotFoundError)
    }

    if(error.status === 400)
    {
      return Observable.throw(new BadInput(error.json()));
    }

    return Observable.throw(new AppError(error));
  }
}
