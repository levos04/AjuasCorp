import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogo.html',
  styleUrls: ['./catalogo.css']
})
export class Catalogo {

  // Función para generar números aleatorios del 1 al 10
  private getRandomImage(): string {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    return `img/${randomNum}.webp`;
  }

  comicsDestacados = [
    {
      imagen: this.getRandomImage(),
      titulo: 'The Amazing Spider-Man',
      autor: 'Stan Lee',
      rating: 4.8,
      precio: 350
    },
    {
      imagen: this.getRandomImage(),
      titulo: 'Batman: The Dark Knight',
      autor: 'Frank Miller',
      rating: 4.9,
      precio: 420
    },
    {
      imagen: this.getRandomImage(),
      titulo: 'X-Men: Days of Future Past',
      autor: 'Chris Claremont',
      rating: 4.7,
      precio: 380
    },
    {
      imagen: this.getRandomImage(),
      titulo: 'Wonder Woman: Rebirth',
      autor: 'Greg Rucka',
      rating: 4.6,
      precio: 290
    },
    {
      imagen: this.getRandomImage(),
      titulo: 'The Flash: Flashpoint',
      autor: 'Geoff Johns',
      rating: 4.8,
      precio: 360
    },
    {
      imagen: this.getRandomImage(),
      titulo: 'Avengers: Endgame',
      autor: 'Brian Michael Bendis',
      rating: 4.9,
      precio: 450
    }
  ];

  comicsRecomendados = [
    {
      imagen: this.getRandomImage(),
      titulo: 'Daredevil: Born Again',
      autor: 'Frank Miller',
      rating: 4.8,
      precio: 320
    },
    {
      imagen: this.getRandomImage(),
      titulo: 'Green Lantern: Rebirth',
      autor: 'Geoff Johns',
      rating: 4.6,
      precio: 280
    },
    {
      imagen: this.getRandomImage(),
      titulo: 'Thor: God of Thunder',
      autor: 'Jason Aaron',
      rating: 4.7,
      precio: 310
    },
    {
      imagen: this.getRandomImage(),
      titulo: 'Aquaman: The Trench',
      autor: 'Geoff Johns',
      rating: 4.5,
      precio: 270
    },
    {
      imagen: this.getRandomImage(),
      titulo: 'Captain America: Winter Soldier',
      autor: 'Ed Brubaker',
      rating: 4.9,
      precio: 390
    },
    {
      imagen: this.getRandomImage(),
      titulo: 'Hawkeye: My Life as a Weapon',
      autor: 'Matt Fraction',
      rating: 4.7,
      precio: 300
    }
  ];

  comicsFavoritos = [
    {
      imagen: this.getRandomImage(),
      titulo: 'Saga Vol. 1',
      autor: 'Brian K. Vaughan',
      rating: 4.9,
      precio: 340
    },
    {
      imagen: this.getRandomImage(),
      titulo: 'The Walking Dead Vol. 1',
      autor: 'Robert Kirkman',
      rating: 4.8,
      precio: 260
    },
    {
      imagen: this.getRandomImage(),
      titulo: 'Invincible Vol. 1',
      autor: 'Robert Kirkman',
      rating: 4.7,
      precio: 280
    },
    {
      imagen: this.getRandomImage(),
      titulo: 'Watchmen',
      autor: 'Alan Moore',
      rating: 5.0,
      precio: 480
    },
    {
      imagen: this.getRandomImage(),
      titulo: 'V for Vendetta',
      autor: 'Alan Moore',
      rating: 4.8,
      precio: 350
    },
    {
      imagen: this.getRandomImage(),
      titulo: 'The Sandman Vol. 1',
      autor: 'Neil Gaiman',
      rating: 4.9,
      precio: 370
    }
  ];

