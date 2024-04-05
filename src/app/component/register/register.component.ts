import { Component } from '@angular/core';
import { RegisterModelI } from '../../model/register.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  public registerForm: FormGroup<RegisterModelI> = new FormGroup<RegisterModelI>({
    name: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    employeeType: new FormControl("0"),
    address: new FormControl(null),
    city: new FormControl(null),
    country: new FormControl(null),
    phone: new FormControl(null),
    departmentID: new FormControl(1),
  });


  public register(){
    this.registerForm.markAllAsTouched();
  }

}
