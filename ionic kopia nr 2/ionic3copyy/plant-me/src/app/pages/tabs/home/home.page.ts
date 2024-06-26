import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; // Import NavController for navigation
import { NavigationExtras } from '@angular/router'; // Import NavigationExtras to pass data

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  popularItems: any[] = [
    { id: 1, title: 'Succulent', imageUrl: 'assets/imgs/2.png', temperature: 20, watering: 'Low', light: 'Bright indirect', humidity: 'Low', soil: 'Well-draining' },
    { id: 2, title: 'High Succulent', imageUrl: 'assets/imgs/3.png', temperature: 25, watering: 'Moderate', light: 'Bright direct', humidity: 'Medium', soil: 'Cactus mix' },
    { id: 3, title: 'Blue Succulent', imageUrl: 'assets/imgs/aloe.png', temperature: 22, watering: 'Low', light: 'Partial shade', humidity: 'Low', soil: 'Sandy' },
    { id: 4, title: 'Succulent', imageUrl: 'assets/imgs/2.png', temperature: 20, watering: 'Low', light: 'Bright indirect', humidity: 'Low', soil: 'Well-draining' },
    // Dodaj więcej unikalnych elementów
  ];

  featuredItems: any[] = [
    { id: 5, title: 'High Succulent', imageUrl: 'assets/imgs/3.png', temperature: 25, watering: 'Moderate', light: 'Bright direct', humidity: 'Medium', soil: 'Cactus mix' },
    { id: 6, title: 'Blue Succulent', imageUrl: 'assets/imgs/aloe.png', temperature: 22, watering: 'Low', light: 'Partial shade', humidity: 'Low', soil: 'Sandy' },
    // Dodaj więcej unikalnych elementów
  ];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.shuffleItems(this.popularItems);
    this.shuffleItems(this.featuredItems);
  }

  shuffleItems(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {                 // randomizowanie wyświetlania roślinek na home page
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  
  selectPlant(item: any) {
    let navigationExtras: NavigationExtras = {                    // przypisanie danych z featured itemów i popular do wishlist * Nie dziala *
      queryParams: {
        plantData: JSON.stringify(item)
      }
    };
    this.navCtrl.navigateForward(['tabs/wishlist'], navigationExtras);
  }
}


// głowny moduł strony home, def szablonu html i css do niego


