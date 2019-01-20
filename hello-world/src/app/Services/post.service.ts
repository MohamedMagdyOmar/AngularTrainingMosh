import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { DatatService } from '../common/data.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DatatService {

  //urlLink: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(http: Http) { 
    super('http://jsonplaceholder.typicode.com/posts',http);
  }
}
