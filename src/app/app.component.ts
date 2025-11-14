import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { HeaderComponent } from './component/universalComponents/header/header.component';
import { FooterComponent } from './component/universalComponents/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SchoolManagement';
}
