import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
    profileForm = new FormGroup({
      userName: new FormControl(''),
      emailAddress: new FormControl(''),
      password: new FormControl(''),
    });

    onSubmit() {
      console.log('Successful Login');
      console.log(this.profileForm.value);
      this.profileForm.reset();
    }

}
