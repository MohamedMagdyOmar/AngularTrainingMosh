import { AppErrorHandler } from './common/app-error-handler';
import { AppComponent } from './app.component';
import { PostService } from './Services/post.service';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
//import { CoursesService } from './Courses.Service';
//import { AppRoutingModule } from './app-routing.module';

//import { CourseComponent } from './course/course.component';
//import { FavoriteComponent } from './Favorite/favorite.component';
import { FormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PostComponent } from './post/post.component'


// 2- second step is to register created component in "module"
// this "decorator function" used to convert a class
// into a "module"
@NgModule({
  // in declarations we add all "components" that is related
  // to this "module"
  declarations: [
    AppComponent,
    ContactFormComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],

  providers:[
    PostService,
    // you are telling ngular instead of using Angular Default ErrorHandler, use my own handler AppErrorHanlder
    {provide: ErrorHandler, useClass: AppErrorHandler}
   // CoursesService
  ],

  bootstrap: [AppComponent],
  
})
export class AppModule { }
