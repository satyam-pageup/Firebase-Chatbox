import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginModelI } from '../../model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public loginForm: FormGroup<LoginModelI> = new FormGroup<LoginModelI>({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  });


  public login(){
    this.loginForm.markAllAsTouched();
  }


}
