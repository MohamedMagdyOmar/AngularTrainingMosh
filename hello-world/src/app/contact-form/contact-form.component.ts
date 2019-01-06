import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent  {

  log(ngModel)
  {
    console.log(ngModel);
  }

  submit(f)
  {
    console.log(f);
  }

}
