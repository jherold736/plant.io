import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage {
  profile = {
    name: '',
    email: ''
  };

  constructor() { }

  updateProfile() {
    console.log('Profile updated!', this.profile);
    }
    

  changePassword() {
      console.log('Change password clicked');
      
    }
  
  logout() {
      console.log('Logout clicked');
    
  }
}

// głowny moduł strony konta, def szablonu html i css do niego
