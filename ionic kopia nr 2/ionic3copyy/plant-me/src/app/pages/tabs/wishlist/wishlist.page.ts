import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular'; // Import NavController for navigation

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {

  items: any[] = [
    { id: 1, title: 'Succulent', imageUrl: 'assets/imgs/2.png' }, // Placeholder image
    { id: 2, title: 'High Succulent', imageUrl: 'assets/imgs/3.png' }, // Placeholder image
    { id: 3, title: 'Blue Succulent', imageUrl: 'assets/imgs/aloe.png' }, // Placeholder image
  ];

  constructor(private route: ActivatedRoute, private navCtrl: NavController) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params['plantData']) {
        try {
          const plantData = JSON.parse(params['plantData']);
          // Ustaw odpowiedni obiekt na podstawie ID lub innego kryterium
          if (plantData.id === 1) {
            this.items[0] = { ...plantData, imageUrl: 'assets/imgs/2.png' }; // Ustaw właściwy URL obrazu
          } else if (plantData.id === 2) {
            this.items[1] = { ...plantData, imageUrl: 'assets/imgs/3.png' }; // Ustaw właściwy URL obrazu
          } else if (plantData.id === 3) {
            this.items[2] = { ...plantData, imageUrl: 'assets/imgs/aloe.png' }; // Ustaw właściwy URL obrazu
          }
        } catch (e) {
          console.error("Parsing error:", e);
        }
      }
    });
  }

  // Funkcja wywoływana po kliknięciu na kontener rośliny
  selectPlant(item: any) {
    let navigationExtras = {
      queryParams: {
        plantData: JSON.stringify(item)
      }
    };
    this.navCtrl.navigateForward(['tabs/wishlist'], navigationExtras);
  }

}



