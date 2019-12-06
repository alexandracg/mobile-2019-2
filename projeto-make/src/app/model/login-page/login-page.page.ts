import { UserService } from '../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app'
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage {

  username: string = "";
  password: string = "";

  constructor(public afAuth: AngularFireAuth, 
              private router: Router, 
              public alert: AlertController,
              public user: UserService) { }

  ngOnInit() { }

  registerPage() {
    this.router.navigateByUrl('/register-account');
  }

  async login() {
		const { username, password } = this
		try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@ltiemail.com', password)

      if(res.user) {
        this.user.setUser({
          username,
          uid: res.user.uid
        })
        this.router.navigateByUrl('/make-home')
      }
		} catch(err) {
      console.dir(err)
      this.showAlert("Erro!", err.message)
      
			if(err.code === "auth/user-not-found") {
        console.log("User not found")
        this.showAlert("Erro!", err.message)
			}
		}
  }
  
  async showAlert(header: string, message: string) {
    const alert = this.alert.create({
      header,
      message,
      buttons: ["Ok"]
    })

    await (await alert).present()
  }
}
