import { Component } from '@angular/core';
import {FormErrorStateMatcher} from "../../../shared/matchers/FormErrorStateMatcher";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../services/users.service";
import {User} from "../../../shared/models/user";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {TranslateService} from "@ngx-translate/core";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  userData: User = {} as User;
  hidePassword: boolean = true;
  matcher = new FormErrorStateMatcher();
  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    urlPhoto: new FormControl(''),
    isAuthor: new FormControl(false)
  });

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private translateService: TranslateService,
    private snackBar: MatSnackBar,
    private router: Router
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
    if (this.registerForm.status === "INVALID") return;

    if (this.registerForm.value["password"] !== this.registerForm.value["confirmPassword"]) {
      this.translateService.get("passwords-mismatch")
        .subscribe((message: string) => {
          this.snackBar.open(message, "Ok", { duration: 3000 });
        });
      return;
    }

    this.userData = this.registerForm.value;

    this.authService.signUp(this.userData)
      .subscribe({
        next: data => {
          this.router.navigate(['/login']);
        },
        error: error => {
          if (error.status === 200) {
            this.router.navigate(['/login']);
            return;
          }
          this.snackBar.open(error.error, "Ok", { duration: 3000 })
        }
      });
  }
}
