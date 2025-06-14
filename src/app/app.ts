import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { User } from "./login/user/user";

@Component({
  selector: 'app-root',
  imports: [MatToolbarModule, MatButtonModule, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Del Campo a Casa';
}
