import { Component } from '@angular/core';
import {FormGroup,FormControl, Validators} from "@angular/forms";
import {FormErrorStateMatcher} from "../../../shared/matchers/FormErrorStateMatcher";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  matcher = new FormErrorStateMatcher();
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  hidePassword: boolean = true;

  constructor(
    private authService: AuthService
  ) { }

  onKeyDown(event: KeyboardEvent): void {
    const inputElement = event.target as HTMLElement;
    if (inputElement.tagName.toLowerCase() === 'input' && inputElement.getAttribute('type') === 'password' && event.key === 'Enter') {
      this.onSubmit();
    }
  }

  togglePasswordVisibility(event: MouseEvent) {
    event.preventDefault();
    this.hidePassword = !this.hidePassword;
  }

  onSubmit() {
    if (this.loginForm.status === "INVALID") return;
    this.authService.login(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value);
  }
}
