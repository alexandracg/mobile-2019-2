import { UserService } from '../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.page.html',
  styleUrls: ['./register-account.page.scss'],
})
export class RegisterAccountPage implements OnInit {

  username: string = "";
  password: string = "";
  cpassword: string = "";

  constructor(public afAuth: AngularFireAuth, 
              private router: Router, 
              public alert: AlertController,
              public afStore: AngularFirestore,
              public user: UserService) { }

  homeLogin() {
    this.router.navigateByUrl('/home-login');
  }

  ngOnInit() {
  }

  async registerAccount() {
    const { username, password, cpassword } = this
    if(password !== cpassword) {
      this.showAlert("Erro!", "As senhas estão diferentes")
      return console.error("As senhas estão diferentes")
    }

    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@ltiemail.com', password)
      
      this.afStore.doc('users/' + res.user.uid).set({
        username
      })

      this.showAlert("Sucesso!", "Conta criada com sucesso!")
      this.router.navigateByUrl('/login-page')

    } catch(error) {
      console.dir(error);
      this.showAlert("Erro!", error.message)
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
