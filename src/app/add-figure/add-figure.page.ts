import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { Figure } from '../models/figure.model';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/compat/storage';

import { finalize } from 'rxjs/operators';
import { FirestorageService } from '../services/firestorage.service';

@Component({
  selector: 'app-add-figure',
  templateUrl: './add-figure.page.html',
  styleUrls: ['./add-figure.page.scss'],
})
export class AddFigurePage implements OnInit {

  figuras: Figure[] = [];

  newFigure!: Figure;

  enableNewFigure = false;

  private path = 'Figuras/';

  newImage = '';

  newFile: any;

  loading: any;

  constructor(public firestoreService: FirestoreService,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public alertController: AlertController,
    public firestorageService: FirestorageService,
    private router: Router,) { }

  ngOnInit() {
    this.getFiguras();
  }

  GoHome(){
    this.router.navigate(['/home']);
  }
  GoProfile(){
      this.router.navigate(['/profile']);
  }
  GoAdd(){
      this.router.navigate(['/add-figure']);
  }
  GoAssist(){
      this.router.navigate(['/assistance']);
  }

  async guardarFigura() {
    this.presentLoading();
    const path = 'Figuras';
    const name = this.newFigure.nombre;
    if (this.newFile !== undefined) {
      const res = await this.firestorageService.uploadImage(this.newFile, path, name);
      this.newFigure.foto = res;
    }
    this.firestoreService.createDoc(this.newFigure, this.path, this.newFigure.id).then( res => {
         this.loading.dismiss();
         this.presentToast('Guardado con exito!');
    }).catch( error => {
       this.presentToast('No se pudo guardar');
    });
}

getFiguras() {
  this.firestoreService.getCollection<Figure>(this.path).subscribe(  res => {
         this.figuras = res;
  });
}

async deleteProducto(figura: Figure) {

    const alert = await this.alertController.create({
      cssClass: 'normal',
      header: 'Advertencia',
      message: ' Seguro desea <strong>eliminar</strong> este producto',
      buttons: [
        {
          text: 'cancelar',
          role: 'cancel',
          cssClass: 'normal',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
            // this.alertController.dismiss();
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
            this.firestoreService.deleteDoc(this.path, figura.id).then( res => {
              this.presentToast('eliminado con exito');
              this.alertController.dismiss();
            }).catch( error => {
                this.presentToast('no se pude eliminar');
            });
          }
        }
      ]
    });
    await alert.present();
}

nuevo() {
  this.enableNewFigure = true;
  this.newFigure = {
    nombre: '',
    altura:'',
    precio: 0 ,
    foto: '',
    id: this.firestoreService.getId(),
    fecha: new Date()
  };
}


async presentLoading() {
  this.loading = await this.loadingController.create({
    cssClass: 'normal',
    message: 'guardando...',
  });
  await this.loading.present();
}

async presentToast(msg: string) {
  const toast = await this.toastController.create({
    message: msg,
    cssClass: 'normal',
    duration: 2000,
    color: 'light',
  });
  toast.present();
}


async newImageUpload(event: any) {
  if (event.target.files && event.target.files[0]) {
      this.newFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = ((image) => {
          this.newFigure.foto = image.target?.result as string;
      });
      reader.readAsDataURL(event.target.files[0]);
    }
}



}
