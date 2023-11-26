import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  authService!: AuthService;

  constructor() {
    this.authService = new AuthService();
  }
  isLoggedIn = this.authService.isLoggedIn;
  
}
