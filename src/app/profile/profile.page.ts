import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
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
}
