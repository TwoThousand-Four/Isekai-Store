import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Directory, Filesystem } from '@capacitor/filesystem';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router: Router,
    private afAuth : AngularFireAuth,
    private navCtrl : NavController,) { }

  ngOnInit() {Camera.requestPermissions();}

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
  LogOut(){
    this.afAuth.signOut().then(data => {
      console.log(data);})

      this.navCtrl.navigateRoot("login")
  }

  async takePhoto(){
      const image = await Camera.getPhoto({
        quality: 40,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source : CameraSource.Camera
      });
      if (image) {
        this.savePhoto(image.base64String!);
      }
  };

  async savePhoto(photo: string){
    await Filesystem.writeFile({
      path: 'test.jpg',
      data: photo,
      directory: Directory.Documents
    });
  }
}
