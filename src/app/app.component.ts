import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'angular-forms';
  defaultCity='chennai';
  firstName:string;
  age:string;
  email:string;
  gender:string;
  city:string;
  hobbies:string;
  location:string;

  @ViewChild ('myform') form:NgForm;
  onSubmit(form :NgForm)
  {
    console.log(form)
    this.firstName=this.form.value.personalDetails.firstName;
    this.age=this.form.value.personalDetails.age;
    this.email=this.form.value.personalDetails.email;
    this.gender=this.form.value.gender;
    this.city=this.form.value.city;
    this.hobbies=this.form.value.hobbies;
    this.location=this.form.value.location;

    this.form.reset();
  }
  defaultLocation='Office';
  workLocation=[

    {
      id:'1',value:'Home'
    },
    {
      id:'2',value:'Office'
    },
    {
      id:'3',value:'On-Site'
    }
  ]
  setDefaultValues()
  {
    // this.form.value.personDetails.firstName='Sugu';
    // this.form.value.personDetails.age='22';
    // this.form.value.personDetails.email='sugumaranrk@gmail.com';
    // this.form.setValue({
    //   city:'',
    //   gender:'',
    //   hobbies:'',
    //   location:'',
    //   personalDetails:
    //   {
    //     firstName:'Sugumaran',
    //     age:'22',
    //     email:'sugumaranrk@gmail.com'
    //   }

    // })
    this.form.form.patchValue({
      personalDetails:
      {
        firstName:'Sugumaran',
        age:'22',
        email:'sugumaranrk@gmail.com'
      }
    })
  }
}
