import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoursesService } from './Courses.Service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { FavoriteComponent } from './Favorite/favorite.component';
import { FormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form/contact-form.component'


// 2- second step is to register created component in "module"
// this "decorator function" used to convert a class
// into a "module"
@NgModule({
  // in declarations we add all "components" that is related
  // to this "module"
  declarations: [
    AppComponent,
    CourseComponent,
    FavoriteComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
