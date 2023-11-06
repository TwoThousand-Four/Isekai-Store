import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { AlertController, LoadingController, MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-figure',
  templateUrl: './add-figure.page.html',
  styleUrls: ['./add-figure.page.scss'],
})
export class AddFigurePage implements OnInit {

  constructor(public firestoreService: FirestoreService,
    public menuCtrl: MenuController,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public alertController: AlertController,) {}

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

  openMenu() {
    console.log('open menu');
    this.menuCtrl.toggle('principal');
  }
}
