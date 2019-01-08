import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from 'selenium-webdriver/http';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent{
  posts: any[];
  // we use "http" class to get the data or save the data, to send 
  // request to the backend
  constructor(http: Http) 
  { 
    // this method return "observable" of a response
    // we use "promises" and "observable" to work with async or non
    // blocking operations.
    // Because we call a server for this data, so this data is not
    // available immediately, so there are some delays.
    // so we donot need to block the main thread untill we retrieve data,
    // but we need it to do something else, and when the data is available he
    // return back to continue excution.

    // the "observable" has a method called "subscribe".
    // this subscribe method has 3 overload, and each overload has 
    // different parameters
    // "subscribe" can take 2 parameters "next" and "error" and both are
    // optional, the next parameter is "arrow function" that takes value and return void

   
    http.get("https://jsonplaceholder.typicode.com/posts")
    .subscribe(Response => {
      this.posts = Response.json();
    })
  }


}
