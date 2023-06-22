import { Component } from '@angular/core';
import {FormErrorStateMatcher} from "../../../shared/matchers/FormErrorStateMatcher";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../services/users.service";
import {User} from "../../../shared/models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  userData:User;
  matcher = new FormErrorStateMatcher();
  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    urlPhoto: new FormControl('', [Validators.required]),
    isAuthor: new FormControl(false)
  });

  constructor(private usersService: UsersService, private router: Router) {
    this.userData = {} as User;
  }

  onSubmit() {
    if (this.registerForm.status === "INVALID") return;
    this.userData = this.registerForm.value;
    console.log(this.userData);
    this.usersService.create(this.userData).subscribe((element)=>{
      this.router.navigate(['/login']);
    });
    //this.authService.register(this.registerForm.value); // Modifica esto de acuerdo a tu implementación de authService
  }
}
