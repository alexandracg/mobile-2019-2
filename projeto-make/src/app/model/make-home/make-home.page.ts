import { UserService } from '../../services/user/user.service';
import { CrudService } from '../../services/crud/crud.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-home',
  templateUrl: './make-home.page.html',
  styleUrls: ['./make-home.page.scss'],
})
export class MakeHomePage implements OnInit {

  makes: any;

  constructor(private crudService: CrudService,
              public afAuth: AngularFireAuth, 
              public router: Router,
              public user: UserService) { }

  ngOnInit() {

    this.crudService.read_Makes().subscribe(data => {
      this.makes = data.map(e => {
        return {
          id: e.payload.doc.id,
          Author: e.payload.doc.data()['Author'],
          Likes: e.payload.doc.data()['Likes'],
          Img: e.payload.doc.data()['Img'],
        };
      })
    });
  }

  async logout() {
    await this.afAuth.auth.signOut()
    this.router.navigateByUrl('/home-login')
  }

  openRegisterMakePage () {
    this.router.navigateByUrl('/register-make')
  }

  like(makeID) {
    this.crudService.update_Like(makeID);
  }
}
