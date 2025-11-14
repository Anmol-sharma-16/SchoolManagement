import { Component } from '@angular/core';
import { HeaderComponent } from '../../universalComponents/header/header.component';
import { FooterComponent } from '../../universalComponents/footer/footer.component';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

}
