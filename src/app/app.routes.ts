// app.routes.ts
import { Routes } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component';
import { Catalogo } from './components/catalogo/catalogo';
import { Nosotros } from './components/nosotros/nosotros';

// 👇 IMPORTA TU COMPONENTE DE PRODUCTO
import { ProductoComponent } from './components/producto/producto.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'catalogo', component: Catalogo },
  { path: 'nosotros', component: Nosotros },

  // 👇 ESTA ES LA RUTA QUE NECESITAS PARA MOSTRAR EL PRODUCTO
  { path: 'producto/:id', component: ProductoComponent },

  // Ruta 404 opcional
  { path: '**', redirectTo: 'inicio' }
];
