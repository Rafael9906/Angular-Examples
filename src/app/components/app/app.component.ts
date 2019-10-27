import { Component } from '@angular/core';
import {User,UserType} from 'src/app/interfaces/userInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';

  user:User={
  ID: 1,
  Name:'rafael',
  Type: UserType.ADMINISTRADOR
}
}

