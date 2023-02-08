import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  loginForm: FormGroup;  

  constructor () {
    let emailVaidator: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    let controls: any = {
      user: new FormControl('', [ Validators.required ]),
      firstName: new FormControl('', [ Validators.required ]),
      lastName: new FormControl('', [ Validators.required ]),
      phoneNumber: new FormControl('', 
      [ Validators.required, 
        Validators.pattern( '[- +()0-9]+' ),  
        Validators.minLength(9),
        Validators.maxLength(9) 
      ]),
      email: new FormControl('', 
        [ Validators.required, 
          Validators.email, 
          Validators.pattern(emailVaidator) 
        ]),
      password: new FormControl('', 
      [ Validators.required, 
        Validators.minLength(8) 
      ]),
      remember: new FormControl(false, Validators.requiredTrue)
    }

    this.loginForm = new FormGroup(controls)
  }

  signUp() {
    console.log(this.loginForm)
  }

  
}
