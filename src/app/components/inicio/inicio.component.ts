import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor(private router: Router) {}

  productos = [
    {
      id: 1,
      imagen: 'img/1.webp',
      titulo: 'Tales of the wonder',
      descripcion: 'Lorem ipsum dolora amet consecutive da de be de do',
      precio: 200
    },
    {
      id: 2,
      imagen: 'img/2.webp',
      titulo: 'Tales of the wonder',
      descripcion: 'Lorem ipsum dolora amet consecutive da de be de do',
      precio: 200
    },
    {
      id: 3,
      imagen: 'img/9.webp',
      titulo: 'Tales of the wonder',
      descripcion: 'Lorem ipsum dolora amet consecutive da de be de do',
      precio: 200
    },
    {
      id: 4,
      imagen: 'img/3.webp',
      titulo: 'Tales of the wonder',
      descripcion: 'Lorem ipsum dolora amet consecutive da de be de do',
      precio: 200
    }
  ];

  comicsVendidos = [
    {
      id: 5,
      imagen: 'img/4.webp',
      titulo: 'Comic Vendido 1',
      descripcion: 'Lorem ipsum...',
      precio: 200
    },
    {
      id: 6,
      imagen: 'img/5.webp',
      titulo: 'Comic Vendido 2',
      descripcion: 'Lorem ipsum...',
      precio: 200
    },
    {
      id: 6,
      imagen: 'img/6.webp',
      titulo: 'Comic Vendido 2',
      descripcion: 'Lorem ipsum...',
      precio: 200
    },
    {
      id: 6,
      imagen: 'img/7.webp',
      titulo: 'Comic Vendido 2',
      descripcion: 'Lorem ipsum...',
      precio: 200
    },
    {
      id: 6,
      imagen: 'img/8.webp',
      titulo: 'Comic Vendido 2',
      descripcion: 'Lorem ipsum...',
      precio: 200
    },
    {
      id: 6,
      imagen: 'img/9.webp',
      titulo: 'Comic Vendido 2',
      descripcion: 'Lorem ipsum...',
      precio: 200
    },
    {
      id: 6,
      imagen: 'img/10.webp',
      titulo: 'Comic Vendido 2',
      descripcion: 'Lorem ipsum...',
      precio: 200
    },
    {
      id: 6,
      imagen: 'img/1.webp',
      titulo: 'Comic Vendido 2',
      descripcion: 'Lorem ipsum...',
      precio: 200
    }
  ];

  verProducto(id: number) {
    this.router.navigate(['/producto', id]);
  }

  verComic(id: number) {
    this.router.navigate(['/producto', id]);
  }
}
