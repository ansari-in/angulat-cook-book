import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './signup.html',
})
export class SignupComponent {
  firstName = '';
  lastName = '';
  age = '';
  username = '';
  password = '';
  success = '';
  error = '';

  constructor(private auth: Auth, private router: Router) {}

  onSignup() {
    const data = {
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
      username: this.username,
      password: this.password,
    };

    this.auth.signup(data).subscribe({
      next: (res) => {
        this.success = `User created! ID: ${res.id}`;
        setTimeout(() => this.router.navigate(['/login']), 2000);
      },
      error: () => {
        this.error = 'Something went wrong!';
      },
    });
  }
}
