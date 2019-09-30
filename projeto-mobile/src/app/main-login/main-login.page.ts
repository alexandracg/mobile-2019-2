import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.page.html',
  styleUrls: ['./main-login.page.scss'],
})
export class MainLoginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate() {
    this.router.navigate(['/visitor']),
    this.router.navigate(['/login']),
    this.router.navigate(['/register'])
  }
}
