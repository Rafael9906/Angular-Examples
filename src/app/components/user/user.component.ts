import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  constructor() {

  }


  ngOnInit() {
  }




  contador = 0;

  suma(){
    this.contador++;
  }

  arr = [1,2,3,4,5,6,7,8];


}
