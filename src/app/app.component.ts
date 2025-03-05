import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { LoginComponent } from "./auth/component/login/login.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NzLayoutModule, RouterLink, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Rent-A-Car-System-FrontEnd';
}