import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './navbar.html'
})
export class Navbar {
  // optional: provide an event emitter if you want to listen, otherwise just local search
  onSearch(q: string) {
    // simple client-side search: navigate to home with query param or broadcast via service
    // keep empty if Home handles its own search input
    // e.g., localStorage.setItem('globalSearch', q) or use a shared service
  }
}
