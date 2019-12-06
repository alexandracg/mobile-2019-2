import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.page.html',
  styleUrls: ['./home-login.page.scss'],
})
export class HomeLoginPage implements OnInit {

  constructor(private router: Router) { }

  openLoginPage () {
    this.router.navigateByUrl('/login-page');
  }

  openRegisterAccountPage () {
    this.router.navigateByUrl('/register-account');
  }
  ngOnInit() {
  }

}
