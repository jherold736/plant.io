import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';     // import nava do nawigacji

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],                                    // głowny moduł auth, def szablonu html i css do niego

})
export class WishlistPage implements OnInit {

  items: any[] = [
    { id: 1, title: 'Succulent', imageUrl: 'assets/imgs/2.png' }, 
    { id: 2, title: 'High Succulent', imageUrl: 'assets/imgs/3.png' }, 
    { id: 3, title: 'Blue Succulent', imageUrl: 'assets/imgs/aloe.png' }, 
  ];

  constructor(private route: ActivatedRoute, private navCtrl: NavController) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params['plantData']) {
        try {
          const plantData = JSON.parse(params['plantData']);

          
          if (plantData.id === 1) {
            this.items[0] = { ...plantData, imageUrl: 'assets/imgs/2.png' };               // url-e do obrazów
          } else if (plantData.id === 2) {
            this.items[1] = { ...plantData, imageUrl: 'assets/imgs/3.png' }; 
          } else if (plantData.id === 3) {
            this.items[2] = { ...plantData, imageUrl: 'assets/imgs/aloe.png' }; 
          }
        } catch (e) {
          console.error("Parsing error:", e);
        }
      }
    });
  }


  
  selectPlant(item: any) {
    let navigationExtras = {
      queryParams: {
        plantData: JSON.stringify(item)               // wysyłanie danych z planta do wishlisty
      }
    };
    this.navCtrl.navigateForward(['tabs/wishlist'], navigationExtras);
  }

}



