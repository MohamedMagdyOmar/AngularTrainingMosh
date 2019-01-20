import { Http } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { catchError } from 'rxjs/operators';
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
  }

  UpdatePost(post)
  {
    return this.http.patch(this.urlLink + '/' + post.id, JSON.stringify(post.id))
  }

  DeletePost(id)
  {
    return this.http.delete(this.urlLink + '/' + id).pipe(catchError((error : Response) =>{
      if(error.status === 404)
        return Observable.throw(new NotFoundError)
      return Observable.throw(new AppError(error));
      
    }));
  }
}
