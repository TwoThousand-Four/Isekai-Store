import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-add-figure',
  templateUrl: './add-figure.page.html',
  styleUrls: ['./add-figure.page.scss'],
})
export class AddFigurePage implements OnInit {

  constructor(public firestoreService: FirestoreService) { }

  ngOnInit() {}

  guardarFigura(){
    const data = {
      titulo: 'Vegetto',
      precio: '25000'
    };
    const path = 'Figuras/';
    const id = '0001'
    this.firestoreService.createDoc(data, path, id)
  }
}
