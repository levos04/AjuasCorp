import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

interface Product {
  id: number;
  name: string;
  price: number;
  installments: string;
  deliveryTime: string;
  description: string[];
  imageUrl: string;
  collageImage: string;
}

interface SimilarProduct {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  productoId: number = 0;
  product: Product | null = null;
  similarProducts: SimilarProduct[] = [];

  // Base de datos simulada de productos
  private productosDatabase: Product[] = [
    {
      id: 1,
      name: 'Marvel Comics 1000',
      price: 200,
      installments: '3 meses con intereses de $ 85',
      deliveryTime: '7 a 50 min',
      description: [
        '¡Revive la emoción del multiverso con este increíble cómic de Marvel Comics Deluxe! Narrativa épica con resolución y con colores vibrantes.',
        'Sumérgete de lleno en el autor de esta colección de Spider-Man impreso en alta resolución, con colores vibrantes y vibrante tinta que pasión por el detalle.',
        '- Edición de colección: empacado en el universo clásico de Marvel, ideal para fans y coleccionistas.'
      ],
      imageUrl: 'img/1.webp',
      collageImage: 'img/baner2.jpg'
    },
    {
      id: 2,
      name: 'Superman Classic Edition',
      price: 200,
      installments: '3 meses con intereses de $ 85',
      deliveryTime: '7 a 50 min',
      description: [
        'Descubre las aventuras clásicas del hombre de acero en esta edición especial.',
        'Incluye las historias más emblemáticas de Superman recopiladas en un solo volumen.',
        '- Edición de colección con portada especial y páginas de alta calidad.'
      ],
      imageUrl: 'img/2.webp',
      collageImage: 'img/baner2.jpg'
    },
    {
      id: 3,
      name: 'Batman: The Dark Knight',
      price: 200,
      installments: '3 meses con intereses de $ 85',
      deliveryTime: '7 a 50 min',
      description: [
        'La historia definitiva del Caballero Oscuro en esta edición deluxe.',
        'Arte impresionante y una narrativa que ha marcado la historia del cómic.',
        '- Edición especial para coleccionistas con extras exclusivos.'
      ],
      imageUrl: 'img/3.webp',
      collageImage: 'img/baner2.jpg'
    },
    {
      id: 4,
      name: 'Wonder Woman Origins',
      price: 200,
      installments: '3 meses con intereses de $ 85',
      deliveryTime: '7 a 50 min',
      description: [
        'Conoce los orígenes de la Mujer Maravilla en esta colección imprescindible.',
        'Historias clásicas que definieron al personaje más icónico de DC.',
        '- Edición especial con portada alternativa.'
      ],
      imageUrl: 'img/4.webp',
      collageImage: 'img/baner2.jpg'
    },
    {
      id: 5,
      name: 'The Flash: Speed Force',
      price: 200,
      installments: '3 meses con intereses de $ 85',
      deliveryTime: '7 a 50 min',
      description: [
        'Las aventuras más rápidas del universo DC en esta edición especial.',
        'Descubre el poder de la Speed Force y las mejores historias de Flash.',
        '- Edición de colección con arte renovado.'
      ],
      imageUrl: 'img/5.webp',
      collageImage: 'img/baner2.jpg'
    },
    {
      id: 6,
      name: 'Justice League United',
      price: 200,
      installments: '3 meses con intereses de $ 85',
      deliveryTime: '7 a 50 min',
      description: [
        'Los héroes más poderosos unidos en una sola colección épica.',
        'Las mejores historias de la Liga de la Justicia reunidas.',
        '- Edición especial con portada holográfica.'
      ],
      imageUrl: 'img/6.webp',
      collageImage: 'img/baner2.jpg'
    },
    {
      id: 7,
      name: 'X-Men: Days of Future Past',
      price: 200,
      installments: '3 meses con intereses de $ 85',
      deliveryTime: '7 a 50 min',
      description: [
        'Una de las sagas más icónicas de los X-Men en edición especial.',
        'Arte espectacular y una historia que cambió el universo Marvel.',
        '- Edición de coleccionista con extras y bocetos.'
      ],
      imageUrl: 'img/7.webp',
      collageImage: 'img/baner2.jpg'
    },
    {
      id: 8,
      name: 'Avengers: Infinity Saga',
      price: 200,
      installments: '3 meses con intereses de $ 85',
      deliveryTime: '7 a 50 min',
      description: [
        'La saga completa de Infinity en una edición de lujo.',
        'Todos los héroes del universo Marvel contra Thanos.',
        '- Edición deluxe con portada metálica.'
      ],
      imageUrl: 'img/8.webp',
      collageImage: 'img/baner2.jpg'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Obtener el ID del producto desde la URL
    this.route.params.subscribe(params => {
      this.productoId = +params['id']; // El '+' convierte string a number
      this.loadProductData();
      this.loadSimilarProducts();
    });
  }

  loadProductData(): void {
    // Buscar el producto en la base de datos simulada
    this.product = this.productosDatabase.find(p => p.id === this.productoId) || null;
    
    if (!this.product) {
      console.error('Producto no encontrado');
      // Opcional: redirigir al inicio si no se encuentra
      // this.router.navigate(['/inicio']);
    }
  }

  loadSimilarProducts(): void {
    // Cargar productos similares (excluyendo el actual)
    this.similarProducts = this.productosDatabase
      .filter(p => p.id !== this.productoId)
      .slice(0, 2)
      .map(p => ({
        id: p.id,
        name: p.name,
        price: p.price,
        imageUrl: p.imageUrl
      }));
  }

  onSimilarProductClick(productId: number): void {
    // Navegar al producto similar
    this.router.navigate(['/producto', productId]);
  }

  volverInicio(): void {
    this.router.navigate(['/inicio']);
  }

  onBuyClick(): void {
    console.log('Comprar producto:', this.productoId);
    // Aquí puedes agregar la lógica de compra
  }
}