import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth-service/auth.service';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.css']
})
export class LoginLayoutComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    userName : new FormControl('', Validators.required),
    password : new FormControl('')
  });

  get userName() {
    return this.loginForm.get('userName');
  }
  get password() {
    return this.loginForm.get('password');
  }

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    console.log(this.userName.value);

    alert(this.userName.value);

    console.log(this.password.value);

    alert(this.password.value);

    this.authService.login(this.userName.value, this.password.value);
  }

}
