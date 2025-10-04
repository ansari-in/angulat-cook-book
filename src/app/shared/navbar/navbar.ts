import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Auth } from '../../app/services/auth';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './navbar.html'
})
export class Navbar {
  // optional: provide an event emitter if you want to listen, otherwise just local search
  onSearch(q: string) {
 
  }

   constructor(public auth: Auth) {}

  logout() {
    this.auth.logout();
  }
}
