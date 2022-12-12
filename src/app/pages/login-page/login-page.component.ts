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
    });

    onSubmit() {
      // TODO: Use EventEmitter with form value
      console.log(this.profileForm.value);
    }

}
