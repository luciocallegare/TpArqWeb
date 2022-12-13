import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
    profileForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      emailAddress: new FormControl(''),
      password: new FormControl(''),
    });

    onSubmit() {
      console.log(this.profileForm.value);
    }

}
