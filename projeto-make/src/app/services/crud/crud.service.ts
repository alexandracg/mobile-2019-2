import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private firestore: AngularFirestore) { }

  read_Makes() {
    return this.firestore.collection('make').snapshotChanges();
  }

  create_Make(make) {
    return this.firestore.collection('make').add(make)
  }

  update_Like(makeID) {
    const increment = firestore.FieldValue.increment(1);
    const likeURL = this.firestore.doc('make/' + makeID);
    likeURL.update({ Likes : increment });
  }
}
