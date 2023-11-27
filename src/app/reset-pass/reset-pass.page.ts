import { Component, OnInit } from '@angular/core';
import { User } from "../models/user.model";
import { Router } from '@angular/router';
@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.page.html',
  styleUrls: ['./reset-pass.page.scss'],
})
export class ResetPassPage implements OnInit {
  user = {} as User;
  
  constructor(private router: Router,) { }

  ngOnInit() {
  }
  GoLogin(){
    this.router.navigate(['/login']);
  }
}
