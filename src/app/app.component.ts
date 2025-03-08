import { Component } from '@angular/core';
import { ButtonComponent } from "./components/button/button.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  imports: [ButtonComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'personal-finance-app';
}
