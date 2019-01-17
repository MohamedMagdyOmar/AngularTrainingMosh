import { Http } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';


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
    return this.http.delete(this.urlLink + '/' + id);
  }
}
