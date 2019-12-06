import { Router } from '@angular/router';
import { CrudService } from '../../services/crud/crud.service';
import { UserService } from '../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-make',
  templateUrl: './register-make.page.html',
  styleUrls: ['./register-make.page.scss'],
})
export class RegisterMakePage implements OnInit {

  makeImg: string;
  makeAuthor: string;
  makeLikes: number;

  constructor(public user: UserService, 
              private crudService: CrudService, 
              public router: Router,
              public http: HttpClient) { }

  ngOnInit() {
  }

  homeMake() {
    this.router.navigateByUrl('/make-home');
  }

  registerMake() {
    let make = {};
    make['Author'] = this.user.getUsername();
    make['Likes'] = 0;
    make['Img'] = this.makeImg;
    
    this.crudService.create_Make(make);
    this.router.navigateByUrl('/make-home')
  }

  fileChanged(event) {
    const files = event.target.files

    const data = new FormData()
    data.append('file', files[0])
		data.append('UPLOADCARE_STORE', '1')
		data.append('UPLOADCARE_PUB_KEY', 'df34d808fbd94d787f17')

    this.http.post('https://upload.uploadcare.com/base/', data)
    .subscribe(event => {
      console.log(event)
      this.makeImg = event.valueOf().file;
    })
  }
}
