import { Router } from "@angular/router";
import { OnInit } from '@angular/core';


export class rutas implements OnInit{
    constructor(private router: Router,) {}
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    
    GoHome(){
      this.router.navigate(['home'])
    }


}