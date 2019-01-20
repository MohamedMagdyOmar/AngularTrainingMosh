import { BadInput } from './../common/bad-input';
import { Http } from '@angular/http';
import {Observable} from 'rxjs'
import { Injectable, OnInit } from '@angular/core';

//import {Observable} from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

//import 'rxjs/add/operator/catch';
//import 'rxjs/add/Observable/throw';

import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class PostService implements OnInit {

  private urlLink: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: Http) { 
    
  }

  ngOnInit(){
  }

  getPosts()
  {
    return this.http.get(this.urlLink)
  }

  CreatePosts(post)
  {
    return this.http.post(this.urlLink, JSON.stringify(post))
    .pipe(catchError((error: Response) =>{
      if(error.status === 400)
        return Observable.throw(new BadInput(error.json()));
      
      return Observable.throw(new AppError(error.json()));
        

    }))
  }

  UpdatePost(post)
  {
    return this.http.patch(this.urlLink + '/' + post.id, JSON.stringify(post.id))
  }

  DeletePost(id)
  {
    console.log(this.urlLink + '/' + id)
    return this.http.delete(this.urlLink + '/' + id).pipe(catchError((error : Response) =>{
      if(error.status === 404)
        return Observable.throw(new NotFoundError)
      return Observable.throw(new AppError(error));
      
    }));
  }
}
