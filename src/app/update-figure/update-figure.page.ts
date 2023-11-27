import { Component, OnInit } from '@angular/core';
import { FigureService } from '../services/figure.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-update-figure',
  templateUrl: './update-figure.page.html',
  styleUrls: ['./update-figure.page.scss'],
})
export class UpdateFigurePage implements OnInit {
  figure : any;
  constructor(private figureService: FigureService, 
              private router: Router,
              private afAuth : AngularFireAuth,
              private navCtrl : NavController,) { }

  ngOnInit() {this.getFigure(this.getIdFromURL());}

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

  getIdFromURL(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id=parseInt(arr[2]);
    return id;

  }
  getFigure(id:Number){
    this.figureService.seeFigure(id).subscribe(
    (resp:any)=>{
      //console.log(resp);
      this.figure=resp;
    })
  }

  deleteFigure(){
    this.deleteFigure2(this.getIdFromURL());
  }

  deleteFigure2(id:Number){
    this.figureService.deleteFigure(id).subscribe();
    this.router.navigateByUrl("/home");
  }
  
  updateFigure(){
    this.figureService.updateFigure(this.figure).subscribe()
    this.router.navigateByUrl("/home")
  }

  LogOut(){
    this.afAuth.signOut().then(data => {
      console.log(data);})

      this.navCtrl.navigateRoot("login")
  }
}
