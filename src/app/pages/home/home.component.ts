import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore/';
import { map } from 'rxjs/operators';
import { Game } from '../../interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    this.firestore.collection('tbg').valueChanges()
      .pipe(
        map((response: Game[]) => {
          // destructuring assignment
          return response.map(({ name, votes }) => ({ name, value: votes }));
        })
      )
      .subscribe(response => {
        console.log(response)
      });
  }

}
