import { Component } from '@angular/core';
import {FormGroup,FormControl, Validators} from "@angular/forms";
import {FormErrorStateMatcher} from "../../../shared/matchers/FormErrorStateMatcher";
import {AuthService} from "../../services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  matcher = new FormErrorStateMatcher();
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  hidePassword: boolean = true;

  constructor(
    private readonly authService: AuthService,
    private readonly snackBar: MatSnackBar,
    private readonly router: Router
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
    this.authService.login(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value)
      .subscribe({
        next: (data: any) => {
          this.authService.setUser(data.resource);
          this.router.navigate(['/']);
        },
        error: error => {
          this.snackBar.open(error.error, "Ok", { duration: 3000 });
        }
    });
  }
}
