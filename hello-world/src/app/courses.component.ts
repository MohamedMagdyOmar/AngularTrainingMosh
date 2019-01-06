import { CoursesService } from './Courses.Service';

// 1- First Step Creating a Component

// in order to convert this class to a component
// we need to add some metadata to it for angular to understand.

// in angular we have a "decorator" called "component" that is attached to a class
// to convert this class to a component

import {Component} from '@angular/core'


// then we need to apply this component to this class
@Component({
    // we add here one or more properties, that describes for angular how this component work
    // with component we can extend HTML vocabulary, so we can define new elements
    // like courses.

    selector: 'courses',
    
    // html markup we need to render for this component
    template: `
    <input [(ngModel)] = email (keyup.enter) = "onKeyUp()" />
    `
})
export class CoursesComponent{
     isActive = false;
     title : string = "List Of Courses";
     imageUrl : string  = "http://lorempixel.com/400/200";
     colSpan: number = 2;

     email = "mohamed@getMaxListeners.com";

     onKeyUp()
     {
         console.log(this.email);
     }
     onDivClick()
     {
         console.log("Div Is  Clicked");
     }

     onClickSave($event)
     {
        $event.stopPropagation();
         console.log("button is clicked", $event);
     }
   
}


// 2- now second step is to register this component in a module.