import { PostService } from './../Services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  posts: any[];
  

  // we use "http" class to get the data or save the data, to send 
  // request to the backend
  constructor(public service: PostService) 
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

   

      //console.log(response);
    

  }

  ngOnInit()
  {
    this.service.getPosts()
    .subscribe(response => {
      this.posts = response.json();
    }, error => {
      console.log(error)
    })

  }


  CreatePost(input: HTMLDataElement)
  {
    let post = {title: input.value}
    this.service.CreatePosts(post).subscribe(response => {
      console.log(response);
      this.posts.splice(0, 0, post);
    }, error =>{
      console.log(error)
    })
    
  }

  CreatePut(post)
  {
    this.service.UpdatePost(post).
    subscribe(response => {
      console.log(response);
    }, (error: Response) => {
      if(error.status === 400)
      {

      }
      else
      {
        console.log(error)
      }
      
    })
  }

  DeletePost(post)
  {
    this.service.DeletePost(-4234124500)
    .subscribe(
      response =>{
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        //console.log(response.json())
        },
         (error: Response) => {     
            if(error.status === 404)
              {
                console.log("Hey Mohammad")
                  alert("This Post Already Deleted")
              }
            else
              {
                alert("UnExpected Error Ocurred")
                console.log(error)
            }
      
    })
  }
}

// As best practise, constructor should be light weight and small, it should not have expensive operations like calling server
// Components in angular have "Life Cycle Hooks", they are some methods that can be added to components and angular will automatically
// call these methods @ specific time during life cycle of the component.

// example of angular life cycle hooks:
  // 1- Creating component
  // 2- renders it
  // 3- creating or rendering component's child
  // 4- destroy components