  comicsMarvel = [
    {
      imagen: this.getRandomImage(),
      titulo: 'Iron Man: Extremis',
      autor: 'Warren Ellis',
      rating: 4.6,
      precio: 300
    },
    {
      imagen: this.getRandomImage(),
      titulo: 'Guardians of the Galaxy',
      autor: 'Dan Abnett',
      rating: 4.7,
      precio: 290
    },
    {
      imagen: this.getRandomImage(),
      titulo: 'Black Panther',
      autor: 'Ta-Nehisi Coates',
      rating: 4.5,
      precio: 320
    },
    {
      imagen: this.getRandomImage(),
      titulo: 'Doctor Strange',
      autor: 'Brian K. Vaughan',
      rating: 4.6,
      precio: 280
    },
    {
      imagen: this.getRandomImage(),
      titulo: 'Wolverine: Old Man Logan',
      autor: 'Mark Millar',
      rating: 4.8,
      precio: 380
    },
    {
      imagen: this.getRandomImage(),
      titulo: 'Fantastic Four',
      autor: 'Grant Morrison',
      rating: 4.7,
      precio: 310
    }
  ];

  comicsDC = [
    {
      imagen: this.getRandomImage(),
      titulo: 'Superman: All-Star',
      autor: 'Grant Morrison',
      rating: 4.9,
      precio: 400
    },
    {
      imagen: this.getRandomImage(),
      titulo: 'Justice League: Origin',
      autor: 'Geoff Johns',
      rating: 4.6,
      precio: 330
    },
    {
      imagen: this.getRandomImage(),
      titulo: 'Teen Titans',
      autor: 'Marv Wolfman',
      rating: 4.7,
      precio: 290
    },
    {
      imagen: this.getRandomImage(),
      titulo: 'Joker',
      autor: 'Brian Azzarello',
      rating: 4.8,
      precio: 360
    },
    {
      imagen: this.getRandomImage(),
      titulo: 'Shazam! Vol. 1',
      autor: 'Geoff Johns',
      rating: 4.5,
      precio: 270
    },
    {
      imagen: this.getRandomImage(),
      titulo: 'Harley Quinn Vol. 1',
      autor: 'Amanda Conner',
      rating: 4.6,
      precio: 280
    }
  ];

  comicsManga = [
    {
      imagen: this.getRandomImage(),
      titulo: 'One Piece Vol. 1',
      autor: 'Eiichiro Oda',
      rating: 4.9,
      precio: 180
    },
    {
      imagen: this.getRandomImage(),
      titulo: 'Naruto Vol. 1',
      autor: 'Masashi Kishimoto',
      rating: 4.8,
      precio: 170
    },
    {
      imagen: this.getRandomImage(),
      titulo: 'Attack on Titan Vol. 1',
      autor: 'Hajime Isayama',
      rating: 4.9,
      precio: 190
    },
    {
      imagen: this.getRandomImage(),
      titulo: 'Death Note Vol. 1',
      autor: 'Tsugumi Ohba',
      rating: 5.0,
      precio: 200
    },
    {
      imagen: this.getRandomImage(),
      titulo: 'My Hero Academia Vol. 1',
      autor: 'Kohei Horikoshi',
      rating: 4.8,
      precio: 180
    },
    {
      imagen: this.getRandomImage(),
      titulo: 'Dragon Ball Vol. 1',
      autor: 'Akira Toriyama',
      rating: 5.0,
      precio: 160
    }
  ];

  comicsNovedades = [
    {
      imagen: this.getRandomImage(),
      titulo: 'Spider-Man: Miles Morales',
      autor: 'Saladin Ahmed',
      rating: 4.7,
      precio: 320
    },
    {
      imagen: this.getRandomImage(),
      titulo: 'Batman: Three Jokers',
      autor: 'Geoff Johns',
      rating: 4.6,
      precio: 380
    },
    {
      imagen: this.getRandomImage(),
      titulo: 'X-Men: Reign of X',
      autor: 'Jonathan Hickman',
      rating: 4.8,
      precio: 350
    },
    {
      imagen: this.getRandomImage(),
      titulo: 'Wonder Girl',
      autor: 'Joëlle Jones',
      rating: 4.5,
      precio: 290
    },
    {
      imagen: this.getRandomImage(),
      titulo: 'Thor',
      autor: 'Donny Cates',
      rating: 4.9,
      precio: 370
    },
    {
      imagen: this.getRandomImage(),
      titulo: 'Nightwing Vol. 1',
      autor: 'Tom Taylor',
      rating: 4.8,
      precio: 310
    }
  ];
}