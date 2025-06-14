import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-user',
  imports: [MatInputModule,MatButtonModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {

}
