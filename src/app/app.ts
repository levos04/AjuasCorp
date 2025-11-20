import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// IMPORTA EL NAVBAR
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar     // 👈 AGREGA ESTO
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('comics');
}
