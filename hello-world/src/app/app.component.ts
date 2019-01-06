import { FavoriteChangedEventArgs } from './Favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = [1, 3];
  viewmode = 'map';

  newCourses = [
    {id: 1, Name: 'Mohamed'},
    {id: 2, Name: 'Omar'}
  ];

  onChangeDetection()
  {
    this.newCourses.push({id:3, Name:'Tolba'});
  }

  onRemove(course)
  {
    let index = this.courses.indexOf(course);
    this.newCourses.splice(index, 1)
  }
}

