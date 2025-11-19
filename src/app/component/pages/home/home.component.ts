import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from "@angular/router";
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, RouterLink,MatGridListModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

}
