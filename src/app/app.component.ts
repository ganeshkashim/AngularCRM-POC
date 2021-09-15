import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularPOC';

  constructor(private router: Router){

  }
  
  ngOnInit(): void {
    let params = window.location.search;
    if (params === ''){
      params = window.location.hash;
    }

    if (params !== ''){
      if (params.indexOf('contact') > 0){
        this.router.navigate(['./contact']);
      }
      else if (params.indexOf('account') > 0){
        this.router.navigate(['./account']);
      }
      else{
        this.router.navigate(['home']);
      }
    }
  }
}
