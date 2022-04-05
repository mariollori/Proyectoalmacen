import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  show_button:boolean=false;
  show_icon:boolean=false;
  constructor() { }
 

  changevisible(){
    this.show_button = !this.show_button
    this.show_icon=!this.show_icon;
  }
  ngOnInit(): void {
  }

}
