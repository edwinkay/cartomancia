import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private firestore: AngularFirestore) {}

  getUsers(): Observable<any> {
    return this.firestore
      .collection('data')
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data() as any;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }

  getUserById(userId: string): Observable<any> {
    return this.firestore.collection('data').doc(userId).valueChanges();
  }

  addUserInfo(user: any) {
    return this.firestore.collection('data').add(user);
  }

  updateUser(user: any, userId: string) {
    return this.firestore.collection('data').doc(userId).update(user);
  }

  deleteUser(id: string): Promise<any> {
    return this.firestore.collection('data').doc(id).delete();
  }
}
